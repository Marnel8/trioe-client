"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
	Minus,
	Plus,
	ChevronRight,
	Download,
	Book,
	PenToolIcon as Tool,
	Star,
	Quote,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { QuoteRequestModal } from "@/components/kits/quote-request";
import { kits } from "@/constants";

const KitDetails = ({ kitId }: { kitId: string }) => {
	const kit = kits.find((kit) => kit.id === parseInt(kitId));

	const [quantity, setQuantity] = useState(1);
	const [selectedImage, setSelectedImage] = useState(kit?.thumbnail || "");

	const price = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "PHP",
	}).format(kit?.price || 0);

	const handleQuantityChange = (action: "increase" | "decrease") => {
		if (action === "increase") {
			setQuantity((prev) => prev + 1);
		} else if (action === "decrease" && quantity > 1) {
			setQuantity((prev) => prev - 1);
		}
	};

	const handleQuoteRequest = () => {
		console.log(`Quote requested for ${quantity} STEAM Kit(s)`);
		// Here you would typically handle the quote request logic
	};
	return (
		<div className="min-h-screen bg-white">
			<div className="container mx-auto px-4 py-12 space-y-12">
				{/* Product Section */}
				<Card className="p-8 shadow-sm hover:shadow transition-shadow duration-300">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						{/* Product Image Section */}
						<div className="space-y-6">
							<div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-blue-100">
								<Image
									src={selectedImage}
									alt="STEAM Kit"
									fill
									className="object-contain transition-transform duration-300 hover:scale-105"
								/>
							</div>
							<div className="grid grid-cols-5 gap-4">
								{kit?.images.map((thumb, index) => (
									<button
										key={index}
										onClick={() => setSelectedImage(thumb)}
										className={`relative aspect-square rounded-xl overflow-hidden bg-gray-50/50 hover:bg-gray-100/50 transition-all duration-200 ${
											selectedImage === thumb ? "ring-2 ring-blue-400" : ""
										}`}
									>
										<Image
											src={thumb}
											alt={`STEAM Kit thumbnail ${index + 1}`}
											fill
											className="object-contain p-2"
										/>
									</button>
								))}
							</div>
						</div>

						{/* Product Details Section */}
						<div className="space-y-8">
							<div className="space-y-4">
								<div className="flex items-center justify-between">
									<h1 className="text-4xl font-bold text-gray-800">
										{kit?.name}
									</h1>
									<Badge
										variant="secondary"
										className="bg-blue-50 text-blue-600"
									>
										New
									</Badge>
								</div>
								<div className="flex items-center space-x-2 text-sm text-gray-600">
									<Tool className="h-4 w-4" />
									<span>{kit?.category} Learning Kit</span>
								</div>
								<div className="flex items-center space-x-1 text-yellow-400">
									{[...Array(5)].map((_, i) => (
										<Star key={i} className="h-5 w-5 fill-current" />
									))}
									<span className="ml-2 text-sm text-gray-600">
										(50 reviews)
									</span>
								</div>
								<p className="text-gray-600 leading-relaxed">
									{kit?.description}
								</p>
							</div>

							<div className="space-y-6">
								<div className="flex items-center justify-between bg-gray-50/50 p-6 rounded-lg">
									<span className="text-4xl font-bold text-gray-800">
										{price}
									</span>
									<div className="flex items-center space-x-3">
										<Button
											variant="outline"
											size="icon"
											onClick={() => handleQuantityChange("decrease")}
											className="hover:bg-blue-400 hover:text-white transition-colors"
										>
											<Minus className="h-4 w-4" />
										</Button>
										<span className="text-xl font-medium w-12 text-center">
											{quantity}
										</span>
										<Button
											variant="outline"
											size="icon"
											onClick={() => handleQuantityChange("increase")}
											className="hover:bg-blue-400 hover:text-white transition-colors"
										>
											<Plus className="h-4 w-4" />
										</Button>
									</div>
								</div>
								<QuoteRequestModal quantity={quantity} price={2500} />
							</div>
						</div>
					</div>
				</Card>

				{/* Specifications Tabs */}
				<Card className="p-8 shadow">
					<Tabs defaultValue="inclusions" className="space-y-6">
						<TabsList className="grid w-full max-w-[400px] grid-cols-2 mx-auto">
							<TabsTrigger value="inclusions">Package Inclusions</TabsTrigger>
							<TabsTrigger value="specs">Technical Specs</TabsTrigger>
						</TabsList>
						<TabsContent value="inclusions" className="space-y-4">
							<h2 className="text-2xl font-bold text-gray-800">
								Package Inclusions
							</h2>
							<div className="rounded-lg overflow-hidden border border-gray-200">
								<Table>
									<TableHeader>
										<TableRow className="bg-gray-50/50">
											<TableHead className="text-gray-700">Quantity</TableHead>
											<TableHead className="text-gray-700">Name</TableHead>
											<TableHead className="text-gray-700">
												Specifications
											</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										{kit?.inclusions.map((item, index) => (
											<TableRow key={index} className="hover:bg-gray-50/50">
												<TableCell>{item.quantity}</TableCell>
												<TableCell className="font-medium">
													{item.name}
												</TableCell>
												<TableCell>{item.specifications}</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</div>
						</TabsContent>

						<TabsContent value="specs" className="space-y-4">
							<h2 className="text-2xl font-bold text-gray-800">
								Technical Specifications
							</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								{kit?.technicalSpecs.map((spec, index) => (
									<div
										key={index}
										className="bg-gray-50/50 p-4 rounded-lg hover:bg-gray-100/50 transition-colors"
									>
										<p className="font-semibold text-gray-700">{spec.key}</p>
										<p className="text-gray-600">{spec.value}</p>
									</div>
								))}
							</div>
						</TabsContent>
					</Tabs>
				</Card>
				{/* Technical Details */}
				<Card className="p-8 shadow">
					<h2 className="text-2xl font-bold text-gray-800 mb-6">
						Technical Details
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="group bg-gray-50/50 p-6 rounded-lg hover:bg-gray-100/50 transition-all duration-300 flex items-center justify-between">
							<a
								href={kit?.schematicDiagram}
								download={`${kit?.name}_SCHEMATIC_DIAGRAM.pdf`}
								className="flex items-center space-x-4 cursor-pointer"
							>
								<Download className="h-6 w-6 text-blue-400" />
								<span className="font-medium text-gray-700">
									Schematic Diagram
								</span>
							</a>
							<ChevronRight className="h-5 w-5 text-blue-400 group-hover:translate-x-1 transition-transform" />
						</div>
						<Link
							href="#"
							className="group bg-gray-50/50 p-6 rounded-lg hover:bg-gray-100/50 transition-all duration-300 flex items-center justify-between"
						>
							<div className="flex items-center space-x-4">
								<Book className="h-6 w-6 text-blue-400" />
								<span className="font-medium text-gray-700">
									Project Tutorials
								</span>
							</div>
							<ChevronRight className="h-5 w-5 text-blue-400 group-hover:translate-x-1 transition-transform" />
						</Link>
					</div>
				</Card>

				{/* Related Courses */}
				<Card className="p-8 shadow">
					<h2 className="text-2xl font-bold text-gray-800 mb-6">
						Related Courses
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{[1, 2, 3].map((index) => (
							<Card
								key={index}
								className="overflow-hidden hover:shadow transition-all duration-300"
							>
								<div className="relative h-48">
									<Image
										src={`/samples/course-${index}.jpg`}
										alt={`Course ${index}`}
										fill
										className="object-cover transition-transform duration-300 hover:scale-105"
									/>
								</div>
								<CardContent className="p-6">
									<h3 className="font-semibold text-lg mb-2 text-gray-800">
										Course Title {index}
									</h3>
									<p className="text-gray-600 text-sm mb-4">
										Learn essential concepts and practical applications with
										hands-on projects.
									</p>
									<Link
										href="#"
										className="text-blue-400 hover:underline inline-flex items-center space-x-2 group"
									>
										<span>Learn More</span>
										<ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
									</Link>
								</CardContent>
							</Card>
						))}
					</div>
				</Card>
			</div>
		</div>
	);
};

export default KitDetails;
