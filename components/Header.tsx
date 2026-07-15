"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { APP_URL } from "@/lib/site";

const links = [
  { href: "/#products", label: "Products" },
  { href: "/#why", label: "Why us" },
  { href: "/#process", label: "Process" },
  { href: "/#faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-ink/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" aria-label="Appstackers home" className="flex items-center">
          <Image
            src="/logos/appstackers-wordmark.svg"
            alt="Appstackers"
            width={2048}
            height={300}
            priority
            className="h-7 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-fog transition-colors hover:text-snow"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={APP_URL}
            className="btn-primary inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-bold text-ink"
          >
            Launch app
            <span aria-hidden>→</span>
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 md:hidden"
        >
          <span className="relative block h-3 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-snow transition-transform duration-300 ${
                open ? "translate-y-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-5 bg-snow transition-transform duration-300 ${
                open ? "-translate-y-[5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-white/[0.06] bg-ink/95 px-4 pb-6 pt-3 backdrop-blur-xl md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-fog transition-colors hover:bg-white/5 hover:text-snow"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <a
                href={APP_URL}
                className="btn-primary flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-ink"
              >
                Launch app <span aria-hidden>→</span>
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
