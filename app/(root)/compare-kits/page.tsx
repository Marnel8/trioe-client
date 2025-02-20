import ComparisonTable from "@/components/kitcomp/comparisontable";
import KitCards from "@/components/kitcomp/kitcards"; // Client Component
import { kitData } from "@/components/data/kitData";

const CompareKits = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-extrabold text-center mb-4">
        What is the right kit for me?
      </h1>
      <p className="text-center text-gray-700 mb-12 text-lg">
        The AGRI-AGUA KIT is for smart farming, the STEAM KIT for education, and
        the DRM KIT for disaster response.
      </p>
      <KitCards kitData={kitData} /> {/* Client Component */}
      <ComparisonTable kitData={kitData} /> {/* Server Component */}
    </div>
  );
};

export default CompareKits;
