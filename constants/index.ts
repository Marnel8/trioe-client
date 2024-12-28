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
	},
];
