import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About TRIOE",
	description:
		"Learn about TRIOE's mission, platform, and approach to IoT education.",
	openGraph: {
		title: "About TRIOE - Our Mission and Vision",
		description:
			"Learn about TRIOE's innovative approach to IoT education and development",
		type: "website",
		url: "https://trioe.dev/about",
	},
};

export default function AboutPage() {
	return (
		<div className="min-h-screen bg-gradient-to-br font-geist">
			<div className="container mx-auto px-4 py-16">
				<div className="flex items-center flex-col justify-center">
					<h2 className="mb-8 text-center text-4xl font-bold text-gray-800">
						ABOUT TRIOE
					</h2>
					<p className="mb-12 text-center text-xl text-gray-600">
						TRIOE is a platform for learning and building IoT projects.
					</p>
				</div>
				<div className=" flex flex-col lg:flex-row gap-10 h-screen w-full overflow-hidden bg-gradient-to-r">
					<div className="relative h-full w-full">
						<Image
							src="/images/1.png"
							alt="TRIOE"
							fill
							className="object-contain"
						/>
					</div>
					<div className="relative h-full w-full">
						<Image
							src="/images/2.png"
							alt="TRIOE"
							fill
							className="object-contain"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
