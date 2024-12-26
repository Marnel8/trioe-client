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
	Thermometer,
	Droplets,
	Database,
	LineChart,
} from "lucide-react";

const lesson = {
	title: "Temperature and Humidity Sensing",
	sections: [
		{
			id: "temp-sensors",
			title: "Temperature Sensors",
			content: (
				<div className="space-y-4">
					<p>
						Temperature sensors are essential components in many applications,
						from industrial processes to consumer electronics. Understanding
						different types and their characteristics is crucial for proper
						selection and implementation.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<Card>
							<CardHeader>
								<CardTitle className="text-lg">Common Types</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className="space-y-2">
									<li>Thermistors (NTC/PTC)</li>
									<li>Thermocouples</li>
									<li>RTDs (Pt100/Pt1000)</li>
									<li>Digital Temperature Sensors</li>
									<li>Infrared Sensors</li>
								</ul>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle className="text-lg">
									Implementation Example
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="bg-white/50 p-4 rounded-md">
									<pre className="text-sm">
										{`// DS18B20 Digital Temperature Sensor
#include <OneWire.h>
#include <DallasTemperature.h>

OneWire oneWire(2);  // Data wire on pin 2
DallasTemperature sensors(&oneWire);

void setup() {
  sensors.begin();
}

float getTemperature() {
  sensors.requestTemperatures();
  return sensors.getTempCByIndex(0);
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
			id: "humidity",
			title: "Humidity Sensors",
			content: (
				<div className="space-y-4">
					<p>
						Humidity sensors measure the amount of water vapor in the air. They
						are crucial for environmental monitoring, HVAC systems, and
						industrial processes.
					</p>
					<Card className="border-blue-200 bg-blue-50/50">
						<CardHeader>
							<CardTitle className="text-lg">Humidity Measurement</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div>
									<h4 className="font-semibold mb-2">Sensor Types</h4>
									<ul className="list-disc list-inside">
										<li>Capacitive sensors</li>
										<li>Resistive sensors</li>
										<li>Thermal conductivity sensors</li>
										<li>Optical hygrometers</li>
									</ul>
								</div>
								<div>
									<h4 className="font-semibold mb-2">Example Code (DHT11)</h4>
									<div className="bg-white/50 p-4 rounded-md">
										<pre className="text-sm">
											{`#include <DHT.h>

DHT dht(4, DHT11);  // Pin 4

void setup() {
  dht.begin();
}

float getHumidity() {
  return dht.readHumidity();
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
			id: "monitoring",
			title: "Environmental Monitoring",
			content: (
				<div className="space-y-4">
					<p>
						Environmental monitoring systems combine temperature and humidity
						sensors to provide comprehensive climate control and data
						collection.
					</p>
					<div className="grid grid-cols-1 gap-4">
						<Card>
							<CardHeader>
								<CardTitle className="text-lg">
									Monitoring System Example
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="space-y-4">
									<div className="bg-white/50 p-4 rounded-md">
										<pre className="text-sm">
											{`// Environmental monitoring system
class EnvironmentalMonitor {
  private:
    DHT dht;
    float tempThreshold;
    float humidityThreshold;
    
  public:
    void checkConditions() {
      float temp = dht.readTemperature();
      float humidity = dht.readHumidity();
      
      if (temp > tempThreshold) {
        triggerCooling();
      }
      
      if (humidity > humidityThreshold) {
        triggerDehumidifier();
      }
      
      logData(temp, humidity);
    }
}`}
										</pre>
									</div>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<div>
											<h4 className="font-semibold mb-2">Applications</h4>
											<ul className="list-disc list-inside">
												<li>Smart HVAC systems</li>
												<li>Greenhouse control</li>
												<li>Data center monitoring</li>
												<li>Weather stations</li>
											</ul>
										</div>
										<div>
											<h4 className="font-semibold mb-2">Key Features</h4>
											<ul className="list-disc list-inside">
												<li>Real-time monitoring</li>
												<li>Automated control</li>
												<li>Data logging</li>
												<li>Alert systems</li>
											</ul>
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
			id: "data-logging",
			title: "Data Logging",
			content: (
				<div className="space-y-4">
					<p>
						Data logging is essential for tracking environmental conditions over
						time and analyzing trends. Modern systems often include cloud
						connectivity and advanced analysis features.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<Card>
							<CardHeader>
								<CardTitle className="text-lg">Data Storage Methods</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="bg-white/50 p-4 rounded-md">
									<pre className="text-sm">
										{`// SD Card data logging
#include <SD.h>

void logData(float temp, float humidity) {
  File dataFile = SD.open("log.csv", FILE_WRITE);
  if (dataFile) {
    String dataString = String(millis()) + "," +
                       String(temp) + "," +
                       String(humidity);
    dataFile.println(dataString);
    dataFile.close();
  }
}`}
									</pre>
								</div>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle className="text-lg">Cloud Integration</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="bg-white/50 p-4 rounded-md">
									<pre className="text-sm">
										{`// MQTT cloud publishing
void publishData(float temp, float humidity) {
  StaticJsonDocument<200> doc;
  doc["temperature"] = temp;
  doc["humidity"] = humidity;
  doc["timestamp"] = getTime();
  
  String jsonString;
  serializeJson(doc, jsonString);
  client.publish("sensors/env", jsonString);
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
						<Link href="/learn/steam-learn/sensors">
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
						<CardContent>{lesson.sections[currentSection].content}</CardContent>
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
							<Link href="/learn/steam-learn/sensors/motion">
								Next Lesson
								<ArrowRight className="h-4 w-4 ml-2" />
							</Link>
						</Button>
					) : (
						<Button onClick={() => setCurrentSection(currentSection + 1)}>
							Next
							<ArrowRight className="h-4 w-4 ml-2" />
						</Button>
					)}
				</div>
			</div>
		</div>
	);
}
