import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { APP_URL, CONTACT_EMAIL, faqs, products } from "@/lib/site";

const marqueeItems = [
  "AI that ships",
  "Weeks, not quarters",
  "Products people actually use",
  "Idea → production",
  "Built AI-first",
  "Zero fluff, all firepower",
];

const capabilities = [
  {
    title: "LLM apps & agents",
    body: "Chat, copilots, autonomous agents — we design and ship AI experiences your customers actually come back to.",
    accent: "var(--color-mint)",
  },
  {
    title: "Workflow automation",
    body: "We find the hours your team burns on repetitive work and hand them back with AI pipelines that never sleep.",
    accent: "var(--color-sky)",
  },
  {
    title: "Data & RAG pipelines",
    body: "Your data, made useful. Retrieval, embeddings, and search that give AI real knowledge of your business.",
    accent: "var(--color-grape)",
  },
  {
    title: "Product engineering",
    body: "Design, frontend, backend, infra. Full product teams that take you from napkin sketch to production traffic.",
    accent: "var(--color-rose)",
  },
  {
    title: "Integrations",
    body: "AI that plugs into the tools you already run — calendars, CRMs, comms, and everything in between.",
    accent: "var(--color-mint)",
  },
  {
    title: "Ship-it culture",
    body: "We prototype in days and iterate in public. You see working software early, and often. No black boxes.",
    accent: "var(--color-sky)",
  },
];

const steps = [
  {
    num: "01",
    title: "Discover",
    body: "We dig into your workflow, your data, and your goals until we find the highest-leverage place for AI to earn its keep.",
  },
  {
    num: "02",
    title: "Prototype",
    body: "Working software in your hands within days — not decks, not diagrams. Real clicks, real feedback, real fast.",
  },
  {
    num: "03",
    title: "Ship",
    body: "Production-grade build-out: secure, tested, and fast. We sweat the details so launch day is a celebration, not a scramble.",
  },
  {
    num: "04",
    title: "Scale",
    body: "We stay in the loop — monitoring, improving, and expanding what works. Your product keeps getting smarter.",
  },
];

const testimonials = [
  {
    quote:
      "We went from ‘we should probably do something with AI’ to a live product our customers pay for. The speed was honestly a little scary.",
    name: "Founder, B2B SaaS",
  },
  {
    quote:
      "MeetingSync quietly became the most-used tool in our company. Nobody writes minutes anymore. Nobody misses an action item either.",
    name: "Head of Operations",
  },
  {
    quote:
      "Other agencies gave us roadmaps. Appstackers gave us software. That difference is everything.",
    name: "Product Director",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* ================= HERO ================= */}
        <section className="noise relative overflow-hidden pb-20 pt-36 sm:pb-28 sm:pt-44">
          <div className="grid-lines absolute inset-0" aria-hidden />
          <div aria-hidden>
            <div className="aurora aurora-a left-[-10%] top-[-15%] h-[26rem] w-[26rem] bg-grape/25" />
            <div className="aurora aurora-b right-[-12%] top-[5%] h-[30rem] w-[30rem] bg-sky/20" />
            <div className="aurora aurora-c bottom-[-30%] left-[30%] h-[24rem] w-[24rem] bg-mint/15" />
          </div>

          <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
            <p
              className="rise inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-fog"
              style={{ "--rd": "0ms" } as React.CSSProperties}
            >
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-mint" aria-hidden />
              AI development company · Product studio
            </p>

            <h1
              className="rise mt-7 max-w-4xl font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl"
              style={{ "--rd": "120ms", fontFamily: "var(--font-display)" } as React.CSSProperties}
            >
              We don’t demo AI.
              <br />
              <span className="gradient-text">We ship it.</span>
            </h1>

            <p
              className="rise mt-7 max-w-2xl text-lg leading-relaxed text-fog sm:text-xl"
              style={{ "--rd": "240ms" } as React.CSSProperties}
            >
              Appstackers builds AI products that pull their weight — tools that
              find your customers, run your meetings, transcribe your world, and
              keep your communities humming. And when you need something custom?
              We build that too. Fast.
            </p>

            <div
              className="rise mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
              style={{ "--rd": "360ms" } as React.CSSProperties}
            >
              <a
                href="#products"
                className="btn-primary inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-bold text-ink"
              >
                Explore the products
                <span aria-hidden>↓</span>
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="btn-ghost inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-8 py-4 text-base font-semibold text-snow"
              >
                Start a project
                <span aria-hidden>→</span>
              </a>
            </div>

            <div
              className="rise mt-16 flex flex-wrap items-center gap-x-8 gap-y-4"
              style={{ "--rd": "480ms" } as React.CSSProperties}
            >
              <span className="font-mono text-xs uppercase tracking-widest text-fog">
                Live today
              </span>
              {products.map((p) => (
                <span key={p.slug} className="flex items-center gap-2.5">
                  <Image
                    src={p.logo}
                    alt=""
                    width={512}
                    height={512}
                    className="h-6 w-6"
                  />
                  <span className="text-sm font-semibold text-snow/80">{p.name}</span>
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ================= MARQUEE ================= */}
        <section
          aria-hidden
          className="relative overflow-hidden border-y border-white/[0.06] bg-pane/60 py-4"
        >
          <div className="marquee-track flex w-max items-center gap-10">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span
                key={i}
                className="flex items-center gap-10 whitespace-nowrap font-mono text-sm uppercase tracking-widest text-fog"
              >
                {item}
                <span className="text-mint">✦</span>
              </span>
            ))}
          </div>
        </section>

        {/* ================= PRODUCTS ================= */}
        <section id="products" className="relative py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-widest text-mint">
                The stack
              </p>
              <h2
                className="mt-4 max-w-2xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Four products. One obsession:
                <span className="text-fog"> software that earns its seat.</span>
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {products.map((p, i) => (
                <Reveal key={p.slug} delay={i * 90}>
                  <article
                    className="product-card h-full rounded-3xl border border-white/[0.08] bg-pane/60 p-8"
                    style={
                      {
                        "--card-color": p.color,
                        "--card-glow": p.glow,
                      } as React.CSSProperties
                    }
                  >
                    <div className="flex items-start justify-between gap-4">
                      <Image
                        src={p.logo}
                        alt={`${p.name} logo`}
                        width={512}
                        height={512}
                        className="card-logo h-14 w-14"
                      />
                      <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-fog">
                        Live
                      </span>
                    </div>

                    <h3
                      className="mt-6 font-display text-2xl font-bold tracking-tight"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {p.name}
                    </h3>
                    <p className="mt-1 text-base font-semibold" style={{ color: p.color }}>
                      {p.tagline}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-fog">
                      {p.description}
                    </p>

                    <ul className="mt-6 space-y-2.5">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-snow/85">
                          <span
                            className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                            style={{ backgroundColor: p.color }}
                            aria-hidden
                          />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={APP_URL}
                      className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-snow transition-colors hover:text-mint"
                    >
                      Open {p.name}
                      <span aria-hidden>→</span>
                    </a>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <div className="mt-6 flex flex-col items-start justify-between gap-6 rounded-3xl border border-dashed border-white/15 bg-white/[0.02] p-8 sm:flex-row sm:items-center">
                <div>
                  <h3
                    className="font-display text-xl font-bold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    …and a lab full of what’s next.
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-fog">
                    More products are already in the works. Want first access
                    when they land? Say hello and we’ll keep you posted.
                  </p>
                </div>
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=Keep%20me%20posted`}
                  className="btn-ghost shrink-0 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-snow"
                >
                  Get early access
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ================= WHY US ================= */}
        <section id="why" className="relative border-t border-white/[0.06] bg-pane/30 py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-widest text-sky">
                Why Appstackers
              </p>
              <h2
                className="mt-4 max-w-2xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Not just products.
                <span className="text-fog"> A team you can point at a problem.</span>
              </h2>
              <p className="mt-5 max-w-2xl text-lg text-fog">
                The same crew that builds and runs our own AI products builds
                custom AI for companies that are done waiting. That’s the
                difference between advice and shipped software.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((c, i) => (
                <Reveal key={c.title} delay={(i % 3) * 90} className="h-full">
                  <div className="group h-full bg-ink p-8 transition-colors duration-300 hover:bg-pane">
                    <span
                      className="inline-block h-2 w-8 rounded-full transition-all duration-300 group-hover:w-12"
                      style={{ backgroundColor: c.accent }}
                      aria-hidden
                    />
                    <h3
                      className="mt-5 font-display text-lg font-bold"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {c.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-fog">{c.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PROCESS ================= */}
        <section id="process" className="relative py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-widest text-grape">
                How we work
              </p>
              <h2
                className="mt-4 max-w-2xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Idea to shipped in four moves.
              </h2>
            </Reveal>

            <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.num} className="h-full">
                  <Reveal delay={i * 110} className="h-full">
                    <div className="group h-full rounded-3xl border border-white/[0.08] bg-pane/50 p-7 transition-colors duration-300 hover:border-white/20">
                      <span className="gradient-text font-display text-5xl font-extrabold">
                        {s.num}
                      </span>
                      <h3
                        className="mt-4 font-display text-xl font-bold"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {s.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-fog">{s.body}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ================= PROOF ================= */}
        <section id="proof" className="relative border-t border-white/[0.06] bg-pane/30 py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-widest text-rose">
                Word on the street
              </p>
              <h2
                className="mt-4 max-w-2xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                People notice software that works.
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {testimonials.map((t, i) => (
                <Reveal key={i} delay={i * 100} className="h-full">
                  <figure className="flex h-full flex-col justify-between rounded-3xl border border-white/[0.08] bg-ink p-8">
                    <blockquote className="text-base leading-relaxed text-snow/90">
                      “{t.quote}”
                    </blockquote>
                    <figcaption className="mt-6 font-mono text-xs uppercase tracking-widest text-fog">
                      — {t.name}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section id="faq" className="relative py-24 sm:py-32">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <Reveal>
              <p className="text-center font-mono text-xs uppercase tracking-widest text-mint">
                Questions
              </p>
              <h2
                className="mt-4 text-center font-display text-4xl font-extrabold tracking-tight sm:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Fair questions, straight answers.
              </h2>
            </Reveal>

            <div className="mt-12 space-y-3">
              {faqs.map((f, i) => (
                <Reveal key={f.q} delay={i * 60}>
                  <details className="faq-item group rounded-2xl border border-white/[0.08] bg-pane/50 px-6 py-5 transition-colors hover:border-white/15">
                    <summary className="flex items-center justify-between gap-4 text-base font-semibold text-snow">
                      {f.q}
                      <span
                        className="faq-icon flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/15 text-fog"
                        aria-hidden
                      >
                        +
                      </span>
                    </summary>
                    <p className="mt-4 text-sm leading-relaxed text-fog">{f.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="relative px-4 pb-24 sm:px-6 sm:pb-32">
          <Reveal>
            <div className="noise relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-pane px-6 py-20 text-center sm:px-12 sm:py-28">
              <div aria-hidden>
                <div className="aurora aurora-b left-[-15%] top-[-40%] h-[22rem] w-[22rem] bg-grape/30" />
                <div className="aurora aurora-a bottom-[-45%] right-[-10%] h-[24rem] w-[24rem] bg-mint/20" />
              </div>

              <div className="relative">
                <h2
                  className="mx-auto max-w-3xl font-display text-4xl font-extrabold tracking-tight sm:text-6xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Got an idea that deserves
                  <span className="gradient-text"> to exist?</span>
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg text-fog">
                  Tell us what’s slowing you down. We’ll tell you — honestly —
                  whether AI can fix it, and how fast we can ship it.
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a
                    href={`mailto:${CONTACT_EMAIL}?subject=Let%E2%80%99s%20build%20something`}
                    className="btn-primary inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-bold text-ink"
                  >
                    Talk to us
                    <span aria-hidden>→</span>
                  </a>
                  <a
                    href={APP_URL}
                    className="btn-ghost inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-4 text-base font-semibold text-snow"
                  >
                    Try the products
                  </a>
                </div>
                <p className="mt-8 font-mono text-xs uppercase tracking-widest text-fog">
                  {CONTACT_EMAIL}
                </p>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
