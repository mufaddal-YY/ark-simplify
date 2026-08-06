import "../(site)/globals.css";
import Script from "next/script";

export const metadata = {
  icons: {
    icon: [{url: "/favicon.ico", sizes: "32x32"}],
    shortcut: "/favicon.ico",
  },
};

export default function LandingLayout({children}) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-N002XRZS92"
          strategy="afterInteractive"
        />
        <Script id="landing-google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N002XRZS92');
          `}
        </Script>
        <Script id="landing-google-tag-manager" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WDD6LGCG');
          `}
        </Script>
      </head>
      <body className="min-h-full">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WDD6LGCG"
            height="0"
            width="0"
            style={{display: "none", visibility: "hidden"}}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
