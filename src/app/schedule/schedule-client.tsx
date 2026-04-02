'use client';

import { CalInlineEmbed } from "@/components/CalInlineEmbed";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function ScheduleClient() {
  return (
    <div className="min-h-dvh overflow-x-hidden bg-sb-bg text-sb-text">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_60%_40%_at_20%_0%,rgba(95,95,255,0.06)_0%,transparent_70%),radial-gradient(ellipse_50%_50%_at_80%_10%,rgba(42,50,130,0.05)_0%,transparent_60%),radial-gradient(ellipse_40%_30%_at_60%_90%,rgba(16,185,154,0.03)_0%,transparent_60%)]" />

      <SiteHeader />

      <div className="px-4 pb-10 pt-[120px] text-center sm:px-6 sm:pb-12 sm:pt-[140px]">
        <div className="relative z-[1] mx-auto w-full max-w-sb">
          <h1 className="mb-3 px-1 font-display text-[clamp(1.75rem,5vw+0.5rem,3rem)] font-extrabold leading-[1.15] tracking-[-0.03em]">
            Schedule a Call
          </h1>
          <p className="mx-auto max-w-[560px] px-1 text-base text-sb-text-secondary sm:text-[1.05rem]">
            Book a strategy call to discuss your goals and get a custom quote.
          </p>
        </div>
      </div>

      <div className="relative z-[1] mx-auto min-h-[min(700px,85dvh)] w-full max-w-[1100px] px-4 pb-16 sm:px-6 sm:pb-20">
        <CalInlineEmbed />
      </div>

      <SiteFooter />
    </div>
  );
}
