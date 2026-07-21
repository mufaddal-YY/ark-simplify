import "../(site)/globals.css";

export const metadata = {
  icons: {
    icon: [
      {url: "/favicon.ico", sizes: "32x32"},
      {url: "/logo_icon.png", type: "image/png"},
    ],
    apple: "/logo_icon.png",
  },
};

export default function LandingLayout({children}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
