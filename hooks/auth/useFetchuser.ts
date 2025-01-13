import api from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

const fetchUser = async () => {
	try {
		const response = await api.get("/user/me");
		return response.data;
	} catch (error: any) {
		if (error.response) {
			throw new Error(error.response.data.message || "Failed to fetch user");
		} else if (error.request) {
			throw new Error("No response from server");
		} else {
			throw new Error("Error in fetch user request: " + error.message);
		}
	}
};

export const useFetchUser = () => {
	return useQuery({
		queryKey: ["user"],
		queryFn: fetchUser,
		staleTime: Infinity,
		retry: false,
		enabled: true,
	});
};
