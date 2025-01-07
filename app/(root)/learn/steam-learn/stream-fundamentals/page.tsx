"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Waves, ArrowLeft } from "lucide-react";

const sections = [
	{
		title: "Understanding streams",
		content: [
			{
				type: "text",
				value: "Learn the core concepts of stream-based programming:",
			},
			{
				type: "list",
				items: [
					"What are data streams?",
					"Stream processing paradigm",
					"Benefits of stream-based programming",
					"Real-world applications",
				],
			},
		],
	},
	{
		title: "Data flow programming",
		content: [
			{
				type: "text",
				value: "Master the principles of data flow programming:",
			},
			{
				type: "list",
				items: [
					"Data flow vs traditional programming",
					"Creating data pipelines",
					"Handling data transformations",
					"Managing state in streams",
				],
			},
		],
	},
	{
		title: "Stream operators",
		content: [
			{
				type: "text",
				value: "Explore essential stream operators and their applications:",
			},
			{
				type: "list",
				items: [
					"Map, filter, and reduce operations",
					"Combining streams",
					"Time-based operations",
					"Custom operators",
				],
			},
		],
	},
	{
		title: "Error handling",
		content: [
			{
				type: "text",
				value: "Learn robust error handling in stream programming:",
			},
			{
				type: "list",
				items: [
					"Error propagation in streams",
					"Recovery strategies",
					"Retry mechanisms",
					"Graceful degradation",
				],
			},
		],
	},
];

export default function StreamFundamentalsPage() {
	return (
		<div className="container mx-auto py-8">
			<div className="flex items-center gap-4 mb-8">
				<Button variant="outline" size="icon" asChild>
					<Link href="/learn/steam-learn">
						<ArrowLeft className="h-4 w-4" />
					</Link>
				</Button>
				<div>
					<h1 className="text-4xl font-bold">
						Stream Programming Fundamentals
					</h1>
					<p className="text-muted-foreground mt-2">
						Master stream-based programming concepts
					</p>
				</div>
			</div>

			<div className="grid gap-6">
				{sections.map((section, index) => (
					<Card key={section.title}>
						<CardHeader>
							<div className="flex items-center gap-2">
								<Badge variant="outline">{`Section ${index + 1}`}</Badge>
								<CardTitle>{section.title}</CardTitle>
							</div>
						</CardHeader>
						<CardContent>
							{section.content.map((item, i) => (
								<div key={i} className="mb-4">
									{item.type === "text" && (
										<p className="text-muted-foreground">{item.value}</p>
									)}
									{item.type === "list" && (
										<ul className="list-disc list-inside space-y-2 mt-2">
											{item.items?.map((listItem, j) => (
												<li key={j}>{listItem}</li>
											))}
										</ul>
									)}
								</div>
							))}
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
