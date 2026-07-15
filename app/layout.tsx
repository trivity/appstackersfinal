import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SITE_URL, CONTACT_EMAIL, products } from "@/lib/site";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Appstackers — AI Development Company & Product Studio",
    template: "%s | Appstackers",
  },
  description:
    "Appstackers builds AI products that pull their weight: GroupScout, MeetingSync, Polyscribe, GroupZen and more. Custom AI development from idea to production — in weeks, not quarters.",
  keywords: [
    "AI development company",
    "AI software development",
    "custom AI solutions",
    "AI products",
    "GroupScout",
    "MeetingSync",
    "Polyscribe",
    "GroupZen",
    "AI transcription",
    "AI meeting assistant",
    "Appstackers",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Appstackers",
    title: "Appstackers — AI Development Company & Product Studio",
    description:
      "We don’t demo AI. We ship it. Four live AI products, more on the way, and custom AI development for teams that want results.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Appstackers" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Appstackers — AI Development Company & Product Studio",
    description:
      "We don’t demo AI. We ship it. Four live AI products, more on the way, and custom AI development for teams that want results.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#06080f",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Appstackers",
      url: SITE_URL,
      logo: `${SITE_URL}/logos/appstackers-logo-title.svg`,
      email: CONTACT_EMAIL,
      description:
        "AI development company building a suite of AI products — GroupScout, MeetingSync, Polyscribe, GroupZen — and custom AI software for businesses.",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Appstackers",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "ItemList",
      name: "Appstackers Products",
      itemListElement: products.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "SoftwareApplication",
          name: p.name,
          description: p.description,
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          publisher: { "@id": `${SITE_URL}/#organization` },
        },
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bricolage.variable} ${manrope.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
