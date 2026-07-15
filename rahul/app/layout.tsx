import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="relative min-h-screen overflow-x-hidden bg-black text-white antialiased">
        {/* Background */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          {/* Base */}
          <div className="absolute inset-0 bg-[#050505]" />

          {/* Top Glow */}
          <div className="absolute left-1/2 top-[-250px] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-white/5 blur-[180px]" />

          {/* Bottom Right Glow */}
          <div className="absolute bottom-[-250px] right-[-250px] h-[550px] w-[550px] rounded-full bg-zinc-700/10 blur-[180px]" />

          {/* Bottom Left Glow */}
          <div className="absolute bottom-[-180px] left-[-180px] h-[400px] w-[400px] rounded-full bg-zinc-600/10 blur-[180px]" />

          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(to right, white 1px, transparent 1px),
                linear-gradient(to bottom, white 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        {children}
      </body>
    </html>
  );
}