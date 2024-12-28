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
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { actuators } from "@/constants";
import { CopyButton } from "@/components/kits/sensors/copy-button";

export default async function ActuatorPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const actuatorId = (await params).id;
	const actuator = actuators.find((a) => a.id === actuatorId);

	if (!actuator) {
		notFound();
	}

	return (
		<div className="container mx-auto px-8 py-12 space-y-12">
			<div className="flex flex-col lg:flex-row gap-12">
				{/* Left Column */}
				<div className="lg:w-2/5 space-y-8">
					<div className="space-y-4">
						<h1 className="text-4xl font-bold text-primary">{actuator.name}</h1>
						<div className="flex flex-wrap gap-2">
							{actuator.tags.map((tag) => (
								<Badge
									key={tag}
									variant="secondary"
									className="px-3 py-1 text-sm"
								>
									{tag}
								</Badge>
							))}
						</div>
					</div>

					<img
						src={actuator.image}
						alt={actuator.name}
						className="w-full rounded-lg border object-cover h-64"
					/>

					{/* <div className="flex items-center gap-4">
						<Button className="flex items-center gap-2 w-full justify-center bg-primary hover:bg-primary/90 text-primary-foreground">
							<ArrowDownToLine className="h-5 w-5" />
							Download Files ({actuator.downloads})
						</Button>
						<Button
							variant="outline"
							className="flex items-center gap-2 w-full justify-center hover:bg-secondary/10"
						>
							<Heart className="h-5 w-5" />
							Like ({actuator.likes})
						</Button>
					</div> */}
				</div>

				{/* Right Column */}
				<div className="lg:w-3/5 space-y-8">
					<Card className="border-l-4 border-l-primary">
						<CardHeader>
							<CardTitle className="text-2xl flex items-center gap-2">
								<Info className="h-6 w-6 text-primary" />
								Details
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground text-lg leading-relaxed">
								{actuator.detail}
							</p>
							<div className="mt-6 text-sm text-muted-foreground">
								Uploaded on {actuator.uploadedDate}
							</div>
						</CardContent>
					</Card>

					<Card className="border-l-4 border-l-primary">
						<CardHeader>
							<CardTitle className="text-2xl flex items-center gap-2">
								<List className="h-6 w-6 text-primary" />
								Pin Description
							</CardTitle>
						</CardHeader>
						<CardContent>
							<Table>
								<TableHeader>
									<TableRow>
										<TableHead className="w-1/3">Pin</TableHead>
										<TableHead>Description</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{actuator.pinDescription.map((pin) => (
										<TableRow key={pin.pin}>
											<TableCell className="font-medium">{pin.pin}</TableCell>
											<TableCell>{pin.description}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</CardContent>
					</Card>
				</div>
			</div>

			{/* Full Width Sections */}
			<Card className="border-t-4 border-t-primary">
				<CardHeader className="">
					<CardTitle className="text-2xl flex items-center gap-2">
						<FileText className="h-6 w-6 text-primary" />
						Sample Code
					</CardTitle>
				</CardHeader>
				<CardContent className="relative">
					<CopyButton text={actuator.sampleCode.code} />
					<div className="mt-2">
						<Code lang={actuator.sampleCode.language} className="text-sm">
							{actuator.sampleCode.code}
						</Code>
					</div>
				</CardContent>
			</Card>

			<Card className="border-t-4 border-t-primary">
				<CardHeader>
					<CardTitle className="text-2xl flex items-center gap-2">
						<Zap className="h-6 w-6 text-primary" />
						Crash Course
					</CardTitle>
				</CardHeader>
				<CardContent className="space-y-8">
					<div>
						<h3 className="text-xl font-semibold mb-3 text-primary">
							Objective
						</h3>
						<p className="text-muted-foreground text-lg">
							{actuator.crashCourse.objective}
						</p>
					</div>

					<div>
						<h3 className="text-xl font-semibold mb-3 text-primary">
							Materials Required
						</h3>
						<ul className="list-disc pl-6 text-muted-foreground space-y-2">
							{actuator.crashCourse.materialsRequired.map((material) => (
								<li key={material} className="text-lg">
									{material}
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="text-xl font-semibold mb-3 text-primary">Steps</h3>
						<div className="space-y-6">
							{actuator.crashCourse.steps.map((step, index) => (
								<div key={index} className="bg-secondary/10 p-6 rounded-lg">
									<h4 className="text-lg font-medium mb-3 flex items-center gap-2 text-primary">
										<ChevronRight className="h-5 w-5" />
										{step.title}
									</h4>
									<ul className="list-disc pl-6 text-muted-foreground space-y-2">
										{step.content.map((item, i) => (
											<li key={i} className="text-base">
												{item}
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>
				</CardContent>
			</Card>

			<Card className="border-t-4 border-t-primary">
				<CardHeader>
					<CardTitle className="text-2xl flex items-center gap-2">
						<Play className="h-6 w-6 text-primary" />
						Video Tutorial
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="aspect-video rounded-lg bg-secondary/10">
						{/* Add video player component here */}
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
