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
import { Badge } from "@/components/ui/badge";
import {
  Sprout,
  Droplets,
  Fish,
  LineChart,
  Leaf,
  Sun,
  Building2,
  Microscope,
} from "lucide-react";

const modules = [
  {
    title: "Soil Science",
    description: "Learn about soil properties and management",
    difficulty: "Beginner",
    duration: "2-3 hours",
    icon: Sprout,
    color: "text-green-500",
    lessons: [
      "Soil Composition",
      "pH and Nutrients",
      "Soil Testing",
      "Soil Conservation",
    ],
    href: "/learn/agri-aqua-learn/soil-science",
  },
  {
    title: "Water Management",
    description: "Understanding water systems in agriculture",
    difficulty: "Intermediate",
    duration: "3-4 hours",
    icon: Droplets,
    color: "text-blue-500",
    lessons: [
      "Irrigation Systems",
      "Water Quality",
      "Water Conservation",
      "Drainage Systems",
    ],
    href: "/learn/agri-aqua-learn/water-management",
  },
  {
    title: "Aquaculture Basics",
    description: "Introduction to fish farming and aquaculture",
    difficulty: "Intermediate",
    duration: "4-5 hours",
    icon: Fish,
    color: "text-cyan-500",
    lessons: [
      "Fish Species Selection",
      "Water Quality Management",
      "Feeding Systems",
      "Disease Prevention",
    ],
    href: "/learn/agri-aqua-learn/aquaculture",
  },
  {
    title: "Crop Management",
    description: "Learn effective crop management techniques",
    difficulty: "Intermediate",
    duration: "3-4 hours",
    icon: Leaf,
    color: "text-emerald-500",
    lessons: [
      "Crop Selection",
      "Planting Techniques",
      "Pest Management",
      "Harvest Management",
    ],
    href: "/learn/agri-aqua-learn/crop-management",
  },
  // {
  //   title: "Climate Smart Agriculture",
  //   description: "Adapt farming to climate change",
  //   difficulty: "Advanced",
  //   duration: "4-5 hours",
  //   icon: Sun,
  //   color: "text-yellow-500",
  //   lessons: [
  //     "Climate Impact",
  //     "Adaptation Strategies",
  //     "Sustainable Practices",
  //     "Resource Efficiency",
  //   ],
  //   href: "/learn/agri-aqua-learn/climate-smart",
  // },
  // {
  //   title: "Farm Analytics",
  //   description: "Data-driven farming decisions",
  //   difficulty: "Advanced",
  //   duration: "3-4 hours",
  //   icon: LineChart,
  //   color: "text-purple-500",
  //   lessons: [
  //     "Data Collection",
  //     "Yield Analysis",
  //     "Cost Management",
  //     "Predictive Analytics",
  //   ],
  //   href: "/learn/agri-aqua-learn/farm-analytics",
  // },
  // {
  //   title: "Controlled Environment",
  //   description: "Indoor and greenhouse farming",
  //   difficulty: "Advanced",
  //   duration: "4-5 hours",
  //   icon: Building2,
  //   color: "text-orange-500",
  //   lessons: [
  //     "Greenhouse Design",
  //     "Climate Control",
  //     "Hydroponics",
  //     "Vertical Farming",
  //   ],
  //   href: "/learn/agri-aqua-learn/controlled-environment",
  // },
  // {
  //   title: "Plant Science",
  //   description: "Understanding plant biology and genetics",
  //   difficulty: "Advanced",
  //   duration: "5-6 hours",
  //   icon: Microscope,
  //   color: "text-indigo-500",
  //   lessons: [
  //     "Plant Biology",
  //     "Plant Nutrition",
  //     "Plant Breeding",
  //     "Disease Management",
  //   ],
  //   href: "/learn/agri-aqua-learn/plant-science",
  // },
];

export default function AgriAquaLearnPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Agri-Aqua Learning Modules</>
        <p className="text-muted-foreground text-lg">
          Explore our comprehensive agriculture and aquaculture learning modules designed to help you
          master modern farming and aquaculture practices.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {modules.map((module) => (
          <Card key={module.title} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <module.icon className={`h-6 w-6 ${module.color}`} />
                <Badge
                  variant={
                    module.difficulty === "Beginner"
                      ? "default"
                      : module.difficulty === "Intermediate"
                      ? "secondary"
                      : "destructive"
                  }
                >
                  {module.difficulty}
                </Badge>
              </div>
              <CardTitle>{module.title}</CardTitle>
              <CardDescription>{module.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="text-sm text-muted-foreground mb-4">
                Duration: {module.duration}
              </div>
              <ul className="list-disc list-inside space-y-1 text-sm">
                {module.lessons.map((lesson) => (
                  <li key={lesson}>{lesson}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={module.href}>Start Learning</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
