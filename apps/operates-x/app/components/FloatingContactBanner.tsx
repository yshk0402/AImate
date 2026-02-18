"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function FloatingContactBanner() {
  const [fadeProgress, setFadeProgress] = useState(0);

  useEffect(() => {
    const newsSection = document.getElementById("section7");
    if (!newsSection) {
      return;
    }

    const updateProgress = () => {
      const rect = newsSection.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const fadeStart = viewportHeight * 0.96;
      const fadeEnd = viewportHeight * 0.32;
      const nextProgress = (fadeStart - rect.top) / (fadeStart - fadeEnd);
      const clampedProgress = Math.min(1, Math.max(0, nextProgress));
      setFadeProgress(clampedProgress);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const opacity = 1 - fadeProgress;
  const translateY = Math.round(32 * fadeProgress);

  return (
    <a
      href="/contact"
      className="fx-hero-banner"
      aria-label="無料相談フォームへ移動"
      style={{
        opacity,
        transform: `translate3d(0, ${translateY}px, 0)`,
        pointerEvents: fadeProgress > 0.95 ? "none" : "auto"
      }}
    >
      <Image
        src="/images/operates-x/aimate-banner-v2.png"
        alt=""
        aria-hidden="true"
        width={440}
        height={206}
        className="fx-hero-banner-image"
      />
    </a>
  );
}
