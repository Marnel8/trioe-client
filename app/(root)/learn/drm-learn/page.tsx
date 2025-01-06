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
  Shield,
  AlertTriangle,
  Heart,
  Map,
  Users,
  MessageSquare,
  ClipboardList,
  Headphones,
} from "lucide-react";

const modules = [
  {
    title: "Disaster Preparedness",
    description: "Learn essential disaster preparedness skills",
    difficulty: "Beginner",
    duration: "2-3 hours",
    icon: Shield,
    color: "text-blue-500",
    lessons: [
      "Understanding Disasters",
      "Emergency Planning",
      "Survival Kits",
      "Early Warning Systems",
    ],
    href: "/learn/drm-learn/disaster-preparedness",
  },
  {
    title: "Risk Assessment",
    description: "Identify and evaluate potential risks",
    difficulty: "Intermediate",
    duration: "3-4 hours",
    icon: AlertTriangle,
    color: "text-yellow-500",
    lessons: [
      "Hazard Identification",
      "Vulnerability Analysis",
      "Risk Mapping",
      "Impact Assessment",
    ],
    href: "/learn/drm-learn/risk-assessment",
  },
  {
    title: "First Aid",
    description: "Basic first aid and emergency response",
    difficulty: "Beginner",
    duration: "4-5 hours",
    icon: Heart,
    color: "text-red-500",
    lessons: [
      "Basic Life Support",
      "Wound Care",
      "Emergency Response",
      "Medical Supplies",
    ],
    href: "/learn/drm-learn/first-aid",
  },
  {
    title: "Evacuation Planning",
    description: "Learn evacuation procedures and planning",
    difficulty: "Intermediate",
    duration: "3-4 hours",
    icon: Map,
    color: "text-green-500",
    lessons: [
      "Route Planning",
      "Safe Zones",
      "Transportation",
      "Special Needs",
    ],
    href: "/learn/drm-learn/evacuation",
  },
  // {
  //   title: "Community Response",
  //   description: "Coordinate community disaster response",
  //   difficulty: "Advanced",
  //   duration: "4-5 hours",
  //   icon: Users,
  //   color: "text-purple-500",
  //   lessons: [
  //     "Team Organization",
  //     "Resource Management",
  //     "Community Training",
  //     "Response Coordination",
  //   ],
  //   href: "/learn/drm-learn/community-response",
  // },
  // {
  //   title: "Crisis Communication",
  //   description: "Effective communication during disasters",
  //   difficulty: "Intermediate",
  //   duration: "3-4 hours",
  //   icon: MessageSquare,
  //   color: "text-orange-500",
  //   lessons: [
  //     "Communication Plans",
  //     "Public Information",
  //     "Emergency Alerts",
  //     "Media Relations",
  //   ],
  //   href: "/learn/drm-learn/crisis-communication",
  // },
  // {
  //   title: "Recovery Planning",
  //   description: "Post-disaster recovery and rehabilitation",
  //   difficulty: "Advanced",
  //   duration: "4-5 hours",
  //   icon: ClipboardList,
  //   color: "text-cyan-500",
  //   lessons: [
  //     "Damage Assessment",
  //     "Resource Allocation",
  //     "Infrastructure Recovery",
  //     "Community Rebuilding",
  //   ],
  //   href: "/learn/drm-learn/recovery-planning",
  // },
  // {
  //   title: "Mental Health Support",
  //   description: "Psychological first aid and support",
  //   difficulty: "Advanced",
  //   duration: "5-6 hours",
  //   icon: Headphones,
  //   color: "text-indigo-500",
  //   lessons: [
  //     "Psychological First Aid",
  //     "Trauma Support",
  //     "Stress Management",
  //     "Community Care",
  //   ],
  //   href: "/learn/drm-learn/mental-health",
  // },
];

export default function DRMLearnPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Disaster Risk Management Learning Modules</h1>
        <p className="text-muted-foreground text-lg">
          Explore our comprehensive disaster risk management modules designed to help you
          prepare for, respond to, and recover from disasters effectively.
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
