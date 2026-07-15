import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type LegalPageProps = {
  title: string;
  updated: string;
  children: ReactNode;
};

export default function LegalPage({ title, updated, children }: LegalPageProps) {
  return (
    <>
      <Header />
      <main className="flex-1 pb-24 pt-32 sm:pt-40">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="font-mono text-xs uppercase tracking-widest text-mint">
            Legal
          </p>
          <h1
            className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {title}
          </h1>
          <p className="mt-3 text-sm text-fog">Last updated: {updated}</p>

          <div className="legal-body mt-10 space-y-8 text-[15px] leading-relaxed text-snow/80 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-snow [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-snow [&_a]:text-mint [&_a]:underline [&_a]:underline-offset-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
