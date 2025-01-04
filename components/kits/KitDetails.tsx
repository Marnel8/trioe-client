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
import { kits, sensors, actuators } from "@/constants";

// Define types for our data structures
type Inclusion = {
	id: string;
	name: string;
	quantity: number;
	specifications: string;
	type: "sensor" | "actuator" | "other";
};

type Kit = {
	id: number;
	name: string;
	description: string;
	thumbnail: string;
	difficulty: string;
	quantity: number;
	price: number;
	learnRoute: string;
	route: string;
	images: string[];
	inclusions: Inclusion[];
	technicalSpecs: { key: string; value: string }[];
	schematicDiagram: string;
	category: string;
	relatedCourses: {
		name: string;
		route: string;
		image: string;
		description: string;
	}[];
};

type Component = {
	id: string;
	name: string;
	image: string;
	category: string;
};

const KitDetails = ({ kitId }: { kitId: string }) => {
	const kit = kits.find((kit) => kit.id === parseInt(kitId)) as Kit | undefined;

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
		console.log(`Quote requested for ${quantity} ${kit?.name}(s)`);
		// Here you would typically handle the quote request logic
	};

	const getComponentDetails = (inclusion: Inclusion): Component | undefined => {
		if (inclusion.type === "sensor") {
			return sensors.find((s) => s.id === inclusion.id);
		} else if (inclusion.type === "actuator") {
			return actuators.find((a) => a.id === inclusion.id);
		}
		return undefined;
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
									alt={kit?.name || "Kit"}
									fill
									className="object-contain transition-transform duration-300 hover:scale-105"
								/>
							</div>
							<div className="grid-cols-5 gap-4 hidden ">
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
											alt={`${kit.name} thumbnail ${index + 1}`}
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
								<QuoteRequestModal
									quantity={quantity}
									price={kit?.price || 0}
									kitName={kit?.name || ""}
								/>
							</div>
						</div>
					</div>
				</Card>
				{/* Specifications Cards */}
				<div className="space-y-8">
					{/* Package Inclusions Card */}
					<Card className="p-8 shadow">
						<h2 className="text-2xl font-bold text-gray-800 mb-4">
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
											<TableCell className="font-medium">{item.name}</TableCell>
											<TableCell>{item.specifications}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</div>
					</Card>

					{/* Technical Specifications Card */}
					<Card className="p-8 shadow">
						<h2 className="text-2xl font-bold text-gray-800 mb-4">
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
							{/* CPU and Memory Specs */}
							<div className="bg-gray-50/50 p-4 rounded-lg hover:bg-gray-100/50 transition-colors">
								<p className="font-semibold text-gray-700">
									CPU and On-Chip Memory
								</p>
								<ul className="text-gray-600 space-y-2 mt-2">
									<li>
										• ESP32-S3 series of SoCs embedded, Xtensa® dual-core 32-bit
										LX7 microprocessor (with single precision FPU), up to 240
										MHz
									</li>
									<li>• 384 KB ROM</li>
									<li>• 512 KB SRAM</li>
									<li>• 16 KB SRAM in RTC</li>
									<li>• Up to 16 MB PSRAM</li>
								</ul>
							</div>

							<div className="bg-gray-50/50 p-4 rounded-lg hover:bg-gray-100/50 transition-colors">
								<p className="font-semibold text-gray-700">Wi-Fi</p>
								<ul className="text-gray-600 space-y-2 mt-2">
									<li>• 802.11b/g/n</li>
									<li>• Bit rate: 802.11n up to 150 Mbps</li>
									<li>• A-MPDU and A-MSDU aggregation</li>
									<li>• 0.4 µs guard interval support</li>
									<li>• Center frequency range: 2412 ~ 2484 MHz</li>
								</ul>
							</div>

							{/* Bluetooth Specs */}
							<div className="bg-gray-50/50 p-4 rounded-lg hover:bg-gray-100/50 transition-colors">
								<p className="font-semibold text-gray-700">Bluetooth</p>
								<ul className="text-gray-600 space-y-2 mt-2">
									<li>• Bluetooth LE: Bluetooth 5, Bluetooth mesh</li>
									<li>• Speed: 125 Kbps, 500 Kbps, 1 Mbps, 2 Mbps</li>
									<li>• Advertising extensions</li>
									<li>• Multiple advertisement sets</li>
									<li>• Channel selection algorithm #2</li>
									<li>
										• Internal co-existence mechanism for Wi-Fi and Bluetooth
										antenna sharing
									</li>
								</ul>
							</div>

							{/* Peripherals */}
							<div className="bg-gray-50/50 p-4 rounded-lg hover:bg-gray-100/50 transition-colors">
								<p className="font-semibold text-gray-700">Peripherals</p>
								<ul className="text-gray-600 space-y-2 mt-2">
									<li>• 36 GPIOs (4 strapping GPIOs)</li>
									<li>
										• SPI, LCD interface, Camera interface, UART, I2C, I2S
									</li>
									<li>• Remote control, pulse counter, LED PWM</li>
									<li>• Full-speed USB 2.0 OTG, USB Serial/JTAG controller</li>
									<li>• MCPWM, SDIO host controller, GDMA</li>
									<li>• TWAI® controller (ISO 11898-1 compatible)</li>
									<li>• ADC, touch sensor, temperature sensor</li>
									<li>• Timers and watchdogs</li>
								</ul>
							</div>

							{/* Operating Conditions */}
							<div className="bg-gray-50/50 p-4 rounded-lg hover:bg-gray-100/50 transition-colors">
								<p className="font-semibold text-gray-700">
									Operating Conditions
								</p>
								<ul className="text-gray-600 space-y-2 mt-2">
									<li>• Operating voltage/Power supply: 3.0 ~ 3.6 V</li>
									<li>• Operating ambient temperature:</li>
									<li>&nbsp;&nbsp;– 65 °C version: –40 ~ 65 °C</li>
									<li>&nbsp;&nbsp;– 85 °C version: –40 ~ 85 °C</li>
									<li>&nbsp;&nbsp;– 105 °C version: –40 ~ 105 °C</li>
								</ul>
							</div>

							{/* Integrated Components */}
							<div className="bg-gray-50/50 p-4 rounded-lg hover:bg-gray-100/50 transition-colors">
								<p className="font-semibold text-gray-700">
									Integrated Components
								</p>
								<ul className="text-gray-600 space-y-2 mt-2">
									<li>• 40 MHz crystal oscillator</li>
									<li>• Up to 16 MB Quad SPI flash</li>
									<li>• Antenna Options:</li>
									<li>&nbsp;&nbsp;– ESP32-S3-WROOM-1: On-board PCB antenna</li>
									<li>
										&nbsp;&nbsp;– ESP32-S3-WROOM-1U: External antenna via
										connector
									</li>
								</ul>
							</div>
						</div>
					</Card>

					{/* Kit Components Card */}
					<Card className="p-8 shadow">
						<h2 className="text-2xl font-bold text-gray-800 mb-4">Tutorials</h2>
						<div className="space-y-6">
							<div>
								<h3 className="text-xl font-semibold text-gray-700 mb-4">
									Sensors
								</h3>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									{kit?.inclusions
										.filter((item) => item.type === "sensor")
										.map((item) => {
											const component = getComponentDetails(item);
											if (component) {
												return (
													<Link
														key={component.id}
														href={`/sensors/${component.id}`}
														className="bg-gray-50/50 p-4 rounded-lg hover:bg-gray-100/50 transition-colors flex items-center space-x-4"
													>
														<div>
															<p className="font-semibold text-gray-700">
																{component.name}
															</p>
															<p className="text-sm text-gray-600">
																{component.category}
															</p>
														</div>
													</Link>
												);
											}
											return null;
										})}
								</div>
							</div>
							<div>
								<h3 className="text-xl font-semibold text-gray-700 mb-4">
									Actuators
								</h3>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									{kit?.inclusions
										.filter((item) => item.type === "actuator")
										.map((item) => {
											const component = getComponentDetails(item);
											if (component) {
												return (
													<Link
														key={component.id}
														href={`/actuators/${component.id}`}
														className="bg-gray-50/50 p-4 rounded-lg hover:bg-gray-100/50 transition-colors flex items-center space-x-4"
													>
														<div>
															<p className="font-semibold text-gray-700">
																{component.name}
															</p>
															<p className="text-sm text-gray-600">
																{component.category}
															</p>
														</div>
													</Link>
												);
											}
											return null;
										})}
								</div>
							</div>
							<div>
								<h3 className="text-xl font-semibold text-gray-700 mb-4">
									Displays
								</h3>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<Link
										href="/displays/ssd1306"
										className="bg-gray-50/50 p-4 rounded-lg hover:bg-gray-100/50 transition-colors flex items-center space-x-4"
									>
										<div>
											<p className="font-semibold text-gray-700">
												0.96" SSD1306 OLED Display
											</p>
											<p className="text-sm text-gray-600">
												128x64 I2C OLED Display
											</p>
										</div>
									</Link>
									<Link
										href="/displays/led"
										className="bg-gray-50/50 p-4 rounded-lg hover:bg-gray-100/50 transition-colors flex items-center space-x-4"
									>
										<div>
											<p className="font-semibold text-gray-700">LED</p>
											<p className="text-sm text-gray-600">
												Light emitting diode
											</p>
										</div>
									</Link>
								</div>
							</div>
						</div>
					</Card>
				</div>
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
								<span className="font-medium text-gray-700">Dimensions</span>
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
						{kit?.relatedCourses.map((course, index) => (
							<Card
								key={index}
								className="overflow-hidden hover:shadow transition-all duration-300"
							>
								<div className="relative h-48">
									<Image
										src={course.image}
										alt={course.name}
										fill
										className="object-cover transition-transform duration-300 hover:scale-105"
									/>
								</div>
								<CardContent className="p-6">
									<h3 className="font-semibold text-lg mb-2 text-gray-800">
										{course.name}
									</h3>
									<p className="text-gray-600 text-sm mb-4">
										{course.description}
									</p>
									<Link
										href={course.route}
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
