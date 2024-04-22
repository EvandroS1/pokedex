import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./global.css";

const poppins = Poppins({ subsets: ['latin'], weight: ['400'] })

export const metadata: Metadata = {
  title: "Pokedex",
  description: "PokeApi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
