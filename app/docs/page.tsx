import React from "react";
import Installations from "@/components/docs/installations";
import { DocumentationSidebar } from "@/components/DocumentationSidebar";
import { SidebarInset } from "@/components/ui/sidebar";

export default function DocumentationPage() {
  return (
    <div className="flex h-screen">
      <div className="lg:w-64">
        <DocumentationSidebar />
      </div>
      <SidebarInset className="flex-1 w-full rounded-lg">
        <div className="flex h-full">
          <main className="w-full p-6 overflow-y-auto">
            <h1 className="text-4xl font-bold mb-4 text-primary">
              Getting Started with TRIOE
            </h1>
            <p className="mb-6">
              Welcome to TRIOE's comprehensive documentation. This guide will help you understand
              our electronics kits and get started with your learning journey.
            </p>

            {/* Getting Started Section */}
            <section id="getting-started" className="mb-12">
              <div className="space-y-8">
                <div id="introduction">
                  <h3 className="docs-title">Introduction to TRIOE</h3>
                  <p className="mb-4">
                    TRIOE is an innovative electronics learning platform designed to make electronics
                    education accessible and engaging. Our platform combines hardware kits with
                    interactive software to create a comprehensive learning experience.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold mb-2">What You'll Learn</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Basic to advanced electronics concepts</li>
                      <li>Programming microcontrollers and sensors</li>
                      <li>Building real-world electronics projects</li>
                      <li>IoT and smart device development</li>
                    </ul>
                  </div>
                </div>

                <div id="installation">
                  <Installations />
                </div>

                <div id="quick-start">
                  <h3 className="docs-title">Quick Start Guide</h3>
                  <p className="mb-4">
                    Get up and running with your TRIOE kit in minutes. Follow these steps to begin
                    your learning journey.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <ol className="list-decimal list-inside space-y-3">
                      <li>Unbox your TRIOE kit and verify all components</li>
                      <li>Install the required software and drivers</li>
                      <li>Connect your board to your computer</li>
                      <li>Run your first test program</li>
                    </ol>
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
                      The STEAM Kit is designed for students and educators exploring science,
                      technology, engineering, arts, and mathematics through hands-on electronics
                      projects.
                    </p>
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Comprehensive sensor suite for diverse experiments</li>
                      <li>Arduino-compatible microcontroller for easy programming</li>
                      <li>Project-based learning materials with step-by-step guides</li>
                      <li>Interactive learning platform access with progress tracking</li>
                    </ul>
                  </div>
                </div>

                <div id="drm-kit">
                  <h3 className="text-xl font-medium mb-3">DRM Kit</h3>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <p className="mb-4">
                      The Disaster Risk Management Kit focuses on building systems for environmental
                      monitoring and early warning systems, perfect for disaster preparedness and
                      response applications.
                    </p>
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Advanced environmental sensors for accurate monitoring</li>
                      <li>Real-time data collection and analysis capabilities</li>
                      <li>Robust hardware design for field deployment</li>
                      <li>Integration with early warning systems</li>
                    </ul>
                  </div>
                </div>

                <div id="agri-aqua-kit">
                  <h3 className="text-xl font-medium mb-3">AGRI-AQUA Kit</h3>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <p className="mb-4">
                      The AGRI-AQUA Kit is specifically designed for agricultural and aquaculture
                      applications, enabling monitoring and automation of farming systems.
                    </p>
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Specialized sensors for soil and water quality monitoring</li>
                      <li>Automated irrigation and feeding system controls</li>
                      <li>Weather-resistant components for outdoor use</li>
                      <li>Data logging and analysis tools for crop/aquaculture management</li>
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
                      Start your journey with fundamental concepts and basic projects. Perfect for
                      those new to electronics and programming.
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
                  <h3 className="text-xl font-medium mb-3">Intermediate Level</h3>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <p className="mb-4">
                      Build upon your foundation with more complex projects and advanced programming
                      concepts.
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
                      Master complex systems and create sophisticated projects with real-world
                      applications.
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
              <h2 className="text-2xl font-semibold mb-6">Technical Reference</h2>
              <div className="space-y-8">
                <div id="hardware-specs">
                  <h3 className="text-xl font-medium mb-3">Hardware Specifications</h3>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <p className="mb-4">
                      Detailed technical specifications for all TRIOE kit components and modules.
                    </p>
                    <h4 className="font-semibold mb-2">Documentation Includes:</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Component datasheets and specifications</li>
                      <li>Circuit diagrams and schematics</li>
                      <li>Power requirements and ratings</li>
                      <li>Hardware compatibility guides</li>
                    </ul>
                  </div>
                </div>

                <div id="software-dev">
                  <h3 className="text-xl font-medium mb-3">Software Development</h3>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <p className="mb-4">
                      Resources and documentation for software development with TRIOE kits.
                    </p>
                    <h4 className="font-semibold mb-2">Documentation Includes:</h4>
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
                      Common issues and their solutions to help you resolve problems quickly.
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
                  <h3 className="text-xl font-medium mb-3">Community Resources</h3>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <p className="mb-4">
                      Connect with the TRIOE community and access shared resources.
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
      </SidebarInset>
    </div>
  );
}
