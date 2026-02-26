import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { fonts } from "@/resources/once-ui.config";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {title: "Dezso Kovi - Portfolio", description: "Dezso Kovi Professional Portfolio",};
export default function RootLayout({children,}: Readonly <{children: React.ReactNode;}>) {
return (
  <html
    lang="en"
    data-theme="dark"
    data-neutral="gray"
    data-brand="blue"
    data-accent="indigo"
    data-solid="contrast"
    data-solid-style="flat"
    data-border="playful"
    data-surface="filled"
    data-transition="all"
    data-scaling="100"
    className={`${fonts.heading.variable} ${fonts.body.variable} ${fonts.label.variable} ${fonts.code.variable}`}suppressHydrationWarning>
    <body>
      <Providers>{children}</Providers>
      <Analytics />
    </body>
  </html>
);}
