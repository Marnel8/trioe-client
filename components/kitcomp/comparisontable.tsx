// components/ComparisonTable.tsx
import React from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

interface KitData {
  name: string;
  image: string;
  description: string;
  price: number;
  components: Record<string, string>;
}

interface ComparisonTableProps {
  kitData: KitData[];
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ kitData }) => {
  return (
    <Table className="w-full border border-gray-300 text-sm">
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/4">Component</TableHead>
          {kitData.map((kit) => (
            <TableHead key={kit.name} className="text-center">
              {kit.name}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {Object.keys(kitData[0].components).map((component) => (
          <TableRow key={component}>
            <TableCell className="font-semibold">{component}</TableCell>
            {kitData.map((kit) => (
              <TableCell key={kit.name} className="text-center">
                {kit.components[component]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ComparisonTable;
