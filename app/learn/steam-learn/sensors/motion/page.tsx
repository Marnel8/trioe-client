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
  Compass,
  RotateCw,
  Move3d,
  Target,
} from "lucide-react";

const lesson = {
  title: "Motion and Position Sensing",
  sections: [
    {
      id: "accelerometers",
      title: "Accelerometers",
      content: (
        <div className="space-y-4">
          <p>
            Accelerometers measure acceleration forces and can detect motion,
            vibration, and orientation. They are fundamental to many modern devices
            and applications.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Working Principles</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>MEMS technology</li>
                  <li>Capacitive sensing</li>
                  <li>Piezoelectric effect</li>
                  <li>3-axis measurement</li>
                  <li>G-force detection</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Implementation (MPU6050)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-white/50 p-4 rounded-md">
                  <pre className="text-sm">
                    {`#include <Wire.h>
#include <MPU6050.h>

MPU6050 mpu;

void setup() {
  Wire.begin();
  mpu.initialize();
}

void getAcceleration() {
  int16_t ax, ay, az;
  mpu.getAcceleration(&ax, &ay, &az);
  
  // Convert to g force
  float gx = ax / 16384.0;
  float gy = ay / 16384.0;
  float gz = az / 16384.0;
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
      id: "gyroscopes",
      title: "Gyroscopes",
      content: (
        <div className="space-y-4">
          <p>
            Gyroscopes measure angular velocity and help determine orientation and
            rotation. They are often used in combination with accelerometers for
            more accurate motion tracking.
          </p>
          <Card className="border-blue-200 bg-blue-50/50">
            <CardHeader>
              <CardTitle className="text-lg">Gyroscope Integration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Key Features</h4>
                  <ul className="list-disc list-inside">
                    <li>Angular rate measurement</li>
                    <li>Rotation detection</li>
                    <li>Drift compensation</li>
                    <li>Temperature calibration</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Example Code</h4>
                  <div className="bg-white/50 p-4 rounded-md">
                    <pre className="text-sm">
                      {`// Read gyroscope data
void getRotation() {
  int16_t gx, gy, gz;
  mpu.getRotation(&gx, &gy, &gz);
  
  // Convert to degrees per second
  float rotX = gx / 131.0;
  float rotY = gy / 131.0;
  float rotZ = gz / 131.0;
  
  // Integrate for angle
  angle += rotZ * deltaTime;
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
      id: "position",
      title: "Position Sensors",
      content: (
        <div className="space-y-4">
          <p>
            Position sensors determine the location or displacement of an object.
            They come in various forms and use different technologies for different
            applications.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Position Sensing Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Linear Position</h4>
                      <ul className="list-disc list-inside">
                        <li>Potentiometers</li>
                        <li>LVDTs</li>
                        <li>Encoders</li>
                        <li>Hall effect sensors</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Angular Position</h4>
                      <ul className="list-disc list-inside">
                        <li>Rotary encoders</li>
                        <li>Resolvers</li>
                        <li>Magnetic sensors</li>
                        <li>Optical encoders</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-white/50 p-4 rounded-md">
                    <pre className="text-sm">
                      {`// Rotary encoder example
volatile int position = 0;

void setup() {
  pinMode(encoderPinA, INPUT_PULLUP);
  pinMode(encoderPinB, INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(encoderPinA),
                 encoderISR, CHANGE);
}

void encoderISR() {
  int b = digitalRead(encoderPinB);
  if (b > 0) {
    position++;
  } else {
    position--;
  }
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
      id: "detection",
      title: "Motion Detection",
      content: (
        <div className="space-y-4">
          <p>
            Motion detection combines various sensor technologies to create
            comprehensive movement tracking and analysis systems.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Detection Methods</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="font-semibold">1. PIR Sensors</h4>
                  <div className="bg-white/50 p-4 rounded-md">
                    <pre className="text-sm">
                      {`// PIR motion detection
int pirPin = 7;
bool motionDetected = false;

void setup() {
  pinMode(pirPin, INPUT);
}

void checkMotion() {
  motionDetected = digitalRead(pirPin);
  if (motionDetected) {
    triggerAlarm();
  }
}`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Sensor Fusion</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-white/50 p-4 rounded-md">
                  <pre className="text-sm">
                    {`// Combine accelerometer and gyro
void fuseSensorData() {
  // Get raw sensor data
  getAcceleration();
  getRotation();
  
  // Apply complementary filter
  angle = 0.96 * (angle + gyroRate * dt) +
          0.04 * accelAngle;
          
  // Kalman filter can also be used
  // for more accurate fusion
}`}
                  </pre>
                </div>
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
              <Link href="/steam-learn/sensors/optical">
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
