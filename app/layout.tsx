import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { auth } from "@/auth";
import { Toaster } from "@/components/ui/sonner";
import { ExitModal } from "@/components/exit-modal";

const nunito = localFont({
  src: "./fonts/Nunito-VariableFont_wght.ttf",
  variable: "--font-nunito",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  console.log("session", session);

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body
          className={`${nunito.className} antialiased max-w-[2000px] mx-auto`}>
          <Navbar />
          {children}
          <ExitModal />
          <Toaster />
          <Footer />
        </body>
      </html>
    </SessionProvider>
  );
}
