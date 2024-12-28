'use client';

import React, { useState, ComponentType } from 'react';
import { ArrowLeft, ArrowRight, Clock, Book, Target, ChevronRight, CheckCircle2, AlertCircle, LucideIcon, LucideProps } from 'lucide-react';
import { Progress } from "@/components/ui/progress";

interface TutorialStep {
  title: string;
  description: string;
  content: React.ReactNode;
  estimatedTime: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

interface StepProps {
  number: number;
  title: string;
  icon: ComponentType<LucideProps>;
  isActive: boolean;
  isCompleted: boolean;
  onClick: () => void;
}

const Step: React.FC<StepProps> = ({ number, title, icon: Icon, isActive, isCompleted, onClick }: StepProps) => {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-3 rounded-lg transition-colors ${
        isActive
          ? 'bg-green-50 text-green-700'
          : isCompleted
          ? 'bg-gray-50 text-gray-600'
          : 'hover:bg-gray-50'
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            isActive
              ? 'bg-green-100 text-green-700'
              : isCompleted
              ? 'bg-gray-100 text-gray-600'
              : 'bg-gray-100'
          }`}
        >
          <Icon size={20} className="text-white" />
        </div>
        <span className="font-medium">{title}</span>
      </div>
    </button>
  );
};

const ProjectTutorial = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const tutorialSteps: TutorialStep[] = [
    {
      title: "Setting Up Your Environment",
      description: "Prepare your workspace and gather the required components",
      estimatedTime: "5-10 minutes",
      difficulty: "Beginner",
      content: (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h4 className="font-medium text-lg mb-4">Required Components</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <span className="font-medium">TRIOE DRM Kit</span>
                  <p className="text-sm text-gray-600">Main board and sensors</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <span className="font-medium">USB Cable</span>
                  <p className="text-sm text-gray-600">For programming and power</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <span className="font-medium">Computer with Arduino IDE</span>
                  <p className="text-sm text-gray-600">Latest version recommended</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h4 className="font-medium text-lg mb-4">Workspace Setup</h4>
            <div className="space-y-4">
              <p className="text-gray-600">
                Find a clean, well-lit workspace with access to:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-green-500" />
                  <span>Power outlet</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-green-500" />
                  <span>Good ventilation</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-green-500" />
                  <span>Stable work surface</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-yellow-800">Safety First</h4>
                <p className="text-sm text-yellow-700">
                  Ensure your workspace is free from liquids and conductive materials. Keep components in their anti-static bags until needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Hardware Assembly",
      description: "Connect sensors and prepare the physical setup",
      estimatedTime: "15-20 minutes",
      difficulty: "Beginner",
      content: (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h4 className="font-medium text-lg mb-4">Connection Diagram</h4>
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Hardware Connection Diagram</span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h4 className="font-medium text-lg mb-4">Assembly Steps</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <span className="font-medium text-blue-600">1</span>
                </div>
                <div>
                  <h5 className="font-medium">Mount the Main Board</h5>
                  <p className="text-sm text-gray-600 mt-1">
                    Secure the TRIOE board to a stable surface using the mounting holes
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <span className="font-medium text-blue-600">2</span>
                </div>
                <div>
                  <h5 className="font-medium">Connect Sensors</h5>
                  <p className="text-sm text-gray-600 mt-1">
                    Attach environmental sensors following the pin diagram
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <span className="font-medium text-blue-600">3</span>
                </div>
                <div>
                  <h5 className="font-medium">Power Connection</h5>
                  <p className="text-sm text-gray-600 mt-1">
                    Connect the USB cable for power and programming
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-blue-800">Connection Tips</h4>
                <p className="text-sm text-blue-700">
                  Double-check all connections before applying power. Ensure proper orientation of sensors and connectors.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Software Configuration",
      description: "Set up the Arduino IDE and required libraries",
      estimatedTime: "10-15 minutes",
      difficulty: "Intermediate",
      content: (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h4 className="font-medium text-lg mb-4">Required Libraries</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-medium text-purple-600">1</span>
                </div>
                <div>
                  <span className="font-medium">TRIOE Core Library</span>
                  <p className="text-sm text-gray-600">Base functions and utilities</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-medium text-purple-600">2</span>
                </div>
                <div>
                  <span className="font-medium">Sensor Libraries</span>
                  <p className="text-sm text-gray-600">Support for environmental sensors</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-medium text-purple-600">3</span>
                </div>
                <div>
                  <span className="font-medium">Communication Libraries</span>
                  <p className="text-sm text-gray-600">For data transmission and logging</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h4 className="font-medium text-lg mb-4">IDE Configuration</h4>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <pre className="text-sm overflow-x-auto">
                  <code>
                    {`// Board Settings
Board: "TRIOE DRM Board"
Port: "COM3" (may vary)
Programmer: "AVRISP mkII"`}
                  </code>
                </pre>
              </div>
              <p className="text-sm text-gray-600">
                Make sure to select the correct board and port in the Arduino IDE. The port name may vary depending on your system.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h4 className="font-medium text-lg mb-4">Test Code</h4>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <pre className="text-sm overflow-x-auto">
                  <code>
                    {`#include <TRIOE.h>
#include <Sensors.h>

void setup() {
  Serial.begin(115200);
  initializeSensors();
}

void loop() {
  readSensors();
  delay(1000);
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Testing and Verification",
      description: "Verify your setup is working correctly",
      estimatedTime: "10 minutes",
      difficulty: "Beginner",
      content: (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h4 className="font-medium text-lg mb-4">System Check</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                </div>
                <span>Power LED is on</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                </div>
                <span>Serial monitor shows sensor data</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                </div>
                <span>All sensors reporting valid values</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h4 className="font-medium text-lg mb-4">Expected Output</h4>
            <div className="p-4 bg-gray-50 rounded-lg">
              <pre className="text-sm overflow-x-auto">
                <code>
                  {`Temperature: 25.6°C
Humidity: 45%
Pressure: 1013.2 hPa
Light Level: 678 lux`}
                </code>
              </pre>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-red-800">Troubleshooting</h4>
                <ul className="mt-2 space-y-2 text-sm text-red-700">
                  <li>• Check all connections if no data is received</li>
                  <li>• Verify correct port selection in Arduino IDE</li>
                  <li>• Ensure all libraries are properly installed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const progress = ((currentStep + 1) / tutorialSteps.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Environmental Monitoring Station</h1>
          <p className="text-gray-600">
            Build a complete environmental monitoring station using the TRIOE DRM Kit
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left sidebar with steps */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="space-y-4">
                {tutorialSteps.map((step, index) => (
                  <Step
                    key={index}
                    number={index + 1}
                    title={step.title}
                    icon={Book}
                    isActive={currentStep === index}
                    isCompleted={index < currentStep}
                    onClick={() => setCurrentStep(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Main content area */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{tutorialSteps[currentStep].title}</h2>
                  <p className="text-gray-600">{tutorialSteps[currentStep].description}</p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-gray-400" />
                    <span className="text-sm text-gray-600">{tutorialSteps[currentStep].estimatedTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-gray-400" />
                    <span className="text-sm text-gray-600">{tutorialSteps[currentStep].difficulty}</span>
                  </div>
                </div>
              </div>

              <Progress value={progress} className="mb-6" />

              {tutorialSteps[currentStep].content}

              <div className="flex justify-between mt-8">
                <button
                  onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  disabled={currentStep === 0}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    currentStep === 0
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                  Previous Step
                </button>
                <button
                  onClick={() => setCurrentStep(Math.min(tutorialSteps.length - 1, currentStep + 1))}
                  disabled={currentStep === tutorialSteps.length - 1}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    currentStep === tutorialSteps.length - 1
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-green-500 text-white hover:bg-green-600'
                  }`}
                >
                  Next Step
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTutorial;
