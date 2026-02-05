import type { Metadata } from "next";
import { DM_Sans, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

import type { RootLayoutProps } from "@/.next/types";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Weather App",
  description: "Personal project to test React skills.",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${bricolageGrotesque.variable} ${dmSans.variable} mx-auto w-full max-w-9/10 antialiased xl:max-w-7xl`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
