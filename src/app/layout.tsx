import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { getSite } from "@/lib/content";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSite();
  return {
    title: site.seo.titleDefault,
    description: site.seo.descriptionDefault,
    authors: [{ name: site.brand.name }],
    openGraph: {
      title: site.seo.titleDefault,
      description: site.brand.tagline || site.seo.descriptionDefault,
      type: "website",
      locale: "en_IN",
      images: site.seo.ogImage ? [site.seo.ogImage] : undefined,
    },
    icons: site.brand.faviconUrl ? { icon: site.brand.faviconUrl } : undefined,
  };
}

/** Brand colours come from /site.theme — injected as CSS variables that the Tailwind tokens read. */
function themeVars(site: Awaited<ReturnType<typeof getSite>>): string {
  const c = site.theme.colors ?? {};
  const decls = [
    c.brandPrimary && `--python-blue:${c.brandPrimary}`,
    c.accent && `--python-blue-bright:${c.accent}`,
    c.brandSecondary && `--python-yellow:${c.brandSecondary}`,
    site.theme.background && `--dark-bg:${site.theme.background}`,
  ].filter(Boolean);
  return `:root{${decls.join(";")}}`;
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const site = await getSite();
  return (
    <html lang="en" className="dark">
      <head>
        <style dangerouslySetInnerHTML={{ __html: themeVars(site) }} />
      </head>
      <body className={`${outfit.variable} ${inter.variable} ${outfit.className} bg-dark-bg text-dark-text antialiased`}>
        {children}
      </body>
    </html>
  );
}
