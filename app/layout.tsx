import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GalleryProvider } from "@/context/GalleryContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movies Gallery",
  description: "List of best movies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GalleryProvider>          
          <main className="pt-[40px] md:pt-[24px] grid grid-cols-1 md:grid-cols-12 gap-[24px] md:px-[24px] max-w-[1200px] m-auto">
            {children}
          </main>
        </GalleryProvider>
      </body>
    </html>
  );
}
