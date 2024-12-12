import React from "react";
import PageHeader from "./PageHeader";
import ModuleCard from "./ModuleCard";

const LearningModules = () => {
  return (
    <section className="py-5">
      <PageHeader title="LEARNING MODULES" />
      <div className="py-5 flex flex-wrap lg:flex-nowrap gap-5">
        <ModuleCard
          title="STEAM"
          description="This module covers the basics of IoT technology, including sensors, actuators, and communication protocols."
          imageSrc="/samples/MODULE_2.png"
        />
        <ModuleCard
          title="Agri-Aqua"
          description="This module covers the basics of IoT technology, including sensors, actuators, and communication protocols."
          imageSrc="/samples/MODULE_1.jpg"
        />
        <ModuleCard
          title="DRM"
          description="This module covers the basics of IoT technology, including sensors, actuators, and communication protocols."
          imageSrc="/samples/drm.jpg"
        />
      </div>
    </section>
  );
};

export default LearningModules;
