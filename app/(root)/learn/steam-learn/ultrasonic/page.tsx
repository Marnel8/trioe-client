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
    title: "Ultrasonic Sensor Basics",
    content: [
      "Understanding ultrasonic sensing",
      "HC-SR04 sensor pinout",
      "Basic wiring setup",
      "Sensor working principles",
    ],
    code: `
// Basic ultrasonic sensor setup
const int trigPin = 9;
const int echoPin = 10;

void setup() {
  Serial.begin(9600);
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
}
    `,
  },
  {
    title: "Distance Calculation",
    content: [
      "Sound wave principles",
      "Time of flight measurement",
      "Converting time to distance",
      "Understanding sensor limitations",
    ],
    code: `
float getDistance() {
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  
  long duration = pulseIn(echoPin, HIGH);
  float distance = duration * 0.034 / 2;
  
  return distance;
}
    `,
  },
  {
    title: "Object Detection",
    content: [
      "Setting detection thresholds",
      "Filtering false readings",
      "Motion detection",
      "Object presence sensing",
    ],
    code: `
bool detectObject(float threshold) {
  float distance = getDistance();
  if (distance < threshold && distance > 0) {
    return true;
  }
  return false;
}

void loop() {
  if (detectObject(20)) {  // Object within 20cm
    Serial.println("Object detected!");
  }
  delay(100);
}
    `,
  },
  {
    title: "Range Finding Projects",
    content: [
      "Building a distance meter",
      "Parking sensor system",
      "Room mapping",
      "Obstacle avoidance",
    ],
    code: `
// Example parking sensor with LED and buzzer
const int ledPin = 13;
const int buzzerPin = 8;

void parkingAssist() {
  float distance = getDistance();
  
  if (distance < 30) {
    // Close range - rapid beeping
    tone(buzzerPin, 2000);
    digitalWrite(ledPin, HIGH);
  } else if (distance < 100) {
    // Medium range - slow beeping
    tone(buzzerPin, 1000);
    digitalWrite(ledPin, HIGH);
    delay(200);
    noTone(buzzerPin);
    digitalWrite(ledPin, LOW);
    delay(200);
  } else {
    // Clear
    noTone(buzzerPin);
    digitalWrite(ledPin, LOW);
  }
}
    `,
  }
];

export default function UltrasonicPage() {
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
        <h1 className="text-3xl font-bold mb-2">Ultrasonic Distance Sensing</h1>
        <p className="text-gray-600">
          Master distance measurement and object detection using ultrasonic sensors
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
