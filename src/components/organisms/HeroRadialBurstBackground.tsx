"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const VERTEX_SHADER = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;

const FRAGMENT_SHADER = `
uniform float uTime;
uniform float uMotion;
uniform float uScrollProgress;
uniform float uIntensity;
uniform vec2 uResolution;
uniform vec2 uOrigin;
uniform vec2 uPointer;
uniform vec3 uColorMain;
uniform vec3 uColorDeep;
varying vec2 vUv;

float hash11(float n) {
  return fract(sin(n) * 43758.5453123);
}

vec2 normalizeSafe(vec2 value) {
  float len = length(value);
  if (len < 1e-4) return vec2(1.0, 0.0);
  return value / len;
}

float beamProfile(vec2 rayDirection, vec2 beamDirection, float focus) {
  float alignment = max(dot(rayDirection, beamDirection), 0.0);
  return pow(alignment, focus);
}

float executionTrace(vec2 ray, vec2 direction, float head, float width, float lengthRange) {
  float along = dot(ray, direction);
  vec2 perp = vec2(-direction.y, direction.x);
  float across = abs(dot(ray, perp));
  float widthMask = exp(-across * width);
  float headMask = exp(-pow(along - head, 2.0) * lengthRange);
  return widthMask * headMask * smoothstep(-0.12, 0.08, along);
}

void main() {
  vec2 p = vUv * 2.0 - 1.0;
  p.x *= uResolution.x / max(uResolution.y, 1.0);

  vec2 origin = uOrigin;
  origin.x *= uResolution.x / max(uResolution.y, 1.0);

  vec2 ray = p - origin;
  float dist = length(ray);
  vec2 rayDirection = normalizeSafe(ray);

  float motion = clamp(uMotion, 0.0, 1.0);
  float progress = clamp(uScrollProgress, 0.0, 1.0);
  float intensity = clamp(uIntensity, 0.2, 1.0) * motion;
  float t = uTime * mix(0.18, 1.0, motion);

  vec2 pointer = uPointer;
  pointer.x *= uResolution.x / max(uResolution.y, 1.0);
  vec2 pointerDirection = normalizeSafe(pointer - origin);
  vec2 baseDirection = normalizeSafe(mix(vec2(0.98, 0.84), pointerDirection, 1.0 * intensity));

  float pulse = sin(t * 2.3) * 0.5 + 0.5;
  float coreBase = exp(-dist * 4.4) * (0.72 + pulse * 0.5);
  float ringFrequency = mix(14.0, 27.0, progress);
  float rings = sin(dist * ringFrequency - t * mix(2.0, 4.3, progress)) * 0.5 + 0.5;
  rings = smoothstep(0.58, 1.0, rings) * exp(-dist * 1.16);
  float coreLayer = (coreBase + rings * 0.86) * (0.65 + 0.35 * intensity);

  float vectorLayer = 0.0;
  float beamCount = mix(4.0, 7.0, progress);
  float spread = mix(0.24, 0.74, progress) * (0.85 + intensity * 0.4);
  for (int i = 0; i < 7; i++) {
    float fi = float(i);
    float beamEnabled = step(fi, beamCount);
    float normalized = (fi / max(beamCount - 1.0, 1.0)) - 0.5;
    float angle = normalized * spread;
    mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
    vec2 beamDirection = normalizeSafe(rot * baseDirection);
    float beam = beamProfile(rayDirection, beamDirection, mix(7.5, 5.0, progress));
    float shaft = smoothstep(-0.08, 1.55, dot(ray, beamDirection)) * exp(-dist * mix(0.7, 0.42, progress));
    vectorLayer += beam * shaft * beamEnabled;
  }
  vectorLayer *= 0.18 + 0.12 * intensity;

  float traceLayer = 0.0;
  float traceRate = mix(0.34, 0.84, progress) * intensity;
  for (int i = 0; i < 4; i++) {
    float fi = float(i);
    float seed = fi * 13.81;
    float offset = (hash11(seed) - 0.5) * spread * 2.2;
    mat2 rot = mat2(cos(offset), -sin(offset), sin(offset), cos(offset));
    vec2 traceDirection = normalizeSafe(rot * baseDirection);

    float speed = mix(0.22, 0.48, hash11(seed + 3.1)) * traceRate;
    float phase = fract(t * speed + hash11(seed + 1.8));
    float outwardHead = mix(0.12, 1.72, phase);
    float inwardHead = mix(1.58, 0.14, phase);

    float outward = executionTrace(ray, traceDirection, outwardHead, 34.0, 140.0);
    float inward = executionTrace(ray, -traceDirection, inwardHead, 30.0, 110.0);
    traceLayer += (outward + inward * 0.65) * smoothstep(1.95, 0.18, dist);
  }
  traceLayer *= 0.54;

  float gather = smoothstep(2.1, 0.1, dist);
  float luminance = (coreLayer + vectorLayer + traceLayer) * gather;

  float readabilityMask = 1.0;
  readabilityMask *= 1.0 - smoothstep(-0.12, 0.72, p.x) * smoothstep(0.0, 0.88, p.y) * 0.22;
  luminance *= readabilityMask;

  luminance = clamp(luminance, 0.0, 1.0);
  float flatTone = 0.56 + luminance * 0.2;
  vec3 color = mix(uColorDeep, uColorMain, flatTone);
  float alpha = luminance * (0.58 * intensity + 0.14);

  gl_FragColor = vec4(color, alpha);
}
`;

type HeroFieldXConfig = {
  pointerDamping: number;
  scrollDamping: number;
  originOffsetRatioX: number;
  originOffsetRatioY: number;
};

const HERO_FIELD_X_CONFIG: HeroFieldXConfig = {
  pointerDamping: 0.16,
  scrollDamping: 0.11,
  originOffsetRatioX: 1.35,
  originOffsetRatioY: 0.5,
};

export function HeroFieldXBackground() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const sectionEl = root.parentElement as HTMLElement | null;
    if (!sectionEl) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false,
      powerPreference: "high-performance",
    });
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const canvas = renderer.domElement;
    canvas.className = "fx-hero-radial-canvas";
    root.appendChild(canvas);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const geometry = new THREE.PlaneGeometry(2, 2);

    const uniforms = {
      uTime: { value: 0 },
      uMotion: { value: reduceMotion.matches ? 0.2 : 1 },
      uScrollProgress: { value: 0 },
      uIntensity: { value: 1 },
      uResolution: { value: new THREE.Vector2(1, 1) },
      uOrigin: { value: new THREE.Vector2(0.26, -0.08) },
      uPointer: { value: new THREE.Vector2(0.26, -0.08) },
      uColorMain: { value: new THREE.Color("#e10600") },
      uColorDeep: { value: new THREE.Color("#cf3a35") },
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
      transparent: true,
      depthTest: false,
      depthWrite: false,
      blending: THREE.NormalBlending,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const pointerTarget = new THREE.Vector2(0.26, -0.08);
    const pointerCurrent = pointerTarget.clone();
    const originTarget = new THREE.Vector2(0.26, -0.08);
    let scrollTarget = 0;
    let scrollCurrent = 0;

    const updateOriginFromHeading = () => {
      const sectionRect = sectionEl.getBoundingClientRect();
      const heading = sectionEl.querySelector<HTMLElement>("#home-hero-title");
      if (!heading || sectionRect.width < 1 || sectionRect.height < 1) return;

      const headingRect = heading.getBoundingClientRect();
      const anchorX = headingRect.right + headingRect.width * HERO_FIELD_X_CONFIG.originOffsetRatioX;
      const anchorY = headingRect.top + headingRect.height * HERO_FIELD_X_CONFIG.originOffsetRatioY;

      const normalizedX = ((anchorX - sectionRect.left) / sectionRect.width) * 2 - 1;
      const normalizedY = (((anchorY - sectionRect.top) / sectionRect.height) * 2 - 1) * -1;
      const rightBiasedX = Math.max(normalizedX, 0.36);
      originTarget.set(THREE.MathUtils.clamp(rightBiasedX, -0.95, 0.95), THREE.MathUtils.clamp(normalizedY, -0.95, 0.95));
      uniforms.uOrigin.value.copy(originTarget);
    };

    const updateScrollProgress = () => {
      const rect = sectionEl.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const visible = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
      const visibility = THREE.MathUtils.clamp(visible / Math.max(rect.height, 1), 0, 1);
      scrollTarget = visibility;
    };

    const updatePointerTarget = (event: PointerEvent) => {
      const rect = sectionEl.getBoundingClientRect();
      if (rect.width < 1 || rect.height < 1) return;
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) return;
      const localX = (event.clientX - rect.left) / rect.width;
      const localY = (event.clientY - rect.top) / rect.height;
      const centeredX = (localX - 0.5) * 2;
      const centeredY = (localY - 0.5) * 2 * -1;
      pointerTarget.set(THREE.MathUtils.clamp(centeredX, -1, 1), THREE.MathUtils.clamp(centeredY, -1, 1));
    };

    const onPointerLeave = () => {
      pointerTarget.copy(originTarget);
    };

    const onScroll = () => {
      updateScrollProgress();
    };

    const resize = () => {
      const width = Math.max(1, root.clientWidth);
      const height = Math.max(1, root.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(width, height, false);
      uniforms.uResolution.value.set(width, height);
      uniforms.uIntensity.value = Math.min(1, width / 1120);
      updateOriginFromHeading();
      pointerTarget.copy(originTarget);
      pointerCurrent.copy(originTarget);
      uniforms.uPointer.value.copy(originTarget);
      updateScrollProgress();
      renderer.render(scene, camera);
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(sectionEl);
    window.addEventListener("pointermove", updatePointerTarget, { passive: true });
    sectionEl.addEventListener("pointerleave", onPointerLeave, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    const clock = new THREE.Clock();
    const renderFrame = () => {
      const elapsed = clock.getElapsedTime();
      uniforms.uTime.value = elapsed;
      pointerCurrent.lerp(pointerTarget, HERO_FIELD_X_CONFIG.pointerDamping);
      scrollCurrent = THREE.MathUtils.lerp(scrollCurrent, scrollTarget, HERO_FIELD_X_CONFIG.scrollDamping);
      uniforms.uPointer.value.copy(pointerCurrent);
      uniforms.uScrollProgress.value = scrollCurrent;
      renderer.render(scene, camera);
      rafRef.current = window.requestAnimationFrame(renderFrame);
    };

    renderFrame();

    const onMotionChange = (event: MediaQueryListEvent) => {
      uniforms.uMotion.value = event.matches ? 0.2 : 1;
      uniforms.uIntensity.value = event.matches ? Math.min(uniforms.uIntensity.value, 0.5) : Math.min(1, root.clientWidth / 1120);
    };

    reduceMotion.addEventListener("change", onMotionChange);

    return () => {
      reduceMotion.removeEventListener("change", onMotionChange);
      window.removeEventListener("pointermove", updatePointerTarget);
      sectionEl.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      observer.disconnect();
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      scene.remove(mesh);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (canvas.parentElement === root) {
        root.removeChild(canvas);
      }
    };
  }, []);

  return <div className="fx-hero-radial-bg" aria-hidden="true" ref={rootRef} />;
}

export function HeroRadialBurstBackground() {
  return <HeroFieldXBackground />;
}
