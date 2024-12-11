import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
        className={`${helveticaRegular.variable} ${helveticaMedium.variable} ${helveticaBold.variable} antialiased pt-5 px-5 max-w-[1900px] mx-auto scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
