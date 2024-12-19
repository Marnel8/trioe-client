import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { MobileNav } from "@/components/MobileNav";
import Providers from "@/hoc/Providers";

const helveticaRegular = localFont({
  src: "./fonts/HelveticaNowDisplay-Regular.woff",
  variable: "--font-helvetica-regular",
  weight: "100 900",
});

const helveticaMedium = localFont({
  src: "./fonts/HelveticaNowDisplay-Medium.woff",
  variable: "--font-helvetica-medium",
  weight: "100 900",
});

const helveticaBold = localFont({
  src: "./fonts/HelveticaNowDisplay-Bold.woff",
  variable: "--font-helvetica-bold",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "TRIOE",
  description: "Thinkering Resources for Internet of Everything",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${helveticaRegular.variable} ${helveticaMedium.variable} ${helveticaBold.variable} antialiased max-w-[1900px] mx-auto scroll-smooth`}
      >
        <Providers>
          <div>
            <MobileNav />
          </div>
          {children}
        </Providers>
      </body>
    </html>
  );
}
