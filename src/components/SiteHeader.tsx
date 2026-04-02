'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {menuOpen ? (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 z-[998] bg-sb-text/25 backdrop-blur-[2px] md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      ) : null}
    <nav
      className={`fixed left-0 right-0 top-0 z-[1000] pb-3 pt-[max(0.75rem,env(safe-area-inset-top))] transition-[background,backdrop-filter,box-shadow] duration-300 sm:pb-4 sm:pt-[max(1rem,env(safe-area-inset-top))] ${
        scrolled
          ? "border-b border-sb-border bg-sb-bg/90 backdrop-blur-xl"
          : ""
      }`}
      id="nav"
    >
      <div className="mx-auto flex max-w-sb items-center justify-between gap-3 px-4 sm:px-6">
        <Link href="/" className="flex min-w-0 shrink items-center" onClick={closeMenu}>
          <Image
            src="/logo.png"
            alt="Social Bloom"
            width={2807}
            height={496}
            className="h-8 w-auto max-w-[min(200px,58vw)] sm:h-9 sm:max-w-none"
            priority
          />
        </Link>
        <ul
          className={`fixed right-0 top-0 z-[999] flex h-dvh max-h-dvh w-[min(280px,85vw)] list-none flex-col gap-5 overflow-y-auto bg-sb-bg-secondary p-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-[max(4.5rem,env(safe-area-inset-top))] shadow-[-8px_0_32px_rgba(0,0,0,0.1)] transition-transform duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] sm:gap-6 sm:p-8 sm:pt-20 md:static md:z-auto md:h-auto md:max-h-none md:w-auto md:translate-x-0 md:flex-row md:items-center md:gap-8 md:overflow-visible md:bg-transparent md:p-0 md:pb-0 md:pt-0 md:shadow-none ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          id="navLinks"
        >
          <li>
            <a
              href="#about"
              className="text-sm font-medium tracking-wide text-sb-text-secondary transition-colors hover:text-sb-text md:text-[0.875rem]"
              onClick={closeMenu}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#how"
              className="text-sm font-medium tracking-wide text-sb-text-secondary transition-colors hover:text-sb-text md:text-[0.875rem]"
              onClick={closeMenu}
            >
              How It Works
            </a>
          </li>
          <li>
            <a
              href="#cases"
              className="text-sm font-medium tracking-wide text-sb-text-secondary transition-colors hover:text-sb-text md:text-[0.875rem]"
              onClick={closeMenu}
            >
              Case Studies
            </a>
          </li>
          <li>
            <a
              href="#guarantee"
              className="text-sm font-medium tracking-wide text-sb-text-secondary transition-colors hover:text-sb-text md:text-[0.875rem]"
              onClick={closeMenu}
            >
              Guarantee
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className="text-sm font-medium tracking-wide text-sb-text-secondary transition-colors hover:text-sb-text md:text-[0.875rem]"
              onClick={closeMenu}
            >
              FAQs
            </a>
          </li>
          <li>
            <Link
              href="/schedule"
              className="inline-block rounded-lg bg-sb-primary px-6 py-2.5 text-sm font-semibold text-white shadow-none transition-[background,transform,box-shadow] duration-[250ms] hover:-translate-y-px hover:bg-sb-purple-mid hover:shadow-[0_8px_24px_rgba(95,95,255,0.2)]"
              onClick={closeMenu}
            >
              Get Started
            </Link>
          </li>
        </ul>
        <button
          type="button"
          className="relative z-[1001] flex flex-col gap-1.5 border-none bg-transparent p-1 md:hidden"
          id="navToggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span
            className={`block h-0.5 w-6 rounded-sm bg-sb-text transition-[transform,opacity] duration-300 ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 rounded-sm bg-sb-text transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 rounded-sm bg-sb-text transition-[transform,opacity] duration-300 ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>
    </nav>
    </>
  );
}
