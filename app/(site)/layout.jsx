import "./globals.css";
import Script from "next/script";
import SiteHeader from "@/components/nav/header";
import SiteFooter from "@/components/nav/footer";
import SiteOfferFloat from "@/components/common/site-offer-float";

export const metadata = {
  title: {
    default: "ARK Simplify",
    template: "%s | ARK Simplify",
  },
  description:
    "ARK Simplify delivers construction, finance, and estimation support with streamlined workflows, practical execution, and dependable delivery.",
  keywords: [
    "ARK Simplify",
    "construction",
    "finance",
    "estimation",
    "proestimate",
    "business support",
    "outsourcing",
  ],
  applicationName: "ARK Simplify",
  category: "business",
  verification: {
    google: "NOGngijBnI1yiu5tnyiCdl7FFNA0dK9qMDIAlZFGpAk",
  },
  icons: {
    icon: "/logo_icon.png",
    shortcut: "/logo_icon.png",
    apple: "/logo_icon.png",
  },
  openGraph: {
    title: "ARK Simplify",
    description:
      "Construction, finance, and estimation support designed to simplify execution and improve delivery outcomes.",
    siteName: "ARK Simplify",
    type: "website",
    images: [
      {
        url: "/logo_main.png",
        alt: "ARK Simplify",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ARK Simplify",
    description:
      "Construction, finance, and estimation support designed to simplify execution and improve delivery outcomes.",
    images: ["/logo_main.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WDD6LGCG');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WDD6LGCG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <SiteHeader />
        {children}
        <SiteFooter />
        <SiteOfferFloat />
      </body>
    </html>
  );
}
