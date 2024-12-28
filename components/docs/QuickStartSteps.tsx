'use client';

import React, { FC } from 'react';
import { 
  Rocket,
  Plug,
  Code,
  Play,
  CheckCircle2,
  ChevronRight,
  AlertCircle,
  Zap,
  Cpu,
  Terminal,
  Upload,
  MonitorPlay
} from 'lucide-react';
import Image from 'next/image';
import { Progress } from "../ui/progress";

interface StepProps {
  number: number;
  title: string;
  icon: FC;
  isActive: boolean;
  isCompleted: boolean;
}

const Step: FC<StepProps> = ({ number, title, icon: Icon, isActive, isCompleted }) => (
  <div className={`flex items-center gap-4 p-4 rounded-lg transition-colors ${
    isActive ? 'bg-green-50 border-l-4 border-green-500' : 
    isCompleted ? 'bg-green-50' : 'bg-gray-50'
  }`}>
    <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
      isActive ? 'bg-green-500' :
      isCompleted ? 'bg-green-500' : 'bg-gray-300'
    }`}>
      <Icon className="w-5 h-5 text-white" />
    </div>
    <div>
      <div className="text-sm text-gray-500">Step {number}</div>
      <div className="font-medium">{title}</div>
    </div>
    {isCompleted && <CheckCircle2 className="w-5 h-5 text-green-500 ml-auto" />}
  </div>
);

interface QuickStartStepContentProps {
  step: number;
  onComplete: () => void;
}

const QuickStartStepContent: FC<QuickStartStepContentProps> = ({ step, onComplete }) => {
  const steps = [
    {
      title: "Connect Your Board",
      icon: Plug,
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-medium mb-4">Physical Setup</h5>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <ol className="list-decimal list-inside space-y-3">
                    <li className="text-sm">Unbox your TRIOE kit</li>
                    <li className="text-sm">Connect the USB cable to your board</li>
                    <li className="text-sm">Plug the other end into your computer</li>
                  </ol>
                </div>
                <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-gray-100">
                  <div className="flex items-center justify-center h-full text-gray-500">
                    Board Connection Diagram
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h5 className="font-medium mb-4">Connection Check</h5>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h6 className="font-medium mb-3">Verify Connection</h6>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Cpu className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Power LED should be on</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Terminal className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Check Device Manager for COM port</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">
              <AlertCircle className="inline-block w-4 h-4 mr-1" />
              Make sure the USB cable supports data transfer
            </div>
            <button 
              onClick={onComplete}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              Next Step
              <ChevronRight className="inline-block w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      )
    },
    {
      title: "Open Example",
      icon: Code,
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-medium mb-4">Load Example Code</h5>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <ol className="list-decimal list-inside space-y-3">
                    <li className="text-sm">Open Arduino IDE</li>
                    <li className="text-sm">Go to File → Examples → TRIOE → BasicTest</li>
                    <li className="text-sm">The example code will open in a new window</li>
                  </ol>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <pre className="text-sm bg-gray-50 p-4 rounded-lg overflow-x-auto">
{`void setup() {
  Serial.begin(115200);
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000);
  digitalWrite(LED_BUILTIN, LOW);
  delay(1000);
}`}
                  </pre>
                </div>
              </div>
            </div>
            <div>
              <h5 className="font-medium mb-4">Code Explanation</h5>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h6 className="font-medium mb-3">What This Code Does</h6>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <div>
                        <span className="font-medium block text-sm">Setup</span>
                        <span className="text-sm text-gray-600">Initializes serial communication and LED pin</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Play className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <div>
                        <span className="font-medium block text-sm">Loop</span>
                        <span className="text-sm text-gray-600">Blinks the LED with 1-second intervals</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">
              <AlertCircle className="inline-block w-4 h-4 mr-1" />
              This is a basic test to verify your setup
            </div>
            <button 
              onClick={onComplete}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              Next Step
              <ChevronRight className="inline-block w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      )
    },
    {
      title: "Upload Code",
      icon: Upload,
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-medium mb-4">Upload Process</h5>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <ol className="list-decimal list-inside space-y-3">
                    <li className="text-sm">Verify board selection (Tools → Board)</li>
                    <li className="text-sm">Select correct COM port (Tools → Port)</li>
                    <li className="text-sm">Click Upload button or press Ctrl+U</li>
                  </ol>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h6 className="font-medium mb-3">Upload Status</h6>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <span className="text-sm">Compiling...</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span className="text-sm">Uploading...</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-sm">Done!</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h5 className="font-medium mb-4">Troubleshooting</h5>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h6 className="font-medium mb-3">Common Issues</h6>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <div>
                        <span className="font-medium block text-sm">Upload Failed</span>
                        <span className="text-sm text-gray-600">Check board selection and COM port</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <div>
                        <span className="font-medium block text-sm">Access Denied</span>
                        <span className="text-sm text-gray-600">Close any Serial Monitor windows</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">
              <AlertCircle className="inline-block w-4 h-4 mr-1" />
              Wait for upload to complete
            </div>
            <button 
              onClick={onComplete}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              Next Step
              <ChevronRight className="inline-block w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      )
    },
    {
      title: "Verify Operation",
      icon: MonitorPlay,
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-medium mb-4">Check Results</h5>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h6 className="font-medium mb-3">Expected Behavior</h6>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Built-in LED should blink every second</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Terminal className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Open Serial Monitor to view debug output</span>
                    </li>
                  </ul>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h6 className="font-medium mb-3">Next Steps</h6>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-sm text-green-500 hover:underline">
                        Try More Examples →
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm text-green-500 hover:underline">
                        Learn Basic Concepts →
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm text-green-500 hover:underline">
                        Start Your Project →
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h5 className="font-medium mb-4">Need Help?</h5>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h6 className="font-medium mb-3">Support Resources</h6>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <div>
                        <a href="#" className="font-medium block text-sm text-green-500 hover:underline">Troubleshooting Guide</a>
                        <span className="text-sm text-gray-600">Common issues and solutions</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <div>
                        <a href="#" className="font-medium block text-sm text-green-500 hover:underline">Community Forum</a>
                        <span className="text-sm text-gray-600">Ask questions and share experiences</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">
              <AlertCircle className="inline-block w-4 h-4 mr-1" />
              Congratulations on completing the quick start guide!
            </div>
            <button 
              onClick={onComplete}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              Complete Guide
              <CheckCircle2 className="inline-block w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-6">
      {steps[step - 1].content}
    </div>
  );
};

export function QuickStartSteps() {
  const [currentStep, setCurrentStep] = React.useState(1);
  const totalSteps = 4;

  const steps = [
    { number: 1, title: "Connect Your Board", icon: Plug },
    { number: 2, title: "Open Example", icon: Code },
    { number: 3, title: "Upload Code", icon: Upload },
    { number: 4, title: "Verify Operation", icon: MonitorPlay },
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Progress value={(currentStep / totalSteps) * 100} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step) => (
            <Step
              key={step.number}
              {...step}
              isActive={step.number === currentStep}
              isCompleted={step.number < currentStep}
            />
          ))}
        </div>
      </div>
      
      <QuickStartStepContent
        step={currentStep}
        onComplete={() => {
          if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
          }
        }}
      />
    </div>
  );
}
