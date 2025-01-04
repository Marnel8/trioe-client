import { BentoGridComponent } from "@/components/BentoGrid";
import ElectronicsKits from "@/components/ElectronicsKits";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LearningModules from "@/components/LearningModules";
import Loader from "@/components/loader/Loader";
import { Testimonials } from "@/components/Testimonials";
import TheTeam from "@/components/TheTeam";
import TrioeVideo from "@/components/TrioeVideo";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";

import React, { Suspense } from "react";

const Home = () => {
	return (
		<div className="scroll-smooth font-roboto-regular">
			<div id="hero" className="">
				<Hero />
			</div>
			<div className="p-5">
				<Suspense fallback={<Loader />}>
					<BentoGridComponent />
				</Suspense>
			</div>
			<div id="video" className="relative p-5">
				<Suspense fallback={<Loader />}>
					<TrioeVideo />
				</Suspense>
				<DotPattern
					width={20}
					height={20}
					cx={1}
					cy={1}
					cr={1}
					className={cn(
						"[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
					)}
				/>
			</div>
			<div id="courses" className="p-5 relative">
				<Suspense fallback={<Loader />}>
					<LearningModules />
				</Suspense>
				<DotPattern
					width={20}
					height={20}
					cx={16}
					cy={1}
					cr={1}
					className={cn(
						"[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
					)}
				/>
			</div>
			<div id="kits" className="p-5 relative">
				<Suspense fallback={<Loader />}>
					<ElectronicsKits />
				</Suspense>
				<DotPattern
					width={20}
					height={20}
					cx={16}
					cy={1}
					cr={1}
					className={cn(
						"[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
					)}
				/>
			</div>
			<div id="team" className="p-5">
				<Suspense fallback={<Loader />}>
					<TheTeam />
				</Suspense>
			</div>
			<div id="testimonials" className="p-5">
				<Suspense fallback={<Loader />}>
					<Testimonials />
				</Suspense>
			</div>
			<div id="footer">
				<Footer />
			</div>
		</div>
	);
};

export default Home;
