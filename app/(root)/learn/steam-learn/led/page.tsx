"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const lessons = [
  {
    title: "LED Basics",
    content: [
      "Understanding LED operation",
      "Current limiting resistors",
      "Forward voltage",
      "Basic connections",
    ],
    code: `
// Basic LED setup
const int ledPin = 13;

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  digitalWrite(ledPin, HIGH);  // Turn LED on
  delay(1000);
  digitalWrite(ledPin, LOW);   // Turn LED off
  delay(1000);
}
    `,
  },
  {
    title: "Digital Control",
    content: [
      "ON/OFF control",
      "Blinking patterns",
      "Multiple LED control",
      "LED sequences",
    ],
    code: `
// Multiple LED control
const int numLeds = 4;
const int ledPins[] = {10, 11, 12, 13};

void setup() {
  for(int i = 0; i < numLeds; i++) {
    pinMode(ledPins[i], OUTPUT);
  }
}

void runningLight() {
  for(int i = 0; i < numLeds; i++) {
    digitalWrite(ledPins[i], HIGH);
    delay(200);
    digitalWrite(ledPins[i], LOW);
  }
}

void blinkAll(int times) {
  for(int t = 0; t < times; t++) {
    for(int i = 0; i < numLeds; i++) {
      digitalWrite(ledPins[i], HIGH);
    }
    delay(500);
    for(int i = 0; i < numLeds; i++) {
      digitalWrite(ledPins[i], LOW);
    }
    delay(500);
  }
}
    `,
  },
  {
    title: "PWM Dimming",
    content: [
      "PWM basics",
      "Brightness control",
      "Fading effects",
      "Smooth transitions",
    ],
    code: `
// LED fading with PWM
const int ledPin = 9;  // Must be a PWM pin

void setup() {
  pinMode(ledPin, OUTPUT);
}

void fadeInOut() {
  // Fade in
  for(int brightness = 0; brightness <= 255; brightness++) {
    analogWrite(ledPin, brightness);
    delay(5);
  }
  
  // Fade out
  for(int brightness = 255; brightness >= 0; brightness--) {
    analogWrite(ledPin, brightness);
    delay(5);
  }
}

void pulseEffect(int speed) {
  // Sine wave breathing effect
  for(int i = 0; i < 360; i++) {
    float val = (sin(radians(i)) + 1) * 127.5;
    analogWrite(ledPin, val);
    delay(speed);
  }
}
    `,
  },
  {
    title: "RGB LED Control",
    content: [
      "RGB LED connections",
      "Color mixing",
      "Color transitions",
      "Rainbow effects",
    ],
    code: `
const int redPin = 9;
const int greenPin = 10;
const int bluePin = 11;

void setup() {
  pinMode(redPin, OUTPUT);
  pinMode(greenPin, OUTPUT);
  pinMode(bluePin, OUTPUT);
}

void setColor(int red, int green, int blue) {
  analogWrite(redPin, red);
  analogWrite(greenPin, green);
  analogWrite(bluePin, blue);
}

void rainbowEffect() {
  // Red to Yellow
  for(int i = 0; i <= 255; i++) {
    setColor(255, i, 0);
    delay(5);
  }
  
  // Yellow to Green
  for(int i = 255; i >= 0; i--) {
    setColor(i, 255, 0);
    delay(5);
  }
  
  // Green to Cyan
  for(int i = 0; i <= 255; i++) {
    setColor(0, 255, i);
    delay(5);
  }
  
  // Cyan to Blue
  for(int i = 255; i >= 0; i--) {
    setColor(0, i, 255);
    delay(5);
  }
}
    `,
  },
  {
    title: "Light Patterns",
    content: [
      "Creating patterns",
      "Morse code",
      "Knight Rider effect",
      "LED matrices",
    ],
    code: `
// Knight Rider effect
const int numLeds = 6;
const int ledPins[] = {8, 9, 10, 11, 12, 13};
const int delayTime = 100;

void setup() {
  for(int i = 0; i < numLeds; i++) {
    pinMode(ledPins[i], OUTPUT);
  }
}

void knightRider() {
  // Forward
  for(int i = 0; i < numLeds; i++) {
    digitalWrite(ledPins[i], HIGH);
    delay(delayTime);
    digitalWrite(ledPins[i], LOW);
  }
  
  // Backward
  for(int i = numLeds-2; i > 0; i--) {
    digitalWrite(ledPins[i], HIGH);
    delay(delayTime);
    digitalWrite(ledPins[i], LOW);
  }
}

void morseCode(const char* message) {
  const int dot = 200;
  const int dash = dot * 3;
  const int gap = dot;
  
  for(int i = 0; message[i] != '\\0'; i++) {
    char c = message[i];
    switch(c) {
      case '.':
        digitalWrite(ledPins[0], HIGH);
        delay(dot);
        break;
      case '-':
        digitalWrite(ledPins[0], HIGH);
        delay(dash);
        break;
      case ' ':
        delay(gap);
        break;
    }
    digitalWrite(ledPins[0], LOW);
    delay(gap);
  }
}
    `,
  }
];

export default function LEDPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center mb-6">
        <Link href="/learn/steam-learn">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Learning
          </Button>
        </Link>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">LED Programming</h1>
        <p className="text-gray-600">
          Master LED control and create amazing lighting effects
        </p>
      </div>

      <div className="grid gap-6">
        {lessons.map((lesson, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{lesson.title}</CardTitle>
                <Badge variant="secondary">Lesson {index + 1}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Key Concepts:</h3>
                <ul className="list-disc list-inside space-y-1">
                  {lesson.content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Example Code:</h3>
                <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code>{lesson.code}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
