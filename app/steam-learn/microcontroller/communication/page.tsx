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
  Network,
  Wifi,
  Cable,
  Share2,
} from "lucide-react";

const lesson = {
  title: "Communication Protocols",
  sections: [
    {
      id: "uart",
      title: "UART Communication",
      content: (
        <div className="space-y-4">
          <p>
            Universal Asynchronous Receiver/Transmitter (UART) is a simple yet powerful
            serial communication protocol widely used in embedded systems.
          </p>
          <Card className="border-blue-200 bg-blue-50/50">
            <CardHeader>
              <CardTitle className="text-lg">UART Basics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">1. UART Configuration</h4>
                <div className="bg-white/50 p-4 rounded-md">
                  <pre className="text-sm overflow-x-auto">
                    {`// Initialize UART
void initUART(uint32_t baudRate) {
    // Calculate baud rate register value
    uint16_t ubrr = F_CPU/16/baudRate - 1;
    
    // Set baud rate
    UBRR0H = (uint8_t)(ubrr>>8);
    UBRR0L = (uint8_t)ubrr;
    
    // Enable receiver and transmitter
    UCSR0B = (1<<RXEN0)|(1<<TXEN0);
    
    // Set frame format: 8data, 1stop bit
    UCSR0C = (1<<UCSZ01)|(1<<UCSZ00);
}`}
                  </pre>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">2. Sending/Receiving Data</h4>
                <div className="bg-white/50 p-4 rounded-md">
                  <pre className="text-sm overflow-x-auto">
                    {`// Send a byte
void UARTsendByte(uint8_t data) {
    // Wait for empty transmit buffer
    while (!(UCSR0A & (1<<UDRE0)));
    UDR0 = data;
}

// Receive a byte
uint8_t UARTreceiveByte() {
    // Wait for data
    while (!(UCSR0A & (1<<RXC0)));
    return UDR0;
}`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: "i2c",
      title: "I2C Protocol",
      content: (
        <div className="space-y-4">
          <p>
            I2C (Inter-Integrated Circuit) is a synchronous, multi-master, multi-slave,
            packet switched, single-ended, serial communication protocol.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">I2C Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>Two-wire interface (SDA and SCL)</li>
                  <li>Multiple slaves (7-bit addressing)</li>
                  <li>Multi-master support</li>
                  <li>Built-in collision detection</li>
                  <li>100kHz to 400kHz speeds</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Implementation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-white/50 p-4 rounded-md">
                  <pre className="text-sm overflow-x-auto">
                    {`// Initialize I2C
Wire.begin();

// Write to slave device
Wire.beginTransmission(SLAVE_ADDR);
Wire.write(data);
Wire.endTransmission();

// Read from slave device
Wire.requestFrom(SLAVE_ADDR, bytes);
while(Wire.available()) {
    byte data = Wire.read();
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
      id: "spi",
      title: "SPI Communication",
      content: (
        <div className="space-y-4">
          <p>
            Serial Peripheral Interface (SPI) is a synchronous serial communication
            interface used for short distance communication, primarily in embedded systems.
          </p>
          <Card className="border-green-200 bg-green-50/50">
            <CardHeader>
              <CardTitle className="text-lg">SPI Implementation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">1. SPI Configuration</h4>
                <div className="bg-white/50 p-4 rounded-md">
                  <pre className="text-sm overflow-x-auto">
                    {`// Initialize SPI
void initSPI() {
    // Set SS, MOSI and SCK as output
    DDRB |= (1<<SS)|(1<<MOSI)|(1<<SCK);
    
    // Enable SPI, set as master
    SPCR = (1<<SPE)|(1<<MSTR);
    
    // Set clock rate
    SPCR |= (1<<SPR0);
}`}
                  </pre>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">2. Data Transfer</h4>
                <div className="bg-white/50 p-4 rounded-md">
                  <pre className="text-sm overflow-x-auto">
                    {`// Transfer a byte
uint8_t SPItransfer(uint8_t data) {
    // Start transmission
    SPDR = data;
    
    // Wait for transmission complete
    while(!(SPSR & (1<<SPIF)));
    
    // Return received data
    return SPDR;
}`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: "protocols",
      title: "Protocol Selection",
      content: (
        <div className="space-y-4">
          <p>
            Choosing the right communication protocol depends on various factors
            including speed requirements, distance, number of devices, and complexity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">UART</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>Simple point-to-point</li>
                  <li>No clock line needed</li>
                  <li>Lower speed</li>
                  <li>Asynchronous</li>
                  <li>Best for: Simple device communication</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">I2C</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>Multi-device support</li>
                  <li>Only 2 wires needed</li>
                  <li>Medium speed</li>
                  <li>Built-in addressing</li>
                  <li>Best for: Multiple sensor networks</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">SPI</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>Highest speed</li>
                  <li>Full duplex</li>
                  <li>Simple hardware</li>
                  <li>No addressing needed</li>
                  <li>Best for: High-speed data transfer</li>
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
              <Link href="/steam-learn/microcontroller/advanced">
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
