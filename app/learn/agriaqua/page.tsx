"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const AgriAquaLearn = () => {
  const modules = [
    {
      title: "Introduction to Agri-Aqua Technology",
      description: "Understanding the basics of agricultural and aquaculture technology",
      duration: "1 hour",
      level: "Beginner"
    },
    {
      title: "Sensor Implementation",
      description: "Setting up and calibrating environmental monitoring sensors",
      duration: "2 hours",
      level: "Intermediate"
    },
    {
      title: "Automated Systems",
      description: "Building automated irrigation and feeding systems",
      duration: "2.5 hours",
      level: "Intermediate"
    },
    {
      title: "Data Analytics",
      description: "Analyzing and interpreting agricultural and aquaculture data",
      duration: "2 hours",
      level: "Advanced"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AGRI-AQUA Kit Learning Path</h1>
          <p className="text-xl text-gray-600">
            Master smart farming and aquaculture technology with our specialized curriculum
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
                  <span className={`text-sm px-3 py-1 rounded-full ${
                    module.level === "Advanced" 
                      ? "bg-red-100 text-red-800"
                      : module.level === "Intermediate"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-blue-100 text-blue-800"
                  }`}>
                    {module.level}
                  </span>
                </div>
                <button className="mt-4 w-full bg-gradient-to-r from-green-500 to-teal-500 text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity">
                  Start Module
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Practical Applications */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
          <h2 className="text-2xl font-bold mb-4">Practical Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Smart Farm Setup</h3>
              <p className="text-gray-600">Learn to set up an automated farming system</p>
              <Link href="#" className="text-green-500 hover:underline mt-2 inline-block">
                View Guide
              </Link>
            </div>
            <div className="border p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Aquaculture Monitoring</h3>
              <p className="text-gray-600">Monitor and maintain aquaculture environments</p>
              <Link href="#" className="text-green-500 hover:underline mt-2 inline-block">
                Start Tutorial
              </Link>
            </div>
            <div className="border p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Data Dashboard</h3>
              <p className="text-gray-600">Set up your monitoring dashboard</p>
              <Link href="#" className="text-green-500 hover:underline mt-2 inline-block">
                Configure Dashboard
              </Link>
            </div>
          </div>
        </div>

        {/* Progress Tracking */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Your Learning Progress</h2>
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                  Course Progress
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold inline-block text-green-600">
                  0%
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
              <div
                style={{ width: "0%" }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgriAquaLearn;
