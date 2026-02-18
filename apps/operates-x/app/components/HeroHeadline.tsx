"use client";

import { useEffect, useState } from "react";

export function HeroHeadline() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setIsActive(true);
    });

    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <h1 id="hero-title" className={`fx-hero-title${isActive ? " is-active" : ""}`}>
      <span className="fx-hero-line">
        <span className="fx-hero-line-text">月額でAI人材にタスクを</span>
      </span>
      <span className="fx-hero-line">
        <span className="fx-hero-line-text">依頼し放題。</span>
      </span>
    </h1>
  );
}
