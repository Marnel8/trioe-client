"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Fish, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function FeedingSystemsPage() {
	return (
		<div className="container mx-auto py-8">
			<Button variant="ghost" className="mb-8" asChild>
				<Link href="/agri-aqua-learn/aquaculture">
					<ArrowLeft className="mr-2 h-4 w-4" />
					Back to Aquaculture Basics
				</Link>
			</Button>

			<div className="mb-8">
				<div className="flex items-center gap-2 mb-4">
					<Fish className="h-8 w-8 text-cyan-500" />
					<h2 className="text-4xl font-bold">Feeding Systems</h2>
				</div>
				<p className="text-muted-foreground text-lg">
					Understanding fish nutrition and implementing effective feeding
					practices.
				</p>
			</div>

			<div className="space-y-8">
				<Card>
					<CardContent className="prose prose-slate dark:prose-invert max-w-none p-6">
						<h2>Fish Nutrition Basics</h2>
						<p>
							Proper nutrition is essential for optimal fish growth and health.
						</p>

						<h3>Nutritional Requirements</h3>
						<ul>
							<li>
								<strong>Proteins</strong>
								<ul>
									<li>Essential for growth</li>
									<li>Species-specific requirements</li>
									<li>Quality protein sources</li>
								</ul>
							</li>
							<li>
								<strong>Lipids</strong>
								<ul>
									<li>Energy source</li>
									<li>Essential fatty acids</li>
									<li>Fat-soluble vitamins</li>
								</ul>
							</li>
							<li>
								<strong>Carbohydrates</strong>
								<ul>
									<li>Energy source</li>
									<li>Feed binding</li>
									<li>Cost reduction</li>
								</ul>
							</li>
						</ul>

						<h3>Types of Feed</h3>
						<ul>
							<li>
								<strong>Commercial Feeds</strong>
								<ul>
									<li>Complete nutrition</li>
									<li>Different sizes</li>
									<li>Species-specific formulations</li>
								</ul>
							</li>
							<li>
								<strong>Farm-made Feeds</strong>
								<ul>
									<li>Cost-effective</li>
									<li>Local ingredients</li>
									<li>Quality control challenges</li>
								</ul>
							</li>
							<li>
								<strong>Natural Food</strong>
								<ul>
									<li>Plankton</li>
									<li>Benthos</li>
									<li>Supplementary feeding</li>
								</ul>
							</li>
						</ul>

						<h3>Feeding Methods</h3>
						<ul>
							<li>
								<strong>Manual Feeding</strong>
								<ul>
									<li>Direct observation</li>
									<li>Labor intensive</li>
									<li>Better control</li>
								</ul>
							</li>
							<li>
								<strong>Automatic Feeders</strong>
								<ul>
									<li>Timer-controlled</li>
									<li>Demand feeders</li>
									<li>Reduced labor</li>
								</ul>
							</li>
						</ul>

						<h3>Feeding Management</h3>
						<p>Best practices for feeding:</p>
						<ul>
							<li>Calculate proper feeding rates</li>
							<li>Monitor feeding behavior</li>
							<li>Adjust for environmental conditions</li>
							<li>Keep feeding records</li>
							<li>Regular evaluation of growth</li>
						</ul>
					</CardContent>
				</Card>

				<div className="flex justify-between">
					<Button variant="outline" asChild>
						<Link href="/agri-aqua-learn/aquaculture">
							<ArrowLeft className="mr-2 h-4 w-4" />
							Back to Module
						</Link>
					</Button>
					<Button asChild>
						<Link href="/agri-aqua-learn/aquaculture/disease-prevention">
							Next Lesson: Disease Prevention
						</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}
