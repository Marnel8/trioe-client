import localFont from "next/font/local";
import "./globals.css";
import { MobileNav } from "@/components/MobileNav";
import Providers from "@/hoc/Providers";
import { Toaster } from "@/components/ui/toaster";

import { schemaOrg } from "./seo";

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
