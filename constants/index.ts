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
				id: "trioe-main-board",
				name: "Trioe - Main Board",
				quantity: 1,
				specifications: "Microcontroller board",
				type: "other",
				category: "actuators",
			},
			{
				id: "trioe-gp-strip",
				name: "Trioe - General Purpose Strip",
				quantity: 5,
				specifications: "Custom PCB",
				type: "other",
				category: "actuators",
			},
			{
				id: "bme280",
				name: "BME280 Sensor (I2C)",
				quantity: 1,
				specifications: "Generic",
				type: "sensor",
				category: "sensors",
			},
			{
				id: "oled-display",
				name: "0.96 SSD1306 OLED Display",
				quantity: 1,
				specifications: "Generic, 128X64",
				type: "actuator",
				category: "actuators",
			},
			{
				id: "servo-motor",
				name: "Servo Motor",
				quantity: 1,
				specifications: "SG90 Micro Servo",
				type: "actuator",
				category: "actuators",
			},
			{
				id: "ultrasonic-sensor",
				name: "Ultrasonic Sensor",
				quantity: 1,
				specifications: "HCSR04",
				type: "sensor",
				category: "sensors",
			},
			{
				id: "dht11",
				name: "DHT11 Temperature and Humidity Sensor",
				quantity: 1,
				specifications: "Generic",
				type: "sensor",
				category: "sensors",
			},
			{
				id: "soil-moisture-sensor",
				name: "Soil Moisture Sensor",
				quantity: 1,
				specifications: "Generic",
				type: "sensor",
				category: "sensors",
			},
			{
				id: "water-pump",
				name: "Mini Water Pump",
				quantity: 1,
				specifications: "3-6V DC",
				type: "actuator",
				category: "actuators",
			},
			{
				id: "relay-module",
				name: "Relay Module",
				quantity: 1,
				specifications: "5V, 1 Channel",
				type: "actuator",
				category: "actuators",
			},
			{
				id: "jumper-wires",
				name: "Jumper Wires",
				quantity: 40,
				specifications: "Male to Male, Female to Female, Male to Female",
				type: "other",
				category: "actuators",
			},
			{
				id: "breadboard",
				name: "Breadboard",
				quantity: 1,
				specifications: "830 points",
				type: "other",
				category: "actuators",
			},
			{
				id: "usb-cable",
				name: "USB Cable",
				quantity: 1,
				specifications: "Type A to Type B",
				type: "other",
				category: "actuators",
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
				id: "trioe-main-board",
				name: "Trioe - Main Board",
				quantity: 1,
				specifications: "Microcontroller board",
				type: "other",
				category: "actuators",
			},
			{
				id: "trioe-gp-strip",
				name: "Trioe - General Purpose Strip",
				quantity: 5,
				specifications: "Custom PCB",
				type: "other",
				category: "actuators",
			},
			{
				id: "bme280",
				name: "BME280 Sensor (I2C)",
				quantity: 1,
				specifications: "Generic",
				type: "sensor",
				category: "sensors",
			},
			{
				id: "oled-display",
				name: "0.96 SSD1306 OLED Display",
				quantity: 1,
				specifications: "Generic, 128X64",
				type: "actuator",
				category: "actuators",
			},
			{
				id: "servo-motor",
				name: "Servo Motor",
				quantity: 1,
				specifications: "SG90",
				type: "actuator",
				category: "actuators",
			},
			{
				id: "ultrasonic-sensor",
				name: "Ultrasonic Sensor",
				quantity: 1,
				specifications: "HCSR04",
				type: "sensor",
				category: "sensors",
			},
			{
				id: "470-ohm-resistors",
				name: "470 Ohm Resistors",
				quantity: 1,
				specifications: "Through Hole; 1/4 Watt",
				type: "other",
				category: "actuators",
			},
			{
				id: "10k-ohm-resistors",
				name: "10k Ohm Resistors",
				quantity: 1,
				specifications: "Through Hole; 1/4 watt",
				type: "other",
				category: "actuators",
			},
			{
				id: "led-assorted",
				name: "LED Assorted",
				quantity: 1,
				specifications: "5mm Red Green Blue",
				type: "other",
				category: "actuators",
			},
			{
				id: "tactile-push-buttons",
				name: "2-pin tactile push buttons",
				quantity: 10,
				specifications: "Generic",
				type: "other",
				category: "actuators",
			},
			{
				id: "10k-potentiometer",
				name: "10k Potentiometer",
				quantity: 2,
				specifications: "Generic",
				type: "other",
				category: "actuators",
			},
			{
				id: "small-side-cutter",
				name: "Small Side Cutter",
				quantity: 1,
				specifications: "Generic/Plato",
				type: "other",
				category: "actuators",
			},
			{
				id: "soldering-iron",
				name: "Soldering Iron with stand and lead",
				quantity: 1,
				specifications: "60W - temp adjustable",
				type: "other",
				category: "actuators",
			},
			{
				id: "dupont-cables",
				name: "Dupont cables",
				quantity: 3,
				specifications: "100mm, male to male, female to female",
				type: "other",
				category: "actuators",
			},
			{
				id: "headers",
				name: "Headers",
				quantity: 8,
				specifications: "1x40, 2.54mm, male and female",
				type: "other",
				category: "actuators",
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
				id: "trioe-main-board",
				name: "Trioe - Main Board",
				quantity: 1,
				specifications: "Microcontroller board",
				type: "other",
				category: "actuators",
			},
			{
				id: "trioe-gp-strip",
				name: "Trioe - General Purpose Strip",
				quantity: 5,
				specifications: "Custom PCB",
				type: "other",
				category: "actuators",
			},
			{
				id: "bme280",
				name: "BME280 Sensor (I2C)",
				quantity: 1,
				specifications: "Generic",
				type: "sensor",
				category: "sensors",
			},
			{
				id: "oled-display",
				name: "0.96 SSD1306 OLED Display",
				quantity: 1,
				specifications: "Generic, 128X64",
				type: "actuator",
				category: "actuators",
			},
			{
				id: "servo-motor",
				name: "Servo Motor",
				quantity: 1,
				specifications: "SG90",
				type: "actuator",
				category: "actuators",
			},
			{
				id: "ultrasonic-sensor",
				name: "Ultrasonic Sensor",
				quantity: 1,
				specifications: "HCSR04",
				type: "sensor",
				category: "sensors",
			},
			{
				id: "470-ohm-resistors",
				name: "470 Ohm Resistors",
				quantity: 1,
				specifications: "Through Hole; 1/4 Watt",
				type: "other",
				category: "actuators",
			},
			{
				id: "10k-ohm-resistors",
				name: "10k Ohm Resistors",
				quantity: 1,
				specifications: "Through Hole; 1/4 watt",
				type: "other",
				category: "actuators",
			},
			{
				id: "led",
				name: "LED Assorted",
				quantity: 1,
				specifications: "5mm Red Green Blue",
				type: "actuator",
				category: "actuators",
			},
			{
				id: "tactile-push-buttons",
				name: "2-pin tactile push buttons",
				quantity: 10,
				specifications: "Generic",
				type: "other",
				category: "actuators",
			},
			{
				id: "10k-potentiometer",
				name: "10k Potentiometer",
				quantity: 2,
				specifications: "Generic",
				type: "other",
				category: "actuators",
			},
			{
				id: "small-side-cutter",
				name: "Small Side Cutter",
				quantity: 1,
				specifications: "Generic/Plato",
				type: "other",
				category: "actuators",
			},
			{
				id: "soldering-iron",
				name: "Soldering Iron with stand and lead",
				quantity: 1,
				specifications: "60W - temp adjustable",
				type: "other",
				category: "actuators",
			},
			{
				id: "dupont-cables",
				name: "Dupont cables",
				quantity: 3,
				specifications: "100mm, male to male, female to female",
				type: "other",
				category: "actuators",
			},
			{
				id: "headers",
				name: "Headers",
				quantity: 8,
				specifications: "1x40, 2.54mm, male and female",
				type: "other",
				category: "actuators",
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
						"A servo motor is a compact and efficient actuator commonly used for precise position control in robotics, automation, and electronics projects.",
						"Uses PWM (Pulse Width Modulation) signals to control the angle of rotation.",
						"Key Pins: VCC: Power supply (4.8V - 6V), GND: Ground, SIGNAL: PWM control signal.",
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
	{
		id: "dht11",
		name: "DHT11 Temperature and Humidity Sensor",
		image: "/placeholder.svg?height=400&width=600",
		detail:
			"The DHT11 is a widely used sensor for measuring temperature and humidity. It is commonly used in weather stations, IoT projects, and environmental monitoring systems.",
		uploadedDate: "December 27, 2024",
		category: "Sensors - Environmental Monitoring",
		tags: [
			"DHT11",
			"Temperature",
			"Humidity",
			"Arduino",
			"IoT",
			"Embedded Systems",
		],
		pinDescription: [
			{
				pin: "VCC",
				description: "Power supply (3.3V or 5V, depending on the module)",
			},
			{ pin: "GND", description: "Ground (-)" },
			{ pin: "DATA", description: "Data communication pin" },
		],
		specs: [
			{ key: "Operating Voltage", value: "3.3V or 5V" },
			{ key: "Current Consumption", value: "< 2.5mA" },
			{ key: "Temperature Range", value: "-40°C to +85°C, ±2°C accuracy" },
			{ key: "Humidity Range", value: "0% to 100%, ±5% accuracy" },
			{ key: "Dimensions", value: "15mm x 15mm x 5mm" },
		],
		sampleCode: {
			language: "cpp",
			code: `#include <DHT.h>
#define DHTPIN 2     // Pin where the DHT11 is connected
#define DHTTYPE DHT11   // DHT 11
DHT dht(DHTPIN, DHTTYPE);
void setup() {
	Serial.begin(9600);
	dht.begin();
}
void loop() {
	float h = dht.readHumidity();
	float t = dht.readTemperature();
	if (isnan(h) || isnan(t)) {
		Serial.println("Failed to read from DHT sensor!");
		return;
	}
	float hic = dht.computeHeatIndex(t, h, false);
	Serial.print("Humidity: ");
	Serial.print(h);
	Serial.print(" %\t");
	Serial.print("Temperature: ");
	Serial.print(t);
	Serial.print(" *C\t");
	Serial.print("Heat index: ");
	Serial.print(hic);
	Serial.println(" *C");
	delay(2000);
}`,
		},
		crashCourse: {
			objective:
				"Teach learners how to use the DHT11 sensor module to measure temperature and humidity, and integrate its readings with an Arduino microcontroller.",
			materialsRequired: [
				"DHT11 Temperature and Humidity Sensor Module",
				"Arduino Uno (or any compatible microcontroller)",
				"Breadboard and jumper wires",
				"USB cable for programming the Arduino",
				"Computer with Arduino IDE installed",
			],
			steps: [
				{
					title: "Understand the DHT11 Sensor",
					content: [
						"The DHT11 measures: Temperature in degrees Celsius, Humidity as a percentage.",
						"Pin Description: VCC: Power supply (3.3V or 5V), GND: Ground, DATA: Data communication pin.",
					],
				},
				{
					title: "Set Up the Circuit",
					content: [
						"Connect the VCC pin to the Arduino's 3.3V (or 5V, if supported) pin.",
						"Connect the GND pin to the Arduino's GND.",
						"Connect the DATA pin to the Arduino's digital pin 2.",
					],
				},
				{
					title: "Install the DHT Library",
					content: [
						"Open the Arduino IDE.",
						"Go to Sketch > Include Library > Manage Libraries.",
						"Search for 'DHT sensor library' and install the library.",
						"Also, install the 'DHT library' if prompted.",
					],
				},
			],
		},
		videoLink: "https://youtube.com/example",
		downloads: 1234,
		likes: 567,
	},
];

export const sensors = [
	{
		id: "bme280",
		name: "BME280 Environmental Sensor Module",
		image: "/placeholder.svg?height=400&width=600",
		detail:
			"The BME280 is a highly accurate sensor that measures temperature, humidity, and atmospheric pressure. It is commonly used in weather stations, IoT projects, and environmental monitoring systems.",
		uploadedDate: "December 27, 2024",
		category: "Sensors - Environmental Monitoring",
		tags: [
			"BME280",
			"Environmental Sensor",
			"Temperature",
			"Humidity",
			"Pressure",
			"Arduino",
			"IoT",
			"Embedded Systems",
		],
		pinDescription: [
			{
				pin: "VCC",
				description: "Power supply (3.3V or 5V, depending on the module)",
			},
			{ pin: "GND", description: "Ground (-)" },
			{ pin: "SDA", description: "I2C data line" },
			{ pin: "SCL", description: "I2C clock line" },
		],
		specs: [
			{
				key: "Operating Voltage",
				value: "1.8V - 3.6V (or 5V if module includes a voltage regulator)",
			},
			{ key: "Communication Protocols", value: "I2C and SPI" },
			{ key: "Temperature Range", value: "-40°C to +85°C, ±1°C accuracy" },
			{ key: "Humidity Range", value: "0% to 100%, ±3% accuracy" },
			{ key: "Pressure Range", value: "300 hPa to 1100 hPa, ±1 hPa accuracy" },
			{ key: "Low Power Consumption", value: "< 1 µA in sleep mode" },
			{ key: "Dimensions", value: "2.5mm x 2.5mm x 0.93mm (sensor chip)" },
		],
		sampleCode: {
			language: "cpp",
			code: `#include <Wire.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_BME280.h>
#define BME280_ADDRESS 0x76  // I2C address of the BME280 sensor
Adafruit_BME280 bme; // Create an instance of the BME280 sensor
void setup() {
	Serial.begin(9600);
	if (!bme.begin(BME280_ADDRESS)) {
	  Serial.println("Could not find a valid BME280 sensor, check wiring!");
	  while (1);
	}
}
void loop() {
	Serial.print("Temperature: ");
	Serial.print(bme.readTemperature());
	Serial.println(" °C");
	Serial.print("Humidity: ");
	Serial.print(bme.readHumidity());
	Serial.println(" %");
	Serial.print("Pressure: ");
	Serial.print(bme.readPressure() / 100.0F);
	Serial.println(" hPa");
	delay(1000);
}`,
		},
		crashCourse: {
			objective:
				"Teach learners how to use the BME280 sensor module to measure temperature, humidity, and atmospheric pressure, and integrate its readings with an Arduino microcontroller.",
			materialsRequired: [
				"BME280 Sensor Module",
				"Arduino Uno (or any compatible microcontroller)",
				"Breadboard and jumper wires",
				"USB cable for programming the Arduino",
				"Computer with Arduino IDE installed",
			],
			steps: [
				{
					title: "Understand the BME280 Sensor",
					content: [
						"The BME280 measures: Temperature in degrees Celsius, Humidity as a percentage, Pressure in hPa (hectopascal).",
						"Communication Protocols: I2C (2-wire communication with SDA and SCL), SPI (optional for advanced users).",
					],
				},
				{
					title: "Set Up the Circuit",
					content: [
						"Connect the VCC pin to the Arduino's 3.3V (or 5V, if supported) pin.",
						"Connect the GND pin to the Arduino's GND.",
						"Connect the SDA pin to the Arduino's A4 pin (for most Arduino boards).",
						"Connect the SCL pin to the Arduino's A5 pin.",
					],
				},
				{
					title: "Install the BME280 Library",
					content: [
						"Open the Arduino IDE.",
						"Go to Sketch > Include Library > Manage Libraries.",
						"Search for 'Adafruit BME280' and install the library.",
						"Also, install the 'Adafruit Unified Sensor' library, if prompted.",
					],
				},
			],
		},
		videoLink: "https://youtube.com/example",
		downloads: 3456,
		likes: 1011,
	},
	{
		id: "ultrasonic-sensor",
		name: "Ultrasonic Sensor Module (HC-SR04)",
		image: "/placeholder.svg?height=400&width=600",
		detail:
			"The HC-SR04 Ultrasonic Sensor is a widely used module for distance measurement. It works by emitting sound waves and calculating the time it takes for the echo to return. This sensor is often used in obstacle detection, robotics, and range-finding applications.",
		uploadedDate: "December 27, 2024",
		category: "Sensors - Distance Measurement",
		tags: [
			"Ultrasonic Sensor",
			"HC-SR04",
			"Arduino",
			"IoT",
			"Distance Measurement",
			"Robotics",
		],
		pinDescription: [
			{ pin: "VCC", description: "Power supply (+5V)" },
			{ pin: "GND", description: "Ground (-)" },
			{ pin: "TRIG", description: "Trigger pin (sends an ultrasonic pulse)" },
			{ pin: "ECHO", description: "Echo pin (receives the reflected wave)" },
		],
		specs: [
			{ key: "Operating Voltage", value: "5V" },
			{ key: "Measuring Range", value: "2cm to 400cm" },
			{ key: "Accuracy", value: "±3mm" },
			{ key: "Trigger Input Signal", value: "10µs TTL pulse" },
			{
				key: "Echo Output Signal",
				value: "TTL pulse proportional to distance",
			},
			{ key: "Dimensions", value: "45mm x 20mm x 15mm" },
		],
		sampleCode: {
			language: "cpp",
			code: `#define TRIG_PIN 9 // Trigger pin connected to digital pin 9
#define ECHO_PIN 10 // Echo pin connected to digital pin 10

void setup() {
	Serial.begin(9600);
	pinMode(TRIG_PIN, OUTPUT);
	pinMode(ECHO_PIN, INPUT);
}

void loop() {
	long duration, distance;

	// Send a 10-microsecond pulse to trigger the sensor
	digitalWrite(TRIG_PIN, LOW);
	delayMicroseconds(2);
	digitalWrite(TRIG_PIN, HIGH);
	delayMicroseconds(10);
	digitalWrite(TRIG_PIN, LOW);

	// Read the echo pulse duration
	duration = pulseIn(ECHO_PIN, HIGH);

	// Calculate the distance in cm
	distance = (duration / 2) / 29.1;

	// Display the distance
	Serial.print("Distance: ");
	Serial.print(distance);
	Serial.println(" cm");

	delay(1000); // Wait for a second before the next reading
}`,
		},
		crashCourse: {
			objective:
				"Teach learners how to use the HC-SR04 ultrasonic sensor module to measure distances and integrate it with an Arduino microcontroller.",
			materialsRequired: [
				"HC-SR04 Ultrasonic Sensor Module",
				"Arduino Uno (or any compatible microcontroller)",
				"Breadboard and jumper wires",
				"USB cable for programming the Arduino",
				"Ruler or tape measure (for calibration and testing)",
			],
			steps: [
				{
					title: "Understand the HC-SR04 Sensor",
					content: [
						"The HC-SR04 emits ultrasonic sound waves and calculates distance based on the time it takes for the echo to return.",
						"Key Pins: TRIG: Trigger pin sends an ultrasonic pulse, ECHO: Echo pin receives the reflected wave.",
					],
				},
				{
					title: "Set Up the Circuit",
					content: [
						"Connect the VCC pin to the Arduino's 5V pin.",
						"Connect the GND pin to the Arduino's GND.",
						"Connect the TRIG pin to Digital Pin 9 on the Arduino.",
						"Connect the ECHO pin to Digital Pin 10.",
					],
				},
				{
					title: "Write and Upload the Code",
					content: [
						"Write the code provided in the sample code section.",
						"Connect the Arduino to your computer via USB.",
						"Select the correct board and COM port in the Arduino IDE.",
						"Click Upload to send the code to the Arduino.",
					],
				},
			],
		},
		videoLink: "https://youtube.com/example",
		downloads: 2345,
		likes: 789,
	},
	{
		id: "dht11",
		name: "DHT11 Temperature and Humidity Sensor",
		image: "/placeholder.svg?height=400&width=600",
		detail:
			"The DHT11 is a widely used sensor for measuring temperature and humidity. It is commonly used in weather stations, IoT projects, and environmental monitoring systems.",
		uploadedDate: "December 27, 2024",
		category: "Sensors - Environmental Monitoring",
		tags: [
			"DHT11",
			"Temperature",
			"Humidity",
			"Arduino",
			"IoT",
			"Embedded Systems",
		],
		pinDescription: [
			{
				pin: "VCC",
				description: "Power supply (3.3V or 5V, depending on the module)",
			},
			{ pin: "GND", description: "Ground (-)" },
			{ pin: "DATA", description: "Data communication pin" },
		],
		specs: [
			{ key: "Operating Voltage", value: "3.3V or 5V" },
			{ key: "Current Consumption", value: "< 2.5mA" },
			{ key: "Temperature Range", value: "-40°C to +85°C, ±2°C accuracy" },
			{ key: "Humidity Range", value: "0% to 100%, ±5% accuracy" },
			{ key: "Dimensions", value: "15mm x 15mm x 5mm" },
		],
		sampleCode: {
			language: "cpp",
			code: `#include <DHT.h>

#define DHTPIN 2     // Pin where the DHT11 is connected
#define DHTTYPE DHT11   // DHT 11

DHT dht(DHTPIN, DHTTYPE);

void setup() {
	Serial.begin(9600);
	dht.begin();
}

void loop() {
	// Reading temperature or humidity takes about 250 milliseconds!
	// Sensor readings may also be up to 2 seconds 'old' (it's a very slow sensor)
	float h = dht.readHumidity();
	// Read temperature as Celsius (the default)
	float t = dht.readTemperature();

	// Check if any reads failed and exit early (to try again)
	if (isnan(h) || isnan(t)) {
		Serial.println("Failed to read from DHT sensor!");
		return;
	}

	// Compute heat index in Celsius (isFahreheit = false)
	float hic = dht.computeHeatIndex(t, h, false);

	Serial.print("Humidity: ");
	Serial.print(h);
	Serial.print(" %\t");
	Serial.print("Temperature: ");
	Serial.print(t);
	Serial.print(" *C\t");
	Serial.print("Heat index: ");
	Serial.print(hic);
	Serial.println(" *C");

	delay(2000);
}`,
		},
		crashCourse: {
			objective:
				"Teach learners how to use the DHT11 sensor module to measure temperature and humidity, and integrate its readings with an Arduino microcontroller.",
			materialsRequired: [
				"DHT11 Temperature and Humidity Sensor Module",
				"Arduino Uno (or any compatible microcontroller)",
				"Breadboard and jumper wires",
				"USB cable for programming the Arduino",
				"Computer with Arduino IDE installed",
			],
			steps: [
				{
					title: "Understand the DHT11 Sensor",
					content: [
						"The DHT11 measures: Temperature in degrees Celsius, Humidity as a percentage.",
						"Pin Description: VCC: Power supply (3.3V or 5V), GND: Ground, DATA: Data communication pin.",
					],
				},
				{
					title: "Set Up the Circuit",
					content: [
						"Connect the VCC pin to the Arduino's 3.3V (or 5V, if supported) pin.",
						"Connect the GND pin to the Arduino's GND.",
						"Connect the DATA pin to the Arduino's digital pin 2.",
					],
				},
				{
					title: "Install the DHT Library",
					content: [
						"Open the Arduino IDE.",
						"Go to Sketch > Include Library > Manage Libraries.",
						"Search for 'DHT sensor library' and install the library.",
						"Also, install the 'DHT library' if prompted.",
					],
				},
			],
		},
		videoLink: "https://youtube.com/example",
		downloads: 1234,
		likes: 567,
	},
	{
		id: "soil-moisture-sensor",
		name: "Soil Moisture Sensor",
		image: "/placeholder.svg?height=400&width=600",
		detail:
			"The soil moisture sensor is used to measure the moisture content of soil. It is commonly used in gardening, agriculture, and environmental monitoring systems.",
		uploadedDate: "December 27, 2024",
		category: "Sensors - Environmental Monitoring",
		tags: ["Soil Moisture Sensor", "Arduino", "IoT", "Embedded Systems"],
		pinDescription: [
			{
				pin: "VCC",
				description: "Power supply (3.3V or 5V, depending on the module)",
			},
			{ pin: "GND", description: "Ground (-)" },
			{ pin: "AO", description: "Analog output signal" },
		],
		specs: [
			{ key: "Operating Voltage", value: "3.3V or 5V" },
			{ key: "Current Consumption", value: "< 2.5mA" },
			{ key: "Moisture Range", value: "0% to 100%" },
			{ key: "Dimensions", value: "15mm x 15mm x 5mm" },
		],
		sampleCode: {
			language: "cpp",
			code: `#include <MoistureSensor.h>

MoistureSensor moistureSensor;

void setup() {
	Serial.begin(9600);
	moistureSensor.begin();
}

void loop() {
	int moisturePercentage = moistureSensor.readPercentage();

	Serial.print("Moisture: ");
	Serial.print(moisturePercentage);
	Serial.println(" %");

	delay(1000);
}`,
		},
		crashCourse: {
			objective:
				"Teach learners how to use the soil moisture sensor to measure soil moisture, and integrate its readings with an Arduino microcontroller.",
			materialsRequired: [
				"Soil Moisture Sensor Module",
				"Arduino Uno (or any compatible microcontroller)",
				"Breadboard and jumper wires",
				"USB cable for programming the Arduino",
				"Computer with Arduino IDE installed",
			],
			steps: [
				{
					title: "Understand the Soil Moisture Sensor",
					content: [
						"The soil moisture sensor measures the moisture content of soil.",
						"Pin Description: VCC: Power supply (3.3V or 5V), GND: Ground, AO: Analog output signal.",
					],
				},
				{
					title: "Set Up the Circuit",
					content: [
						"Connect the VCC pin to the Arduino's 3.3V (or 5V, if supported) pin.",
						"Connect the GND pin to the Arduino's GND.",
						"Connect the AO pin to the Arduino's analog pin A0.",
					],
				},
				{
					title: "Install the Moisture Sensor Library",
					content: [
						"Open the Arduino IDE.",
						"Go to Sketch > Include Library > Manage Libraries.",
						"Search for 'MoistureSensor' and install the library.",
						"Also, install the 'MoistureSensor' library, if prompted.",
					],
				},
			],
		},
		videoLink: "https://youtube.com/example",
		downloads: 1234,
		likes: 567,
	},
];
