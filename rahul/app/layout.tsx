import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rahul Verma | Frontend Developer",
  description:
    "Frontend Developer specializing in React, Next.js, TypeScript and modern web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="relative min-h-screen overflow-x-hidden antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Background */}
          <div className="fixed inset-0 -z-10 overflow-hidden">
            {/* Base */}
            <div className="absolute inset-0 bg-white dark:bg-[#050505]" />

            {/* Top Glow */}
            <div className="absolute left-1/2 top-[-250px] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-zinc-300/30 blur-[180px] dark:bg-white/5" />

            {/* Bottom Right Glow */}
            <div className="absolute bottom-[-250px] right-[-250px] h-[550px] w-[550px] rounded-full bg-zinc-300/30 blur-[180px] dark:bg-zinc-700/10" />

            {/* Bottom Left Glow */}
            <div className="absolute bottom-[-180px] left-[-180px] h-[400px] w-[400px] rounded-full bg-zinc-300/30 blur-[180px] dark:bg-zinc-600/10" />

            {/* Grid */}
            <div
              className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03]"
              style={{
                backgroundImage: `
                  linear-gradient(to right, currentColor 1px, transparent 1px),
                  linear-gradient(to bottom, currentColor 1px, transparent 1px)
                `,
                backgroundSize: "80px 80px",
              }}
            />
          </div>

          <main className="min-h-screen bg-white text-black dark:bg-transparent dark:text-white">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}