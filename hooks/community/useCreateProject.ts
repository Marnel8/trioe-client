import api from "@/utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface IInstructions {
	text: string;
	image?: File;
}

interface ICreateProjectParams {
	title: string;
	category: string;
	description: string;
	componentsUsed: string;
	instructions: IInstructions[];
	demoVideo?: File;
}

const useCreateProject = async (projectData: ICreateProjectParams) => {
	try {
		const formData = new FormData();

		formData.append("title", projectData.title);
		formData.append("category", projectData.category);
		formData.append("description", projectData.description);
		formData.append("componentsUsed", projectData.componentsUsed);

		const instructionsWithoutFiles = projectData.instructions.map(
			(instruction) => ({
				text: instruction.text,
			})
		);
		formData.append("instructions", JSON.stringify(instructionsWithoutFiles));

		// Append instruction images separately
		projectData.instructions.forEach((instruction, index) => {
			if (instruction.image instanceof File) {
				formData.append("images", instruction.image);
			}
		});

		// Handle demo video if present
		if (projectData.demoVideo instanceof File) {
			formData.append("video", projectData.demoVideo);
		}

		const response = await api.post("/project/create", formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});

		return response.data;
	} catch (error: any) {
		if (error.response) {
			throw new Error(
				error.response.data.message || "Failed to create project"
			);
		} else if (error.request) {
			throw new Error("No response from server");
		} else {
			throw new Error("Error in create project request: " + error.message);
		}
	}
};

const PROJECTS_QUERY_KEY = ["projects"] as const;

export const useCreateProjectMutation = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: useCreateProject,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: PROJECTS_QUERY_KEY });
		},
	});
};
