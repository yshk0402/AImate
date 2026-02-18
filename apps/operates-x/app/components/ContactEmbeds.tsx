"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

const TALLY_WIDGET_SCRIPT_SRC = "https://tally.so/widgets/embed.js";

function loadTallyEmbeds() {
  if (typeof window === "undefined") {
    return;
  }

  if (window.Tally) {
    window.Tally.loadEmbeds();
    return;
  }

  document
    .querySelectorAll<HTMLIFrameElement>('iframe[data-tally-src]:not([src])')
    .forEach((iframe) => {
      iframe.src = iframe.dataset.tallySrc ?? "";
    });
}

export function TallyRequestEmbed() {
  useEffect(() => {
    loadTallyEmbeds();

    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${TALLY_WIDGET_SCRIPT_SRC}"]`
    );

    if (existingScript) {
      existingScript.addEventListener("load", loadTallyEmbeds);
      existingScript.addEventListener("error", loadTallyEmbeds);

      return () => {
        existingScript.removeEventListener("load", loadTallyEmbeds);
        existingScript.removeEventListener("error", loadTallyEmbeds);
      };
    }

    const script = document.createElement("script");
    script.src = TALLY_WIDGET_SCRIPT_SRC;
    script.async = true;
    script.onload = loadTallyEmbeds;
    script.onerror = loadTallyEmbeds;
    document.body.appendChild(script);

    return () => {
      script.onload = null;
      script.onerror = null;
    };
  }, []);

  return (
    <div className="fx-embed-shell">
      <iframe
        data-tally-src="https://tally.so/embed/gD0a21?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="784"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="まずは無料で資料請求"
        className="fx-tally-embed"
      />
    </div>
  );
}

export function CalConsultEmbed() {
  return (
    <div className="fx-embed-shell">
      <iframe
        src="https://cal.com/yoshihiko-sato/30min?layout=month_view"
        loading="lazy"
        width="100%"
        height="760"
        frameBorder="0"
        title="30分無料相談予約"
        className="fx-cal-embed"
      />
    </div>
  );
}
