import type { Metadata } from "next";
import { Magra, Roboto } from "next/font/google";
import "./globals.css";
import { SITE } from "../config/site.config";
import { ThemeProvider } from "next-themes";
import ThemeHeadIcons from "@/app/components/ui/ThemeHeaderIcon";
import ClientWrapper from "@/app/components/ui/ClientHeader";

const magra = Magra({
  variable: "--font-magra",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "MeetMux - AI-Powered Acivity-First Social Platform",
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    title: SITE.name,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: SITE.name,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: SITE.linkedinHandle,
    images: [SITE.ogImage],
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${magra.variable} ${roboto.variable}`}
    >
      <head>
        <ThemeHeadIcons />
      </head>
      <body className="bg-[var(--color-background)] text-[var(--color-foreground)] font-[var(--font-primary)] transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          value={{ light: "light", dark: "dark" }}
        >
          <ClientWrapper>{children}</ClientWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
