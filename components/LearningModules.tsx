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
          imageSrc="/images/Learning_module/LearningModulePicts (1).png"
          route="/learn/steam-learn"
        />
        <ModuleCard
          title="Agri-Aqua"
          description="This module covers the basics of IoT technology, including sensors, actuators, and communication protocols."
          imageSrc="/images/Learning_module/LearningModulePicts (4).png"
          route="/learn/agriaqua-learn"
        />
        <ModuleCard
          title="DRM"
          description="This module covers the basics of IoT technology, including sensors, actuators, and communication protocols."
          imageSrc="/images/Learning_module/LearningModulePicts (2).png"
          route="/learn/drm-learn"
        />
      </div>
    </section>
  );
};

export default LearningModules;
