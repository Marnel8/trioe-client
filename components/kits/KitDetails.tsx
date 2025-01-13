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
  CheckCircle2,
  ChevronLeft,
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
import { kits, sensors, actuators, displays } from "@/constants";

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
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

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
        <Card className="overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Product Image Section */}
            <div className=" p-8">
              {/* Main Image */}
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-white">
                <Image
                  src={selectedImage}
                  alt={kit?.name || "Kit"}
                  fill
                  className="object-contain p-4 transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Thumbnail Navigation */}
              <div className="relative flex items-center mt-6 px-8">
                <button
                  onClick={() => {
                    const currentIndex = kit?.images.indexOf(selectedImage) || 0;
                    const newIndex = currentIndex > 0 ? currentIndex - 1 : (kit?.images?.length ?? 1) - 1;
                    setSelectedImage(kit?.images[newIndex] || '');
                  }}
                  className="absolute left-0 z-10 p-2 rounded-full text-black shadow-lg transform -translate-x-1/2"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <div className="mx-8 w-full overflow-hidden">
                  <div className="flex gap-3 items-center justify-center">
                    {kit?.images.map((thumb, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(thumb)}
                        className={`relative w-16 h-16 rounded-lg overflow-hidden bg-white border-2 transition-all duration-200 ${
                          selectedImage === thumb ? 'border-black-400 scale-110 shadow-md' : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <Image
                          src={thumb}
                          alt={`${kit.name} thumbnail ${index + 1}`}
                          fill
                          className="object-contain p-1"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    const currentIndex = kit?.images.indexOf(selectedImage) || 0;
                    const newIndex = currentIndex < (kit?.images?.length ?? 0) - 1 ? currentIndex + 1 : 0;
                    setSelectedImage(kit?.images[newIndex] || '');
                  }}
                  className="absolute right-0 z-10 p-2 rounded-full text-black shadow-lg transform translate-x-1/2"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Product Details Section */}
            <div className="p-8 space-y-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h1 className="text-4xl font-extrabold text-gray-900 font-display">
                    {kit?.name}
                  </h1>
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-600 font-medium"
                  >
                    NEW
                  </Badge>
                </div>

                {/* Product Description */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600 font-medium">
                    <Tool className="h-4 w-4" />
                    <span>{kit?.category} Learning Kit</span>
                  </div>
                  <div className="flex items-center space-x-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                    <span className="ml-2 text-sm text-gray-600 font-medium">
                      (50 reviews)
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed font-body">
                    {kit?.description}
                  </p>
                </div>

                {/* Pricing Options */}
                <div className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg flex items-center justify-between">
                    <div>
                      <p className="font-display font-bold text-gray-900">
                        Single Kit Purchase
                      </p>
                      <p className="text-sm text-gray-500 font-medium">One-time purchase</p>
                    </div>
                    <div className="text-right">
                      <p className="font-display font-bold text-3xl text-gray-900">
                        {price}
                      </p>
                    </div>
                  </div>

                  {/* <div className="bg-blue-50 p-6 rounded-lg flex items-center justify-between border-2 border-blue-200">
                    <div>
                      <p className="font-medium text-gray-900">
                        Educational Bundle
                      </p>
                      <p className="text-sm text-gray-500">
                        Perfect for schools and institutions
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-2xl text-gray-900">
                        ${(kit?.price * 0.8).toFixed(2)}
                        <span className="text-sm text-gray-500">/unit</span>
                      </p>
                      <p className="text-sm text-blue-600">
                        Save 20% on bulk orders
                      </p>
                    </div>
                  </div> */}
                </div>

                {/* Quantity Selector */}
                <div className="flex items-center justify-between bg-gray-50 p-6 rounded-lg">
                  <span className="text-lg font-medium text-gray-900">
                    Quantity
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
                    <span className="text-xl font-medium w-12 text-center text-gray-900">
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

                {/* Features */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-display font-bold text-gray-900">
                    What's Included
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700 font-medium">
                        Complete learning kit with all necessary components
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700 font-medium">
                        Detailed documentation and learning materials
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700 font-medium">
                        Access to online support and resources
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="space-y-4">
                  {/* <Button
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-lg font-display font-bold"
                    onClick={() => setIsQuoteModalOpen(true)}
                  >
                    Request Quote
                  </Button> */}
                  <div className="flex items-center justify-between text-sm text-gray-500 font-medium">
                    <div className="flex items-center space-x-2">
                      <Download className="h-4 w-4" />
                      <span>shipping available</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Book className="h-4 w-4" />
                      <span>Technical support included</span>
                    </div>
                  </div>
                </div>
              </div>

              <QuoteRequestModal
                quantity={quantity}
                price={kit?.price || 0}
                kitName={kit?.name || ""}
                isOpen={isQuoteModalOpen}
                onClose={() => setIsQuoteModalOpen(false)}
              />
            </div>
          </div>
        </Card>
        {/* Specifications Cards */}
        <div className="space-y-8">
          {/* Package Inclusions Card */}
          <Card className="p-8 shadow-[0_2px_4px_rgba(0,0,0,0.05)]">
            <h2 className="text-2xl font-display font-bold text-gray-800 mb-4">
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
          <Card className="p-8 shadow-[0_2px_4px_rgba(0,0,0,0.05)]">
            <h2 className="text-3xl font-display font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span>Technical Specifications</span>
              
            </h2>

            {/* Main Specs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {kit?.technicalSpecs.map((spec, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all duration-300"
                >
                  <p className="font-display font-bold text-gray-800 mb-2">{spec.key}</p>
                  <p className="text-gray-600 font-body">{spec.value}</p>
                </div>
              ))}
            </div>

            {/* Features List */}
            <div className="space-y-6">
              <div className="p-4 rounded-lg bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
                <p className="font-display font-bold text-gray-800 mb-3">Key Features</p>
                <ul className="space-y-2 text-gray-600 font-body">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-blue-500" />
                    LX7 microprocessor with single precision FPU, up to 240 MHz
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-blue-500" />
                    Full-speed USB 2.0 OTG, USB Serial/JTAG controller
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-blue-500" />
                    ADC, touch sensor, temperature sensor
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
                <p className="font-display font-bold text-gray-800 mb-3">Bluetooth</p>
                <ul className="space-y-2 text-gray-600 font-body">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-blue-500" />
                    Bluetooth LE: Bluetooth 5, Bluetooth mesh
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-blue-500" />
                    Speed: 125 Kbps, 500 Kbps, 1 Mbps, 2 Mbps
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-blue-500" />
                    Internal co-existence mechanism for Wi-Fi and Bluetooth
                    antenna sharing
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
                <p className="font-display font-bold text-gray-800 mb-3">Power</p>
                <ul className="space-y-2 text-gray-600 font-body">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-blue-500" />
                    Operating voltage/Power supply: 3.0 ~ 3.6 V
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Kit Components Card */}
          <Card className="p-8 shadow-[0_2px_4px_rgba(0,0,0,0.05)]">
            <h2 className="text-3xl font-display font-bold text-gray-800 mb-4">
              Kit Components and Sample codes
            </h2>
            <div className="space-y-6">
              <div className="rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.03)] p-6">
                <h3 className="text-2xl font-display font-bold text-gray-700 mb-4">
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
                            className="bg-white/80 hover:bg-blue-50/50 p-4 rounded-lg transition-all duration-300 flex items-center space-x-4 hover:scale-105"
                          >
                            <div className="relative overflow-hidden rounded-lg">
                              <Image
                                src={component.image}
                                alt={component.name}
                                width={80}
                                height={80}
                                className="object-cover rounded-lg"
                              />
                            </div>
                            <div>
                              <p className="font-display font-bold text-gray-700">
                                {component.name}
                              </p>
                              <p className="text-sm text-gray-600 font-medium">
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
              <div className=" rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.03)] p-6">
                <h3 className="text-2xl font-display font-bold text-gray-700 mb-4">
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
                            className="bg-white/80 hover:bg-green-50/50 p-4 rounded-lg transition-all duration-300 flex items-center space-x-4 hover:scale-105"
                          >
                            <div className="relative overflow-hidden rounded-lg">
                              <Image
                                src={component.image}
                                alt={component.name}
                                width={80}
                                height={80}
                                className="object-cover rounded-lg"
                              />
                            </div>
                            <div>
                              <p className="font-display font-bold text-gray-700">
                                {component.name}
                              </p>
                              <p className="text-sm text-gray-600 font-medium">
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
              <div className="rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.03)] p-6">
                <h3 className="text-2xl font-display font-bold text-gray-700 mb-4">
                  Displays
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {displays.map((display) => (
                    <Link
                      key={display.id}
                      href={`/displays/${display.id}`}
                      className="bg-white/80 hover:bg-purple-50/50 p-4 rounded-lg transition-all duration-300 flex items-center space-x-4 hover:scale-105"
                    >
                      <div className="relative overflow-hidden rounded-lg">
                        <Image
                          src={display.image}
                          alt={display.name}
                          width={80}
                          height={80}
                          className="object-cover rounded-lg"
                        />
                      </div>
                      <div>
                        <p className="font-display font-bold text-gray-700">
                          {display.name}
                        </p>
                        <p className="text-sm text-gray-600 font-medium">
                          {display.category}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Technical Details */}
          <Card className="p-8 shadow-[0_2px_4px_rgba(0,0,0,0.05)]">
            <h2 className="text-3xl font-display font-bold text-gray-800 mb-6">
              Technical Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group bg-gray-50 border border-gray-100 p-6 rounded-lg hover:bg-gray-100/80 transition-all duration-300 flex items-center justify-between">
                <a
                  href={kit?.schematicDiagram}
                  download={`${kit?.name}_SCHEMATIC_DIAGRAM.pdf`}
                  className="flex items-center space-x-4 cursor-pointer"
                >
                  <Download className="h-6 w-6 text-blue-400" />
                  <span className="font-display font-medium text-gray-700">
                    Schematic Diagram
                  </span>
                </a>
                <ChevronRight className="h-5 w-5 text-blue-400 group-hover:translate-x-1 transition-transform" />
              </div>
              <Link
                href="#"
                className="group bg-gray-50 border border-gray-100 p-6 rounded-lg hover:bg-gray-100/80 transition-all duration-300 flex items-center justify-between"
              >
                <div className="flex items-center space-x-4">
                  <Book className="h-6 w-6 text-blue-400" />
                  <span className="font-display font-medium text-gray-700">Dimensions</span>
                </div>
                <ChevronRight className="h-5 w-5 text-blue-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Card>
          {/* Related Courses */}
          <Card className="p-8 shadow-[0_2px_4px_rgba(0,0,0,0.05)]">
            <h2 className="text-3xl font-display font-bold text-gray-800 mb-6">
              Related Courses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {kit?.relatedCourses.map((course, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-[0_4px_8px_rgba(0,0,0,0.05)] transition-all duration-300"
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
                    <h3 className="font-display font-bold text-lg mb-2 text-gray-800">
                      {course.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 font-body">
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
    </div>
  );
};

export default KitDetails;
