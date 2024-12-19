import React from "react";
import Image from "next/image";
import Link from "next/link";

const SteamKit = () => {
  const thumbnails = [
    "/samples/steamkit-1.jpg",
    "/samples/steamkit-2.jpg",
    "/samples/steamkit-3.jpg",
    "/samples/steamkit-4.jpg",
  ];

  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-8">
          {/* Product Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Product Image Section */}
            <div className="space-y-4">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-cyan-50">
                <Image
                  src="/samples/steamkit-main.jpg"
                  alt="STEAM Kit"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {thumbnails.map((thumb, index) => (
                  <div
                    key={index}
                    className="relative aspect-square rounded-lg overflow-hidden bg-cyan-50"
                  >
                    <Image
                      src={thumb}
                      alt={`STEAM Kit thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details Section */}
            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-gray-900">STEAM Kit</h1>
              <p className="text-gray-600">
                A comprehensive learning tools & kit designed for advanced
                innovative expertise required for DIY projects where users are
                working with various frequencies of technology and exploring
                diverse wavelengths of innovation.
              </p>
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold">₱ 2,500.00</span>
                <div className="flex items-center space-x-2">
                  <button className="px-4 py-2 border rounded-md">-</button>
                  <span>1</span>
                  <button className="px-4 py-2 border rounded-md">+</button>
                </div>
              </div>
              <button className="w-full py-3 px-6 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors">
                Buy Now
              </button>
            </div>
          </div>

          {/* Package Inclusions and Specifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Package Inclusions */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Package Inclusions</h2>
              <table className="w-full">
                <thead>
                  <tr className="text-left text-sm">
                    <th className="pb-2">Quantity</th>
                    <th className="pb-2">Name</th>
                    <th className="pb-2">Specifications</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr>
                    <td className="py-1">1</td>
                    <td>Trioe - Main Board</td>
                    <td>Microcontroller board</td>
                  </tr>
                  <tr>
                    <td className="py-1">5</td>
                    <td>Trioe - General Purpose Strip</td>
                    <td>Custom PCB</td>
                  </tr>
                  <tr>
                    <td className="py-1">1</td>
                    <td>0.96 SSD1306 OLED Display</td>
                    <td>Generic, 96X64</td>
                  </tr>
                  <tr>
                    <td className="py-1">1</td>
                    <td>Ultrasonic Sensor</td>
                    <td>HC-SR04</td>
                  </tr>
                  <tr>
                    <td className="py-1">1</td>
                    <td>KY-016 RGB LED</td>
                    <td>Through Hole, 5V RGB</td>
                  </tr>
                  <tr>
                    <td className="py-1">1</td>
                    <td>KY-016 RGB LED</td>
                    <td>Through Hole, 5V RGB</td>
                  </tr>
                  <tr>
                    <td className="py-1">1</td>
                    <td>LED Assorted</td>
                    <td>5mm Red Green Blue</td>
                  </tr>
                  <tr>
                    <td className="py-1">10</td>
                    <td>2-pin Male/Female Headers</td>
                    <td>Generic</td>
                  </tr>
                  <tr>
                    <td className="py-1">2</td>
                    <td>10k Potentiometer</td>
                    <td>Generic</td>
                  </tr>
                  <tr>
                    <td className="py-1">1</td>
                    <td>Soldering Iron with stand and lead</td>
                    <td>60W - temp adjustable</td>
                  </tr>
                  <tr>
                    <td className="py-1">2</td>
                    <td>1x20 dupont cables</td>
                    <td>20cm male to female</td>
                  </tr>
                  <tr>
                    <td className="py-1">6</td>
                    <td>1x40 headers</td>
                    <td>2.54mm male and female</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Technical Specifications */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold mb-4">
                Main Board Technical Specifications
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold">Core</p>
                  <p>2</p>
                </div>
                <div>
                  <p className="font-semibold">Architecture</p>
                  <p>32-bit</p>
                </div>
                <div>
                  <p className="font-semibold">Clock</p>
                  <p>Tensilica Xtensa LX106 160-240MHz</p>
                </div>
                <div>
                  <p className="font-semibold">WiFi</p>
                  <p>IEEE802.11 b/g/n</p>
                </div>
                <div>
                  <p className="font-semibold">Bluetooth</p>
                  <p>Yes - Classic & BLE</p>
                </div>
                <div>
                  <p className="font-semibold">RAM</p>
                  <p>32KB</p>
                </div>
                <div>
                  <p className="font-semibold">Flash</p>
                  <p>External (2GB - 16GB)</p>
                </div>
                <div>
                  <p className="font-semibold">GPIO</p>
                  <p>22</p>
                </div>
                <div>
                  <p className="font-semibold">DAC</p>
                  <p>2</p>
                </div>
                <div>
                  <p className="font-semibold">ADC</p>
                  <p>18</p>
                </div>
                <div>
                  <p className="font-semibold">Interfaces</p>
                  <p>SPI+I2C+UART+I2S+CAN</p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Details */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Technical Details</h2>
            <div className="space-y-2">
              <Link href="#" className="text-blue-600 hover:underline block">
                • Schematic Diagram
              </Link>
              <Link href="#" className="text-blue-600 hover:underline block">
                • Project Tutorials
              </Link>
            </div>
          </div>

          {/* Related Courses */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Related Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="/samples/course-1.jpg"
                    alt="Basic IoT Course"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">
                    Basic IoT Course
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Learn the fundamentals of IoT development with hands-on
                    projects using the STEAM Kit.
                  </p>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Learn More →
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="/samples/course-2.jpg"
                    alt="OLED Display Programming"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">
                    OLED Display Programming
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Master OLED display integration and create interactive
                    visual interfaces.
                  </p>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Learn More →
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="/samples/course-3.jpg"
                    alt="Sensor Integration"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">
                    Sensor Integration
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Explore various sensors and learn how to integrate them into
                    your IoT projects.
                  </p>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Tutorials */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Tutorials</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="/samples/tutorial-1.jpg"
                    alt="Getting Started"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">
                    Getting Started
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Step-by-step guide to set up your STEAM Kit and start your
                    first project.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      Duration: 30 mins
                    </span>
                    <Link href="#" className="text-blue-600 hover:underline">
                      Start Tutorial →
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="/samples/tutorial-2.jpg"
                    alt="LED Projects"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">LED Projects</h3>
                  <p className="text-gray-600 mb-4">
                    Create amazing light patterns and displays using RGB LEDs.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      Duration: 45 mins
                    </span>
                    <Link href="#" className="text-blue-600 hover:underline">
                      Start Tutorial →
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="/samples/tutorial-3.jpg"
                    alt="Sensor Basics"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Sensor Basics</h3>
                  <p className="text-gray-600 mb-4">
                    Learn to read and process data from various sensors in your
                    kit.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      Duration: 60 mins
                    </span>
                    <Link href="#" className="text-blue-600 hover:underline">
                      Start Tutorial →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Module Samples */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Module Samples</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="/samples/module-1.jpg"
                    alt="Distance Sensor Module"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">
                    Distance Sensor Module
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Accurate distance measurement using ultrasonic technology.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                      Beginner Friendly
                    </span>
                    <Link href="#" className="text-blue-600 hover:underline">
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="/samples/module-2.jpg"
                    alt="OLED Display Module"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">
                    OLED Display Module
                  </h3>
                  <p className="text-gray-600 mb-4">
                    High-contrast display for visual feedback and user
                    interface.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                      Intermediate
                    </span>
                    <Link href="#" className="text-blue-600 hover:underline">
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="/samples/module-3.jpg"
                    alt="RGB LED Array"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">RGB LED Array</h3>
                  <p className="text-gray-600 mb-4">
                    Create colorful light displays and patterns with
                    programmable LEDs.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      Popular
                    </span>
                    <Link href="#" className="text-blue-600 hover:underline">
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-100 mt-12 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <Image
                src="/images/LOGO_WITH_TEXT.png"
                alt="RIOE Logo"
                width={150}
                height={50}
              />
              <p className="text-sm text-gray-600 mt-2">
                Thinkering Resources for Internet of Everything
              </p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-blue-600 hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-blue-600 hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-blue-600 hover:underline"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} RIOE. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default SteamKit;
