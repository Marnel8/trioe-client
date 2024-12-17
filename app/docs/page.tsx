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
                      <li>Real-time weather monitoring capabilities</li>
                      <li>Automated data logging and analysis tools</li>
                      <li>Integrated alert system for immediate response</li>
                    </ul>
                  </div>
                </div>

                <div id="agri-aqua-kit">
                  <h3 className="text-xl font-medium mb-3">AGRI-AQUA Kit</h3>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <p className="mb-4">
                      The Agriculture and Aquaculture Kit is specialized for smart farming and
                      aquaculture monitoring applications, helping optimize crop and aquatic
                      production.
                    </p>
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Precision soil and water quality sensors</li>
                      <li>Smart irrigation control systems</li>
                      <li>Environmental monitoring for optimal growth</li>
                      <li>Data-driven crop and aquaculture management</li>
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
                      Start your electronics journey with fundamental concepts and basic projects.
                      No prior experience required.
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Understanding basic electronics components</li>
                      <li>Introduction to microcontroller programming</li>
                      <li>Simple sensor reading and LED control</li>
                      <li>Basic circuit building and testing</li>
                    </ul>
                  </div>
                </div>

                <div id="intermediate-level">
                  <h3 className="text-xl font-medium mb-3">Intermediate Level</h3>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <p className="mb-4">
                      Build on your foundation with more complex projects and advanced programming
                      concepts.
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Advanced sensor integration and calibration</li>
                      <li>Data logging and visualization techniques</li>
                      <li>IoT connectivity and cloud integration</li>
                      <li>Custom project development skills</li>
                    </ul>
                  </div>
                </div>

                <div id="advanced-level">
                  <h3 className="text-xl font-medium mb-3">Advanced Level</h3>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <p className="mb-4">
                      Master complex systems and create professional-grade solutions for real-world
                      applications.
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>System design and architecture planning</li>
                      <li>Advanced programming and optimization</li>
                      <li>Real-world application development</li>
                      <li>Performance optimization and debugging</li>
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
                      Detailed technical specifications for the main board and components used in
                      TRIOE kits.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Main Board</h4>
                        <ul className="list-disc list-inside space-y-2">
                          <li>32-bit Architecture</li>
                          <li>160-240MHz Clock Speed</li>
                          <li>WiFi & Bluetooth Support</li>
                          <li>22 GPIO Pins</li>
                          <li>Multiple I/O Interfaces</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Sensors & Components</h4>
                        <ul className="list-disc list-inside space-y-2">
                          <li>Temperature & Humidity Sensors</li>
                          <li>Air Quality Monitors</li>
                          <li>Water Quality Sensors</li>
                          <li>Motion & Position Sensors</li>
                          <li>Actuators & Control Systems</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="software-dev">
                  <h3 className="text-xl font-medium mb-3">Software Development</h3>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <p className="mb-4">
                      Comprehensive guide for developing software applications with TRIOE kits.
                    </p>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-2">Development Tools</h4>
                        <ul className="list-disc list-inside space-y-2">
                          <li>Arduino IDE with TRIOE Libraries</li>
                          <li>Visual Studio Code Integration</li>
                          <li>Custom TRIOE Development Tools</li>
                          <li>Example Projects and Templates</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Programming Languages</h4>
                        <ul className="list-disc list-inside space-y-2">
                          <li>C/C++ for Microcontroller Programming</li>
                          <li>Python for Data Analysis</li>
                          <li>JavaScript for Web Interfaces</li>
                          <li>Block-based Programming for Beginners</li>
                        </ul>
                      </div>
                    </div>
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
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-2">Common Issues</h4>
                        <ul className="list-disc list-inside space-y-2">
                          <li>Board Connection Problems</li>
                          <li>Software Installation Issues</li>
                          <li>Sensor Calibration Errors</li>
                          <li>Programming and Upload Errors</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Getting Help</h4>
                        <ul className="list-disc list-inside space-y-2">
                          <li>Contact Technical Support</li>
                          <li>Submit Bug Reports</li>
                          <li>Request Feature Enhancements</li>
                          <li>Access FAQs and Knowledge Base</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="community">
                  <h3 className="text-xl font-medium mb-3">Community Resources</h3>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <p className="mb-4">
                      Connect with other TRIOE users and access community resources.
                    </p>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-2">Community Platforms</h4>
                        <ul className="list-disc list-inside space-y-2">
                          <li>TRIOE Forums</li>
                          <li>Project Showcase Gallery</li>
                          <li>User Workshops and Webinars</li>
                          <li>Community Code Repository</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Educational Resources</h4>
                        <ul className="list-disc list-inside space-y-2">
                          <li>Video Tutorials</li>
                          <li>Project Ideas and Guides</li>
                          <li>Teaching Materials</li>
                          <li>Community Challenges</li>
                        </ul>
                      </div>
                    </div>
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
