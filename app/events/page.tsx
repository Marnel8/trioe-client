import React from "react";

import { EventCard } from "@/components/EventsCard";

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
          UPCOMING EVENTS
        </h1>
        <p className="mb-12 text-center text-xl text-gray-600">
          Upcoming events of TRIOE and its community.
        </p>
        <div className=" flex flex-col lg:flex-row gap-10 h-screen w-full overflow-hidden bg-gradient-to-r">
          <div className="container mx-auto px-4 py-16">
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
