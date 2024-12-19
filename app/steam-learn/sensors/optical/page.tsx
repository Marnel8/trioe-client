"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Eye,
  Sun,
  Palette,
  Ruler,
} from "lucide-react";

const lesson = {
  title: "Light and Optical Sensing",
  sections: [
    {
      id: "photodiodes",
      title: "Photodiodes",
      content: (
        <div className="space-y-4">
          <p>
            Photodiodes are semiconductor devices that convert light into electrical
            current. They are fundamental components in many optical sensing
            applications.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Operating Principles</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>Photovoltaic effect</li>
                  <li>PN junction operation</li>
                  <li>Spectral response</li>
                  <li>Response time</li>
                  <li>Dark current</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Basic Circuit</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-white/50 p-4 rounded-md">
                  <pre className="text-sm">
                    {`// Photodiode light measurement
const int photoPin = A0;
int lightLevel;

void setup() {
  pinMode(photoPin, INPUT);
}

int measureLight() {
  lightLevel = analogRead(photoPin);
  // Convert to lux
  float voltage = lightLevel * (5.0 / 1023.0);
  float lux = voltage * 100.0;
  return lux;
}`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: "image-sensors",
      title: "Image Sensors",
      content: (
        <div className="space-y-4">
          <p>
            Image sensors convert optical images into electronic signals. They are
            the core component of digital cameras and many vision-based sensors.
          </p>
          <Card className="border-blue-200 bg-blue-50/50">
            <CardHeader>
              <CardTitle className="text-lg">Sensor Technologies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Types</h4>
                  <ul className="list-disc list-inside">
                    <li>CCD sensors</li>
                    <li>CMOS sensors</li>
                    <li>Linear array sensors</li>
                    <li>Area array sensors</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Example Code (OV7670)</h4>
                  <div className="bg-white/50 p-4 rounded-md">
                    <pre className="text-sm">
                      {`// Camera initialization
void initCamera() {
  Wire.begin();
  
  // Reset all registers
  wrSensorReg8_8(0x12, 0x80);
  delay(100);
  
  // Set resolution
  wrSensorReg8_8(0x0C, 0x00);
  wrSensorReg8_8(0x0D, 0x00);
  
  // Set color format
  wrSensorReg8_8(0x11, 0x80);
}`}
                    </pre>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: "color",
      title: "Color Detection",
      content: (
        <div className="space-y-4">
          <p>
            Color detection sensors use filtered photodiodes or specialized ICs to
            measure different wavelengths of light and determine colors.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Color Sensing Implementation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Components</h4>
                      <ul className="list-disc list-inside">
                        <li>RGB photodiodes</li>
                        <li>Color filters</li>
                        <li>White LED illumination</li>
                        <li>Signal processing</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Applications</h4>
                      <ul className="list-disc list-inside">
                        <li>Color sorting</li>
                        <li>Print quality control</li>
                        <li>Material identification</li>
                        <li>LED calibration</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-white/50 p-4 rounded-md">
                    <pre className="text-sm">
                      {`// TCS34725 color sensor
#include <Wire.h>
#include <Adafruit_TCS34725.h>

Adafruit_TCS34725 tcs = 
  Adafruit_TCS34725(TCS34725_INTEGRATIONTIME_50MS,
                    TCS34725_GAIN_4X);

void getRGBColor() {
  uint16_t r, g, b, c;
  tcs.getRawData(&r, &g, &b, &c);
  
  // Convert to RGB values
  uint32_t sum = c;
  float rf = r / sum * 255;
  float gf = g / sum * 255;
  float bf = b / sum * 255;
}`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: "measurement",
      title: "Optical Measurement",
      content: (
        <div className="space-y-4">
          <p>
            Optical measurement techniques use light properties for precise
            measurements of distance, thickness, or other physical properties.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Measurement Methods</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="font-semibold">1. Time of Flight</h4>
                  <div className="bg-white/50 p-4 rounded-md">
                    <pre className="text-sm">
                      {`// VL53L0X ToF sensor
#include <VL53L0X.h>

VL53L0X sensor;

void setup() {
  Wire.begin();
  sensor.init();
  sensor.setTimeout(500);
  
  // Start continuous back-to-back mode
  sensor.startContinuous();
}

int getDistance() {
  return sensor.readRangeContinuousMillimeters();
}`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>Distance measurement</li>
                  <li>Object detection</li>
                  <li>Surface inspection</li>
                  <li>Thickness measurement</li>
                  <li>3D scanning</li>
                  <li>Machine vision</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
  ],
};

export default function LessonPage() {
  const [currentSection, setCurrentSection] = React.useState(0);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    setProgress(((currentSection + 1) / lesson.sections.length) * 100);
  }, [currentSection]);

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/steam-learn/sensors">
              <ArrowLeft className="h-6 w-6" />
            </Link>
          </Button>
          <div className="flex-1">
            <h1 className="text-3xl font-bold">{lesson.title}</h1>
            <div className="flex items-center gap-4 mt-2">
              <Progress value={progress} className="flex-1" />
              <span className="text-sm text-muted-foreground">
                {Math.round(progress)}% Complete
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mb-8">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-green-500" />
                <CardTitle>{lesson.sections[currentSection].title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              {lesson.sections[currentSection].content}
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={() => setCurrentSection(currentSection - 1)}
            disabled={currentSection === 0}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
          <div className="flex items-center gap-2">
            {lesson.sections.map((_, index) => (
              <Button
                key={index}
                variant={currentSection === index ? "default" : "outline"}
                size="icon"
                className="w-8 h-8"
                onClick={() => setCurrentSection(index)}
              >
                {index + 1}
              </Button>
            ))}
          </div>
          {currentSection === lesson.sections.length - 1 ? (
            <Button asChild>
              <Link href="/steam-learn/sensors/acoustic">
                Next Lesson
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          ) : (
            <Button
              onClick={() => setCurrentSection(currentSection + 1)}
            >
              Next
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
