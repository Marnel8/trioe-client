import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const CompareKits = () => {
	return (
		<div className="p-10 border space-y-5 bg-blue-500  text-white rounded-lg">
			<h1 className="text-center font-bold font-geist text-4xl uppercase tracking-wider">
				Which Kit Is Right For Me?
			</h1>
			<p className="text-center max-w-xl mx-auto">
				Find the TRIOE kit that matches your learning goals, skill level, and
				interests. Explore our kits designed for students, hobbyists, and
				professionals in IoT, robotics, and STEM.
			</p>
			<div className="flex justify-center py-1">
				<Link href="/kits">
					<Button
						variant="outline"
						className="btn bg-transparent w-[200px] md:w-[280px] py-6 rounded-full hover:bg-transparent hover:ring hover:border-none hover:text-red-300 hover:rign-1 hover:ring-red-300/80"
					>
						Compare Kits
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default CompareKits;
