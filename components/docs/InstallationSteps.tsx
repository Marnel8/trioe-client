"use client";

import React, { FC } from "react";
import {
	Download,
	Monitor,
	Usb,
	Settings,
	CheckCircle2,
	ChevronRight,
	AlertCircle,
} from "lucide-react";
import Image from "next/image";
import { Progress } from "../ui/progress";

interface StepProps {
	number: number;
	title: string;
	icon: FC;
	isActive: boolean;
	isCompleted: boolean;
}

const Step: FC<StepProps> = ({
	number,
	title,
	icon: Icon,
	isActive,
	isCompleted,
}) => (
	<div
		className={`flex items-center gap-4 p-4 rounded-lg transition-colors ${
			isActive
				? "bg-blue-50 border-l-4 border-blue-500"
				: isCompleted
				? "bg-green-50"
				: "bg-gray-50"
		}`}
	>
		<div
			className={`flex items-center justify-center w-10 h-10 rounded-full ${
				isActive ? "bg-blue-500" : isCompleted ? "bg-green-500" : "bg-gray-300"
			}`}
		>
			<Icon />
		</div>
		<div>
			<div className="text-sm text-gray-500">Step {number}</div>
			<div className="font-medium">{title}</div>
		</div>
		{isCompleted && <CheckCircle2 className="w-5 h-5 text-green-500 ml-auto" />}
	</div>
);

interface InstallationStepContentProps {
	step: number;
	onComplete: () => void;
}

const InstallationStepContent: FC<InstallationStepContentProps> = ({
	step,
	onComplete,
}) => {
	const steps = [
		{
			title: "Download Arduino IDE",
			icon: Download,
			content: (
				<div className="space-y-6">
					<div className="flex justify-between items-center">
						<div className="text-sm text-gray-500">
							<AlertCircle className="inline-block w-4 h-4 mr-1" />
							Make sure to download version 2.0 or later
						</div>
						<button
							onClick={onComplete}
							className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
						>
							Next Step
							<ChevronRight className="inline-block w-4 h-4 ml-1" />
						</button>
					</div>
					<div className="relative aspect-video w-full rounded-lg overflow-hidden">
						<Image
							src="/docs/arduino-download.png"
							alt="Arduino IDE Download Page"
							fill
							className="object-cover"
						/>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						<div className="p-4 bg-white rounded-lg shadow-sm">
							<h5 className="font-medium mb-2">Windows</h5>
							<ol className="list-decimal list-inside space-y-2 text-sm">
								<li>Download .exe installer</li>
								<li>Run the installer</li>
								<li>Follow setup wizard</li>
							</ol>
						</div>
						<div className="p-4 bg-white rounded-lg shadow-sm">
							<h5 className="font-medium mb-2">macOS</h5>
							<ol className="list-decimal list-inside space-y-2 text-sm">
								<li>Download .dmg file</li>
								<li>Open the disk image</li>
								<li>Drag to Applications</li>
							</ol>
						</div>
						<div className="p-4 bg-white rounded-lg shadow-sm">
							<h5 className="font-medium mb-2">Linux</h5>
							<ol className="list-decimal list-inside space-y-2 text-sm">
								<li>Download Linux package</li>
								<li>Extract the archive</li>
								<li>Run install script</li>
							</ol>
						</div>
					</div>
				</div>
			),
		},
		{
			title: "Install USB Driver",
			icon: Usb,
			content: (
				<div className="space-y-6">
					<div className="flex justify-between items-center">
						<div className="text-sm text-gray-500">
							<AlertCircle className="inline-block w-4 h-4 mr-1" />
							Restart your computer after installation
						</div>
						<button
							onClick={onComplete}
							className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
						>
							Next Step
							<ChevronRight className="inline-block w-4 h-4 ml-1" />
						</button>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<h5 className="font-medium mb-4">Download CH340 Driver</h5>
							<div className="p-4 bg-white rounded-lg shadow-sm">
								<div className="flex items-center gap-4 mb-4">
									<div className="p-3 bg-blue-50 rounded-lg">
										<Download className="w-6 h-6 text-blue-500" />
									</div>
									<div>
										<div className="font-medium">CH340 Driver</div>
										<div className="text-sm text-gray-500">
											Latest version: 3.5
										</div>
									</div>
									<button className="ml-auto px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
										Download
									</button>
								</div>
								<div className="text-sm text-gray-500">SHA256: 7a8b...f23d</div>
							</div>
						</div>
						<div>
							<h5 className="font-medium mb-4">Installation Steps</h5>
							<div className="space-y-4">
								<div className="p-4 bg-white rounded-lg shadow-sm">
									<div className="flex items-start gap-4">
										<div className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
											1
										</div>
										<div>
											<div className="font-medium mb-2">Extract the Driver</div>
											<p className="text-sm text-gray-600">
												Extract the downloaded ZIP file to a location you can
												easily access
											</p>
										</div>
									</div>
								</div>
								<div className="p-4 bg-white rounded-lg shadow-sm">
									<div className="flex items-start gap-4">
										<div className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
											2
										</div>
										<div>
											<div className="font-medium mb-2">Run the Installer</div>
											<p className="text-sm text-gray-600">
												Double-click the installer and follow the prompts. You
												may need administrator privileges.
											</p>
										</div>
									</div>
								</div>
								<div className="p-4 bg-white rounded-lg shadow-sm">
									<div className="flex items-start gap-4">
										<div className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
											3
										</div>
										<div>
											<div className="font-medium mb-2">
												Verify Installation
											</div>
											<p className="text-sm text-gray-600">
												Connect your TRIOE board and check Device Manager for
												the COM port
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			),
		},
		{
			title: "Configure IDE",
			icon: Settings,
			content: (
				<div className="space-y-6">
					<div className="flex justify-between items-center">
						<div className="text-sm text-gray-500">
							<AlertCircle className="inline-block w-4 h-4 mr-1" />
							Double-check all settings before proceeding
						</div>
						<button
							onClick={onComplete}
							className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
						>
							Next Step
							<ChevronRight className="inline-block w-4 h-4 ml-1" />
						</button>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<h5 className="font-medium mb-4">Board Configuration</h5>
							<div className="space-y-4">
								<div className="relative aspect-video w-full rounded-lg overflow-hidden">
									<Image
										src="/docs/board-manager.png"
										alt="Arduino Board Manager"
										fill
										className="object-cover"
									/>
								</div>
								<div className="p-4 bg-white rounded-lg shadow-sm">
									<ol className="list-decimal list-inside space-y-3">
										<li className="text-sm">Open Arduino IDE</li>
										<li className="text-sm">
											Go to Tools → Board → Boards Manager
										</li>
										<li className="text-sm">
											Search for "esp32" and install the latest version
										</li>
									</ol>
								</div>
							</div>
						</div>
						<div>
							<h5 className="font-medium mb-4">Board Settings</h5>
							<div className="space-y-4">
								<div className="p-4 bg-white rounded-lg shadow-sm">
									<h6 className="font-medium mb-3">Required Settings</h6>
									<div className="space-y-3">
										<div className="flex justify-between text-sm">
											<span>Board</span>
											<span className="font-mono bg-gray-100 px-2 py-1 rounded">
												ESP32 Dev Module
											</span>
										</div>
										<div className="flex justify-between text-sm">
											<span>Upload Speed</span>
											<span className="font-mono bg-gray-100 px-2 py-1 rounded">
												115200
											</span>
										</div>
										<div className="flex justify-between text-sm">
											<span>CPU Frequency</span>
											<span className="font-mono bg-gray-100 px-2 py-1 rounded">
												240MHz
											</span>
										</div>
										<div className="flex justify-between text-sm">
											<span>Flash Frequency</span>
											<span className="font-mono bg-gray-100 px-2 py-1 rounded">
												80MHz
											</span>
										</div>
										<div className="flex justify-between text-sm">
											<span>Flash Mode</span>
											<span className="font-mono bg-gray-100 px-2 py-1 rounded">
												QIO
											</span>
										</div>
									</div>
								</div>
								<div className="p-4 bg-white rounded-lg shadow-sm">
									<h6 className="font-medium mb-3">Port Selection</h6>
									<p className="text-sm text-gray-600 mb-3">
										Select the correct COM port for your TRIOE board:
									</p>
									<div className="relative aspect-video w-full rounded-lg overflow-hidden">
										<Image
											src="/docs/port-selection.png"
											alt="COM Port Selection"
											fill
											className="object-cover"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			),
		},
		{
			title: "Test Setup",
			icon: Monitor,
			content: (
				<div className="space-y-6">
					<div className="flex justify-between items-center">
						<div className="text-sm text-gray-500">
							<AlertCircle className="inline-block w-4 h-4 mr-1" />
							Save this sketch for future testing
						</div>
						<button
							onClick={onComplete}
							className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
						>
							Complete Setup
							<CheckCircle2 className="inline-block w-4 h-4 ml-1" />
						</button>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<h5 className="font-medium mb-4">Upload Test Sketch</h5>
							<div className="space-y-4">
								<div className="p-4 bg-white rounded-lg shadow-sm">
									<pre className="text-sm bg-gray-50 p-4 rounded-lg overflow-x-auto">
										{`void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000);
  digitalWrite(LED_BUILTIN, LOW);
  delay(1000);
}`}
									</pre>
								</div>
								<div className="p-4 bg-white rounded-lg shadow-sm">
									<ol className="list-decimal list-inside space-y-3 text-sm">
										<li>Open Arduino IDE</li>
										<li>Go to File → Examples → 01.Basics → Blink</li>
										<li>Click the Upload button or press Ctrl+U</li>
										<li>Wait for the upload to complete</li>
										<li>The built-in LED should start blinking</li>
									</ol>
								</div>
							</div>
						</div>
						<div>
							<h5 className="font-medium mb-4">Troubleshooting</h5>
							<div className="space-y-4">
								<div className="p-4 bg-white rounded-lg shadow-sm">
									<h6 className="font-medium mb-3">Common Issues</h6>
									<div className="space-y-4">
										<div className="flex items-start gap-3">
											<AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
											<div>
												<div className="font-medium text-sm">Upload Failed</div>
												<p className="text-sm text-gray-600">
													Check if the correct board and port are selected. Try
													pressing the reset button before upload.
												</p>
											</div>
										</div>
										<div className="flex items-start gap-3">
											<AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
											<div>
												<div className="font-medium text-sm">
													Port Not Found
												</div>
												<p className="text-sm text-gray-600">
													Verify the USB connection and driver installation. Try
													a different USB cable or port.
												</p>
											</div>
										</div>
										<div className="flex items-start gap-3">
											<AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
											<div>
												<div className="font-medium text-sm">
													Compilation Error
												</div>
												<p className="text-sm text-gray-600">
													Make sure you have the latest board package installed
													and all required libraries.
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className="p-4 bg-white rounded-lg shadow-sm">
									<h6 className="font-medium mb-3">Need Help?</h6>
									<p className="text-sm text-gray-600 mb-4">
										If you're still having issues, check out these resources:
									</p>
									<div className="space-y-2">
										<a
											href="#"
											className="block text-sm text-blue-500 hover:underline"
										>
											• Detailed Troubleshooting Guide
										</a>
										<a
											href="#"
											className="block text-sm text-blue-500 hover:underline"
										>
											• Community Forum
										</a>
										<a
											href="#"
											className="block text-sm text-blue-500 hover:underline"
										>
											• Video Tutorials
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			),
		},
	];

	return <div className="space-y-6">{steps[step - 1].content}</div>;
};

export function InstallationSteps() {
	const [currentStep, setCurrentStep] = React.useState(1);
	const totalSteps = 4;

	const steps = [
		{ number: 1, title: "Download Arduino IDE", icon: Download },
		{ number: 2, title: "Install USB Driver", icon: Usb },
		{ number: 3, title: "Configure IDE", icon: Settings },
		{ number: 4, title: "Test Setup", icon: Monitor },
	];

	return (
		<div className="space-y-8">
			<div className="space-y-4">
				<Progress value={(currentStep / totalSteps) * 100} />
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
					{steps.map((step) => (
						<Step
							key={step.number}
							{...step}
							isActive={step.number === currentStep}
							isCompleted={step.number < currentStep}
						/>
					))}
				</div>
			</div>

			<InstallationStepContent
				step={currentStep}
				onComplete={() => {
					if (currentStep == totalSteps) {
						setCurrentStep(1);
					}
					if (currentStep < totalSteps) {
						setCurrentStep(currentStep + 1);
					}
				}}
			/>
		</div>
	);
}
