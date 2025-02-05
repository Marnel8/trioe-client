import React from "react";

import { EventCard } from "@/components/EventsCard";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Events",
	description:
		"Discover and participate in TRIOE community events. Join us for workshops, seminars, and hands-on experiences to enhance your IoE skills.",
	openGraph: {
		title: "TRIOE Events | Connect, Learn, and Innovate",
		description:
			"Explore upcoming TRIOE events. From workshops to tech showcases, find opportunities to expand your IoE knowledge and network with fellow innovators.",
		url: "https://trioe.dev/events",
		type: "website",
		images: [
			{
				url: "https://trioe.dev/samples/event1.jpg",
				width: 1200,
				height: 630,
				alt: "TRIOE Event - Experience TRIOE: Transform Your IoE Skills",
			},
		],
	},
	keywords: [
		"TRIOE events",
		"IoE workshops",
		"technology seminars",
		"STEM education events",
		"IoE skill development",
		"Batangas State University events",
		"STEERHub",
		"IoE community gatherings",
	],
};

const events = [
	{
		id: 1,
		title: "Experience TRIOE: Transform Your IoE Skills",
		date: "March 03, 2025",
		time: "8:00 AM - 5:00 PM",
		location:
			"Engineering Simulation Laboratory, 3rd Floor, STEERHub, Batangas State University,  Alangilan  Campus",
		description: "Join, Connect, Innovate",
		category: "Technology",
		thumbnail: "/samples/event1.jpg",
	},
];

const EventsPage = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br">
			<div className="container mx-auto px-4 py-16">
				<h1 className="mb-8 text-center text-4xl font-bold text-gray-800">
					EVENTS
				</h1>
				<p className="mb-12 text-center text-xl text-gray-600">
					Events of TRIOE and its Community.
				</p>
				<div className=" flex flex-col lg:flex-row gap-10 h-screen w-full overflow-hidden bg-gradient-to-r">
					<div className="container mx-auto px-4 py-16">
						<div className="flex flex-col justify-center items-center ">
							{events.map((event) => (
								<EventCard key={event.id} {...event} />
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EventsPage;
