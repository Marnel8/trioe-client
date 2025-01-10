"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	DialogClose,
} from "@/components/ui/dialog";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Upload, X, Video, Plus } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useCreateProjectMutation } from "@/hooks/community/useCreateProject";
import { useFetchUser } from "@/hooks/auth/useFetchuser";
import {
	IInstructions,
	useUpdateProjectMutation,
} from "@/hooks/community/useUpdateProject";

const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];
const ACCEPTED_VIDEO_TYPES = ["video/mp4", "video/webm", "video/ogg"];

const formSchema = z.object({
	title: z.string().min(2, {
		message: "Project title must be at least 2 characters.",
	}),
	description: z.string().min(10, {
		message: "Project description must be at least 10 characters.",
	}),
	category: z.string({
		required_error: "Please select a project category.",
	}),
	componentsUsed: z.string().min(2, {
		message: "Please list the components used.",
	}),
	instructions: z
		.array(
			z.object({
				id: z.string().optional(),
				text: z.string().min(1, { message: "Instruction cannot be empty." }),
				imagePath: z.any().optional(),
			})
		)
		.min(1, { message: "At least one instruction is required." }),
	video: z
		.any()
		.refine(
			(file) => !file || file?.size <= MAX_FILE_SIZE,
			`Max video size is 50MB.`
		)
		.refine(
			(file) => !file || ACCEPTED_VIDEO_TYPES.includes(file?.type),
			"Only .mp4, .webm, and .ogg formats are supported."
		)
		.optional(),
});

interface AddProjectDialogProps {
	projectData?: z.infer<typeof formSchema> & { id: string }; // Include id in projectData type
	trigger: React.ReactNode;
}

export function AddProjectDialog({
	projectData,
	trigger,
}: AddProjectDialogProps) {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: projectData?.title || "", // Update default values for editing
			description: projectData?.description || "",
			category: projectData?.category || "", // New field for category
			componentsUsed: projectData?.componentsUsed || "",
			instructions: projectData?.instructions.map((instruction) => {
				return {
					id: instruction.id,
					text: instruction.text,
					image: instruction.imagePath,
				};
			}) || [{ text: "", imagePath: undefined }],
			video: projectData?.video || undefined,
		},
	});
	const { mutateAsync: createProject, isPending: isCreating } =
		useCreateProjectMutation();
	const { mutateAsync: updateProject, isPending: isUpdating } =
		useUpdateProjectMutation();

	async function onSubmit(values: z.infer<typeof formSchema>) {
		const {
			title,
			description,
			category,
			componentsUsed,
			instructions,
			video,
		} = values;

		try {
			if (projectData) {
				// Handle update logic here
				await updateProject({
					projectId: projectData.id,
					projectData: {
						title,
						description,
						category,
						componentsUsed,
						instructions: instructions.map((instruction) => ({
							text: instruction.text,
							id: instruction.id,
							image: instruction.imagePath,
						})) as IInstructions[],
						demoVideo: video,
					},
				});
			} else {
				// Handle create logic here
				await createProject({
					title,
					description,
					category,
					componentsUsed,
					instructions: instructions.map((instruction) => ({
						text: instruction.text,
						image: instruction.imagePath,
					})) as IInstructions[], // Explicitly cast to IInstructions[]
					demoVideo: video,
				});
				form.reset();
			}

			toast({
				description: projectData
					? "Project updated successfully"
					: "Project added successfully",
				className: "success-toast",
			});
		} catch (error: any) {
			toast({
				description: error.message,
				className: "error-toast",
			});
		}
	}

	function addInstruction() {
		form.setValue("instructions", [
			...form.getValues("instructions"),
			{ text: "", imagePath: undefined },
		]);
	}

	function removeInstruction(index: number) {
		const instructions = form.getValues("instructions");
		instructions.splice(index, 1);
		form.setValue("instructions", instructions);
	}

	return (
		<Dialog>
			<DialogTrigger asChild>{trigger}</DialogTrigger>
			<DialogContent className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl overflow-y-auto max-h-screen">
				<DialogHeader>
					<DialogTitle className="text-xl sm:text-2xl font-bold">
						Add Your Project
					</DialogTitle>
					<DialogDescription className="text-sm sm:text-base">
						Share your TRIOE board project with the community. Fill out the
						details below.
					</DialogDescription>
				</DialogHeader>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-4 sm:space-y-6"
					>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
							<FormField
								control={form.control}
								name="title"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Project Title</FormLabel>
										<FormControl>
											<Input
												placeholder="Enter your project title"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="category"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Category</FormLabel>
										<Select
											onValueChange={field.onChange}
											defaultValue={field.value}
										>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="Select a category" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectItem value="steam">STEAM</SelectItem>
												<SelectItem value="agri-aqua">AGRI-AQUA</SelectItem>
												<SelectItem value="drm">DRM</SelectItem>
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<FormField
							control={form.control}
							name="description"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Description</FormLabel>
									<FormControl>
										<Textarea
											placeholder="Describe your project"
											className="resize-none min-h-[100px]"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="componentsUsed"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Components Used</FormLabel>
									<FormControl>
										<Textarea
											placeholder="List the components and materials used"
											className="resize-none min-h-[100px]"
											{...field}
										/>
									</FormControl>
									<FormDescription className="text-xs sm:text-sm">
										List all TRIOE board components and additional materials
										needed
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div>
							<FormLabel>Instructions</FormLabel>
							<FormDescription className="text-xs sm:text-sm mb-2">
								Provide step-by-step instructions with optional images
							</FormDescription>
							{form.watch("instructions").map((_, index) => (
								<FormField
									key={index}
									control={form.control}
									name={`instructions.${index}`}
									render={({ field }) => (
										<FormItem className="mb-4">
											<FormControl>
												<div className="flex flex-col gap-2">
													<Textarea
														placeholder={`Step ${
															index + 1
														}: Provide instruction`}
														className="resize-none min-h-[100px]"
														{...field}
														value={field.value.text}
														onChange={(e) =>
															field.onChange({
																...field.value,
																text: e.target.value,
															})
														}
													/>
													<div className="flex items-center gap-2">
														<Input
															type="file"
															accept={ACCEPTED_IMAGE_TYPES.join(",")}
															onChange={(e) => {
																const file = e.target.files?.[0];
																field.onChange({
																	...field.value,
																	imagePath: file,
																});
															}}
															className="hidden"
															id={`instruction-image-${index}`}
														/>
														<label
															htmlFor={`instruction-image-${index}`}
															className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
														>
															<Upload className="w-5 h-5 mr-2" />
															Upload Image
														</label>
														{field.value.imagePath && (
															<div className="relative">
																<img
																	src={URL.createObjectURL(
																		field.value.imagePath
																	)}
																	alt={`Instruction ${index + 1}`}
																	className="w-20 h-20 object-cover rounded"
																/>
																<button
																	type="button"
																	onClick={() =>
																		field.onChange({
																			...field.value,
																			imagePath: undefined,
																		})
																	}
																	className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
																>
																	<X size={12} />
																</button>
															</div>
														)}
													</div>
													<Button
														type="button"
														onClick={() => removeInstruction(index)}
														className="mt-2 bg-red-500 text-white hover:bg-red-600"
													>
														Remove Instruction
													</Button>
												</div>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							))}
							<Button
								type="button"
								variant="outline"
								size="sm"
								onClick={addInstruction}
								className="mt-2"
							>
								<Plus className="w-4 h-4 mr-2" />
								Add Instruction
							</Button>
						</div>
						<FormField
							control={form.control}
							name="video"
							render={({ field: { value, onChange, ...field } }) => (
								<FormItem>
									<FormLabel>Project Video</FormLabel>
									<FormControl>
										<div className="flex flex-col gap-2">
											<div className="flex items-center justify-center w-full">
												<label
													htmlFor="video-upload"
													className="flex flex-col items-center justify-center w-full h-24 sm:h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
												>
													<div className="flex flex-col items-center justify-center pt-5 pb-6">
														<Video className="w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-4 text-gray-500 dark:text-gray-400" />
														<p className="mb-1 sm:mb-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
															<span className="font-semibold">
																Click to upload
															</span>{" "}
															or drag and drop
														</p>
														<p className="text-xs text-gray-500 dark:text-gray-400">
															MP4, WEBM or OGG (MAX. 50MB)
														</p>
													</div>
													<Input
														id="video-upload"
														type="file"
														accept={ACCEPTED_VIDEO_TYPES.join(",")}
														className="hidden"
														onChange={(e) => {
															const file = e.target.files?.[0];
															onChange(file);
														}}
														{...field}
													/>
												</label>
											</div>
											{value && (
												<div className="relative">
													<video
														src={URL.createObjectURL(value)}
														controls
														className="w-full rounded"
													/>
													<button
														type="button"
														onClick={() => onChange(undefined)}
														className="absolute top-2 right-2 flex items-center justify-center w-6 h-6 bg-red-500 text-white rounded-full"
													>
														<X size={12} />
													</button>
												</div>
											)}
										</div>
									</FormControl>
									<FormDescription className="text-xs sm:text-sm">
										Upload one video (max 50MB)
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<DialogFooter className="sm:justify-end">
							<Button
								type="submit"
								className="w-full sm:w-auto bg-primary tracking-wider"
							>
								{projectData ? "Update Project" : "	Submit Project "}
							</Button>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
}
