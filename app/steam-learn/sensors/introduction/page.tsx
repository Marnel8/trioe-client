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
  Gauge,
  Activity,
  Settings,
  SlidersHorizontal,
} from "lucide-react";

const lesson = {
  title: "Introduction to Sensors",
  sections: [
    {
      id: "basics",
      title: "What are Sensors?",
      content: (
        <div className="space-y-4">
          <p>
            Sensors are devices that detect and respond to changes in the physical
            environment. They convert physical phenomena into electrical signals that
            can be measured and processed.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Sensor Types</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>Active Sensors (require external power)</li>
                  <li>Passive Sensors (self-generating)</li>
                  <li>Digital Sensors (discrete output)</li>
                  <li>Analog Sensors (continuous output)</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Physical Quantities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>Temperature</li>
                  <li>Pressure</li>
                  <li>Light</li>
                  <li>Sound</li>
                  <li>Motion</li>
                  <li>Chemical composition</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: "characteristics",
      title: "Sensor Characteristics",
      content: (
        <div className="space-y-4">
          <p>
            Understanding sensor characteristics is crucial for selecting the right
            sensor for your application and interpreting its measurements correctly.
          </p>
          <Card className="border-blue-200 bg-blue-50/50">
            <CardHeader>
              <CardTitle className="text-lg">Key Characteristics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Accuracy</h4>
                  <p>The closeness of measured value to true value</p>
                  <div className="mt-2 bg-white/50 p-2 rounded">
                    Example: ±0.1°C accuracy in temperature measurement
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Precision</h4>
                  <p>Reproducibility of measurements</p>
                  <div className="mt-2 bg-white/50 p-2 rounded">
                    Example: Standard deviation in repeated measurements
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Resolution</h4>
                  <p>Smallest detectable change in input</p>
                  <div className="mt-2 bg-white/50 p-2 rounded">
                    Example: 0.01g resolution in a digital scale
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Response Time</h4>
                  <p>Time to reach final value after input change</p>
                  <div className="mt-2 bg-white/50 p-2 rounded">
                    Example: 100ms response time for light sensor
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: "conditioning",
      title: "Signal Conditioning",
      content: (
        <div className="space-y-4">
          <p>
            Signal conditioning is the process of converting and modifying sensor
            output to make it suitable for further processing or display.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Common Signal Conditioning Steps</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">1. Amplification</h4>
                    <div className="bg-white/50 p-4 rounded-md mt-2">
                      <pre className="text-sm">
                        {`// Example gain calculation
Output = Input * Gain
Vout = 0.1mV * 1000 = 100mV`}
                      </pre>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold">2. Filtering</h4>
                    <div className="bg-white/50 p-4 rounded-md mt-2">
                      <pre className="text-sm">
                        {`// Low-pass filter
cutoff_frequency = 1 / (2 * π * R * C)
fc = 1 / (2 * π * 10kΩ * 0.1µF) = 160Hz`}
                      </pre>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold">3. Linearization</h4>
                    <div className="bg-white/50 p-4 rounded-md mt-2">
                      <pre className="text-sm">
                        {`// Thermistor linearization
temperature = 1 / (A + B*ln(R) + C*ln(R)³)
where R is resistance, A,B,C are constants`}
                      </pre>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: "calibration",
      title: "Sensor Calibration",
      content: (
        <div className="space-y-4">
          <p>
            Calibration ensures accurate measurements by establishing the relationship
            between sensor output and known reference values.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Calibration Process</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-2 list-decimal list-inside">
                  <li>Zero calibration (offset adjustment)</li>
                  <li>Span calibration (gain adjustment)</li>
                  <li>Linearity verification</li>
                  <li>Documentation of results</li>
                </ol>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Calibration Example</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-white/50 p-4 rounded-md">
                  <pre className="text-sm">
                    {`// Linear calibration equation
measured_value = (raw_value - offset) * scale_factor

// Example calibration
offset = 0.05V    // Zero point
scale_factor = 100  // Units per volt
measured = (2.5V - 0.05V) * 100 = 245 units`}
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
              <Link href="/steam-learn/sensors/temperature">
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
