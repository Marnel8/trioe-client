import localFont from "next/font/local";
import "./globals.css";
import { MobileNav } from "@/components/MobileNav";
import Providers from "@/hoc/Providers";
import { Toaster } from "@/components/ui/toaster";

import { schemaOrg } from "./seo";
import { Metadata } from "next";

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
		"Discover comprehensive resources, tutorials, and tools for Internet of Everything (IoE) tinkering and development.",
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
		images: [
			{
				url: "/opengraph-image.jpg",
				width: 1200,
				height: 630,
				alt: "TRIOE - Internet of Everything Resources",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "TRIOE | IoE Resources",
		description:
			"Your go-to resource for Internet of Everything development and tinkering.",
		creator: "@trioe",
		images: ["/twitter-image.jpg"],
	},
	verification: {
		google:
			"google-site-verification=tmhxI0YjtP2-LsG2mhZ-wECmem6ZZIgFd3_pxeG3PCo",
	},
	category: "technology",
	alternates: {
		canonical: "https://trioe.dev",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${geist.variable} ${geistMono.variable} `}>
			<head>
				{/* DNS prefetch for external resources */}
				<link rel="dns-prefetch" href="https://fonts.googleapis.com" />

				{/* Preconnect to critical origins */}
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
				/>
			</head>

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
