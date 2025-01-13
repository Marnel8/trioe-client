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
    title: "Setting up BME280",
    content: [
      "Connect BME280 to your board",
      "Install required libraries",
      "Initialize I2C communication",
      "Basic sensor configuration",
    ],
    code: `
// Example code for BME280 setup
#include <Wire.h>
#include <Adafruit_BME280.h>

Adafruit_BME280 bme;

void setup() {
  Serial.begin(9600);
  if (!bme.begin(0x76)) {
    Serial.println("Could not find BME280 sensor!");
    while (1);
  }
}
    `,
  },
  {
    title: "Reading Temperature",
    content: [
      "Understanding temperature measurement",
      "Reading temperature in Celsius",
      "Converting to Fahrenheit",
      "Temperature calibration",
    ],
    code: `
void loop() {
  float temperature = bme.readTemperature();
  Serial.print("Temperature: ");
  Serial.print(temperature);
  Serial.println(" °C");
  delay(1000);
}
    `,
  },
  {
    title: "Measuring Humidity",
    content: [
      "Humidity sensor basics",
      "Reading relative humidity",
      "Understanding humidity data",
      "Environmental monitoring",
    ],
    code: `
void loop() {
  float humidity = bme.readHumidity();
  Serial.print("Humidity: ");
  Serial.print(humidity);
  Serial.println(" %");
  delay(1000);
}
    `,
  },
  {
    title: "Pressure Monitoring",
    content: [
      "Atmospheric pressure basics",
      "Reading pressure data",
      "Converting pressure units",
      "Altitude calculation",
    ],
    code: `
void loop() {
  float pressure = bme.readPressure() / 100.0F;
  float altitude = bme.readAltitude(1013.25);
  Serial.print("Pressure: ");
  Serial.print(pressure);
  Serial.println(" hPa");
  delay(1000);
}
    `,
  },
  {
    title: "Data Logging",
    content: [
      "Setting up data logging",
      "Storing sensor readings",
      "Creating data visualization",
      "Long-term monitoring",
    ],
    code: `
// Example data logging code
#include <SD.h>

void logData() {
  File dataFile = SD.open("bme280_log.txt", FILE_WRITE);
  if (dataFile) {
    dataFile.print(bme.readTemperature());
    dataFile.print(",");
    dataFile.print(bme.readHumidity());
    dataFile.print(",");
    dataFile.println(bme.readPressure());
    dataFile.close();
  }
}
    `,
  },
];

export default function BME280Page() {
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
        <h1 className="text-3xl font-bold mb-2">BME280 Environmental Sensing</h1>
        <p className="text-gray-600">
          Learn to measure temperature, humidity, and pressure with the BME280 sensor
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
