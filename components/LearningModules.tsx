import React from "react";
import PageHeader from "./PageHeader";
import ModuleCard from "./ModuleCard";

const LearningModules = () => {
  return (
    <section className="py-5">
      <PageHeader title="LEARNING MODULES" />
      <div className="py-5 flex flex-wrap justify-center lg:flex-nowrap gap-5">
        <ModuleCard
          title="STEAM"
          description="This module covers the basics of IoT technology, including sensors, actuators, and communication protocols."
          imageSrc="/samples/MODULE (2).png"
        />
        <ModuleCard
          title="Agri-Aqua"
          description="This module covers the basics of IoT technology, including sensors, actuators, and communication protocols."
          imageSrc="/samples/MODULE (3).png"
        />
        <ModuleCard
          title="DRM"
          description="This module covers the basics of IoT technology, including sensors, actuators, and communication protocols."
          imageSrc="/samples/MODULE (1).png"
        />
      </div>
    </section>
  );
};

export default LearningModules;
