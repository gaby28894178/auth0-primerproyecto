import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import {Providers} from "./Providers";
// import { SessionProvider } from "next-auth/react";


const inter = Inter ({subsets:['latin']})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Providers>

          <Navbar/>
                {children}
        </Providers>
      </body>
    </html>
  );
}
