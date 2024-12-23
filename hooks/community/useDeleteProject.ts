import api from "@/utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const deleteProject = async (id: string) => {
	try {
		const response = await api.delete(`/project/${id}`);

		return response.data;
	} catch (error: any) {
		if (error.response) {
			throw new Error(
				error.response.data.message || "Failed to update project"
			);
		} else if (error.request) {
			throw new Error("No response from server");
		} else {
			throw new Error("Error in update project request: " + error.message);
		}
	}
};

const PROJECTS_QUERY_KEY = ["projects"];

export const useDeleteProject = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: deleteProject,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: PROJECTS_QUERY_KEY });
		},
	});
};
