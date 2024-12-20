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
  Timer,
  Zap,
  AlertTriangle,
  Clock,
} from "lucide-react";

const lesson = {
  title: "Timers and Interrupts",
  sections: [
    {
      id: "timer-config",
      title: "Timer Configurations",
      content: (
        <div className="space-y-4">
          <p>
            Timers are essential components in microcontrollers that can measure time
            intervals, generate signals, and trigger events at precise moments.
          </p>
          <Card className="border-blue-200 bg-blue-50/50">
            <CardHeader>
              <CardTitle className="text-lg">Timer Basics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">1. Timer Modes</h4>
                <ul className="list-disc list-inside pl-4">
                  <li>Normal Mode (Overflow)</li>
                  <li>CTC (Clear Timer on Compare)</li>
                  <li>PWM Mode</li>
                  <li>Fast PWM Mode</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">2. Timer Configuration Example</h4>
                <div className="bg-white/50 p-4 rounded-md">
                  <pre className="text-sm overflow-x-auto">
                    {`// Configure Timer1 for CTC mode
TCCR1A = 0;  // Set entire TCCR1A register to 0
TCCR1B = 0;  // Same for TCCR1B

// Set compare match register
OCR1A = 15624;  // = 16MHz/1024/1Hz - 1

// Turn on CTC mode
TCCR1B |= (1 << WGM12);

// Set prescaler to 1024
TCCR1B |= (1 << CS12) | (1 << CS10);

// Enable timer compare interrupt
TIMSK1 |= (1 << OCIE1A);`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: "interrupt-types",
      title: "Interrupt Types",
      content: (
        <div className="space-y-4">
          <p>
            Interrupts allow the microcontroller to respond to events immediately,
            regardless of what the main program is doing. Different types of
            interrupts serve different purposes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Hardware Interrupts</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>External Pin Interrupts</li>
                  <li>Timer Interrupts</li>
                  <li>ADC Conversion Complete</li>
                  <li>Serial Communication</li>
                  <li>Watchdog Timer</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Software Interrupts</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>System Calls</li>
                  <li>Debug Interrupts</li>
                  <li>Software Timer Events</li>
                  <li>Task Scheduling</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: "isr",
      title: "Interrupt Service Routines",
      content: (
        <div className="space-y-4">
          <p>
            Interrupt Service Routines (ISRs) are special functions that handle
            interrupts. They need to be fast and efficient to maintain system
            responsiveness.
          </p>
          <Card className="border-green-200 bg-green-50/50">
            <CardHeader>
              <CardTitle className="text-lg">ISR Implementation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">1. Basic ISR Structure</h4>
                <div className="bg-white/50 p-4 rounded-md">
                  <pre className="text-sm overflow-x-auto">
                    {`// Timer1 Compare ISR
ISR(TIMER1_COMPA_vect) {
    // Toggle LED
    PORTB ^= (1 << LED_PIN);
}

// External Interrupt
ISR(INT0_vect) {
    // Handle button press
    buttonPressed = true;
}`}
                  </pre>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">2. ISR Best Practices</h4>
                <ul className="list-disc list-inside pl-4">
                  <li>Keep ISRs short and fast</li>
                  <li>Use volatile for shared variables</li>
                  <li>Avoid blocking operations</li>
                  <li>Handle critical sections properly</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: "realtime",
      title: "Real-time Applications",
      content: (
        <div className="space-y-4">
          <p>
            Real-time applications require precise timing and immediate response to
            events. Timers and interrupts are crucial for implementing such systems.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Example Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-white/50 p-4 rounded-md">
                  <pre className="text-sm overflow-x-auto">
                    {`// Real-time clock example
volatile uint8_t seconds = 0;
volatile uint8_t minutes = 0;
volatile uint8_t hours = 0;

ISR(TIMER1_COMPA_vect) {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
            if (hours >= 24) {
                hours = 0;
            }
        }
    }
}`}
                  </pre>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Common Use Cases</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>Data Sampling Systems</li>
                  <li>Motor Control</li>
                  <li>Communication Protocols</li>
                  <li>Sensor Monitoring</li>
                  <li>Event Scheduling</li>
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
            <Link href="/steam-learn/microcontroller">
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
              <Link href="/steam-learn/microcontroller/communication">
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
