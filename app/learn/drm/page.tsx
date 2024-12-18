"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const DRMLearn = () => {
  const modules = [
    {
      title: "Getting Started with DRM Kit",
      description: "Learn the basics of your DRM Kit and set up your development environment",
      duration: "30 mins",
      level: "Beginner"
    },
    {
      title: "Basic Electronics",
      description: "Understanding components, circuits, and basic electronics principles",
      duration: "1 hour",
      level: "Beginner"
    },
    {
      title: "Programming Fundamentals",
      description: "Introduction to programming concepts and Arduino IDE",
      duration: "2 hours",
      level: "Beginner"
    },
    {
      title: "First Project: LED Control",
      description: "Build your first project controlling LEDs with your DRM Kit",
      duration: "1 hour",
      level: "Beginner"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">DRM Kit Learning Path</h1>
          <p className="text-xl text-gray-600">
            Start your journey in electronics and programming with our comprehensive learning path
          </p>
        </div>

        {/* Learning Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {modules.map((module, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
                <p className="text-gray-600 mb-4">{module.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Duration: {module.duration}</span>
                  <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    {module.level}
                  </span>
                </div>
                <button className="mt-4 w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity">
                  Start Module
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Resources Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
          <h2 className="text-2xl font-bold mb-4">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Documentation</h3>
              <p className="text-gray-600">Access comprehensive documentation and guides</p>
              <Link href="#" className="text-blue-500 hover:underline mt-2 inline-block">
                View Docs
              </Link>
            </div>
            <div className="border p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Community Forum</h3>
              <p className="text-gray-600">Connect with other learners and share experiences</p>
              <Link href="#" className="text-blue-500 hover:underline mt-2 inline-block">
                Join Forum
              </Link>
            </div>
            <div className="border p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Project Ideas</h3>
              <p className="text-gray-600">Explore creative projects to build with your kit</p>
              <Link href="#" className="text-blue-500 hover:underline mt-2 inline-block">
                Browse Projects
              </Link>
            </div>
          </div>
        </div>

        {/* Progress Tracking */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Your Progress</h2>
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                  Course Progress
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold inline-block text-blue-600">
                  0%
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
              <div
                style={{ width: "0%" }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DRMLearn;
