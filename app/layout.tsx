import type { Metadata, Viewport } from "next";
import { PlayfairDisplay, PlayfairDisplayItalic, sans } from "@/lib/font";
import "./globals.css";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

export const metadata: Metadata = {
  title: {
    template: "%s | Varaha Heritage",
    default: "Varaha Heritage",
  },
  description:
    "Varaha Heritage bridges the gap between stories and the audience. We provide solutions starting from the accurate 3D digitisation and documentation of the vast treasure of archaeological and heritage artifacts, monuments, sites, and artistic expressions, to creating digital presence through online and offline tools. In an era of rapid change, the digital preservation of heritage objects and spaces, especially through 3D digitization, is paramount due to its ability to address the monumental challenge of safeguarding our cultural legacy. Our platform provides intuitive tools for data management, archival, and dissemination, enabling heritage organisation and collections to curate, analyze, and share their collections with ease. Additionally, we remain committed to continuous innovation, embracing emerging technologies to ensure dynamic accessibility and engagement with heritage and culture.",
  metadataBase: new URL("https://varahaheritage.com"),
  openGraph: {
    type: "website",
    url: "https://varahaheritage.com",
    title: "Varaha Heritage",
    description:
      "Varaha Heritage bridges the gap between stories and the audience. We provide solutions starting from the accurate 3D digitisation and documentation of the vast treasure of archaeological and heritage artifacts, monuments, sites, and artistic expressions, to creating digital presence through online and offline tools. In an era of rapid change, the digital preservation of heritage objects and spaces, especially through 3D digitization, is paramount due to its ability to address the monumental challenge of safeguarding our cultural legacy. Our platform provides intuitive tools for data management, archival, and dissemination, enabling heritage organisation and collections to curate, analyze, and share their collections with ease. Additionally, we remain committed to continuous innovation, embracing emerging technologies to ensure dynamic accessibility and engagement with heritage and culture.",
    images: [
      {
        url: "https://varahaheritage.com/og-image.png",
        width: 800,
        height: 600,
        alt: "Varaha Heritage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@varahaheritage",
    title: "Varaha Heritage",
    description:
      "Varaha Heritage bridges the gap between stories and the audience. We provide solutions starting from the accurate 3D digitisation and documentation of the vast treasure of archaeological and heritage artifacts, monuments, sites, and artistic expressions, to creating digital presence through online and offline tools. In an era of rapid change, the digital preservation of heritage objects and spaces, especially through 3D digitization, is paramount due to its ability to address the monumental challenge of safeguarding our cultural legacy. Our platform provides intuitive tools for data management, archival, and dissemination, enabling heritage organisation and collections to curate, analyze, and share their collections with ease. Additionally, we remain committed to continuous innovation, embracing emerging technologies to ensure dynamic accessibility and engagement with heritage and culture.",
    images: "https://varahaheritage.com/og-image.png",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${PlayfairDisplay.variable} ${PlayfairDisplayItalic.variable} ${sans.variable} antialiased scroll-smooth`}
      lang="en"
    >
      <body className="font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
