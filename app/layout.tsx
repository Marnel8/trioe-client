import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { MobileNav } from "@/components/MobileNav";
import Providers from "@/hoc/Providers";
import { Toaster } from "@/components/ui/toaster";

const robotoMonoRegular = localFont({
	src: "./fonts/RobotoMono-Regular.ttf",
	variable: "--font-roboto-regular",
	weight: "400", // Regular typically corresponds to 400
});

const robotoMonoMedium = localFont({
	src: "./fonts/RobotoMono-Medium.ttf",
	variable: "--font-roboto-medium",
	weight: "500", // Medium typically corresponds to 500
});

const robotoMonoBold = localFont({
	src: "./fonts/RobotoMono-Bold.ttf",
	variable: "--font-roboto-bold",
	weight: "700", //
});

const robotoMonoBlack = localFont({
	src: "./fonts/RobotoMono-Bold.ttf",
	variable: "--font-roboto-black",
	weight: "900", //
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
				className={`${robotoMonoBold.variable} ${robotoMonoMedium.variable} ${robotoMonoRegular.variable} antialiased max-w-[1900px] mx-auto scroll-smooth`}
			>
				<Providers>
					<div>
						<MobileNav />
					</div>
					<main>{children}</main>
					<Toaster />
				</Providers>
			</body>
		</html>
	);
}
