import "./globals.css";
import Script from "next/script";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://www.malbrosfurnitures.com/"),
  title: "Malbros Furnitures | Luxury & Bespoke Furniture in Delhi",
  description:
    "Explore Malbros Furnitures for premium bespoke furniture, modular kitchens, wardrobes & interior solutions.",
  alternates: {
    canonical: "https://www.malbrosfurnitures.com/",
  },
  verification: {
    google: "nFGdVsIzJtEI-1XfNJNdmGHgSBh8WKy3DaLE1tLRNY4",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Bootstrap CSS */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
      </head>

      <body className={manrope.variable}>
        {children}

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1JP2YHQM0L"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1JP2YHQM0L');
          `}
        </Script>

        {/* Bootstrap JS */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />

        {/* AOS (optional fix below) */}
        <Script
          src="/aos.js" // ⚠️ better to host locally or via CDN
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}