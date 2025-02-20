import Image from "next/image";
import type { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About TRIOE",
  description:
    "Learn about TRIOE's mission, platform, and approach to IoT education.",
  openGraph: {
    title: "About TRIOE - Our Mission and Vision",
    description:
      "Learn about TRIOE's innovative approach to IoT education and development",
    type: "website",
    url: "https://trioe.dev/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#EFF6FF] font-geist flex flex-col justify-center items-center px-4">
      <div className="container mx-auto py-16 text-center">
        <h1 className="mb-8 text-4xl font-bold text-gray-800">ABOUT TRIOE</h1>
        <h2 className="mb-12 text-xl text-gray-600">
          TRIOE is a platform for learning and building IoT projects.
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 w-full">
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900">
            TRIOE
          </h1>
          <div className="rounded-3xs bg-gradient-to-r from-blue-300 to-indigo-600 px-6 py-3">
            <span className="text-lg font-medium text-white">
              TINKERING RESOURCE FOR INTERNET-OF-EVERYTHING
            </span>
          </div>
        </div>

        <div className="mt-12 flex flex-col lg:flex-row gap-10 w-full justify-center">
          <Card className="w-full lg:w-1/2 border border-black shadow-lg">
            <CardHeader className="text-center">
              <CardTitle>INTRODUCTION</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                An online learning platform provides an ever-evolving knowledge
                bank for learning Internet of Everything with engaging and
                practical applications. It encourages hands-on learning where
                users can actively explore and innovate within the IoE domain.
                Subscribed users will have an interactive and customizable
                cloud-based dashboard for various sensors and actuators.
              </p>
            </CardContent>
          </Card>

          <Card className="w-full lg:w-1/2 border border-black shadow-lg">
            <CardHeader className="text-center">
              <CardTitle>GAPS</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-left text-gray-600">
                <li>
                  Off-the-shelf IoT and IoE kits mostly lack dedicated tutorials
                  and technical support.
                </li>
                <li>
                  Off-the-shelf boards and distributors lack support for a
                  customizable dashboard for sensor and actuator data from
                  microcontrollers.
                </li>
                <li>
                  Students often get stuck at the academic level due to the lack
                  of real-world deployment support.
                </li>
                <li>
                  Web content on IoE quickly becomes outdated due to the rapid
                  evolution of AI-driven knowledge.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="w-full mt-12">
        <Image
          className="w-full object-cover"
          loading="lazy"
          width={1920}
          height={400}
          alt="TRIOE Banner"
          src="/images/TRIOE-banner.png"
        />
      </div>

      <div className="mt-12 flex flex-col lg:flex-row gap-8 justify-center items-start w-full px-4">
        <Card className="w-full lg:w-1/3 border border-white shadow-lg h-[498px] flex flex-col justify-center hover:border-green-500 group">
          <CardHeader className="text-center">
            <CardTitle className="group-hover:text-green-500">
              CORE VALUES
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center items-center text-center">
            <p className="text-gray-600 text-left">
              • Technological Advancement: We're at the forefront of innovation.
              <br />• Robust Performance: Our products are dependable and
              high-performing.
              <br />• Integrity: We use high-quality components and ethical
              manufacturing practices.
              <br />• Optimized Design: Our products are engineered for
              efficiency and user-friendliness.
              <br />• Excellence: We strive for perfection in every aspect of
              our business.
            </p>
          </CardContent>
        </Card>

        <div className="flex flex-col gap-8 w-full lg:w-2/3">
          <Card className="w-full border border-white shadow-lg hover:border-red-500 group">
            <CardHeader className="text-center">
              <CardTitle className="group-hover:text-red-500">
                MISSION
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6">
              <p className="text-gray-600 text-center mb-4">
                Produce stronger professionals who will soon be the employees or
                <br />
                even stakeholders of the future.
              </p>
              <div className="text-gray-600 text-left">
                <p className="font-semibold">IP Protection Granted Patents:</p>
                <p>Industrial Design Registration No.: 3/2023/050461</p>
                <p>
                  Trade Mark Registration (Ph): Intellectual Property of the Ph
                </p>
                <p>Trademark Registration No.: 4/2023/00511222</p>
              </div>
            </CardContent>
          </Card>

          <Card className="w-full border border-white shadow-lg hover:border-yellow-500 group">
            <CardHeader className="text-center">
              <CardTitle className="group-hover:text-yellow-500">
                VALUE PROPOSITION
              </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center items-center text-center px-6">
              <ul className="list-disc text-gray-600 text-left pl-4">
                <li>Evolving knowledge bank for learning IoE</li>
                <li>Engaging and practical IoE Applications</li>
                <li>Customizable interactive cloud-based dashboard</li>
                <li>Production-ready learning kits</li>
                <li>Accredited and tested product releases</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
