import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="border-t border-sb-border py-10 pb-8 sm:py-12">
      <div className="relative z-[1] mx-auto w-full max-w-sb px-4 sm:px-6">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/logo.png"
              alt="Social Bloom"
              width={2807}
              height={496}
              className="h-7 w-auto max-w-[min(220px,75vw)] sm:h-8 sm:max-w-none"
            />
          </Link>
          <ul className="flex max-w-full list-none flex-wrap justify-center gap-x-5 gap-y-3 sm:justify-end sm:gap-x-6">
            <li>
              <a
                href="#about"
                className="text-sm text-sb-text-muted transition-colors hover:text-sb-text"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#how"
                className="text-sm text-sb-text-muted transition-colors hover:text-sb-text"
              >
                How It Works
              </a>
            </li>
            <li>
              <a
                href="#cases"
                className="text-sm text-sb-text-muted transition-colors hover:text-sb-text"
              >
                Case Studies
              </a>
            </li>
            <li>
              <a
                href="#guarantee"
                className="text-sm text-sb-text-muted transition-colors hover:text-sb-text"
              >
                Guarantee
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-sm text-sb-text-muted transition-colors hover:text-sb-text"
              >
                FAQs
              </a>
            </li>
            <li>
              <Link
                href="/schedule"
                className="text-sm text-sb-text-muted transition-colors hover:text-sb-text"
              >
                Get Started
              </Link>
            </li>
            
          </ul>
        </div>
        <div className="mt-8 border-t border-sb-border pt-6 text-center text-[0.8rem] text-sb-text-muted">
          &copy; 2026 Social Bloom. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
