import api from "@/utils/api";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const getProjectById = async (id: string) => {
	try {
		const response = await api.get(`/project/${id}`);
		return response.data;
	} catch (error: any) {
		if (error.response) {
			throw new Error(error.response.data.message || "Failed to fetch project");
		} else if (error.request) {
			throw new Error("No response from server");
		} else {
			throw new Error("Error in fetch project request: " + error.message);
		}
	}
};

export const useGetProjectById = (id: string) => {
	const queryClient = useQueryClient();
	return useQuery({
		queryKey: ["project", id],
		queryFn: () => getProjectById(id),
		initialData: () => queryClient.getQueryData(["project", id]),
		enabled: !!id,
	});
};
