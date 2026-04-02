'use client';

import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import Image from "next/image";

export default function Home() {
  const makeMockNumbers = () => {
    const randInt = (min: number, max: number) =>
      Math.floor(Math.random() * (max - min + 1)) + min;
    const randFloat = (min: number, max: number, decimals = 1) => {
      const n = Math.random() * (max - min) + min;
      const p = 10 ** decimals;
      return Math.round(n * p) / p;
    };
    const formatMillions = (millions: number) => `$${millions.toFixed(1)}M`;

    const qualifiedBorrowerAppointments = randInt(40, 140);
    const applicationRatePercent = randInt(12, 34);
    const fundedVolumeInfluenced = formatMillions(randFloat(1.2, 9.8, 1));

    const caseStudies = [
      {
        lenderName: "Crescent Home Lending",
        fundedVolume: formatMillions(randFloat(3.0, 12.5, 1)),
        fundedVolumeDays: randInt(45, 120),
      },
      {
        lenderName: "Blue Ridge Mortgage",
        qualifiedAppointments: randInt(18, 65),
        qualifiedAppointmentsWeeks: randInt(4, 12),
      },
      {
        lenderName: "Harbor Equity Partners",
        efficiencyImprovementPercent: randInt(10, 38),
      },
    ] as const;

    return {
      qualifiedBorrowerAppointments,
      applicationRatePercent,
      fundedVolumeInfluenced,
      caseStudies,
    };
  };

  const [mockNumbers, setMockNumbers] = useState<ReturnType<typeof makeMockNumbers> | null>(null);

  useEffect(() => {
    // Generate mock values only on the client to avoid hydration mismatches.
    setMockNumbers(makeMockNumbers());

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    document
      .querySelectorAll<HTMLElement>(".reveal")
      .forEach((el) => observer.observe(el));

    const faqSection = document.getElementById("faq");
    const faqButtons = faqSection?.querySelectorAll<HTMLButtonElement>("button") ?? [];

    const handleFaqClick = (btn: HTMLButtonElement) => {
      const item = btn.parentElement;
      if (!item) return;
      const wasOpen = item.classList.contains("open");

      document
        .querySelectorAll<HTMLElement>("#faq .open")
        .forEach((i) => i.classList.remove("open"));

      if (!wasOpen) item.classList.add("open");
    };

    faqButtons.forEach((btn) => btn.addEventListener("click", () => handleFaqClick(btn)));

    return () => {
      document
        .querySelectorAll<HTMLElement>(".reveal")
        .forEach((el) => observer.unobserve(el));
      observer.disconnect();
      faqButtons.forEach((btn) => btn.replaceWith(btn.cloneNode(true) as HTMLButtonElement));
    };
  }, []);

  return (
    <div className="min-h-dvh overflow-x-hidden bg-sb-bg text-sb-text">
      <div className="fixed inset-0 -z-10 pointer-events-none bg-[radial-gradient(ellipse_60%_40%_at_20%_0%,rgba(95,95,255,0.06)_0%,transparent_70%),radial-gradient(ellipse_50%_50%_at_80%_10%,rgba(42,50,130,0.05)_0%,transparent_60%),radial-gradient(ellipse_40%_30%_at_60%_90%,rgba(16,185,154,0.03)_0%,transparent_60%)]" />

      <SiteHeader />

      {/* HERO */}
      <section
        className="relative flex min-h-dvh items-center overflow-x-hidden py-20 pb-16 pt-28 sm:min-h-screen sm:py-[120px] sm:pb-20 sm:pt-[120px]"
        id="hero"
      >
        <div
          className="pointer-events-none absolute -top-[20%] left-1/2 z-0 h-[min(900px,95vmin)] w-[min(900px,95vmin)] max-w-[100vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(95,95,255,0.07)_0%,transparent_50%),radial-gradient(circle_at_30%_60%,rgba(42,50,130,0.05)_0%,transparent_50%),radial-gradient(circle_at_70%_40%,rgba(16,185,154,0.04)_0%,transparent_50%)]"
          aria-hidden
        />
        <Image
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[min(550px,90vmin)] w-[min(550px,90vmin)] max-w-[100vw] -translate-x-1/2 -translate-y-1/2 opacity-[0.04] [animation:slowSpin_120s_linear_infinite]"
          src="/favicon.png"
          alt=""
          width={1802}
          height={1787}
        />
        <div className="relative z-[1] mx-auto w-full max-w-sb px-4 sm:px-6">
          <div className="relative z-[1] mx-auto max-w-[820px] text-center">
            <div className="mb-8 inline-flex max-w-full flex-wrap items-center justify-center gap-2 px-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-sb-primary before:hidden before:h-px before:w-5 before:shrink-0 before:bg-sb-primary/40 before:content-[''] after:hidden after:h-px after:w-5 after:shrink-0 after:bg-sb-primary/40 after:content-[''] reveal sm:before:block sm:after:block sm:text-[0.72rem] sm:tracking-[0.18em] sm:before:w-6 sm:after:w-6">
              Predictable Borrower Demand for Lending Teams
            </div>
            <h1 className="reveal reveal-delay-1 mb-6 px-1 text-center font-display text-[clamp(1.65rem,calc(5.5vw+0.25rem),4.4rem)] font-extrabold leading-[1.08] tracking-[-0.035em] sm:px-0 sm:leading-[1.05]">
              Stop Chasing Borrowers. Start{" "}
              <span className="inline bg-gradient-to-br from-sb-primary via-sb-accent to-sb-secondary bg-[length:200%_auto] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [animation:gradientShift_4s_ease_infinite]">Closing More Loans</span>.
          </h1>
            <p className="mx-auto mb-10 max-w-[600px] px-1 text-base leading-[1.7] text-sb-text-secondary reveal reveal-delay-2 sm:px-0 sm:text-[1.15rem]">
              We help lending companies generate qualified borrower conversations
              for purchase, refinance, and home equity offers so your loan
              officers spend more time closing and less time hunting for demand.
            </p>
            <div className="mx-auto flex w-full max-w-md flex-col gap-3 reveal reveal-delay-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
              <a href="https://socialbloom.io/schedule" className="group inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-[10px] border-none bg-gradient-to-br from-sb-primary to-[#4a4ae0] px-6 py-3.5 text-base font-semibold text-white shadow-[0_4px_20px_rgba(95,95,255,0.2)] transition-all duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:from-[#7272ff] hover:to-sb-primary hover:shadow-[0_8px_32px_rgba(95,95,255,0.25)] sm:w-auto sm:px-8 sm:py-4 [&_svg]:transition-transform [&_svg]:duration-300 group-hover:[&_svg]:translate-x-1">
                Book a Strategy Call
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              <a href="#how" className="inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-[10px] border border-sb-border-strong bg-transparent px-6 py-3.5 text-base font-medium text-sb-text-secondary transition-all duration-300 hover:border-sb-purple-mid hover:bg-sb-primary/5 hover:text-sb-text sm:w-auto sm:px-8 sm:py-4">
                See How It Works
              </a>
            </div>
            <div className="mt-[72px] text-center [&_p]:mb-6 [&_p]:text-[0.8rem] [&_p]:font-medium [&_p]:uppercase [&_p]:tracking-[0.12em] [&_p]:text-sb-text-muted reveal reveal-delay-4">
              <p>
                Built for modern lending teams that need consistent borrower
                demand
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 opacity-50 sm:gap-10 md:gap-12 [&_span]:font-display [&_span]:text-base [&_span]:font-semibold [&_span]:tracking-[0.02em] [&_span]:text-sb-text-secondary sm:[&_span]:text-lg md:[&_span]:text-[1.2rem]">
                <span>Sequoia</span>
                <span>Y Combinator</span>
                <span>Techstars</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <div className="border-y border-sb-border py-10">
        <div className="relative z-[1] mx-auto w-full max-w-sb px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-8 text-center min-[600px]:grid-cols-3 min-[600px]:gap-6 reveal">
            <div>
              <div className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-sb-accent">
                {mockNumbers ? `${mockNumbers.qualifiedBorrowerAppointments}+` : "—"}
              </div>
              <div className="mt-1 text-[0.85rem] font-medium text-sb-text-secondary">Qualified Borrower Appointments</div>
            </div>
            <div>
              <div className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-sb-accent">
                {mockNumbers ? `${mockNumbers.applicationRatePercent}%` : "—"}
              </div>
              <div className="mt-1 text-[0.85rem] font-medium text-sb-text-secondary">Application Rate</div>
            </div>
            <div>
              <div className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-sb-accent">
                {mockNumbers ? mockNumbers.fundedVolumeInfluenced : "—"}
              </div>
              <div className="mt-1 text-[0.85rem] font-medium text-sb-text-secondary">Funded Volume Influenced</div>
            </div>
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      {/* <div className="py-16">
        <div className="relative z-[1] mx-auto w-full max-w-sb px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-sb-border bg-sb-card p-6 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-sb-border-strong sm:p-8 reveal">
              <p className="mb-6 text-[1.05rem] italic leading-[1.7] text-sb-text [&_strong]:font-normal [&_strong]:not-italic [&_strong]:text-sb-accent">
                &quot;We started seeing SQLs flood in right away, which led to{" "}
                <strong>
                  $113k pipeline value being generated in the first 20 days.
                </strong>
                &quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sb-primary to-sb-secondary text-sm font-bold text-white">LS</div>
                <div>
                  <div className="text-[0.9rem] font-semibold">Luke Shalom</div>
                  <div className="text-[0.8rem] text-sb-text-muted">CEO, Atticus Media</div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-sb-border bg-sb-card p-6 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-sb-border-strong sm:p-8 reveal reveal-delay-1">
              <p className="mb-6 text-[1.05rem] italic leading-[1.7] text-sb-text [&_strong]:font-normal [&_strong]:not-italic [&_strong]:text-sb-accent">
                &quot;Over the past 2.5 years, their strategies have helped us
                achieve <strong>$12 million generated.</strong> I can&apos;t
                recommend Social Bloom highly enough!&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sb-primary to-sb-secondary text-sm font-bold text-white">AW</div>
                <div>
                  <div className="text-[0.9rem] font-semibold">Andrew Watson</div>
                  <div className="text-[0.8rem] text-sb-text-muted">Head of Sales, Bifrost</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* PROBLEM */}
      <section id="about" className="border-t border-sb-border">
        <div className="relative z-[1] mx-auto w-full max-w-sb px-4 sm:px-6">
          <div className="mb-14 reveal">
            <div className="mb-3 text-center text-[0.75rem] font-bold uppercase tracking-[0.15em] text-sb-primary">The Borrower Demand Problem</div>
            <h2 className="mb-4 text-center font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold leading-[1.15] tracking-[-0.03em]">
              Your team does not need more leads. It needs more qualified
              borrower conversations.
            </h2>
            <p className="mx-auto max-w-[560px] text-center text-[1.05rem] leading-[1.7] text-sb-text-secondary">
              Most lending marketing creates activity, not closings. You are
              tired of:
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 min-[600px]:grid-cols-2">
            <div className="rounded-[14px] border border-sb-border bg-sb-card p-5 transition-[border-color,background] duration-300 sm:p-7 hover:border-sb-accent/25 hover:bg-sb-card-hover [&_h3]:mb-2 [&_h3]:text-[1.05rem] [&_h3]:font-semibold [&_p]:text-sm [&_p]:leading-snug [&_p]:text-sb-text-secondary reveal">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[10px] bg-sb-accent/[0.08] text-lg text-sb-accent">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 20h.01" />
                  <path d="M7 20v-4" />
                  <path d="M12 20v-8" />
                  <path d="M17 20V8" />
                  <path d="M22 4v16" />
                </svg>
              </div>
              <h3>Rate shoppers with no intent</h3>
              <p>
                Your team spends time on people who want a quote but never move
                forward.
              </p>
            </div>
            <div className="rounded-[14px] border border-sb-border bg-sb-card p-5 transition-[border-color,background] duration-300 sm:p-7 hover:border-sb-accent/25 hover:bg-sb-card-hover [&_h3]:mb-2 [&_h3]:text-[1.05rem] [&_h3]:font-semibold [&_p]:text-sm [&_p]:leading-snug [&_p]:text-sb-text-secondary reveal reveal-delay-1">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[10px] bg-sb-accent/[0.08] text-lg text-sb-accent">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h3>Unpredictable application flow</h3>
              <p>
                One month looks strong, the next goes quiet. That makes staffing
                and forecasting harder.
              </p>
            </div>
            <div className="rounded-[14px] border border-sb-border bg-sb-card p-5 transition-[border-color,background] duration-300 sm:p-7 hover:border-sb-accent/25 hover:bg-sb-card-hover [&_h3]:mb-2 [&_h3]:text-[1.05rem] [&_h3]:font-semibold [&_p]:text-sm [&_p]:leading-snug [&_p]:text-sb-text-secondary reveal reveal-delay-2">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[10px] bg-sb-accent/[0.08] text-lg text-sb-accent">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 12h5" />
                  <path d="M17 12h5" />
                  <path d="M12 2v5" />
                  <path d="M12 17v5" />
                  <path d="m4.93 4.93 3.54 3.54" />
                  <path d="m15.54 15.54 3.53 3.53" />
                  <path d="m15.54 8.46 3.53-3.53" />
                  <path d="m4.93 19.07 3.54-3.54" />
                </svg>
              </div>
              <h3>High CPL with weak downstream revenue</h3>
              <p>
                You pay for clicks and form fills, but too few turn into real
                applications or funded loans.
              </p>
            </div>
            <div className="rounded-[14px] border border-sb-border bg-sb-card p-5 transition-[border-color,background] duration-300 sm:p-7 hover:border-sb-accent/25 hover:bg-sb-card-hover [&_h3]:mb-2 [&_h3]:text-[1.05rem] [&_h3]:font-semibold [&_p]:text-sm [&_p]:leading-snug [&_p]:text-sb-text-secondary reveal reveal-delay-3">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[10px] bg-sb-accent/[0.08] text-lg text-sb-accent">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 14V2" />
                  <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76l-5.74 8z" />
                </svg>
              </div>
              <h3>Loan officers doing marketing work</h3>
              <p>
                Your best closers get dragged into prospecting instead of
                focusing on borrower conversations and follow-up.
              </p>
            </div>
          </div>
          <div className="mt-8 rounded-xl border border-sb-accent/15 bg-sb-accent/[0.04] p-6 text-center [&_p]:text-base [&_p]:font-medium [&_p]:text-sb-accent reveal">
            <p>Empty calendars now become missed closings later.</p>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="border-y border-sb-border bg-sb-bg-secondary">
        <div className="relative z-[1] mx-auto w-full max-w-sb px-4 sm:px-6">
          <div className="mb-14 reveal">
            <div className="mb-3 text-center text-[0.75rem] font-bold uppercase tracking-[0.15em] text-sb-primary">The Solution</div>
            <h2 className="mb-4 text-center font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold leading-[1.15] tracking-[-0.03em]">
              A more predictable way to generate borrower demand
            </h2>
            <p className="mx-auto max-w-[560px] text-center text-[1.05rem] leading-[1.7] text-sb-text-secondary">
              Social Bloom helps lending teams create a steadier flow of
              qualified borrower opportunities without piling more work onto
              internal teams.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="group relative overflow-hidden rounded-[14px] border border-sb-border bg-sb-card p-6 pb-6 transition-[border-color,transform] duration-300 sm:p-8 sm:pb-7 before:pointer-events-none before:absolute before:left-0 before:right-0 before:top-0 before:h-[3px] before:bg-gradient-to-r before:from-sb-primary before:to-sb-accent before:opacity-0 before:transition-opacity before:duration-300 hover:-translate-y-[3px] hover:border-sb-border-strong group-hover:before:opacity-100 [&_h3]:mb-3 [&_h3]:text-[1.15rem] [&_h3]:font-semibold [&_p]:text-sm [&_p]:leading-[1.65] [&_p]:text-sb-text-secondary reveal">
              <div className="mb-4 bg-gradient-to-b from-sb-primary/35 to-sb-secondary/20 bg-clip-text font-display text-[2.5rem] font-bold leading-none text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">01</div>
              <h3>Done-for-you demand generation</h3>
              <p>
                We help you build a borrower acquisition system so your loan
                officers can stay focused on conversations, applications, and
                closings.
              </p>
            </div>
            <div className="group relative overflow-hidden rounded-[14px] border border-sb-border bg-sb-card p-6 pb-6 transition-[border-color,transform] duration-300 sm:p-8 sm:pb-7 before:pointer-events-none before:absolute before:left-0 before:right-0 before:top-0 before:h-[3px] before:bg-gradient-to-r before:from-sb-primary before:to-sb-accent before:opacity-0 before:transition-opacity before:duration-300 hover:-translate-y-[3px] hover:border-sb-border-strong group-hover:before:opacity-100 [&_h3]:mb-3 [&_h3]:text-[1.15rem] [&_h3]:font-semibold [&_p]:text-sm [&_p]:leading-[1.65] [&_p]:text-sb-text-secondary reveal reveal-delay-1">
              <div className="mb-4 bg-gradient-to-b from-sb-primary/35 to-sb-secondary/20 bg-clip-text font-display text-[2.5rem] font-bold leading-none text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">02</div>
              <h3>Built around loan intent</h3>
              <p>
                We align messaging around the offers borrowers already care
                about most: purchase, refinance, and home equity.
              </p>
            </div>
            <div className="group relative overflow-hidden rounded-[14px] border border-sb-border bg-sb-card p-6 pb-6 transition-[border-color,transform] duration-300 sm:p-8 sm:pb-7 before:pointer-events-none before:absolute before:left-0 before:right-0 before:top-0 before:h-[3px] before:bg-gradient-to-r before:from-sb-primary before:to-sb-accent before:opacity-0 before:transition-opacity before:duration-300 hover:-translate-y-[3px] hover:border-sb-border-strong group-hover:before:opacity-100 [&_h3]:mb-3 [&_h3]:text-[1.15rem] [&_h3]:font-semibold [&_p]:text-sm [&_p]:leading-[1.65] [&_p]:text-sb-text-secondary reveal reveal-delay-2">
              <div className="mb-4 bg-gradient-to-b from-sb-primary/35 to-sb-secondary/20 bg-clip-text font-display text-[2.5rem] font-bold leading-none text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">03</div>
              <h3>Qualified opportunities over vanity metrics</h3>
              <p>
                The goal is not more traffic or more junk leads. It is more
                conversations that can turn into funded loans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how">
        <div className="relative z-[1] mx-auto w-full max-w-sb px-4 sm:px-6">
          <div className="mb-16 reveal">
            <div className="mb-3 text-center text-[0.75rem] font-bold uppercase tracking-[0.15em] text-sb-primary">How It Works</div>
            <h2 className="mb-4 text-center font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold leading-[1.15] tracking-[-0.03em]">
              Your lending growth engine
              <br />
              in 3 Steps
            </h2>
          </div>
          <div className="flex flex-col">
            {/* Step 1 */}
            <div className="grid grid-cols-1 items-start gap-10 border-b border-sb-border py-12 first:pt-0 last:border-b-0 md:grid-cols-[200px_1fr] md:gap-10 reveal">
              <div className="top-[100px] flex flex-row items-center gap-4 md:sticky md:flex-col md:items-start md:gap-0">
                <div className="bg-gradient-to-b from-sb-primary to-sb-secondary bg-clip-text font-display text-[2.5rem] font-bold leading-none text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] md:text-[4rem]">01</div>
                <div className="mt-2 text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-sb-text-muted">Foundation</div>
              </div>
              <div className="[&_h3]:mb-4 [&_h3]:font-display [&_h3]:text-2xl [&_h3]:font-semibold [&_>p]:mb-6 [&_>p]:text-[0.95rem] [&_>p]:leading-[1.7] [&_>p]:text-sb-text-secondary">
                <h3>Foundation – Define the borrower profile</h3>
                <p>
                  We start by getting clear on the borrowers, geographies, loan
                  products, and offer angles that matter most to your team.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-3.5 [&_h4]:mb-0.5 [&_h4]:text-sm [&_h4]:font-semibold [&_p]:text-[0.85rem] [&_p]:leading-snug [&_p]:text-sb-text-secondary">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-sb-purple-glow text-sb-secondary [&_svg]:h-3.5 [&_svg]:w-3.5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M12 2 2 7l10 5 10-5-10-5Z" />
                        <path d="m2 17 10 5 10-5" />
                        <path d="m2 12 10 5 10-5" />
                      </svg>
                    </div>
                    <div>
                      <h4>Target borrower profile</h4>
                      <p>
                        Clarify which borrowers are the right fit so marketing
                        and sales stay focused on high-intent opportunities.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3.5 [&_h4]:mb-0.5 [&_h4]:text-sm [&_h4]:font-semibold [&_p]:text-[0.85rem] [&_p]:leading-snug [&_p]:text-sb-text-secondary">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-sb-purple-glow text-sb-secondary [&_svg]:h-3.5 [&_svg]:w-3.5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1="12" x2="12" y1="3" y2="15" />
                      </svg>
                    </div>
                    <div>
                      <h4>Product-level positioning</h4>
                      <p>
                        Align messaging to the specific loan products you want
                        to grow, not generic lending language.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3.5 [&_h4]:mb-0.5 [&_h4]:text-sm [&_h4]:font-semibold [&_p]:text-[0.85rem] [&_p]:leading-snug [&_p]:text-sb-text-secondary">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-sb-purple-glow text-sb-secondary [&_svg]:h-3.5 [&_svg]:w-3.5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <rect width="18" height="18" x="3" y="3" rx="2" />
                        <path d="M3 9h18" />
                        <path d="M9 21V9" />
                      </svg>
                    </div>
                    <div>
                      <h4>Market and geography focus</h4>
                      <p>
                        Prioritize the markets and geographies where your team
                        can win and scale.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 items-start gap-10 border-b border-sb-border py-12 first:pt-0 last:border-b-0 md:grid-cols-[200px_1fr] md:gap-10 reveal">
              <div className="top-[100px] flex flex-row items-center gap-4 md:sticky md:flex-col md:items-start md:gap-0">
                <div className="bg-gradient-to-b from-sb-primary to-sb-secondary bg-clip-text font-display text-[2.5rem] font-bold leading-none text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] md:text-[4rem]">02</div>
                <div className="mt-2 text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-sb-text-muted">Launch</div>
              </div>
              <div className="[&_h3]:mb-4 [&_h3]:font-display [&_h3]:text-2xl [&_h3]:font-semibold [&_>p]:mb-6 [&_>p]:text-[0.95rem] [&_>p]:leading-[1.7] [&_>p]:text-sb-text-secondary">
                <h3>Launch – Generate qualified borrower demand</h3>
                <p>
                  We launch messaging built around borrower intent so your team
                  gets more conversations tied to real loan opportunities.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-3.5 [&_h4]:mb-0.5 [&_h4]:text-sm [&_h4]:font-semibold [&_p]:text-[0.85rem] [&_p]:leading-snug [&_p]:text-sb-text-secondary">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-sb-purple-glow text-sb-secondary [&_svg]:h-3.5 [&_svg]:w-3.5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.3-4.3" />
                      </svg>
                    </div>
                    <div>
                      <h4>Purchase demand</h4>
                      <p>
                        Attract purchase borrowers who are ready to move rather
                        than just rate shoppers.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3.5 [&_h4]:mb-0.5 [&_h4]:text-sm [&_h4]:font-semibold [&_p]:text-[0.85rem] [&_p]:leading-snug [&_p]:text-sb-text-secondary">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-sb-purple-glow text-sb-secondary [&_svg]:h-3.5 [&_svg]:w-3.5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                    </div>
                    <div>
                      <h4>Refinance demand</h4>
                      <p>
                        Capture refinance opportunities when timing, rates, and
                        messaging line up.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3.5 [&_h4]:mb-0.5 [&_h4]:text-sm [&_h4]:font-semibold [&_p]:text-[0.85rem] [&_p]:leading-snug [&_p]:text-sb-text-secondary">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-sb-purple-glow text-sb-secondary [&_svg]:h-3.5 [&_svg]:w-3.5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                      </svg>
                    </div>
                    <div>
                      <h4>Home equity demand</h4>
                      <p>
                        Reach borrowers who want to unlock equity for projects,
                        investments, or consolidation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 items-start gap-10 border-b border-sb-border py-12 first:pt-0 last:border-b-0 md:grid-cols-[200px_1fr] md:gap-10 reveal">
              <div className="top-[100px] flex flex-row items-center gap-4 md:sticky md:flex-col md:items-start md:gap-0">
                <div className="bg-gradient-to-b from-sb-primary to-sb-secondary bg-clip-text font-display text-[2.5rem] font-bold leading-none text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] md:text-[4rem]">03</div>
                <div className="mt-2 text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-sb-text-muted">Optimize</div>
              </div>
              <div className="[&_h3]:mb-4 [&_h3]:font-display [&_h3]:text-2xl [&_h3]:font-semibold [&_>p]:mb-6 [&_>p]:text-[0.95rem] [&_>p]:leading-[1.7] [&_>p]:text-sb-text-secondary">
                <h3>Optimize – Improve for applications and closings</h3>
                <p>
                  We refine around what actually matters downstream, so you are
                  not just generating leads – you are improving the path to
                  funded volume.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-3.5 [&_h4]:mb-0.5 [&_h4]:text-sm [&_h4]:font-semibold [&_p]:text-[0.85rem] [&_p]:leading-snug [&_p]:text-sb-text-secondary">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-sb-purple-glow text-sb-secondary [&_svg]:h-3.5 [&_svg]:w-3.5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <rect
                          width="18"
                          height="18"
                          x="3"
                          y="4"
                          rx="2"
                          ry="2"
                        />
                        <line x1="16" x2="16" y1="2" y2="6" />
                        <line x1="8" x2="8" y1="2" y2="6" />
                        <line x1="3" x2="21" y1="10" y2="10" />
                      </svg>
                    </div>
                    <div>
                      <h4>Appointment quality</h4>
                      <p>
                        Focus on conversations that are tied to real borrower
                        intent and fit your profile.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3.5 [&_h4]:mb-0.5 [&_h4]:text-sm [&_h4]:font-semibold [&_p]:text-[0.85rem] [&_p]:leading-snug [&_p]:text-sb-text-secondary">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-sb-purple-glow text-sb-secondary [&_svg]:h-3.5 [&_svg]:w-3.5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M3 3v18h18" />
                        <path d="m19 9-5 5-4-4-3 3" />
                      </svg>
                    </div>
                    <div>
                      <h4>Application rate</h4>
                      <p>
                        Track and improve how many conversations turn into
                        completed, qualified applications.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3.5 [&_h4]:mb-0.5 [&_h4]:text-sm [&_h4]:font-semibold [&_p]:text-[0.85rem] [&_p]:leading-snug [&_p]:text-sb-text-secondary">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-sb-purple-glow text-sb-secondary [&_svg]:h-3.5 [&_svg]:w-3.5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </div>
                    <div>
                      <h4>Funded loan efficiency</h4>
                      <p>
                        Optimize the steps between application and funded loan
                        so marketing supports the full revenue picture.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="border-y border-sb-border bg-sb-bg-secondary" id="cases">
        <div className="relative z-[1] mx-auto w-full max-w-sb px-4 sm:px-6">
          <div className="mb-14 reveal">
            <div className="mb-3 text-center text-[0.75rem] font-bold uppercase tracking-[0.15em] text-sb-primary">Results</div>
            <h2 className="mb-4 text-center font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold leading-[1.15] tracking-[-0.03em]">Results that matter to lenders</h2>
            <p className="mx-auto max-w-[560px] text-center text-[1.05rem] leading-[1.7] text-sb-text-secondary">
              Show the numbers your team actually cares about: qualified
              borrower appointments, application rate, cost per funded loan, and
              funded volume.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-sb-border bg-sb-card p-6 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-sb-border-strong sm:p-8 reveal">
              <div className="mb-2 font-display text-xl font-semibold">
                {mockNumbers ? mockNumbers.caseStudies[0].lenderName : "—"}
              </div>
              <div className="flex flex-wrap gap-5">
                <div className="min-w-[100px] flex-1 rounded-[10px] border border-sb-border bg-[rgba(42,50,130,0.05)] p-4">
                  <div className="mb-0.5 font-display text-[1.3rem] font-bold text-sb-accent">
                    {mockNumbers ? mockNumbers.caseStudies[0].fundedVolume : "—"}
                  </div>
                  <div className="text-[0.75rem] font-medium text-sb-text-muted">
                    Funded volume influenced in {mockNumbers ? `${mockNumbers.caseStudies[0].fundedVolumeDays} days` : "—"}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-sb-border bg-sb-card p-6 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-sb-border-strong sm:p-8 reveal reveal-delay-1">
              <div className="mb-2 font-display text-xl font-semibold">
                {mockNumbers ? mockNumbers.caseStudies[1].lenderName : "—"}
              </div>
              <div className="flex flex-wrap gap-5">
                <div className="min-w-[100px] flex-1 rounded-[10px] border border-sb-border bg-[rgba(42,50,130,0.05)] p-4">
                  <div className="mb-0.5 font-display text-[1.3rem] font-bold text-sb-accent">
                    {mockNumbers ? mockNumbers.caseStudies[1].qualifiedAppointments : "—"}
                  </div>
                  <div className="text-[0.75rem] font-medium text-sb-text-muted">
                    Qualified borrower appointments in{" "}
                    {mockNumbers ? `${mockNumbers.caseStudies[1].qualifiedAppointmentsWeeks} weeks` : "—"}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-sb-border bg-sb-card p-6 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-sb-border-strong sm:p-8 reveal reveal-delay-2">
              <div className="mb-2 font-display text-xl font-semibold">
                {mockNumbers ? mockNumbers.caseStudies[2].lenderName : "—"}
              </div>
              <div className="flex flex-wrap gap-5">
                <div className="min-w-[100px] flex-1 rounded-[10px] border border-sb-border bg-[rgba(42,50,130,0.05)] p-4">
                  <div className="mb-0.5 font-display text-[1.3rem] font-bold text-sb-accent">
                    {mockNumbers ? `${mockNumbers.caseStudies[2].efficiencyImprovementPercent}%` : "—"}
                  </div>
                  <div className="text-[0.75rem] font-medium text-sb-text-muted">
                    Improvement in application-to-close efficiency
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GUARANTEE / PRICING */}
      <section id="guarantee">
        <div className="relative z-[1] mx-auto w-full max-w-sb px-4 sm:px-6">
          <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16">
            <div className="mb-0 reveal">
              <div className="mb-3 text-center text-[0.75rem] font-bold uppercase tracking-[0.15em] text-sb-primary">Aligned Incentives</div>
              <h2 className="mb-4 text-center font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold leading-[1.15] tracking-[-0.03em]">
                Pay for qualified borrower opportunities, not vague marketing
                activity
              </h2>
              <p className="mx-auto max-w-[560px] text-center text-[1.05rem] leading-[1.7] text-sb-text-secondary">
                We believe lending teams should pay for real opportunity, not
                dashboards full of noise. Our model is designed to stay aligned
                with borrower quality and downstream revenue.
              </p>
              <div className="mt-8 flex flex-wrap items-baseline justify-center gap-2 sm:justify-start">
                <span className="font-display text-[clamp(2.25rem,10vw,3.5rem)] font-bold text-sb-accent">$250</span>
                <span className="max-w-[16rem] text-center text-sm text-sb-text-secondary sm:max-w-none sm:text-left sm:text-base">
                  / per qualified borrower appointment
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-5 reveal reveal-delay-1">
              <div className="flex gap-4 [&_h4]:mb-1 [&_h4]:text-base [&_h4]:font-semibold [&_p]:text-[0.88rem] [&_p]:leading-snug [&_p]:text-sb-text-secondary">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[9px] border border-sb-border bg-gradient-to-br from-[rgba(42,50,130,0.08)] to-sb-primary/5 text-sb-tertiary">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <h4>Clear qualification standards</h4>
                  <p>
                    We align on what counts before launch so your team knows
                    what it is paying for.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 [&_h4]:mb-1 [&_h4]:text-base [&_h4]:font-semibold [&_p]:text-[0.88rem] [&_p]:leading-snug [&_p]:text-sb-text-secondary">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[9px] border border-sb-border bg-gradient-to-br from-[rgba(42,50,130,0.08)] to-sb-primary/5 text-sb-tertiary">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div>
                  <h4>No-show protection</h4>
                  <p>
                    If a booked borrower no-shows under the agreed terms, we
                    make it right.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 [&_h4]:mb-1 [&_h4]:text-base [&_h4]:font-semibold [&_p]:text-[0.88rem] [&_p]:leading-snug [&_p]:text-sb-text-secondary">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[9px] border border-sb-border bg-gradient-to-br from-[rgba(42,50,130,0.08)] to-sb-primary/5 text-sb-tertiary">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <h4>Quality-first accountability</h4>
                  <p>
                    If the opportunity does not match the borrower profile you
                    approved, it should not count.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 [&_h4]:mb-1 [&_h4]:text-base [&_h4]:font-semibold [&_p]:text-[0.88rem] [&_p]:leading-snug [&_p]:text-sb-text-secondary">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[9px] border border-sb-border bg-gradient-to-br from-[rgba(42,50,130,0.08)] to-sb-primary/5 text-sb-tertiary">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" x2="8" y1="13" y2="13" />
                    <line x1="16" x2="8" y1="17" y2="17" />
                    <line x1="10" x2="8" y1="9" y2="9" />
                  </svg>
                </div>
                <div>
                  <h4>No long-term lock-in</h4>
                  <p>
                    We keep the relationship performance-based and easy to
                    evaluate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <div className="relative overflow-hidden border-y border-sb-border bg-sb-bg-secondary py-12 before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(42,50,130,0.06),transparent),radial-gradient(ellipse_30%_40%_at_80%_60%,rgba(16,185,154,0.03),transparent)] sm:py-16 md:py-20">
        <div className="relative z-[1] mx-auto w-full max-w-sb px-4 sm:px-6">
          <div className="relative z-[1] px-1 text-center [&_h2]:mb-4 [&_h2]:font-display [&_h2]:text-[clamp(1.45rem,calc(4vw+0.5rem),2.6rem)] [&_h2]:font-extrabold [&_h2]:tracking-[-0.03em] [&_p]:mx-auto [&_p]:mb-8 [&_p]:max-w-[520px] [&_p]:text-base [&_p]:text-sb-text-secondary sm:[&_p]:text-[1.05rem] reveal">
            <h2>Ready for more funded volume?</h2>
            <p>
              Stop relying on inconsistent borrower flow. Build a steadier
              stream of qualified conversations your team can turn into
              applications and closings.
            </p>
            <a
              href="https://socialbloom.io/schedule"
              className="group inline-flex min-h-12 w-full max-w-sm cursor-pointer items-center justify-center gap-2 rounded-[10px] border-none bg-gradient-to-br from-sb-primary to-[#4a4ae0] px-6 py-3.5 text-base font-semibold text-white shadow-[0_4px_20px_rgba(95,95,255,0.2)] transition-all duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:from-[#7272ff] hover:to-sb-primary hover:shadow-[0_8px_32px_rgba(95,95,255,0.25)] sm:w-auto sm:max-w-none sm:px-8 sm:py-4 [&_svg]:transition-transform [&_svg]:duration-300 group-hover:[&_svg]:translate-x-1"
            >
              Book a Strategy Call
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <section id="faq">
        <div className="relative z-[1] mx-auto w-full max-w-sb px-4 sm:px-6">
          <div className="mb-14 reveal">
            <div className="mb-3 text-center text-[0.75rem] font-bold uppercase tracking-[0.15em] text-sb-primary">FAQs</div>
            <h2 className="mb-4 text-center font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold leading-[1.15] tracking-[-0.03em]">Frequently Asked Questions</h2>
          </div>
          <div className="mx-auto max-w-[780px]">
            {/* Each FAQ item */}
            {/* 1 */}
            <div className="border-b border-sb-border reveal">
              <button className="flex w-full cursor-pointer items-center justify-between gap-3 border-none bg-transparent py-5 pr-1 text-left font-body text-sm font-semibold text-sb-text break-words text-pretty transition-colors duration-[250ms] hover:text-sb-secondary sm:gap-4 sm:py-6 sm:pr-0 sm:text-base">
                What kinds of lenders is this for?
                <svg
                  className="h-5 w-5 shrink-0 text-sb-text-muted transition-transform duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div className="faq-answer">
                <div className="pb-6 text-sm leading-[1.7] text-sb-text-secondary">
                  We work best with lending teams that need a more predictable
                  flow of qualified borrower demand and want more conversations
                  that can turn into real applications.
                </div>
              </div>
            </div>

            {/* 2 */}
            <div className="border-b border-sb-border reveal">
              <button className="flex w-full cursor-pointer items-center justify-between gap-3 border-none bg-transparent py-5 pr-1 text-left font-body text-sm font-semibold text-sb-text break-words text-pretty transition-colors duration-[250ms] hover:text-sb-secondary sm:gap-4 sm:py-6 sm:pr-0 sm:text-base">
                Does this work for purchase, refinance, and home equity?
                <svg
                  className="h-5 w-5 shrink-0 text-sb-text-muted transition-transform duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div className="faq-answer">
                <div className="pb-6 text-sm leading-[1.7] text-sb-text-secondary">
                  Yes. Messaging and targeting can be aligned to the loan
                  products you want to grow.
                </div>
              </div>
            </div>

            {/* 3 */}
            <div className="border-b border-sb-border reveal">
              <button className="flex w-full cursor-pointer items-center justify-between gap-3 border-none bg-transparent py-5 pr-1 text-left font-body text-sm font-semibold text-sb-text break-words text-pretty transition-colors duration-[250ms] hover:text-sb-secondary sm:gap-4 sm:py-6 sm:pr-0 sm:text-base">
                What counts as a qualified borrower opportunity?
                <svg
                  className="h-5 w-5 shrink-0 text-sb-text-muted transition-transform duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div className="faq-answer">
                <div className="pb-6 text-sm leading-[1.7] text-sb-text-secondary">
                  That depends on the borrower profile you define up front,
                  including product fit, geography, and qualification criteria.
                </div>
              </div>
            </div>

            {/* 4 */}
            <div className="border-b border-sb-border reveal">
              <button className="flex w-full cursor-pointer items-center justify-between gap-3 border-none bg-transparent py-5 pr-1 text-left font-body text-sm font-semibold text-sb-text break-words text-pretty transition-colors duration-[250ms] hover:text-sb-secondary sm:gap-4 sm:py-6 sm:pr-0 sm:text-base">
                Is this for consumer-direct teams or branch-based teams?
                <svg
                  className="h-5 w-5 shrink-0 text-sb-text-muted transition-transform duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div className="faq-answer">
                <div className="pb-6 text-sm leading-[1.7] text-sb-text-secondary">
                  It can support either model, as long as there is a clear
                  handoff from demand generation to the team responsible for
                  conversion.
                </div>
              </div>
            </div>

            {/* 5 */}
            <div className="border-b border-sb-border reveal">
              <button className="flex w-full cursor-pointer items-center justify-between gap-3 border-none bg-transparent py-5 pr-1 text-left font-body text-sm font-semibold text-sb-text break-words text-pretty transition-colors duration-[250ms] hover:text-sb-secondary sm:gap-4 sm:py-6 sm:pr-0 sm:text-base">
                How should success be measured?
                <svg
                  className="h-5 w-5 shrink-0 text-sb-text-muted transition-transform duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div className="faq-answer">
                <div className="pb-6 text-sm leading-[1.7] text-sb-text-secondary">
                  Not by raw lead volume. Measure qualified appointments,
                  application rate, cost per application, and funded volume.
                </div>
              </div>
            </div>

            {/* 6 */}
            <div className="border-b border-sb-border reveal hidden">
              <button className="flex w-full cursor-pointer items-center justify-between gap-3 border-none bg-transparent py-5 pr-1 text-left font-body text-sm font-semibold text-sb-text break-words text-pretty transition-colors duration-[250ms] hover:text-sb-secondary sm:gap-4 sm:py-6 sm:pr-0 sm:text-base">
                What do you define as a &quot;Sales Qualified Lead&quot; (SQL)?
                <svg
                  className="h-5 w-5 shrink-0 text-sb-text-muted transition-transform duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div className="faq-answer">
                <div className="pb-6 text-sm leading-[1.7] text-sb-text-secondary">
                  An SQL is a booked meeting on your calendar with a prospect
                  who meets the specific, pre-agreed-upon criteria of your Ideal
                  Customer Profile (ICP). This typically includes factors like
                  industry, company size, the prospect&apos;s job title, and
                  their expressed interest in your services. We define these
                  criteria with you during onboarding to ensure we only deliver
                  high-quality, relevant opportunities.
                </div>
              </div>
            </div>

            {/* 7 */}
            <div className="border-b border-sb-border reveal hidden">
              <button className="flex w-full cursor-pointer items-center justify-between gap-3 border-none bg-transparent py-5 pr-1 text-left font-body text-sm font-semibold text-sb-text break-words text-pretty transition-colors duration-[250ms] hover:text-sb-secondary sm:gap-4 sm:py-6 sm:pr-0 sm:text-base">
                How do you ensure the quality of the leads?
                <svg
                  className="h-5 w-5 shrink-0 text-sb-text-muted transition-transform duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div className="faq-answer">
                <div className="pb-6 text-sm leading-[1.7] text-sb-text-secondary">
                  Quality is controlled by our &quot;Intelligence-First&quot;
                  approach:
                  <br />
                  <br />
                  <strong>1. ICP Matrix:</strong> We use AI to pinpoint your
                  most profitable buyer personas based on historical data.
                  <br />
                  <br />
                  <strong>2. 1:1 Personalization:</strong> Every message is
                  unique to the prospect&apos;s business state, eliminating the
                  &quot;spam&quot; feel of traditional outreach.
                  <br />
                  <br />
                  <strong>3. The Qualification Guarantee:</strong> If a prospect
                  doesn&apos;t match the specific ICP criteria we established
                  during onboarding, you don&apos;t pay for the lead.
                </div>
              </div>
            </div>

            {/* 8 */}
            <div className="border-b border-sb-border reveal hidden">
              <button className="flex w-full cursor-pointer items-center justify-between gap-3 border-none bg-transparent py-5 pr-1 text-left font-body text-sm font-semibold text-sb-text break-words text-pretty transition-colors duration-[250ms] hover:text-sb-secondary sm:gap-4 sm:py-6 sm:pr-0 sm:text-base">
                What if a prospect is a &quot;no-show&quot; for a meeting?
                <svg
                  className="h-5 w-5 shrink-0 text-sb-text-muted transition-transform duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div className="faq-answer">
                <div className="pb-6 text-sm leading-[1.7] text-sb-text-secondary">
                  We believe in a shared-accountability partnership. If you have
                  implemented our Sales Mastery best practices, including our
                  pre-call VSL and automated follow-up sequences, we will
                  replace no-shows at no additional cost.
                </div>
              </div>
            </div>

            {/* 9 */}
            <div className="border-b border-sb-border reveal hidden">
              <button className="flex w-full cursor-pointer items-center justify-between gap-3 border-none bg-transparent py-5 pr-1 text-left font-body text-sm font-semibold text-sb-text break-words text-pretty transition-colors duration-[250ms] hover:text-sb-secondary sm:gap-4 sm:py-6 sm:pr-0 sm:text-base">
                What is the process for rejecting a lead and getting a
                replacement?
                <svg
                  className="h-5 w-5 shrink-0 text-sb-text-muted transition-transform duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div className="faq-answer">
                <div className="pb-6 text-sm leading-[1.7] text-sb-text-secondary">
                  This is a partnership based on mutual transparency. If you
                  determine a prospect doesn&apos;t meet our pre-agreed
                  qualification criteria, just let us know. We won&apos;t bill
                  you for that lead. However, if calls are consistently marked
                  as &quot;unqualified&quot; without valid reason, we reserve
                  the right to pause the campaign.
                </div>
              </div>
            </div>

            {/* 10 */}
            <div className="border-b border-sb-border reveal hidden">
              <button className="flex w-full cursor-pointer items-center justify-between gap-3 border-none bg-transparent py-5 pr-1 text-left font-body text-sm font-semibold text-sb-text break-words text-pretty transition-colors duration-[250ms] hover:text-sb-secondary sm:gap-4 sm:py-6 sm:pr-0 sm:text-base">
                What does the setup fee cover?
                <svg
                  className="h-5 w-5 shrink-0 text-sb-text-muted transition-transform duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div className="faq-answer">
                <div className="pb-6 text-sm leading-[1.7] text-sb-text-secondary">
                  The one-time, non-refundable setup fee covers the &quot;hard
                  costs&quot; and high-level engineering required to build your
                  outbound foundation. This includes:
                  <br />
                  <br />
                  <strong>Infrastructure Engineering:</strong> Deploying your
                  dedicated, &quot;closed-loop&quot; sending environment
                  (domains, warming, and management).
                  <br />
                  <br />
                  <strong>AI-Guided Strategy:</strong> Building your custom ICP
                  Matrix and optimizing your offer for cold outbound resonance.
                  <br />
                  <br />
                  <strong>Knowledge Base Integration:</strong>{" "}
                  &quot;Feeding&quot; the AI your company data so it can handle
                  technical objections autonomously.
                  <br />
                  <br />
                  <strong>Sales Mentoring:</strong> Immediate access to our
                  High-Ticket Sales Mastery course and ongoing support to ensure
                  you can close cold leads.
                </div>
              </div>
            </div>

            {/* 11 */}
            <div className="border-b border-sb-border reveal hidden">
              <button className="flex w-full cursor-pointer items-center justify-between gap-3 border-none bg-transparent py-5 pr-1 text-left font-body text-sm font-semibold text-sb-text break-words text-pretty transition-colors duration-[250ms] hover:text-sb-secondary sm:gap-4 sm:py-6 sm:pr-0 sm:text-base">
                What is the typical monthly investment?
                <svg
                  className="h-5 w-5 shrink-0 text-sb-text-muted transition-transform duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div className="faq-answer">
                <div className="pb-6 text-sm leading-[1.7] text-sb-text-secondary">
                  We charge a one-time setup fee to cover the engineering of
                  your outbound foundation and infrastructure. After launch, you
                  simply pay a fixed performance fee of $250 for every
                  Sales-Qualified Lead (SQL) that meets your criteria and books
                  on your calendar. The scale is up to you. How many calls do
                  you want booked each month?
                </div>
              </div>
            </div>

            {/* 12 */}
            <div className="border-b border-sb-border reveal hidden">
              <button className="flex w-full cursor-pointer items-center justify-between gap-3 border-none bg-transparent py-5 pr-1 text-left font-body text-sm font-semibold text-sb-text break-words text-pretty transition-colors duration-[250ms] hover:text-sb-secondary sm:gap-4 sm:py-6 sm:pr-0 sm:text-base">
                Are there any long-term contracts?
                <svg
                  className="h-5 w-5 shrink-0 text-sb-text-muted transition-transform duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div className="faq-answer">
                <div className="pb-6 text-sm leading-[1.7] text-sb-text-secondary">
                  No. While there is a one-time setup fee to engineer your
                  foundation and stand up your infrastructure, our
                  performance-based partnership is strictly month-to-month. We
                  believe that long-term contracts protect underperforming
                  agencies, not clients. By keeping our agreement
                  month-to-month, we force ourselves to earn your business every
                  30 days. It ensures we remain laser-focused on hitting your
                  revenue targets, because we know you can leave if the results
                  aren&apos;t there.
                </div>
              </div>
            </div>

            {/* 13 */}
            <div className="border-b border-sb-border reveal hidden">
              <button className="flex w-full cursor-pointer items-center justify-between gap-3 border-none bg-transparent py-5 pr-1 text-left font-body text-sm font-semibold text-sb-text break-words text-pretty transition-colors duration-[250ms] hover:text-sb-secondary sm:gap-4 sm:py-6 sm:pr-0 sm:text-base">
                Are there any hidden fees?
                <svg
                  className="h-5 w-5 shrink-0 text-sb-text-muted transition-transform duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div className="faq-answer">
                <div className="pb-6 text-sm leading-[1.7] text-sb-text-secondary">
                  No. Per-booked-call fee is all-inclusive. It covers all
                  software, tools, data and campaign costs required to generate
                  your leads. There are no surprise charges.
                </div>
              </div>
            </div>

            {/* 14 */}
            <div className="border-b border-sb-border reveal hidden">
              <button className="flex w-full cursor-pointer items-center justify-between gap-3 border-none bg-transparent py-5 pr-1 text-left font-body text-sm font-semibold text-sb-text break-words text-pretty transition-colors duration-[250ms] hover:text-sb-secondary sm:gap-4 sm:py-6 sm:pr-0 sm:text-base">
                What kinds of businesses do you work with?
                <svg
                  className="h-5 w-5 shrink-0 text-sb-text-muted transition-transform duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div className="faq-answer">
                <div className="pb-6 text-sm leading-[1.7] text-sb-text-secondary">
                  We partner with established, forward-thinking B2B companies
                  who are serious about scaling their sales pipeline. Our most
                  successful clients are typically:
                  <br />
                  <br />
                  • Creative Agencies
                  <br />
                  • SaaS &amp; Technology Companies
                  <br />
                  • High-End Professional Services &amp; Consulting Firms
                  <br />
                  • Software Development Agencies
                  <br />
                  • Financial Services with complex B2B offerings
                  <br />
                  • IT &amp; MSPs
                  <br />
                  • Executive Recruiting, Sales Enablement and more
                  <br />
                  <br />
                  If your business growth is tied directly to acquiring new
                  clients, we can help you build the predictable, scalable
                  pipeline you need.
                </div>
              </div>
            </div>

            {/* 15 */}
            <div className="border-b border-sb-border reveal hidden">
              <button className="flex w-full cursor-pointer items-center justify-between gap-3 border-none bg-transparent py-5 pr-1 text-left font-body text-sm font-semibold text-sb-text break-words text-pretty transition-colors duration-[250ms] hover:text-sb-secondary sm:gap-4 sm:py-6 sm:pr-0 sm:text-base">
                Do you guys actually use this yourselves?
                <svg
                  className="h-5 w-5 shrink-0 text-sb-text-muted transition-transform duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div className="faq-answer">
                <div className="pb-6 text-sm leading-[1.7] text-sb-text-secondary">
                  Absolutely. We are our own &quot;Customer Zero.&quot; Our
                  growth is fueled by the same AI SDR engine we provide to our
                  clients; every meeting on our calendar was identified,
                  nurtured, and booked by Social Bloom.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SALES MASTERY */}
      <section className="border-y border-sb-border bg-sb-bg-secondary">
        <div className="relative z-[1] mx-auto w-full max-w-sb px-4 sm:px-6">
          <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2">
            <div className="reveal">
              <div className="mb-3 text-center text-[0.75rem] font-bold uppercase tracking-[0.15em] text-sb-primary">
                Included With Every Partnership
              </div>
              <h2 className="mb-4 text-center font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold leading-[1.15] tracking-[-0.03em]">High-Ticket Sales Mastery</h2>
              <p className="mx-auto max-w-[560px] text-center text-[1.05rem] leading-[1.7] text-sb-text-secondary">
                Generating a qualified meeting is only half the battle. Every
                Social Bloom partnership includes lifetime access to our sales
                resources.
              </p>
              <div className="mt-8 flex flex-col gap-6">
                <div className="flex gap-3.5 [&_h4]:mb-1 [&_h4]:text-[0.95rem] [&_h4]:font-semibold [&_p]:text-sm [&_p]:leading-snug [&_p]:text-sb-text-secondary">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[9px] border border-sb-accent/[0.12] bg-sb-accent/[0.08] text-sb-accent">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                  <div>
                    <h4>Proven Sales Frameworks</h4>
                    <p>
                      Scripts and strategies to handle any objection and close
                      high-value deals with confidence.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3.5 [&_h4]:mb-1 [&_h4]:text-[0.95rem] [&_h4]:font-semibold [&_p]:text-sm [&_p]:leading-snug [&_p]:text-sb-text-secondary">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[9px] border border-sb-accent/[0.12] bg-sb-accent/[0.08] text-sb-accent">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div>
                    <h4>Live Mentoring &amp; Coaching</h4>
                    <p>
                      Access live training calls to sharpen your team&apos;s
                      skills and tailor methods to your niche.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3.5 [&_h4]:mb-1 [&_h4]:text-[0.95rem] [&_h4]:font-semibold [&_p]:text-sm [&_p]:leading-snug [&_p]:text-sb-text-secondary">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[9px] border border-sb-accent/[0.12] bg-sb-accent/[0.08] text-sb-accent">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                    </svg>
                  </div>
                  <div>
                    <h4>Perpetual Growth Toolkit</h4>
                    <p>
                      Complete library of SOPs, templates, and advanced training
                      materials to sustain growth on your own terms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-first flex items-center justify-center md:order-none reveal reveal-delay-2">
              <div className="relative flex aspect-square w-full max-w-[400px] items-center justify-center overflow-hidden rounded-[20px] border border-sb-border bg-gradient-to-br from-sb-card to-[rgba(42,50,130,0.06)] before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,154,0.06),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(95,95,255,0.06),transparent_60%)]">
                <div className="relative z-[1] flex flex-col items-center gap-5 text-center [&_svg]:h-24 [&_svg]:w-24 [&_svg]:[filter:drop-shadow(0_0_30px_rgba(95,95,255,0.2))] [&_p]:font-display [&_p]:text-[1.3rem] [&_p]:font-semibold [&_p]:text-sb-text [&_span]:text-sm [&_span]:text-sb-text-muted">
                  <svg
                    width="96"
                    height="96"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="text-sb-primary"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5" />
                  </svg>
                  <p>Sales Mastery</p>
                  <span>Lifetime Access Included</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
