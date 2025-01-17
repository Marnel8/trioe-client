"use client";
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
import { AddProjectDialog } from "@/components/community/add-project-dialog";
import { useGetProjects } from "@/hooks/community/useGetProjects";
import { useFetchUser } from "@/hooks/auth/useFetchuser";
import { useState } from "react";
import { Select, SelectContent, SelectItem } from "./ui/select";
import { SelectTrigger, SelectValue } from "@radix-ui/react-select";

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
	const { data: projectsData, isLoading: isProjectsLoading } = useGetProjects();
	const { data: user, isPending: isUserPending } = useFetchUser();
	const [projectFilter, setProjectFilter] = useState("all");
	const [category, setCategory] = useState("all");

	const filteredProjects = projectsData?.projects.filter((project: any) => {
		if (projectFilter === "all") return projectsData?.projects;
		if (projectFilter === "my") return project.authorId === user?.id;
		if (category === "all") return projectsData?.projects;
		return project?.category === category;
	});

	const handleSelectChange = (value: string) => {
		setCategory(value);
	};

	return (
		<div className="container mx-auto p-2 flex flex-col gap-8 ">
			<div className="mb-2 flex flex-wrap gap-4  items-center justify-center md:justify-between">
				<Tabs defaultValue="all" className="">
					<TabsList>
						<TabsTrigger
							value="all"
							className="text-sm"
							onClick={() => setProjectFilter("all")}
						>
							All Projects
						</TabsTrigger>
						<TabsTrigger
							value="my"
							className="text-sm"
							onClick={() => setProjectFilter("my")}
						>
							My Projects
						</TabsTrigger>
					</TabsList>
				</Tabs>
				<div className="flex items-center gap-2">
					<Select value={category} onValueChange={handleSelectChange}>
						<SelectTrigger className="w-[180px] h-full">
							<SelectValue placeholder={category} />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="steam">STEAM</SelectItem>
							<SelectItem value="agri-aqua">Agri-Aqua</SelectItem>
							<SelectItem value="drm">DRM</SelectItem>
						</SelectContent>
					</Select>
					<AddProjectDialog
						trigger={
							<Button
								disabled={!user}
								className=" text-white disabled:opacity-50 disabled:pointer-events-none"
							>
								Add Yours
							</Button>
						}
					/>
				</div>
			</div>
			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{filteredProjects! > 1 ? (
					<div className="w-full">
						{" "}
						<p className="text-gray-500 text-center">
							No projects for this category
						</p>{" "}
					</div>
				) : (
					filteredProjects?.map((project: any) => (
						<ProjectCard key={project.id} project={project} />
					))
				)}
			</div>
		</div>
	);
}
