import { Metadata } from "next";
import { Suspense } from "react";
import CompareKits from "@/components/CompareKits";
import ElectronicsKits from "@/components/ElectronicsKits";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LearningModules from "@/components/LearningModules";
import Loader from "@/components/loader/Loader";
import { Testimonials } from "@/components/Testimonials";
import TrioeVideo from "@/components/TrioeVideo";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import DotPattern from "@/components/ui/dot-pattern";
import WebQuickGuide from "@/components/WebQuickGuide";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
	title: "TRIOE - Learn Electronics and IoT Development",
	description:
		"Discover electronics kits, learning modules, and comprehensive IoT development resources. ",
	openGraph: {
		title: "TRIOE - Electronics & IoT Learning Platform",
		description:
			"Start your IoT journey with TRIOE's electronics kits and learning modules",
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "TRIOE Platform Preview",
			},
		],
	},
	keywords: [
		"electronics kits",
		"IoT learning",
		"electronics tutorials",
		"Internet of Everything",
		"hardware development",
		"STEM education",
		"coding tutorials",
		"electronics projects",
	],
};

const sections = {
	hero: {
		id: "hero",
		className: "mb-10",
		component: Hero,
		pattern: true,
	},
	quickGuide: {
		className: "p-5 bg-blue-50",
		component: WebQuickGuide,
	},
	video: {
		id: "video",
		className: "relative p-5",
		component: TrioeVideo,
		suspense: true,
	},
	courses: {
		id: "courses",
		className: "p-5 relative",
		component: LearningModules,
		suspense: true,
	},
	kits: {
		id: "kits",
		className: "p-5 relative",
		component: ElectronicsKits,
		suspense: true,
		pattern: true,
	},
	compareKits: {
		className: "p-5 relative",
		component: CompareKits,
	},
	testimonials: {
		id: "testimonials",
		className: "p-5",
		component: Testimonials,
		suspense: true,
	},
};

const Section = ({ config }: { config: any }) => {
	const Component = config.component;
	const content = (
		<div id={config.id} className={config.className}>
			<Component />
			{config.pattern && config.id === "hero" && (
				<AnimatedGridPattern
					numSquares={300}
					maxOpacity={0.1}
					duration={3}
					repeatDelay={1}
					className={cn(
						"[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
						"inset-x-0 inset-y-[-50%] h-[200%] z-[-1] absolute pointer-events-none"
					)}
				/>
			)}
			{config.pattern && config.id === "kits" && (
				<DotPattern
					width={20}
					height={20}
					cx={1}
					cy={1}
					cr={1}
					className={cn(
						"[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]",
						"z-[-1] absolute pointer-events-none"
					)}
				/>
			)}
		</div>
	);

	return config.suspense ? (
		<Suspense fallback={<Loader />}>{content}</Suspense>
	) : (
		content
	);
};

const Home = () => {
	return (
		<div className="scroll-smooth font-geistMono flex flex-col justify-center">
			{Object.entries(sections).map(([key, config]) => (
				<Section key={key} config={config} />
			))}

			<footer className="p-5 max-w-[1400px] mx-auto">
				<div id="footer">
					<Footer />
				</div>
			</footer>
		</div>
	);
};

export default Home;
