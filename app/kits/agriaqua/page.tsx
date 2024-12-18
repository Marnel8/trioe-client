import React from "react";
import Image from "next/image";
import Link from "next/link";

const AgriAquaKit = () => {
  const thumbnails = [
    "/samples/KITS_new (1).png",
    "/samples/KITS_new (1).png",
    "/samples/KITS_new (1).png",
    "/samples/KITS_new (1).png",
  ];

  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-8">
          {/* Product Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Product Image Section */}
            <div className="space-y-4">
              <div className="relative w-full h-[500px] rounded-lg overflow-hidden bg-cyan-50 flex items-center justify-center">
                <Image
                  src="/samples/KITS_new (1).png"
                  alt="AGRI-AQUA Kit"
                  width={500}
                  height={500}
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
                      alt={`AGRI-AQUA Kit thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details Section */}
            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-gray-900">AGRI-AQUA Kit</h1>
              <p className="text-gray-600">
                Advanced monitoring and automation kit designed specifically for agricultural
                and aquaculture applications, featuring specialized sensors and control systems.
              </p>
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold">₱ 3,999.00</span>
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
                  <tr className="text-left text-base">
                    <th className="pb-2">Quantity</th>
                    <th className="pb-2">Name</th>
                    <th className="pb-2">Specifications</th>
                  </tr>
                </thead>
                <tbody className="text-base">
                  <tr>
                    <td className="py-1">1</td>
                    <td>Main Control Board</td>
                    <td>ESP32-based</td>
                  </tr>
                  <tr>
                    <td className="py-1">2</td>
                    <td>Temperature Sensors</td>
                    <td>DS18B20 Waterproof</td>
                  </tr>
                  <tr>
                    <td className="py-1">1</td>
                    <td>pH Sensor</td>
                    <td>Analog pH Meter Kit</td>
                  </tr>
                  <tr>
                    <td className="py-1">1</td>
                    <td>TDS Sensor</td>
                    <td>Water Quality Monitor</td>
                  </tr>
                  <tr>
                    <td className="py-1">1</td>
                    <td>Soil Moisture Sensor</td>
                    <td>Capacitive</td>
                  </tr>
                  <tr>
                    <td className="py-1">1</td>
                    <td>Water Pump</td>
                    <td>12V DC Submersible</td>
                  </tr>
                  <tr>
                    <td className="py-1">1</td>
                    <td>Relay Module</td>
                    <td>4-Channel, 5V</td>
                  </tr>
                  <tr>
                    <td className="py-1">1</td>
                    <td>LCD Display</td>
                    <td>16x2 I2C</td>
                  </tr>
                  <tr>
                    <td className="py-1">1</td>
                    <td>Power Supply</td>
                    <td>12V 2A Adapter</td>
                  </tr>
                  <tr>
                    <td className="py-1">1</td>
                    <td>Tubing Set</td>
                    <td>Food-grade PVC</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Technical Specifications */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold mb-4">
                Main Board Technical Specifications
              </h2>
              <div className="grid grid-cols-2 gap-4 text-base">
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
        </div>
      </div>
    </>
  );
};

export default AgriAquaKit;