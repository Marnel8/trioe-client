import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getImageUrl } from "@/utils/imageUtils";
import { Heart, Pencil, Trash2 } from "lucide-react";
import Image from "next/image";

export function ProjectCard({ project, onEdit, onDelete }: any) {
	return (
		<Card className="overflow-hidden group relative">
			<CardContent className="p-0">
				<div className="relative aspect-[4/3]">
					<Image
						src={getImageUrl(project?.instructions[0]?.imagePath)}
						alt={project?.title || "Project image"}
						fill
						className="object-cover"
					/>
					<div className="absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
						<Button
							variant="secondary"
							size="icon"
							className="bg-white bg-opacity-80 hover:bg-opacity-100 transition-colors duration-200"
							// onClick={() => onEdit(project)}
						>
							<Pencil className="h-4 w-4" />
							<span className="sr-only">Edit</span>
						</Button>
						<Button
							variant="destructive"
							size="icon"
							className="bg-red-500 hover:bg-red-600 transition-colors duration-200"
							// onClick={() => onDelete(project)}
						>
							<Trash2 className="h-4 w-4" />
							<span className="sr-only">Delete</span>
						</Button>
					</div>
				</div>
				<div className="p-4">
					<div className="mb-2 flex items-center justify-between">
						<h3 className="text-lg font-semibold">{project?.title}</h3>
						<Button variant="ghost" size="icon" className="h-8 w-8">
							<Heart className="h-5 w-5" />
							<span className="sr-only">Like</span>
						</Button>
					</div>
					<div className="flex items-center justify-between">
						<span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 uppercase">
							{project?.category}
						</span>
						<p className="text-sm text-muted-foreground">
							By {project?.author.firstName} {project?.author.lastName}
						</p>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
