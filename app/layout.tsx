import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600"]
});

export const metadata: Metadata = {
  title: "Gustavo Leite | Portfolio",
  description: "Professional portfolio of Gustavo Leite, Software Engineer and Front-end/Full-Stack developer. Explore projects, experience, and get in touch.",
  icons: {
    icon: '/favicon.svg'
  },
  openGraph: {
    images: [
      {
        url: '/og-image-lg.jpg',
        width: 1080,
        height: 1080,
        alt: 'Gustavo Leite Portfolio'
      },
      {
        url: '/og-image-twitter.jpg',
        width: 800,
        height: 418,
        alt: 'Gustavo Leite Portfolio'
      },
      {
        url: '/og-image-md.jpg',
        width: 600,
        height: 315,
        alt: 'Gustavo Leite Portfolio'
      },
      {
        url: '/og-image-xl.jpg',
        width: 1200,
        height: 630,
        alt: 'Gustavo Leite Portfolio'
      },
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ''

  return (
    <html lang="pt">
      <body
        className={`${figtree.variable} antialiased`}
      >
        {children}
      </body>
      {gaId && <GoogleAnalytics  gaId={gaId} />}
    </html>
  );
}
