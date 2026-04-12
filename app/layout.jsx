import "./globals.css";
import SiteHeader from "@/components/nav/header";
import SiteFooter from "@/components/nav/footer";

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
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
