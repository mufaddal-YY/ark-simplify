import "./globals.css";
import Script from "next/script";
import SiteHeader from "@/components/nav/header";
import SiteFooter from "@/components/nav/footer";
import SiteOfferFloat from "@/components/common/site-offer-float";
import FloatingWhatsapp from "@/components/common/floating-whatsapp";
import HeadCode from "@/components/common/head-code";
import { generateSeoMetadata, getContact } from "@/sanity/fetch";

export async function generateMetadata() {
  const metadata = await generateSeoMetadata("root", { path: "/" });

  return {
    ...metadata,
    verification: {
      google: "NOGngijBnI1yiu5tnyiCdl7FFNA0dK9qMDIAlZFGpAk",
    },
    icons: {
      icon: [{ url: "/favicon.ico", sizes: "32x32" }],
      shortcut: "/favicon.ico",
    },
  };
}
// 
export default async function RootLayout({ children }) {
  const contact = await getContact({ revalidate: 60 });

  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <HeadCode />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-N002XRZS92"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N002XRZS92');
          `}
        </Script>
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
        <FloatingWhatsapp contact={contact} />
      </body>
    </html>
  );
}
