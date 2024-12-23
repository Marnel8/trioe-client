import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getImageUrl } from "@/utils/imageUtils";
import { Heart, Pencil, Trash2 } from "lucide-react";
import Image from "next/image";
import { AddProjectDialog } from "./community/add-project-dialog";
import { useFetchUser } from "@/hooks/auth/useFetchuser";
import { Popover } from "@radix-ui/react-popover";
import { PopoverContent, PopoverTrigger } from "./ui/popover";
import { useState } from "react";
import { useDeleteProject } from "@/hooks/community/useDeleteProject";
import { toast } from "@/hooks/use-toast";
import { useReactToProject } from "@/hooks/community/useReactToProject";
import Link from "next/link";

export function ProjectCard({ project }: any) {
	const { data: user, isPending: isUserPending } = useFetchUser();
	const [open, setOpen] = useState(false);

	const { mutateAsync: deleteProject, isPending: isDeleting } =
		useDeleteProject();
	const { mutateAsync: likeProject, isPending: isLiking } = useReactToProject();

	const handleDelete = async () => {
		try {
			await deleteProject(project?.id);
			setOpen(false);
			toast({
				description: "Project deleted successfully",
				className: "success-toast",
			});
		} catch (error: any) {
			toast({
				description: error.message,
				className: "error-toast",
			});
		}
	};

	const handleLike = async () => {
		try {
			await likeProject(project?.id);
		} catch (error: any) {
			toast({
				description: error.message,
				className: "error-toast",
			});
		}
	};

	const isAlreadyLiked = project?.likes?.find(
		(like: any) => like.userId === user?.id
	);

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
					{user?.id === project?.authorId && (
						<div className="absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<AddProjectDialog
								projectData={project}
								trigger={
									<Button
										variant="secondary"
										size="icon"
										className="bg-white bg-opacity-80 hover:bg-opacity-100 transition-colors duration-200"
									>
										<Pencil className="h-4 w-4" />
										<span className="sr-only">Edit</span>
									</Button>
								}
							/>
							<Popover open={open} onOpenChange={setOpen}>
								<PopoverTrigger asChild>
									<Button
										variant="destructive"
										size="icon"
										className="bg-red-500 hover:bg-red-600 transition-colors duration-200"
									>
										<Trash2 className="h-4 w-4" />
										<span className="sr-only">Delete</span>
									</Button>
								</PopoverTrigger>
								<PopoverContent className="w-80">
									<div className="grid gap-4">
										<div className="space-y-2">
											<h4 className="font-medium leading-none">
												Delete Project
											</h4>
											<p className="text-sm text-muted-foreground">
												Are you sure you want to delete this project? This
												action cannot be undone.
											</p>
										</div>
										<div className="flex justify-end space-x-2">
											<Button variant="outline" onClick={() => setOpen(false)}>
												Cancel
											</Button>
											<Button variant="destructive" onClick={handleDelete}>
												Delete
											</Button>
										</div>
									</div>
								</PopoverContent>
							</Popover>
						</div>
					)}
				</div>
				<div className="p-4">
					<div className="mb-2 flex items-center justify-between">
						<h3 className="text-lg font-semibold">{project?.title}</h3>
						<div className="flex items-center gap-0.5">
							<Button
								variant="ghost"
								size="icon"
								className="h-8 w-8"
								disabled={isLiking || isDeleting || !user}
								onClick={handleLike}
							>
								<Heart
									className="h-5 w-5"
									fill={isAlreadyLiked ? "red" : "none"}
								/>
								<span className="sr-only">Like</span>
							</Button>
							<p>{project?.likes.length > 0 ? project?.likes.length : ""}</p>
						</div>
					</div>
					<div className="flex items-center justify-between">
						<span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 uppercase">
							{project?.category}
						</span>
						<p className="text-sm text-muted-foreground">
							By {project?.author.firstName} {project?.author.lastName}
						</p>
					</div>
					<Button asChild variant="outline" className="mt-3 w-full">
						<Link href={`/community/${project?.id}`}>View Details </Link>
					</Button>
				</div>
			</CardContent>
		</Card>
	);
}
