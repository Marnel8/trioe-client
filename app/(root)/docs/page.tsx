"use client";

import { DocumentationSidebar } from "@/components/DocumentationSidebar";
import { SidebarInset } from "@/components/ui/sidebar";
import Monitor from "@/components/icons/Monitor";
import Download from "@/components/icons/Download";
import Clock from "@/components/icons/Clock";
import Cpu from "@/components/icons/Cpu";
import GraduationCap from "@/components/icons/GraduationCap";
import { InstallationSteps } from "@/components/docs/InstallationSteps";
import { QuickStartSteps } from "@/components/docs/QuickStartSteps";

export default function DocumentationPage() {
	return (
		<div className="flex h-screen overflow-hidden scroll-smooth">
			<div className="lg:w-64 flex-shrink-0">
				<DocumentationSidebar />
			</div>
			<div className="flex-1 overflow-hidden">
				<div className="h-full overflow-y-auto">
					<main className="container max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
						<section className="mb-5">
							<div className="prose max-w-none space-y-5">
								<div id="introduction">
									<h2 className="text-2xl font-bold mb-6">Introduction</h2>
									<p className="mb-4">
										Welcome to TRIOE documentation. Here you'll find
										comprehensive guides and documentation to help you start
										working with TRIOE as quickly as possible, as well as
										support if you get stuck.
									</p>
								</div>

								<div id="installation">
									<h2 className="text-2xl font-bold mb-6">
										Installation Guide
									</h2>
									<div className="space-y-6">
										<div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-6">
											<h3 className="text-xl font-medium mb-2">
												Getting Started with TRIOE
											</h3>
											<p className="text-blue-100">
												Follow this step-by-step guide to set up your TRIOE
												development environment. Make sure to complete each step
												before moving to the next one.
											</p>
										</div>

										<div className=" rounded-lg shadow-sm bg-gray-100 p-6">
											<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
												<div className="flex items-start gap-4">
													<div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
														<Monitor className="w-5 h-5 text-blue-500" />
													</div>
													<div>
														<h4 className="font-medium mb-1">
															System Requirements
														</h4>
														<p className="text-sm text-gray-600">
															Windows 10/11, macOS 10.14+, or Linux
														</p>
													</div>
												</div>
												<div className="flex items-start gap-4">
													<div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
														<Download className="w-5 h-5 text-blue-500" />
													</div>
													<div>
														<h4 className="font-medium mb-1">Download Size</h4>
														<p className="text-sm text-gray-600">
															Arduino IDE (~200MB)
														</p>
													</div>
												</div>
												<div className="flex items-start gap-4">
													<div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
														<Clock className="w-5 h-5 text-blue-500" />
													</div>
													<div>
														<h4 className="font-medium mb-1">Setup Time</h4>
														<p className="text-sm text-gray-600">
															~15-20 minutes
														</p>
													</div>
												</div>
											</div>

											<InstallationSteps />
										</div>
									</div>
								</div>

								<div id="quick-start">
									<h2 className="text-2xl font-bold mb-6">Quick Start Guide</h2>
									<div className="space-y-6">
										<div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg p-6">
											<h3 className="text-xl font-medium mb-2">
												Get Started with TRIOE
											</h3>
											<p className="text-green-100">
												Follow this quick guide to get your TRIOE board up and
												running in minutes. We'll walk you through the basic
												setup and your first program.
											</p>
										</div>

										<div className="rounded-lg shadow-sm bg-gray-100 p-6">
											<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
												<div className="flex items-start gap-4">
													<div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
														<Clock className="w-5 h-5 text-green-500" />
													</div>
													<div>
														<h4 className="font-medium mb-1">Time Required</h4>
														<p className="text-sm text-gray-600">
															5-10 minutes
														</p>
													</div>
												</div>
												<div className="flex items-start gap-4">
													<div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
														<Cpu className="w-5 h-5 text-green-500" />
													</div>
													<div>
														<h4 className="font-medium mb-1">Requirements</h4>
														<p className="text-sm text-gray-600">
															TRIOE Board & USB Cable
														</p>
													</div>
												</div>
												<div className="flex items-start gap-4">
													<div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
														<GraduationCap className="w-5 h-5 text-green-500" />
													</div>
													<div>
														<h4 className="font-medium mb-1">Difficulty</h4>
														<p className="text-sm text-gray-600">
															Beginner Friendly
														</p>
													</div>
												</div>
											</div>

											<QuickStartSteps />
										</div>
									</div>
								</div>
							</div>
						</section>

						{/* Our Kits Section */}
						<section id="kits-overview" className="mb-12">
							<h2 className="text-2xl font-semibold mb-6">Our Kits</h2>
							<div className="space-y-8">
								<div id="steam-kit">
									<h3 className="text-xl font-medium mb-3">STEAM Kit</h3>
									<div className="bg-white p-6 rounded-lg shadow-sm">
										<p className="mb-4">
											The STEAM Kit is designed for students and educators
											exploring science, technology, engineering, arts, and
											mathematics through hands-on electronics projects.
										</p>
										<h4 className="font-semibold mb-2">Key Features:</h4>
										<ul className="list-disc list-inside space-y-2">
											<li>
												Comprehensive sensor suite for diverse experiments
											</li>
											<li>
												Arduino-compatible microcontroller for easy programming
											</li>
											<li>
												Project-based learning materials with step-by-step
												guides
											</li>
											<li>
												Interactive learning platform access with progress
												tracking
											</li>
										</ul>
									</div>
								</div>

								<div id="drm-kit">
									<h3 className="text-xl font-medium mb-3">DRM Kit</h3>
									<div className="bg-white p-6 rounded-lg shadow-sm">
										<p className="mb-4">
											The Disaster Risk Management Kit focuses on building
											systems for environmental monitoring and early warning
											systems, perfect for disaster preparedness and response
											applications.
										</p>
										<h4 className="font-semibold mb-2">Key Features:</h4>
										<ul className="list-disc list-inside space-y-2">
											<li>
												Advanced environmental sensors for accurate monitoring
											</li>
											<li>
												Real-time data collection and analysis capabilities
											</li>
											<li>Robust hardware design for field deployment</li>
											<li>Integration with early warning systems</li>
										</ul>
									</div>
								</div>

								<div id="agri-aqua-kit">
									<h3 className="text-xl font-medium mb-3">AGRI-AQUA Kit</h3>
									<div className="bg-white p-6 rounded-lg shadow-sm">
										<p className="mb-4">
											The AGRI-AQUA Kit is specifically designed for
											agricultural and aquaculture applications, enabling
											monitoring and automation of farming systems.
										</p>
										<h4 className="font-semibold mb-2">Key Features:</h4>
										<ul className="list-disc list-inside space-y-2">
											<li>
												Specialized sensors for soil and water quality
												monitoring
											</li>
											<li>Automated irrigation and feeding system controls</li>
											<li>Weather-resistant components for outdoor use</li>
											<li>
												Data logging and analysis tools for crop/aquaculture
												management
											</li>
										</ul>
									</div>
								</div>
							</div>
						</section>

						{/* Learning Path Section */}
						<section id="learning-path" className="mb-12">
							<h2 className="text-2xl font-semibold mb-6">Learning Path</h2>
							<div className="space-y-8">
								<div id="beginner-level">
									<h3 className="text-xl font-medium mb-3">Beginner Level</h3>
									<div className="bg-white p-6 rounded-lg shadow-sm">
										<p className="mb-4">
											Start your journey with fundamental concepts and basic
											projects. Perfect for those new to electronics and
											programming.
										</p>
										<h4 className="font-semibold mb-2">Topics Covered:</h4>
										<ul className="list-disc list-inside space-y-2">
											<li>Basic electronics components and circuits</li>
											<li>Introduction to Arduino programming</li>
											<li>Simple sensor interfacing</li>
											<li>LED projects and basic outputs</li>
										</ul>
									</div>
								</div>

								<div id="intermediate-level">
									<h3 className="text-xl font-medium mb-3">
										Intermediate Level
									</h3>
									<div className="bg-white p-6 rounded-lg shadow-sm">
										<p className="mb-4">
											Build upon your foundation with more complex projects and
											advanced programming concepts.
										</p>
										<h4 className="font-semibold mb-2">Topics Covered:</h4>
										<ul className="list-disc list-inside space-y-2">
											<li>Advanced sensor integration</li>
											<li>Data logging and analysis</li>
											<li>Communication protocols (I2C, SPI)</li>
											<li>Basic IoT applications</li>
										</ul>
									</div>
								</div>

								<div id="advanced-level">
									<h3 className="text-xl font-medium mb-3">Advanced Level</h3>
									<div className="bg-white p-6 rounded-lg shadow-sm">
										<p className="mb-4">
											Master complex systems and create sophisticated projects
											with real-world applications.
										</p>
										<h4 className="font-semibold mb-2">Topics Covered:</h4>
										<ul className="list-disc list-inside space-y-2">
											<li>Complex system integration</li>
											<li>Advanced IoT and cloud connectivity</li>
											<li>Machine learning applications</li>
											<li>Custom PCB design and prototyping</li>
										</ul>
									</div>
								</div>
							</div>
						</section>

						{/* Technical Reference Section */}
						<section id="technical-reference" className="mb-12">
							<h2 className="text-2xl font-semibold mb-6">
								Technical Reference
							</h2>
							<div className="space-y-8">
								<div id="hardware-specs">
									<h3 className="text-xl font-medium mb-3">
										Hardware Specifications
									</h3>
									<div className="bg-white p-6 rounded-lg shadow-sm">
										<p className="mb-4">
											Detailed technical specifications for all TRIOE kit
											components and modules.
										</p>
										<h4 className="font-semibold mb-2">
											Documentation Includes:
										</h4>
										<ul className="list-disc list-inside space-y-2">
											<li>Component datasheets and specifications</li>
											<li>Circuit diagrams and schematics</li>
											<li>Power requirements and ratings</li>
											<li>Hardware compatibility guides</li>
										</ul>
									</div>
								</div>

								<div id="software-dev">
									<h3 className="text-xl font-medium mb-3">
										Software Development
									</h3>
									<div className="bg-white p-6 rounded-lg shadow-sm">
										<p className="mb-4">
											Resources and documentation for software development with
											TRIOE kits.
										</p>
										<h4 className="font-semibold mb-2">
											Documentation Includes:
										</h4>
										<ul className="list-disc list-inside space-y-2">
											<li>API documentation and libraries</li>
											<li>Code examples and templates</li>
											<li>Programming guidelines</li>
											<li>Software troubleshooting guides</li>
										</ul>
									</div>
								</div>
							</div>
						</section>

						{/* Support Section */}
						<section id="support" className="mb-12">
							<h2 className="text-2xl font-semibold mb-6">Support</h2>
							<div className="space-y-8">
								<div id="troubleshooting">
									<h3 className="text-xl font-medium mb-3">Troubleshooting</h3>
									<div className="bg-white p-6 rounded-lg shadow-sm">
										<p className="mb-4">
											Common issues and their solutions to help you resolve
											problems quickly.
										</p>
										<h4 className="font-semibold mb-2">Resources:</h4>
										<ul className="list-disc list-inside space-y-2">
											<li>Common problems and solutions</li>
											<li>Hardware troubleshooting guides</li>
											<li>Software debugging tips</li>
											<li>FAQs and known issues</li>
										</ul>
									</div>
								</div>

								<div id="community-resources">
									<h3 className="text-xl font-medium mb-3">
										Community Resources
									</h3>
									<div className="bg-white p-6 rounded-lg shadow-sm">
										<p className="mb-4">
											Connect with the TRIOE community and access shared
											resources.
										</p>
										<h4 className="font-semibold mb-2">Available Resources:</h4>
										<ul className="list-disc list-inside space-y-2">
											<li>Community forums and discussions</li>
											<li>User-contributed projects and tutorials</li>
											<li>Educational resources and workshops</li>
											<li>Support channels and contact information</li>
										</ul>
									</div>
								</div>
							</div>
						</section>
					</main>
				</div>
			</div>
		</div>
	);
}
