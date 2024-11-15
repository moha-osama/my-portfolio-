import type { Metadata } from "next";
import "./globals.css";
import { Cairo } from "next/font/google";
import Header from "@/components/Header/Header";

const cairo = Cairo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <body
        className={`${cairo.className} antialiased overflow-x-hidden relative`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
