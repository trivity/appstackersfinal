import Link from "next/link";
import Image from "next/image";
import { APP_URL, CONTACT_EMAIL, products } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-pane/40">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/logos/appstackers-wordmark.svg"
              alt="Appstackers"
              width={2048}
              height={300}
              className="h-6 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-fog">
              An AI development company that ships. We build the products we
              wish existed — and the ones you do, too.
            </p>
          </div>

          <nav aria-label="Products">
            <h3 className="font-mono text-xs uppercase tracking-widest text-fog">
              Products
            </h3>
            <ul className="mt-4 space-y-2.5">
              {products.map((p) => (
                <li key={p.slug}>
                  <a
                    href={APP_URL}
                    className="text-sm text-snow/80 transition-colors hover:text-snow"
                  >
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h3 className="font-mono text-xs uppercase tracking-widest text-fog">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="/#why" className="text-sm text-snow/80 transition-colors hover:text-snow">
                  Why Appstackers
                </Link>
              </li>
              <li>
                <Link href="/#process" className="text-sm text-snow/80 transition-colors hover:text-snow">
                  How we work
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-sm text-snow/80 transition-colors hover:text-snow">
                  FAQ
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-sm text-snow/80 transition-colors hover:text-snow"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Legal">
            <h3 className="font-mono text-xs uppercase tracking-widest text-fog">
              Legal
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="/privacy" className="text-sm text-snow/80 transition-colors hover:text-snow">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-snow/80 transition-colors hover:text-snow">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/[0.06] pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-fog">
            © {new Date().getFullYear()} Appstackers. All rights reserved.
          </p>
          <p className="font-mono text-xs text-fog">
            Built AI-first. Shipped with pride.
          </p>
        </div>
      </div>
    </footer>
  );
}
