import { Montserrat } from "next/font/google";
import { Open_Sans } from "next/font/google";
import { Roboto } from "next/font/google";

// Three families only: Montserrat for display, Open Sans for reading,
// Roboto for the small tracked UI layer (labels, dates, nav, metadata).
// All three ship a variable axis, so the weight option is omitted and the
// 400 and 600 the stylesheet asks for come from the same file.

const heading = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const body = Open_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const label = Roboto({
  variable: "--font-label",
  subsets: ["latin"],
  display: "swap",
});

const fonts = {
  heading: heading,
  body: body,
  label: label,
};

export { fonts };
