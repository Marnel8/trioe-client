import { notFound } from "next/navigation";
import { Code } from "bright";
import {
	ArrowDownToLine,
	Heart,
	Play,
	ChevronRight,
	Info,
	List,
	Zap,
	FileText,
	Download,
	Youtube,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
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
import { actuators, sensors } from "@/constants";
import { CopyButton } from "@/components/kits/sensors/copy-button";

const SensorDetails = ({ sensorId }: { sensorId: string }) => {
	const sensor = sensors.find((s) => s.id === sensorId);

	if (!sensor) {
		notFound();
	}
	return (
		<div className="min-h-screen bg-gray-50">
			<div className="container mx-auto px-4 py-12 max-w-[1200px]">
				{/* Header Section */}
				<div className="flex flex-col lg:flex-row gap-12 mb-16">
					{/* Left Column - Image and Title */}
					<div className="lg:w-1/2">
						<Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
							<div className="relative">
								<img
									src={sensor.image}
									alt={sensor.name}
									className="w-full object-cover h-[300px]"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
								<div className="absolute bottom-4 left-4 right-4">
									<h1 className="text-3xl font-bold text-white mb-2">
										{sensor.name}
									</h1>
									<div className="flex flex-wrap gap-2">
										{sensor.tags.map((tag) => (
											<Badge
												key={tag}
												variant="secondary"
												className="bg-blue-100 text-blue-800 backdrop-blur-sm font-medium px-3 py-1"
											>
												{tag}
											</Badge>
										))}
									</div>
								</div>
							</div>
							<CardContent className="p-6">
								<p className="text-gray-700 leading-relaxed">{sensor.detail}</p>
							</CardContent>
						</Card>
					</div>

					{/* Right Column - Stats and Details */}
					<div className="lg:w-1/2 space-y-8">
						<Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
							<CardContent className="p-6">
								<h2 className="text-2xl font-bold text-gray-900 mb-6">
									Quick Actions
								</h2>
								<div className="grid grid-cols-2 gap-4 mb-6">
									<Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg font-medium transition-all duration-300 hover:scale-105">
										<Download className="mr-2 h-5 w-5" />
										Download Files
									</Button>
									<Button
										variant="outline"
										className="w-full py-6 text-lg font-medium border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-105"
									>
										<Heart className="mr-2 h-5 w-5" />
										Like
									</Button>
								</div>
								<div className="grid grid-cols-2 gap-8 text-center">
									<div className="bg-blue-50 p-4 rounded-xl">
										<p className="text-4xl font-bold text-blue-600 mb-1">
											{sensor.downloads}
										</p>
										<p className="text-sm font-medium text-blue-800">
											Downloads
										</p>
									</div>
									<div className="bg-blue-50 p-4 rounded-xl">
										<p className="text-4xl font-bold text-blue-600 mb-1">
											{sensor.likes}
										</p>
										<p className="text-sm font-medium text-blue-800">Likes</p>
									</div>
								</div>
							</CardContent>
						</Card>

						<Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
							<CardContent className="p-6">
								<h3 className="text-2xl font-bold text-gray-900 mb-4">
									Specifications
								</h3>
								<Table>
									<TableBody>
										{sensor.pinDescription.map((pin, index) => (
											<TableRow
												key={pin.pin}
												className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
											>
												<TableCell className="font-semibold text-gray-900 w-1/3 py-4 pl-6">
													{pin.pin}
												</TableCell>
												<TableCell className="text-gray-700 py-4 pr-6">
													{pin.description}
												</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</CardContent>
						</Card>
					</div>
				</div>

				{/* Sample Code Section */}
				<Card className="mb-16 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
					<CardContent className="p-6">
						<h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
							<FileText className="h-6 w-6 text-blue-600" />
							Sample Code
						</h2>
						<div className="relative bg-gray-100 p-4 rounded-lg">
							<CopyButton text={sensor.sampleCode.code} />
							<div className="overflow-x-auto">
								<Code
									lang={sensor.sampleCode.language}
									theme="github-light"
									className="text-sm"
								>
									{sensor.sampleCode.code}
								</Code>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Crash Course Section */}
				<Card className="mb-16 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
					<CardContent className="p-6">
						<h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
							<Zap className="h-6 w-6 text-blue-600" />
							Crash Course: Using the {sensor.name}
						</h2>
						<div className="space-y-8">
							<div>
								<h3 className="text-xl font-bold text-gray-900 mb-3">
									Objective
								</h3>
								<p className="text-gray-700">{sensor.crashCourse.objective}</p>
							</div>
							<div>
								<h3 className="text-xl font-bold text-gray-900 mb-3">
									Materials Required
								</h3>
								<ul className="list-disc pl-6 text-gray-700 space-y-2">
									{sensor.crashCourse.materialsRequired.map((material) => (
										<li key={material}>{material}</li>
									))}
								</ul>
							</div>
							<div>
								<h3 className="text-xl font-bold text-gray-900 mb-3">Steps</h3>
								<div className="space-y-4">
									{sensor.crashCourse.steps.map((step, index) => (
										<div
											key={index}
											className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-300"
										>
											<h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-3">
												<span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
													{index + 1}
												</span>
												{step.title}
											</h4>
											<ul className="list-disc pl-6 text-gray-700 space-y-2">
												{step.content.map((item, i) => (
													<li key={i}>{item}</li>
												))}
											</ul>
										</div>
									))}
								</div>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Video Tutorial Section */}
				<Card className="mb-16 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
					<CardContent className="p-6">
						<h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
							<Youtube className="h-6 w-6 text-blue-600" />
							Video Tutorial: Using the {sensor.name}
						</h2>
						<div className="aspect-video rounded-lg overflow-hidden bg-gray-100 shadow-inner">
							{/* Add video player component here */}
							<div className="w-full h-full flex items-center justify-center text-gray-500">
								Video Player Placeholder
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Common Applications Section */}
				<Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
					<CardContent className="p-6">
						<h2 className="text-2xl font-bold text-gray-900 mb-6">
							Common Applications
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							{/* Add application cards here */}
							{[1, 2, 3].map((index) => (
								<div
									key={index}
									className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 border border-gray-200"
								>
									<h3 className="text-lg font-bold text-gray-900 mb-2">
										Application {index}
									</h3>
									<p className="text-gray-700">
										Description of application {index}.
									</p>
								</div>
							))}
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default SensorDetails;
