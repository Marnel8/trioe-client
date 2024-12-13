import Image from "next/image";
import React from "react";

const Installations = () => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="docs-title">Installation</h3>
        <p>
          Learn how to install and configure our tools for your development
          environment.
        </p>
      </div>
      <div>
        {/* <h3 className="docs-subtitle">Arduino IDE setup guide</h3>
        <p>
          Follow these steps to set up your first project and see immediate
          results.
        </p> */}
        <div className="mt-4 space-y-2">
          <h3 className="text-subtitle font-semibold">
            Download Arduino IDE (Windows)
          </h3>
          <p className="text-sm">
            You could download Arduino IDE from the official website:{" "}
            <a
              className="underline text-blue-400"
              href="https://www.arduino.cc/"
              target="_blank"
            >
              https://www.arduino.cc/
            </a>
          </p>
          <Image
            src="/tutorials/arduino_1.svg"
            alt="Arduino IDE Download"
            width={1000}
            height={1000}
            className="rounded-lg"
          />
          <p className="text-sm text-red-500">
            Note: There are various versions of IDE for Arduino. Just download a
            version compatible to your device.
          </p>
        </div>
        <div className="mt-4 space-y-2">
          <h3 className="text-subtitle font-semibold">Download</h3>
          <p className="text-sm">
            You could download Arduino IDE from the official website:{" "}
            <a
              className="underline text-blue-400"
              href="https://www.arduino.cc/"
              target="_blank"
            >
              https://www.arduino.cc/
            </a>
          </p>
          <Image
            src="/tutorials/arduino_2.png"
            alt="Arduino IDE Download"
            width={800}
            height={800}
            className="rounded-lg"
          />
          <p className="text-sm text-gray-500">
            Here we will show you how to download and install the windows
            version of Arduino IDE.
          </p>
          <p className="text-sm text-gray-500">
            There are two versions of IDE for WINDOWS system. You can choose
            between the installer (.exe) and the Zip file. For installer, it can
            be directly downloaded, without the need of installing it manually
            while for Zip package, you will need to install the driver manually.
          </p>
        </div>
        <div className="mt-4 space-y-2">
          <Image
            src="/tutorials/arduino_3.png"
            alt="Arduino IDE Download"
            width={800}
            height={800}
            className="rounded-lg"
          />
          <p className="text-sm text-gray-500">
            You just need to click JUST DOWNLOAD.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Installations;
