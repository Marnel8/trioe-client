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
  Waves,
  Volume2,
  Activity,
  LineChart,
} from "lucide-react";

const lesson = {
  title: "Sound and Vibration Sensing",
  sections: [
    {
      id: "microphones",
      title: "Microphones",
      content: (
        <div className="space-y-4">
          <p>
            Microphones convert sound waves into electrical signals. Different types
            of microphones use various principles to achieve this conversion.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Microphone Types</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>Dynamic microphones</li>
                  <li>Condenser microphones</li>
                  <li>MEMS microphones</li>
                  <li>Piezoelectric microphones</li>
                  <li>Electret microphones</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Sound Detection</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-white/50 p-4 rounded-md">
                  <pre className="text-sm">
                    {`// Sound level detection
const int micPin = A0;
const int sampleWindow = 50;
unsigned int sample;

float getSoundLevel() {
  unsigned long startMillis = millis();
  unsigned int signalMax = 0;
  unsigned int signalMin = 1024;

  while (millis() - startMillis < sampleWindow) {
    sample = analogRead(micPin);
    if (sample < 1024) {
      if (sample > signalMax) {
        signalMax = sample;
      }
      if (sample < signalMin) {
        signalMin = sample;
      }
    }
  }
  
  return signalMax - signalMin;
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
      id: "vibration",
      title: "Vibration Sensors",
      content: (
        <div className="space-y-4">
          <p>
            Vibration sensors detect mechanical motion and convert it into
            electrical signals. They are crucial for monitoring machine health
            and structural integrity.
          </p>
          <Card className="border-blue-200 bg-blue-50/50">
            <CardHeader>
              <CardTitle className="text-lg">Vibration Measurement</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Sensor Types</h4>
                  <ul className="list-disc list-inside">
                    <li>Piezoelectric accelerometers</li>
                    <li>MEMS accelerometers</li>
                    <li>Velocity sensors</li>
                    <li>Displacement sensors</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Implementation</h4>
                  <div className="bg-white/50 p-4 rounded-md">
                    <pre className="text-sm">
                      {`// ADXL345 vibration sensor
#include <Wire.h>
#include <Adafruit_ADXL345_U.h>

Adafruit_ADXL345_Unified accel = 
  Adafruit_ADXL345_Unified(12345);

void getVibration() {
  sensors_event_t event;
  accel.getEvent(&event);
  
  float magnitude = sqrt(
    pow(event.acceleration.x, 2) +
    pow(event.acceleration.y, 2) +
    pow(event.acceleration.z, 2)
  );
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
      id: "measurement",
      title: "Acoustic Measurement",
      content: (
        <div className="space-y-4">
          <p>
            Acoustic measurement involves analyzing sound waves to gather
            information about their properties and the environment they travel
            through.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Sound Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Measurements</h4>
                      <ul className="list-disc list-inside">
                        <li>Sound pressure level</li>
                        <li>Frequency spectrum</li>
                        <li>Reverberation time</li>
                        <li>Echo detection</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Applications</h4>
                      <ul className="list-disc list-inside">
                        <li>Room acoustics</li>
                        <li>Noise monitoring</li>
                        <li>Speech recognition</li>
                        <li>Musical analysis</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-white/50 p-4 rounded-md">
                    <pre className="text-sm">
                      {`// FFT analysis
#include "arduinoFFT.h"

arduinoFFT FFT = arduinoFFT();

const uint16_t samples = 128;
double vReal[samples];
double vImag[samples];

void performFFT() {
  // Sample audio
  for (int i = 0; i < samples; i++) {
    vReal[i] = analogRead(micPin);
    vImag[i] = 0;
    delayMicroseconds(sampling_period_us);
  }
  
  // Perform FFT
  FFT.Windowing(vReal, samples, FFT_WIN_TYP_HAMMING);
  FFT.Compute(vReal, vImag, samples, FFT_FORWARD);
  FFT.ComplexToMagnitude(vReal, vImag, samples);
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
      id: "analysis",
      title: "Noise Analysis",
      content: (
        <div className="space-y-4">
          <p>
            Noise analysis is crucial for environmental monitoring, machine
            diagnostics, and acoustic design. It involves measuring and
            characterizing unwanted sound.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Analysis Methods</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="font-semibold">1. Time Domain Analysis</h4>
                  <div className="bg-white/50 p-4 rounded-md">
                    <pre className="text-sm">
                      {`// RMS noise calculation
float calculateRMS(float* samples, int n) {
  float sum = 0;
  for (int i = 0; i < n; i++) {
    sum += samples[i] * samples[i];
  }
  return sqrt(sum / n);
}

// Peak detection
float findPeaks(float* samples, int n) {
  float peak = 0;
  for (int i = 1; i < n-1; i++) {
    if (samples[i] > samples[i-1] && 
        samples[i] > samples[i+1] &&
        samples[i] > peak) {
      peak = samples[i];
    }
  }
  return peak;
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
                  <li>Industrial noise monitoring</li>
                  <li>Environmental assessment</li>
                  <li>Machine condition monitoring</li>
                  <li>Acoustic emission testing</li>
                  <li>Building acoustics</li>
                  <li>Vehicle noise testing</li>
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
              <Link href="/steam-learn/sensors/advanced">
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
