import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dream Canvas: Frontend Showcase",
  description: "An artistic design system built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-paper-bg min-h-screen flex flex-col`}
      >
        <Navigation />

        {/* main is the flex-grow area — it must be flex-1 and allow its children to shrink.
            Using min-h-0 on the immediate flex child prevents overflow from creating extra gaps. */}
        <main className="flex-1 flex flex-col min-h-0">{children}</main>

        <footer className="w-full text-center py-4 text-pencil-gray/50 text-sm border-t border-pencil-gray/10">
          © 2024 Dream Canvas Project. Pure Frontend Focus.
        </footer>
      </body>
    </html>
  );
}
