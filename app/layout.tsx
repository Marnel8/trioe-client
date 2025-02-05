import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { MobileNav } from "@/components/MobileNav";
import Providers from "@/hoc/Providers";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

const geist = localFont({
	src: [
		{
			path: "./fonts/Geist-Regular.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "./fonts/Geist-Medium.ttf",
			weight: "500",
			style: "normal",
		},

		{
			path: "./fonts/Geist-Bold.ttf",
			weight: "700",
			style: "normal",
		},
		{
			path: "./fonts/Geist-Black.ttf",
			weight: "900",
			style: "normal",
		},
	],
	variable: "--geist-font",
});

const geistMono = localFont({
	src: [
		{
			path: "./fonts/geist-mono/GeistMono-Regular.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "./fonts/geist-mono/GeistMono-Medium.ttf",
			weight: "500",
			style: "normal",
		},
		{
			path: "./fonts/geist-mono/GeistMono-Bold.ttf",
			weight: "700",
			style: "normal",
		},
	],
	variable: "--geist-mono-font",
});

export const metadata: Metadata = {
	metadataBase: new URL("https://trioe.dev/"),
	title: {
		default: "TRIOE | Tinkering Resource for Internet of Everything",
		template: "%s | TRIOE",
	},
	description:
		"Discover comprehensive resources, tutorials, and tools for Internet of Everything (IoE) tinkering and development. Learn about IoT, connected devices, automation, and smart systems.",
	keywords: [
		"Internet of Everything",
		"IoE",
		"IoT",
		"connected devices",
		"smart systems",
		"automation",
		"tinkering",
		"development resources",
		"tutorials",
	],
	authors: [
		{
			name: "Batangas State University - TNEU",
		},
		{
			name: "TRIOE Team",
		},
	],
	creator: "BatStateU DevOps",
	publisher: "TRIOE",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://trioe.dev",
		title: "TRIOE | Tinkering Resource for Internet of Everything",
		description:
			"Comprehensive resources and tutorials for Internet of Everything (IoE) development and tinkering.",
		siteName: "TRIOE",
	},
	twitter: {
		card: "summary_large_image",
		title: "TRIOE | IoE Resources",
		description:
			"Your go-to resource for Internet of Everything development and tinkering.",
		creator: "@trioe",
	},
	verification: {
		google: "your-google-verification-code",
	},
	category: "technology",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${geist.variable} ${geistMono.variable} `}>
			<body className={`antialiased scroll-smooth`}>
				<Providers>
					{/* <header>
						<NavBar />
					</header> */}
					<main>{children}</main>
					<Toaster />
					<nav className="mt-20">
						<MobileNav />
					</nav>
				</Providers>
			</body>
		</html>
	);
}
