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
    title: "Servo Basics",
    content: [
      "Understanding servo motors",
      "Types of servo motors",
      "Servo wiring and connections",
      "Basic position control",
    ],
    code: `
#include <Servo.h>

Servo myservo;
const int servoPin = 9;

void setup() {
  myservo.attach(servoPin);
  Serial.begin(9600);
}

void loop() {
  // Move to 90 degrees
  myservo.write(90);
  delay(1000);
}
    `,
  },
  {
    title: "Position Control",
    content: [
      "Precise angle control",
      "Smooth movement",
      "Position limits",
      "Position feedback",
    ],
    code: `
// Smooth servo movement
void moveServoSmooth(int startAngle, int endAngle, int stepDelay) {
  if (startAngle < endAngle) {
    for (int pos = startAngle; pos <= endAngle; pos++) {
      myservo.write(pos);
      delay(stepDelay);
    }
  } else {
    for (int pos = startAngle; pos >= endAngle; pos--) {
      myservo.write(pos);
      delay(stepDelay);
    }
  }
}

void loop() {
  moveServoSmooth(0, 180, 15);  // Move from 0 to 180 degrees
  delay(1000);
  moveServoSmooth(180, 0, 15);  // Move back to 0 degrees
  delay(1000);
}
    `,
  },
  {
    title: "Speed Control",
    content: [
      "Controlling movement speed",
      "Acceleration and deceleration",
      "Speed profiles",
      "Timing calculations",
    ],
    code: `
// Speed control with acceleration
class ServoController {
  private:
    Servo* servo;
    float currentPos;
    float targetPos;
    float speed;
    float acceleration;
    
  public:
    ServoController(Servo* s) : servo(s), currentPos(90), speed(0), acceleration(0.1) {
      servo->write(currentPos);
    }
    
    void update() {
      if (currentPos != targetPos) {
        speed += acceleration;
        if (currentPos < targetPos) {
          currentPos += speed;
          if (currentPos > targetPos) currentPos = targetPos;
        } else {
          currentPos -= speed;
          if (currentPos < targetPos) currentPos = targetPos;
        }
        servo->write(currentPos);
      } else {
        speed = 0;
      }
    }
    
    void setTarget(float target) {
      targetPos = constrain(target, 0, 180);
    }
};
    `,
  },
  {
    title: "Robotic Applications",
    content: [
      "Building a robotic arm",
      "Coordinated movement",
      "Position sequences",
      "Project integration",
    ],
    code: `
// Simple 2-servo robotic arm
Servo baseServo;
Servo armServo;

struct Position {
  int base;
  int arm;
  int delayMs;
};

// Define a sequence of positions
Position sequence[] = {
  {90, 90, 1000},   // Home position
  {45, 45, 1000},   // Pick position
  {135, 45, 1000},  // Place position
  {90, 90, 1000}    // Back home
};

void executeSequence() {
  for (int i = 0; i < sizeof(sequence)/sizeof(Position); i++) {
    baseServo.write(sequence[i].base);
    armServo.write(sequence[i].arm);
    delay(sequence[i].delayMs);
  }
}

void loop() {
  executeSequence();
  delay(2000);  // Wait before repeating
}
    `,
  }
];

export default function ServoPage() {
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
        <h1 className="text-3xl font-bold mb-2">Servo Motor Control</h1>
        <p className="text-gray-600">
          Master precise motion control with servo motors
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
