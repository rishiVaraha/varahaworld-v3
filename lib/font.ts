import localFont from "next/font/local";
import { Open_Sans } from "next/font/google";
// Local font
export const PlayfairDisplay = localFont({
  src: "../public/font/PlayfairDisplay-VariableFont_wght.ttf",
  variable: "--font-playfair",
  display: "swap",
});

export const PlayfairDisplayItalic = localFont({
  src: "../public/font/PlayfairDisplay-italic-VariableFont_wght.ttf",
  variable: "--font-playfairitalic",
  display: "swap",
});

export const sans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});
