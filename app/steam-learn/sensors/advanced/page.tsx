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
  Binary,
  Network,
  Cpu,
  Lightbulb,
} from "lucide-react";

const lesson = {
  title: "Advanced Sensor Applications",
  sections: [
    {
      id: "fusion",
      title: "Sensor Fusion",
      content: (
        <div className="space-y-4">
          <p>
            Sensor fusion combines data from multiple sensors to achieve more
            accurate and reliable measurements than would be possible using a
            single sensor.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Fusion Techniques</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>Kalman filtering</li>
                  <li>Complementary filtering</li>
                  <li>Bayesian fusion</li>
                  <li>Weighted averaging</li>
                  <li>Machine learning fusion</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Implementation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-white/50 p-4 rounded-md">
                  <pre className="text-sm">
                    {`// Kalman filter implementation
class KalmanFilter {
  private:
    float Q = 0.1;  // Process noise
    float R = 0.1;  // Measurement noise
    float P = 1.0;  // Estimation error
    float K = 0.0;  // Kalman gain
    float X = 0.0;  // State estimate
    
  public:
    float update(float measurement) {
      // Prediction
      P = P + Q;
      
      // Update
      K = P / (P + R);
      X = X + K * (measurement - X);
      P = (1 - K) * P;
      
      return X;
    }
};`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: "iot",
      title: "IoT Applications",
      content: (
        <div className="space-y-4">
          <p>
            Internet of Things (IoT) applications combine sensors with network
            connectivity to create smart, connected systems that can monitor and
            control environments.
          </p>
          <Card className="border-blue-200 bg-blue-50/50">
            <CardHeader>
              <CardTitle className="text-lg">IoT Sensor Networks</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Network Architecture</h4>
                  <ul className="list-disc list-inside">
                    <li>Edge devices</li>
                    <li>Gateway nodes</li>
                    <li>Cloud integration</li>
                    <li>Data analytics</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Example Code</h4>
                  <div className="bg-white/50 p-4 rounded-md">
                    <pre className="text-sm">
                      {`// MQTT sensor data publishing
#include <WiFi.h>
#include <PubSubClient.h>

WiFiClient espClient;
PubSubClient client(espClient);

void publishSensorData() {
  StaticJsonDocument<200> doc;
  doc["temperature"] = readTemp();
  doc["humidity"] = readHumidity();
  doc["pressure"] = readPressure();
  doc["timestamp"] = getTime();
  
  char buffer[200];
  serializeJson(doc, buffer);
  client.publish("sensors/data", buffer);
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
      id: "smart",
      title: "Smart Systems",
      content: (
        <div className="space-y-4">
          <p>
            Smart systems use advanced sensor networks and artificial intelligence
            to create autonomous and adaptive solutions for various applications.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Smart System Implementation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Components</h4>
                      <ul className="list-disc list-inside">
                        <li>Sensor arrays</li>
                        <li>AI/ML processing</li>
                        <li>Actuator control</li>
                        <li>Feedback systems</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Applications</h4>
                      <ul className="list-disc list-inside">
                        <li>Smart homes</li>
                        <li>Industrial automation</li>
                        <li>Agricultural systems</li>
                        <li>Healthcare monitoring</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-white/50 p-4 rounded-md">
                    <pre className="text-sm">
                      {`// Smart environment control
class SmartEnvironment {
  private:
    SensorArray sensors;
    MLModel model;
    ControlSystem controls;
    
  public:
    void update() {
      // Collect sensor data
      SensorData data = sensors.readAll();
      
      // Predict optimal settings
      Settings optimal = model.predict(data);
      
      // Apply control actions
      controls.adjust(optimal);
      
      // Log and learn
      model.train(data, getFeedback());
    }
};`}
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
      id: "trends",
      title: "Future Trends",
      content: (
        <div className="space-y-4">
          <p>
            The field of sensor technology is rapidly evolving with new
            developments in materials, processing capabilities, and integration
            methods.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Emerging Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>Quantum sensors</li>
                  <li>Bio-inspired sensors</li>
                  <li>Nano-sensors</li>
                  <li>Self-powered sensors</li>
                  <li>Neuromorphic sensing</li>
                  <li>Edge AI integration</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Research Areas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <ul className="space-y-2">
                    <li>Energy harvesting</li>
                    <li>Wireless sensor networks</li>
                    <li>Biodegradable sensors</li>
                    <li>Cognitive sensing</li>
                    <li>Distributed intelligence</li>
                  </ul>
                  <div className="bg-white/50 p-4 rounded-md">
                    <pre className="text-sm">
                      {`// Example: Self-learning sensor
class AdaptiveSensor {
  void learn() {
    // Collect environmental data
    auto data = collectData();
    
    // Update internal model
    model.adapt(data);
    
    // Optimize parameters
    parameters = model.optimize();
    
    // Adjust sensing strategy
    updateStrategy(parameters);
  }
};`}
                    </pre>
                  </div>
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
              <Link href="/steam-learn/sensors/quiz">
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
}
