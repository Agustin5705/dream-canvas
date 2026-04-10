import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import { CityProvider } from "./context/CityContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dream Canvas: Frontend Showcase",
  description: "An artistic design system built with Next.js and Tailwind CSS.",
  icons: {
    icon: "/moon.png",
  },
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
        <CityProvider>
          <Navigation />

          {/* main is the flex-grow area — it must be flex-1 and allow its children to shrink.
            Using min-h-0 on the immediate flex child prevents overflow from creating extra gaps. */}
          <main className="flex-1 flex flex-col min-h-0">{children}</main>

          <footer
            className="relative w-full text-center py-6 text-pencil-gray/70 text-sm 
  bg-gradient-to-br from-soft-clay to-stone-600 
  border-t border-pencil-gray/20 shadow-inner"
          >
            <div className="flex flex-col items-center gap-2 relative z-10 text-black">
              © {new Date().getFullYear()} Dream Canvas Project. Pure Frontend
              Focus.
            </div>
          </footer>
        </CityProvider>
      </body>
    </html>
  );
}
