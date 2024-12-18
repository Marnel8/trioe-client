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
  Cpu,
  Battery,
  Shield,
  Gauge,
} from "lucide-react";

const lesson = {
  title: "Advanced Topics",
  sections: [
    {
      id: "power",
      title: "Power Management",
      content: (
        <div className="space-y-4">
          <p>
            Power management is crucial for battery-operated devices and energy-efficient
            applications. Understanding different power modes and techniques can
            significantly extend battery life.
          </p>
          <Card className="border-blue-200 bg-blue-50/50">
            <CardHeader>
              <CardTitle className="text-lg">Power Saving Techniques</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">1. Sleep Modes</h4>
                <div className="bg-white/50 p-4 rounded-md">
                  <pre className="text-sm overflow-x-auto">
                    {`// Enable sleep mode
void enableSleep() {
    // Set sleep mode to power down
    SMCR |= (1 << SM1);
    
    // Enable sleep
    SMCR |= (1 << SE);
    
    // Enter sleep mode
    asm volatile("sleep");
}

// Wake up on interrupt
ISR(INT0_vect) {
    // Disable sleep
    SMCR &= ~(1 << SE);
}`}
                  </pre>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">2. Power Reduction Techniques</h4>
                <ul className="list-disc list-inside pl-4">
                  <li>Disable unused peripherals</li>
                  <li>Optimize clock frequency</li>
                  <li>Use interrupts instead of polling</li>
                  <li>Implement duty cycling</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: "adc",
      title: "Advanced ADC Usage",
      content: (
        <div className="space-y-4">
          <p>
            Analog-to-Digital Conversion (ADC) is essential for interfacing with analog
            sensors. Advanced ADC techniques can improve accuracy and efficiency.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">ADC Configuration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-white/50 p-4 rounded-md">
                  <pre className="text-sm overflow-x-auto">
                    {`// Initialize ADC with advanced settings
void initADC() {
    // Set reference voltage
    ADMUX = (1<<REFS0);
    
    // Enable ADC and set prescaler
    ADCSRA = (1<<ADEN)|(1<<ADPS2)|(1<<ADPS1)|(1<<ADPS0);
    
    // Free running mode
    ADCSRA |= (1<<ADATE);
    
    // Enable auto-trigger
    ADCSRB = 0x00;
}`}
                  </pre>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Advanced Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>Differential inputs</li>
                  <li>Auto-trigger sources</li>
                  <li>Noise reduction</li>
                  <li>Oversampling</li>
                  <li>DMA transfers</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: "security",
      title: "Security Considerations",
      content: (
        <div className="space-y-4">
          <p>
            Security is crucial in embedded systems, especially for IoT devices.
            Understanding common vulnerabilities and protection mechanisms is essential.
          </p>
          <Card className="border-red-200 bg-red-50/50">
            <CardHeader>
              <CardTitle className="text-lg">Security Implementation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">1. Secure Boot</h4>
                <div className="bg-white/50 p-4 rounded-md">
                  <pre className="text-sm overflow-x-auto">
                    {`// Example bootloader verification
bool verifyFirmware() {
    uint32_t checksum = 0;
    
    // Calculate firmware checksum
    for(uint32_t addr = APP_START; addr < APP_END; addr++) {
        checksum += pgm_read_byte(addr);
    }
    
    // Compare with stored checksum
    return checksum == STORED_CHECKSUM;
}`}
                  </pre>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">2. Security Best Practices</h4>
                <ul className="list-disc list-inside pl-4">
                  <li>Enable fuse bits protection</li>
                  <li>Implement secure communication</li>
                  <li>Use encryption for sensitive data</li>
                  <li>Regular security updates</li>
                  <li>Implement watchdog timer</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: "optimization",
      title: "Performance Optimization",
      content: (
        <div className="space-y-4">
          <p>
            Optimizing microcontroller code for performance and efficiency requires
            understanding both hardware capabilities and software techniques.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Code Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-white/50 p-4 rounded-md">
                  <pre className="text-sm overflow-x-auto">
                    {`// Fast pin manipulation
#define PIN_HIGH(port, pin) port |= (1 << pin)
#define PIN_LOW(port, pin) port &= ~(1 << pin)

// Optimized delay
void customDelay(uint16_t count) {
    asm volatile (
        "1: sbiw %0,1" "\n\t"
        "brne 1b"
        : "=w" (count)
        : "0" (count)
    );
}`}
                  </pre>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Optimization Techniques</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>Use bit manipulation</li>
                  <li>Optimize memory usage</li>
                  <li>Implement efficient algorithms</li>
                  <li>Use inline assembly when needed</li>
                  <li>Profile and benchmark code</li>
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
              <Link href="/steam-learn/microcontroller/quiz">
                Take Quiz
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
