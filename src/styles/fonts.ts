import { Inter, Urbanist } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

export const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
  preload: true,
});
