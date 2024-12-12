import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";
import { CalendarSearch, Cpu, Users, Book } from "lucide-react";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const features = [
  {
    Icon: Cpu,
    name: "About TRIOE",
    description: "Know more about TRIOE and its mission.",
    href: "/about",
    cta: "Learn more",
    background: <img src="/bento/About.png" className="absolute -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: Book,
    name: "DOCUMENTATION",
    description: "Quickly get started with TRIOE documentation and tutorials.",
    href: "/docs",
    cta: "Learn more",
    background: <img src="/bento/Documentation.png" className="absolute -right-5 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "User Friendly",
    description: "User-friendly interface for your projects.",
    href: "#footer",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: CalendarIcon,
    name: "TRIOE Events",
    description: "Look for upcoming events of TRIOE.",
    href: "/",
    cta: "Learn more",
    background: <img src="/bento/Events.png" className="absolute -right-40 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Users,
    name: "TRIOE Community",
    description:
      "Join the TRIOE community and connect with other IoT enthusiasts.",
    href: "/",
    cta: "Learn more",
    background: <img src="/bento/COMMUNITY.png" className="absolute -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export async function BentoGridComponent() {
  return (
    <BentoGrid className="lg:grid-rows-3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
