import api from "@/utils/api";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const getProjects = async () => {
	try {
		const response = await api.get("/project/");
		return response.data;
	} catch (error: any) {
		if (error.response) {
			throw new Error(
				error.response.data.message || "Failed to fetch projects"
			);
		} else if (error.request) {
			throw new Error("No response from server");
		} else {
			throw new Error("Error in fetch projects request: " + error.message);
		}
	}
};

export const useGetProjects = () =>
	useQuery({
		queryKey: ["projects"],
		queryFn: getProjects,
		staleTime: 1000 * 60 * 5,
		retry: 1,
		// retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
	});
