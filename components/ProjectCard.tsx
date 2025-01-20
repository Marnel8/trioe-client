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
						src={
							getImageUrl(project?.instructions[0].imagePath) ||
							"/images/placeholder-image.jpg"
						}
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
							{/* <div className="like-wrapper">
								<input className="check" type="checkbox" id="like-toggle" />
								<label className="container" htmlFor="like-toggle">
									<svg
										viewBox="0 0 512 512"
										xmlns="http://www.w3.org/2000/svg"
										className="icon inactive"
									>
										<path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"></path>
									</svg>
									<svg
										viewBox="0 0 512 512"
										xmlns="http://www.w3.org/2000/svg"
										className="icon active"
									>
										<path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"></path>
									</svg>
									<div className="checkmark"></div>
									<span className="like-text">Like</span>
								</label>
							</div> */}

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
