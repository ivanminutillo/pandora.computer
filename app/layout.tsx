import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Wrapper from "@/components/wrapper";
import {Header} from "@/components/header"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pandora Computer",
  description: "Experimenting in MAS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-full bg-muted/40">
        <Header />
        <Wrapper>
          {children}
        </Wrapper>
      </body>
    </html>
  );
}
