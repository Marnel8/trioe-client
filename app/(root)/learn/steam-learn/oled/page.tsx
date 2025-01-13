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
    title: "OLED Display Setup",
    content: [
      "Understanding OLED displays",
      "I2C communication setup",
      "Display initialization",
      "Basic configuration",
    ],
    code: `
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64
#define OLED_RESET -1

Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);

void setup() {
  Serial.begin(9600);
  
  if(!display.begin(SSD1306_SWITCHCAPVCC, 0x3C)) {
    Serial.println(F("SSD1306 allocation failed"));
    for(;;);
  }
  
  display.display();
  delay(2000);
  display.clearDisplay();
}
    `,
  },
  {
    title: "Drawing Shapes",
    content: [
      "Basic geometric shapes",
      "Lines and rectangles",
      "Circles and triangles",
      "Custom patterns",
    ],
    code: `
void drawShapes() {
  display.clearDisplay();

  // Draw a rectangle
  display.drawRect(10, 10, 50, 30, WHITE);
  
  // Draw a filled circle
  display.fillCircle(90, 25, 15, WHITE);
  
  // Draw a triangle
  display.drawTriangle(
    60, 50,    // x0, y0
    80, 30,    // x1, y1
    100, 50,   // x2, y2
    WHITE
  );
  
  display.display();
}

void loop() {
  drawShapes();
  delay(2000);
}
    `,
  },
  {
    title: "Displaying Text",
    content: [
      "Font selection",
      "Text positioning",
      "Text size and style",
      "Scrolling text",
    ],
    code: `
void displayText() {
  display.clearDisplay();
  
  // Set text size and color
  display.setTextSize(2);
  display.setTextColor(WHITE);
  
  // Position cursor
  display.setCursor(0,0);
  display.println("Hello,");
  
  display.setTextSize(1);
  display.println("World!");
  
  // Scrolling text
  display.startscrollright(0x00, 0x0F);
  display.display();
}

void scrollingMessage(const char *message) {
  display.clearDisplay();
  display.setTextSize(2);
  display.setTextColor(WHITE);
  display.setCursor(0,0);
  display.println(message);
  display.display();
  
  // Scroll left
  display.startscrollleft(0x00, 0x0F);
  delay(2000);
  display.stopscroll();
}
    `,
  },
  {
    title: "Creating Animations",
    content: [
      "Frame-by-frame animation",
      "Sprite movement",
      "Transition effects",
      "Animation timing",
    ],
    code: `
const unsigned char PROGMEM logo_bmp[] = {
  // Your bitmap data here
};

void animateBitmap() {
  int16_t x = 0;
  int16_t y = 0;
  
  for(int i = 0; i < SCREEN_WIDTH - 32; i++) {
    display.clearDisplay();
    display.drawBitmap(i, y, logo_bmp, 32, 32, WHITE);
    display.display();
    delay(50);
  }
}

void bounceAnimation() {
  static int16_t x = 0;
  static int16_t y = 0;
  static int8_t dx = 2;
  static int8_t dy = 1;
  
  display.clearDisplay();
  
  // Update position
  x += dx;
  y += dy;
  
  // Bounce off edges
  if (x <= 0 || x >= SCREEN_WIDTH-10) dx *= -1;
  if (y <= 0 || y >= SCREEN_HEIGHT-10) dy *= -1;
  
  display.fillRect(x, y, 10, 10, WHITE);
  display.display();
}
    `,
  },
  {
    title: "Building User Interfaces",
    content: [
      "Menu systems",
      "Progress bars",
      "Status indicators",
      "Interactive elements",
    ],
    code: `
// Simple menu system
const char* menuItems[] = {"Settings", "Info", "Start", "Exit"};
int selectedItem = 0;

void drawMenu() {
  display.clearDisplay();
  display.setTextSize(1);
  display.setTextColor(WHITE);
  
  for(int i = 0; i < 4; i++) {
    display.setCursor(10, i * 12);
    if(i == selectedItem) {
      display.print("> ");
    } else {
      display.print("  ");
    }
    display.println(menuItems[i]);
  }
  
  display.display();
}

void drawProgressBar(int progress) {
  display.drawRect(0, 32, 128, 10, WHITE);
  display.fillRect(2, 34, (progress * 124) / 100, 6, WHITE);
  display.display();
}

void loop() {
  drawMenu();
  // Handle button inputs to navigate menu
  if(digitalRead(BUTTON_UP)) selectedItem--;
  if(digitalRead(BUTTON_DOWN)) selectedItem++;
  selectedItem = constrain(selectedItem, 0, 3);
  delay(100);
}
    `,
  }
];

export default function OLEDPage() {
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
        <h1 className="text-3xl font-bold mb-2">OLED Display Programming</h1>
        <p className="text-gray-600">
          Create beautiful visual interfaces with OLED displays
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
