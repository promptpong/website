import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import LogoWrapper from "@/components/ui/logo-wrapper";
import "./globals.css";
import { cn } from "@/lib/utils";
import Link from "next/link";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PromptPong",
  description: "Foolish magic tricks with AI and code",
};

export default function RootLayout({
  children,
  info,
}: Readonly<{
  children: React.ReactNode;
  info: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(geistSans.variable, geistMono.variable)}>
      <body className="antialiased min-h-screen flex flex-col dark">
        {info}
        <header>
          <div className="max-w-2xl xl:max-w-3xl mx-auto flex items-center justify-center py-4">
            <Link href="/">
              <LogoWrapper />
            </Link>
          </div>
        </header>
        <main className="flex-1 flex flex-col justify-center">
          <div className="max-w-2xl xl:max-w-3xl mx-auto flex flex-col justify-center py-4">
            {children}
          </div>
        </main>
        <footer>
          <div className="max-w-2xl xl:max-w-3xl mx-auto flex gap-x-5 items-center justify-center py-4 text-sm text-muted-foreground">
            <p>© 2025 PromptPong</p>
            <nav>
              <ul className="flex gap-x-5">
                <li>
                  <Link
                    href="/manifest"
                    className="hover:text-white transition-colors underline"
                  >
                    Manifest
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
