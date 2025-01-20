import { BentoGridComponent } from "@/components/BentoGrid";
import ElectronicsKits from "@/components/ElectronicsKits";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LearningModules from "@/components/LearningModules";
import Loader from "@/components/loader/Loader";
import PromotionDialog from "@/components/PromotionDialog";
import { Testimonials } from "@/components/Testimonials";
import TheTeam from "@/components/TheTeam";
import TrioeVideo from "@/components/TrioeVideo";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import DotPattern from "@/components/ui/dot-pattern";
import WebQuickGuide from "@/components/WebQuickGuide";
import { cn } from "@/lib/utils";

import { Suspense } from "react";

const Home = () => {
	return (
		<div className="scroll-smooth font-geistMono flex flex-col justify-center">
			<div id="hero" className="mb-10">
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
				<Hero />
			</div>
			<div className="p-5">
				<WebQuickGuide />
				{/* <BentoGridComponent /> */}
			</div>
			<div id="video" className="relative p-5">
				<Suspense fallback={<Loader />}>
					<TrioeVideo />
				</Suspense>
			</div>
			<div id="courses" className="p-5 relative">
				<Suspense fallback={<Loader />}>
					<LearningModules />
				</Suspense>
			</div>
			<div id="kits" className="p-5 relative">
				<Suspense fallback={<Loader />}>
					<ElectronicsKits />
				</Suspense>
				<DotPattern
					width={20}
					height={20}
					cx={1}
					cy={1}
					cr={1}
					className={cn(
						"[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] z-[-1] absolute pointer-events-none"
					)}
				/>
			</div>
			<div id="testimonials" className="p-5 ">
				<Suspense fallback={<Loader />}>
					<Testimonials />
				</Suspense>
			</div>
			{/* <div id="team" className="p-5 max-w-[1400px] mx-auto">
				<Suspense fallback={<Loader />}>
					<TheTeam />
				</Suspense>
			</div> */}
			<footer className="p-5 max-w-[1400px] mx-auto">
				<div id="footer">
					<Footer />
				</div>
			</footer>
			{/* <div><PromotionDialog /></div> */}
		</div>
	);
};

export default Home;
