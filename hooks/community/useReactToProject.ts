import api from "@/utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const reactToProject = async (projectId: string) => {
	try {
		const response = await api.put(`/project/react/${projectId}`);
		return response.data;
	} catch (error: any) {
		if (error.response) {
			throw new Error(
				error.response.data.message || "Failed to react to project"
			);
		} else if (error.request) {
			throw new Error("No response from server");
		} else {
			throw new Error("Error in react to project request: " + error.message);
		}
	}
};

const PROJECTS_QUERY_KEY = ["projects"];

export const useReactToProject = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: reactToProject,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: PROJECTS_QUERY_KEY });
		},
	});
};
