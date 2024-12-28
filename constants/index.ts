export const navLinks = [
	{
		id: "courses",
		title: "Courses",
		href: "#courses",
	},
	{
		id: "kits",
		title: "Kits",
		href: "#kits",
	},
	{
		id: "events",
		title: "Events",
		href: "/events",
	},
	{
		id: "community",
		title: "Community",
		href: "/community",
	},
];

export const promotions = [
	{
		id: "1",
		img: "/samples/PROMOTION_1.jpg",
	},
	{
		id: "2",
		img: "/samples/PROMOTION_2.jpg",
	},
	{
		id: "3",
		img: "/samples/PROMOTION_3.jpg",
	},
	{
		id: "4",
		img: "/samples/PROMOTION_4.jpg",
	},
	{
		id: "5",
		img: "/samples/PROMOTION_5.jpg",
	},
];

export const kits = [
	{
		id: 1,
		name: "AGRI-AQUA KIT",
		description:
			"This kit is designed for agricultural enthusiasts, featuring an Arduino board and essential components for smart farming.",
		thumbnail: "/samples/KITS_new (1).png",
		difficulty: "Beginner",
		quantity: 1000,
		price: 2500,
		learnRoute: "/learn/drm",
		route: `/kits/${1}`,
		images: [
			"/samples/KITS_new (1).png",
			"/samples/KITS_new (2).png",
			"/samples/KITS_new (3).png",
			"/samples/KITS_new (1).png",
		],
		inclusions: [
			{
				name: "Trioe - Main Board",
				quantity: 1,
				specifications: "Microcontroller board",
			},
			{
				name: "Trioe - General Purpose Strip",
				quantity: 5,
				specifications: "Custom PCB",
			},
			{
				name: "BME280 Sensor (I2C)",
				quantity: 1,
				specifications: "Generic",
			},
			{
				name: "0.96 SSD1306 OLED Display",
				quantity: 1,
				specifications: "Generic, 128X64",
			},
			{
				name: "Servo Motor",
				quantity: 1,
				specifications: "SG90",
			},
			{
				name: "Ultrasonic Sensor",
				quantity: 1,
				specifications: "HCSR04",
			},
			{
				name: "470 Ohm Resistors",
				quantity: 1,
				specifications: "Through Hole; 1/4 Watt",
			},
			{
				name: "10k Ohm Resistors",
				quantity: 1,
				specifications: "Through Hole; 1/4 watt",
			},
			{
				name: "LED Assorted",
				quantity: 1,
				specifications: "5mm Red Green Blue",
			},
			{
				name: "2-pin tactile push buttons",
				quantity: 10,
				specifications: "Generic",
			},
			{
				name: "10k Potentiometer",
				quantity: 2,
				specifications: "Generic",
			},
			{
				name: "Small Side Cutter",
				quantity: 1,
				specifications: "Generic/Plato",
			},
			{
				name: "Soldering Iron with stand and lead",
				quantity: 1,
				specifications: "60W - temp adjustable",
			},
			{
				name: "Dupont cables",
				quantity: 3,
				specifications: "100mm, male to male, female to female",
			},
			{
				name: "Headers",
				quantity: 8,
				specifications: "1x40, 2.54mm, male and female",
			},
		],
		technicalSpecs: [
			{
				key: "Core",
				value: "2",
			},
			{
				key: "Clock",
				value: "Tensilica Xtensa LX106 160-240MHz",
			},
			{
				key: "Bluetooth",
				value: "Yes - Classic & BLE",
			},
			{
				key: "Architecture",
				value: "32-bit",
			},
			{
				key: "WiFi",
				value: "IEEE802.11 b/g/n",
			},
			{
				key: "RAM",
				value: "32KB",
			},
		],
		schematicDiagram: "/samples/KITS_new (1).png",
		category: "Basic",
		relatedCourses: [
			{
				name: "Course 1",
				route: "/course/1",
				image: "/samples/KITS_new (1).png",
				description: "Course 1 description",
			},
		],
	},
	{
		id: 2,
		name: "STEAM KIT",
		description:
			"An engaging kit that combines science, technology, engineering, arts, and mathematics for hands-on learning.",
		thumbnail: "/samples/KITS_new (3).png",
		difficulty: "Beginner",
		quantity: 1000,
		price: 2500,
		learnRoute: "/learn/drm",
		route: `/kits/${2}`,
		images: [
			"/samples/KITS_new (1).png",
			"/samples/KITS_new (2).png",
			"/samples/KITS_new (3).png",
			"/samples/KITS_new (1).png",
		],
		inclusions: [
			{
				name: "Trioe - Main Board",
				quantity: 1,
				specifications: "Microcontroller board",
			},
			{
				name: "Trioe - General Purpose Strip",
				quantity: 5,
				specifications: "Custom PCB",
			},
			{
				name: "BME280 Sensor (I2C)",
				quantity: 1,
				specifications: "Generic",
			},
			{
				name: "0.96 SSD1306 OLED Display",
				quantity: 1,
				specifications: "Generic, 128X64",
			},
			{
				name: "Servo Motor",
				quantity: 1,
				specifications: "SG90",
			},
			{
				name: "Ultrasonic Sensor",
				quantity: 1,
				specifications: "HCSR04",
			},
			{
				name: "470 Ohm Resistors",
				quantity: 1,
				specifications: "Through Hole; 1/4 Watt",
			},
			{
				name: "10k Ohm Resistors",
				quantity: 1,
				specifications: "Through Hole; 1/4 watt",
			},
			{
				name: "LED Assorted",
				quantity: 1,
				specifications: "5mm Red Green Blue",
			},
			{
				name: "2-pin tactile push buttons",
				quantity: 10,
				specifications: "Generic",
			},
			{
				name: "10k Potentiometer",
				quantity: 2,
				specifications: "Generic",
			},
			{
				name: "Small Side Cutter",
				quantity: 1,
				specifications: "Generic/Plato",
			},
			{
				name: "Soldering Iron with stand and lead",
				quantity: 1,
				specifications: "60W - temp adjustable",
			},
			{
				name: "Dupont cables",
				quantity: 3,
				specifications: "100mm, male to male, female to female",
			},
			{
				name: "Headers",
				quantity: 8,
				specifications: "1x40, 2.54mm, male and female",
			},
		],
		technicalSpecs: [
			{
				key: "Core",
				value: "2",
			},
			{
				key: "Clock",
				value: "Tensilica Xtensa LX106 160-240MHz",
			},
			{
				key: "Bluetooth",
				value: "Yes - Classic & BLE",
			},
			{
				key: "Architecture",
				value: "32-bit",
			},
			{
				key: "WiFi",
				value: "IEEE802.11 b/g/n",
			},
			{
				key: "RAM",
				value: "32KB",
			},
		],
		schematicDiagram: "/samples/KITS_new (1).png",
		category: "Basic",
		relatedCourses: [
			{
				name: "Course 1",
				route: "/course/1",
				image: "/samples/KITS_new (1).png",
				description: "Course 1 description",
			},
		],
	},
	{
		id: 3,
		name: "DRM KIT",
		description:
			"A comprehensive kit aimed at developing skills in digital rights management and related technologies.",
		thumbnail: "/samples/KITS_new (2).png",
		difficulty: "Beginner",
		quantity: 1000,
		price: 2500,
		learnRoute: "/learn/drm",
		route: `/kits/${3}`,
		images: [
			"/samples/KITS_new (1).png",
			"/samples/KITS_new (2).png",
			"/samples/KITS_new (3).png",
			"/samples/KITS_new (1).png",
		],
		inclusions: [
			{
				name: "Trioe - Main Board",
				quantity: 1,
				specifications: "Microcontroller board",
			},
			{
				name: "Trioe - General Purpose Strip",
				quantity: 5,
				specifications: "Custom PCB",
			},
			{
				name: "BME280 Sensor (I2C)",
				quantity: 1,
				specifications: "Generic",
			},
			{
				name: "0.96 SSD1306 OLED Display",
				quantity: 1,
				specifications: "Generic, 128X64",
			},
			{
				name: "Servo Motor",
				quantity: 1,
				specifications: "SG90",
			},
			{
				name: "Ultrasonic Sensor",
				quantity: 1,
				specifications: "HCSR04",
			},
			{
				name: "470 Ohm Resistors",
				quantity: 1,
				specifications: "Through Hole; 1/4 Watt",
			},
			{
				name: "10k Ohm Resistors",
				quantity: 1,
				specifications: "Through Hole; 1/4 watt",
			},
			{
				name: "LED Assorted",
				quantity: 1,
				specifications: "5mm Red Green Blue",
			},
			{
				name: "2-pin tactile push buttons",
				quantity: 10,
				specifications: "Generic",
			},
			{
				name: "10k Potentiometer",
				quantity: 2,
				specifications: "Generic",
			},
			{
				name: "Small Side Cutter",
				quantity: 1,
				specifications: "Generic/Plato",
			},
			{
				name: "Soldering Iron with stand and lead",
				quantity: 1,
				specifications: "60W - temp adjustable",
			},
			{
				name: "Dupont cables",
				quantity: 3,
				specifications: "100mm, male to male, female to female",
			},
			{
				name: "Headers",
				quantity: 8,
				specifications: "1x40, 2.54mm, male and female",
			},
		],
		technicalSpecs: [
			{
				key: "Core",
				value: "2",
			},
			{
				key: "Clock",
				value: "Tensilica Xtensa LX106 160-240MHz",
			},
			{
				key: "Bluetooth",
				value: "Yes - Classic & BLE",
			},
			{
				key: "Architecture",
				value: "32-bit",
			},
			{
				key: "WiFi",
				value: "IEEE802.11 b/g/n",
			},
			{
				key: "RAM",
				value: "32KB",
			},
		],
		schematicDiagram: "/samples/KITS_new (1).png",
		category: "Intermediate",
		relatedCourses: [
			{
				name: "Course 1",
				route: "/course/1",
				image: "/samples/KITS_new (1).png",
				description: "Course 1 description",
			},
		],
	},
];

export const actuators = [
	{
		id: "servo-motor",
		name: "Servo Motor (SG90 Micro Servo)",
		image: "/placeholder.svg?height=400&width=600",
		detail:
			"A servo motor is a compact and efficient actuator commonly used for precise position control in robotics, automation, and electronics projects. It uses PWM (Pulse Width Modulation) signals to control the angle of rotation.",
		uploadedDate: "December 27, 2024",
		category: "Actuators - Motion Control",
		tags: [
			"Servo Motor",
			"SG90",
			"Actuator",
			"Robotics",
			"Arduino",
			"IoT",
			"Embedded Systems",
		],
		pinDescription: [
			{ pin: "VCC", description: "Power supply (4.8V - 6V)" },
			{ pin: "GND", description: "Ground (-)" },
			{ pin: "SIGNAL", description: "PWM control signal" },
		],
		specs: [
			{ key: "Operating Voltage", value: "4.8V to 6V" },
			{ key: "Angle Range", value: "0° to 180° (standard servos)" },
			{ key: "Operating Speed", value: "0.1 sec/60° at 4.8V" },
			{ key: "Torque", value: "1.8 kg-cm (at 4.8V)" },
			{ key: "Control Signal", value: "PWM (Pulse Width Modulation)" },
			{ key: "Weight", value: "~9g (SG90 Micro Servo)" },
			{ key: "Dimensions", value: "22.2mm x 11.8mm x 31mm" },
		],
		sampleCode: {
			language: "cpp",
			code: `#include <Servo.h>\n\nServo myServo;  // Create a servo object\n\nvoid setup() {\n  myServo.attach(9);  // Attach the servo to digital pin 9\n}\n\nvoid loop() {\n  for (int angle = 0; angle <= 180; angle += 1) { // Move from 0° to 180°\n    myServo.write(angle);\n    delay(15); // Wait 15ms for the servo to reach the position\n  }\n  for (int angle = 180; angle >= 0; angle -= 1) { // Move from 180° to 0°\n    myServo.write(angle);\n    delay(15);\n  }\n}`,
		},
		crashCourse: {
			objective:
				"Teach learners how to use a servo motor to control angles and positions precisely with an Arduino microcontroller.",
			materialsRequired: [
				"Servo Motor (e.g., SG90 Micro Servo)",
				"Arduino Uno (or any compatible microcontroller)",
				"Breadboard and jumper wires",
				"USB cable for programming the Arduino",
				"External power supply (if controlling multiple or large servo motors)",
			],
			steps: [
				{
					title: "Understanding the Servo Motor",
					content: [
						"A servo motor is a rotary actuator that allows precise control of angular positions",
						"Uses a potentiometer and control circuitry for feedback",
						"Key Pins: VCC (power), GND (ground), SIGNAL (PWM control)",
					],
				},
				{
					title: "Circuit Setup",
					content: [
						"Connect VCC to Arduino 5V",
						"Connect GND to Arduino GND",
						"Connect Signal to Digital Pin 9",
					],
				},
				{
					title: "Programming",
					content: [
						"Install the Servo library in Arduino IDE",
						"Write basic control code",
						"Test different positions and speeds",
					],
				},
			],
		},
		videoLink: "https://youtube.com/example",
		downloads: 1234,
		likes: 567,
	},
	{
		id: "led",
		name: "Light Emitting Diode (LED)",
		image: "/actuators/led.jpg",
		detail:
			"An LED (Light Emitting Diode) is a semiconductor device that emits light when an electric current flows through it. LEDs are energy-efficient, durable, and widely used for indicators, displays, and lighting applications.",
		uploadedDate: "December 27, 2024",
		category: "Actuators - Light Control",
		tags: [
			"LED",
			"Light Control",
			"Arduino",
			"IoT",
			"Embedded Systems",
			"Indicators",
		],
		pinDescription: [
			{ pin: "Anode (+)", description: "Positive terminal (longer leg)" },
			{ pin: "Cathode (-)", description: "Negative terminal (shorter leg)" },
		],
		specs: [
			{ key: "Operating Voltage", value: "2V - 3.3V (depends on color)" },
			{ key: "Current Rating", value: "10mA - 20mA" },
			{ key: "Luminous Intensity", value: "Varies based on type and color" },
			{
				key: "Colors Available",
				value: "Red, Green, Blue, Yellow, White, etc.",
			},
			{ key: "Lifetime", value: "~50,000 hours" },
			{ key: "Forward Voltage (Red)", value: "~1.8V - 2.2V" },
			{ key: "Forward Voltage (Green/Blue)", value: "~3.0V - 3.3V" },
		],
		sampleCode: {
			language: "cpp",
			code: `#define LED_PIN 13  // Define the pin connected to the LED\n\nvoid setup() {\n  pinMode(LED_PIN, OUTPUT);  // Set the LED pin as an output\n}\n\nvoid loop() {\n  digitalWrite(LED_PIN, HIGH); // Turn the LED on\n  delay(1000);                // Wait for 1 second\n  digitalWrite(LED_PIN, LOW);  // Turn the LED off\n  delay(1000);                // Wait for 1 second\n}`,
		},
		crashCourse: {
			objective:
				"Teach learners how to control an LED using an Arduino microcontroller.",
			materialsRequired: [
				"LED (Light Emitting Diode)",
				"Arduino Uno (or any compatible microcontroller)",
				"Breadboard and jumper wires",
				"220Ω resistor (to limit current)",
				"USB cable for programming the Arduino",
			],
			steps: [
				{
					title: "Understanding the LED",
					content: [
						"LEDs emit light when an electric current flows through them",
						"The Anode (+) is connected to the positive voltage",
						"The Cathode (-) is connected to ground (GND)",
						"Always use a current-limiting resistor",
					],
				},
				{
					title: "Circuit Setup",
					content: [
						"Insert the LED into the breadboard",
						"Connect Anode to Arduino pin 13 through 220Ω resistor",
						"Connect Cathode to Arduino GND",
					],
				},
				{
					title: "Programming",
					content: [
						"Write basic blink code",
						"Experiment with different patterns",
						"Try varying brightness with PWM",
					],
				},
			],
		},
		videoLink: "https://youtube.com/example",
		downloads: 2345,
		likes: 890,
	},
	{
		id: "relay-module",
		name: "Relay Module (5V Single-Channel)",
		image: "/placeholder.svg?height=400&width=600",
		detail:
			"A relay is an electrically operated switch that allows a low-power control signal to switch a high-power device, such as a light bulb, fan, or motor. Relay modules are widely used in automation, IoT projects, and home control systems.",
		uploadedDate: "December 27, 2024",
		category: "Actuators - Switching Devices",
		tags: [
			"Relay Module",
			"Switch",
			"Arduino",
			"IoT",
			"Embedded Systems",
			"Automation",
		],
		pinDescription: [
			{ pin: "VCC", description: "Power supply (5V)" },
			{ pin: "GND", description: "Ground (-)" },
			{ pin: "IN", description: "Control signal from microcontroller" },
			{ pin: "COM", description: "Common pin for the relay switch" },
			{
				pin: "NO",
				description: "Normally open (connected to COM when relay is activated)",
			},
			{
				pin: "NC",
				description:
					"Normally closed (connected to COM when relay is deactivated)",
			},
		],
		specs: [
			{ key: "Operating Voltage", value: "5V" },
			{ key: "Trigger Current", value: "~15-20mA" },
			{
				key: "Relay Type",
				value: "Single-Channel SPDT (Single Pole Double Throw)",
			},
			{ key: "Max Load AC", value: "250V @ 10A" },
			{ key: "Max Load DC", value: "30V @ 10A" },
			{ key: "Optocoupler Isolation", value: "Yes (for safer operation)" },
			{ key: "Dimensions", value: "50mm x 26mm x 18mm" },
		],
		sampleCode: {
			language: "cpp",
			code: `#define RELAY_PIN 8  // Define the pin connected to the relay module\n\nvoid setup() {\n  pinMode(RELAY_PIN, OUTPUT);  // Set the relay pin as an output\n}\n\nvoid loop() {\n  digitalWrite(RELAY_PIN, HIGH); // Turn the relay ON\n  delay(2000);                  // Wait for 2 seconds\n  digitalWrite(RELAY_PIN, LOW);  // Turn the relay OFF\n  delay(2000);                  // Wait for 2 seconds\n}`,
		},
		crashCourse: {
			objective:
				"Teach learners how to use a relay module to control high-power devices with a low-power microcontroller signal.",
			materialsRequired: [
				"5V Relay Module",
				"Arduino Uno (or any compatible microcontroller)",
				"Breadboard and jumper wires",
				"Light bulb or other load",
				"Lamp holder",
				"External power supply",
				"Multimeter (optional)",
				"Safety gloves",
			],
			steps: [
				{
					title: "Understanding the Relay",
					content: [
						"A relay is an electrically operated switch",
						"Control pins: VCC, GND, and IN connect to microcontroller",
						"Switching pins: COM, NO, and NC for high-power devices",
						"Understand the difference between NO and NC connections",
					],
				},
				{
					title: "Circuit Setup",
					content: [
						"Connect VCC to Arduino 5V",
						"Connect GND to Arduino GND",
						"Connect IN to Arduino digital pin 8",
						"Connect load between power source and COM/NO pins",
					],
				},
				{
					title: "Safety Considerations",
					content: [
						"Always use proper insulation",
						"Wear safety gloves when working with high voltage",
						"Double-check all connections before powering on",
						"Keep high and low voltage wiring separate",
					],
				},
			],
		},
		videoLink: "https://youtube.com/example",
		downloads: 1567,
		likes: 432,
	},
];
