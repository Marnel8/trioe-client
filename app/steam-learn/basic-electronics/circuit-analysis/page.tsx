"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
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
  GitFork,
  GitMerge,
  Workflow,
  Wrench,
  AlertTriangle,
} from "lucide-react";

const lesson = {
  title: "Circuit Analysis",
  sections: [
    {
      id: "series-parallel",
      title: "Series and Parallel Circuits",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-blue-200">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-lg flex items-center gap-2">
                  <GitFork className="h-5 w-5 text-blue-500" />
                  Series Circuits
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 pt-4">
                <p>
                  Components connected end-to-end, forming a single path for current.
                </p>
                <div className="space-y-2">
                  <h4 className="font-medium">Characteristics:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Same current through all components</li>
                    <li>Voltages add up to source voltage</li>
                    <li>Total resistance is sum of all resistances</li>
                    <li>If one component fails, circuit breaks</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg text-sm">
                  <strong>Formula:</strong> R<sub>total</sub> = R₁ + R₂ + R₃ + ...
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-lg flex items-center gap-2">
                  <GitMerge className="h-5 w-5 text-green-500" />
                  Parallel Circuits
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 pt-4">
                <p>
                  Components connected across each other, providing multiple current paths.
                </p>
                <div className="space-y-2">
                  <h4 className="font-medium">Characteristics:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Same voltage across all components</li>
                    <li>Currents add up to total current</li>
                    <li>Total resistance decreases</li>
                    <li>Circuit works if one component fails</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-3 rounded-lg text-sm">
                  <strong>Formula:</strong> 1/R<sub>total</sub> = 1/R₁ + 1/R₂ + 1/R₃ + ...
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: "kirchhoffs-laws",
      title: "Kirchhoff's Laws",
      content: (
        <div className="space-y-4">
          <Card className="border-purple-200">
            <CardHeader className="bg-purple-50">
              <CardTitle className="flex items-center gap-2">
                <Workflow className="h-5 w-5 text-purple-500" />
                Fundamental Circuit Laws
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h3 className="font-semibold">Current Law (KCL)</h3>
                  <p className="text-sm">
                    The sum of currents entering a node equals the sum of currents leaving it.
                  </p>
                  <div className="bg-purple-50 p-3 rounded-lg text-sm">
                    <strong>Formula:</strong> ΣI<sub>in</sub> = ΣI<sub>out</sub>
                  </div>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Applies to all circuit nodes</li>
                    <li>Based on charge conservation</li>
                    <li>Used for node analysis</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold">Voltage Law (KVL)</h3>
                  <p className="text-sm">
                    The sum of all voltages around any closed loop equals zero.
                  </p>
                  <div className="bg-purple-50 p-3 rounded-lg text-sm">
                    <strong>Formula:</strong> ΣV = 0
                  </div>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Applies to all closed loops</li>
                    <li>Based on energy conservation</li>
                    <li>Used for mesh analysis</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: "circuit-analysis",
      title: "Circuit Analysis Techniques",
      content: (
        <div className="space-y-4">
          <Card className="border-indigo-200">
            <CardHeader className="bg-indigo-50">
              <CardTitle className="flex items-center gap-2">
                <Workflow className="h-5 w-5 text-indigo-500" />
                Analysis Methods
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-3">
                  <h3 className="font-semibold">1. Nodal Analysis</h3>
                  <p className="text-sm">
                    Uses KCL to solve for node voltages in a circuit.
                  </p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Select a reference node (ground)</li>
                    <li>Apply KCL at each node</li>
                    <li>Solve system of equations</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold">2. Mesh Analysis</h3>
                  <p className="text-sm">
                    Uses KVL to solve for loop currents in a circuit.
                  </p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Identify meshes in the circuit</li>
                    <li>Apply KVL to each mesh</li>
                    <li>Solve for mesh currents</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold">3. Superposition</h3>
                  <p className="text-sm">
                    Analyze circuits with multiple sources by considering one source at a time.
                  </p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Deactivate all but one source</li>
                    <li>Find partial response</li>
                    <li>Sum all partial responses</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: "troubleshooting",
      title: "Troubleshooting Basics",
      content: (
        <div className="space-y-4">
          <Card className="border-red-200">
            <CardHeader className="bg-red-50">
              <CardTitle className="flex items-center gap-2">
                <Wrench className="h-5 w-5 text-red-500" />
                Circuit Troubleshooting
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Common Problems</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 mt-1 text-red-500" />
                      <span className="text-sm">Open Circuits</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 mt-1 text-red-500" />
                      <span className="text-sm">Short Circuits</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 mt-1 text-red-500" />
                      <span className="text-sm">Incorrect Connections</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 mt-1 text-red-500" />
                      <span className="text-sm">Component Failure</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Troubleshooting Steps</h3>
                  <ol className="list-decimal list-inside space-y-2 text-sm">
                    <li>Visual inspection</li>
                    <li>Voltage measurements</li>
                    <li>Current measurements</li>
                    <li>Continuity testing</li>
                    <li>Component testing</li>
                    <li>Signal tracing</li>
                  </ol>
                </div>
              </div>
              <Card className="border-yellow-200 bg-yellow-50">
                <CardContent className="pt-4">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-600" />
                    Safety First
                  </h4>
                  <ul className="list-disc list-inside text-sm space-y-1 text-yellow-800">
                    <li>Always disconnect power before testing</li>
                    <li>Use appropriate test equipment</li>
                    <li>Wear safety equipment when needed</li>
                    <li>Follow proper measurement procedures</li>
                  </ul>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
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
            <Link href="/steam-learn/basic-electronics">
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
                <BookOpen className="h-5 w-5 text-blue-500" />
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
              <Link href="/steam-learn/digital-logic">
                Next Module
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
