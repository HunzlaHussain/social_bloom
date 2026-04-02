'use client';

import { useEffect, useRef } from "react";

type CalFunction = ((...args: unknown[]) => void) & {
  loaded?: boolean;
  q?: unknown[][];
  ns?: Record<string, CalFunction>;
};

declare global {
  interface Window {
    Cal?: CalFunction;
  }
}

export function CalInlineEmbed() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    (function (C: Window, A: string, L: string) {
      const d = C.document;

      const p = (a: CalFunction, ar: unknown[]) => {
        a.q = a.q || [];
        a.q.push(ar);
      };

      const cal: CalFunction =
        C.Cal ||
        (function (...args: unknown[]) {
          const ar = args;
          const currentCal = C.Cal;
          if (!currentCal) return;

          if (!currentCal.loaded) {
            currentCal.ns = {};
            currentCal.q = currentCal.q || [];
            const s = d.createElement("script");
            s.src = A;
            d.head.appendChild(s);
            currentCal.loaded = true;
          }

          if (ar[0] === L) {
            const api: CalFunction = ((...apiArgs: unknown[]) => {
              p(api, apiArgs);
            }) as CalFunction;

            const namespace = ar[1];
            api.q = api.q || [];

            if (typeof namespace === "string") {
              currentCal.ns = currentCal.ns || {};
              currentCal.ns[namespace] = currentCal.ns[namespace] || api;
              p(currentCal.ns[namespace], ar);
              p(currentCal, ["initNamespace", namespace]);
            } else {
              p(currentCal, ar);
            }
            return;
          }

          p(currentCal, ar);
        }) as CalFunction;

      C.Cal = cal;
    })(window, "https://app.cal.com/embed/embed.js", "init");

    if (window.Cal) {
      const cal = window.Cal;
      cal("init", "growth-strategy-call", {
        origin: "https://app.cal.com",
      });

      cal.ns = cal.ns || {};
      const growth = cal.ns["growth-strategy-call"];

      if (growth) {
        growth("inline", {
          elementOrSelector: "#my-cal-inline-growth-strategy-call",
          config: {
            layout: "column_view",
            useSlotsViewOnSmallScreen: "true",
          },
          calLink: "team/socialbloom/growth-strategy-call",
        });

        growth("ui", {
          cssVarsPerTheme: {
            light: { "cal-brand": "#5F5FFF" },
            dark: { "cal-brand": "#f4f4f4" },
          },
          hideEventTypeDetails: false,
          layout: "column_view",
        });
      }
    }
  }, []);

  return (
    <div
      id="my-cal-inline-growth-strategy-call"
      style={{ width: "100%", height: "100%", overflow: "auto" }}
    />
  );
}
