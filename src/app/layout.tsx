import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import WindowsBackground from "@/components/WindowsBackground";
import WindowsScreen from "@/components/WindowsScreen";

const PROJ_NAME: string = "WinFolio";

export const metadata: Metadata = {
    title: PROJ_NAME,
    description: "My portFolio",
    applicationName: PROJ_NAME,
    icons: {
        icon: '/logo.png',
        shortcut: '/logo.ico',
        apple: '/logo.png',
    },
    openGraph: {
        title: PROJ_NAME,
        description: "My portfolio",
        type: 'website',
        locale: 'en_US',
        url: "https://winfolio-kp.vercel.app",
        images: [
            {
                url: "/logo.png",
                alt: PROJ_NAME,
            },
        ],
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className="App h-dvh relative">
      <main className="w-full h-[max(100dvh,100%)] relative isolate">
          <WindowsBackground />
          <WindowsScreen>
              {children}
          </WindowsScreen>
      </main>
      </body>
      </html>
  );
}