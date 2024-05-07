import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Wrapper from "@/components/wrapper";
import {Header} from "@/components/header"
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"

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
    <html lang="en" suppressHydrationWarning>
      <body className="h-full bg-muted/40">
          <Wrapper
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
            <Header />
            {children}
          </Wrapper>
          <Toaster />

      </body>
      
    </html>
  );
}
