import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronDown } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";

interface Project {
  id: string;
  title: string;
  image: string;
  author: string;
  category: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Sample Project 1",
    image: "/samples/PROMOTION_1.jpg",
    author: "Marc James Beltran",
    category: "STEAM",
  },
  {
    id: "2",
    title: "Sample Project 2",
    image: "/samples/PROMOTION_2.jpg",
    author: "Marc James Beltran",
    category: "STEAM",
  },
];

export default function ProjectGallery() {
  return (
    <div className="container mx-auto p-8">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Tabs defaultValue="all" className="w-full sm:w-auto">
          <TabsList>
            <TabsTrigger value="all" className="text-sm">
              All Projects
            </TabsTrigger>
            <TabsTrigger value="my" className="text-sm">
              My Projects
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-[100px]">
                STEAM
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="z-50" sideOffset={4}>
              <DropdownMenuItem>STEAM</DropdownMenuItem>
              <DropdownMenuItem>Technology</DropdownMenuItem>
              <DropdownMenuItem>Engineering</DropdownMenuItem>
              <DropdownMenuItem>Arts</DropdownMenuItem>
              <DropdownMenuItem>Mathematics</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button className="bg-blue-500 hover:bg-blue-600">Add Yours</Button>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}
