import api from "@/utils/api";
import {
	useQuery,
	useQueryClient,
	UseQueryResult,
} from "@tanstack/react-query";

interface User {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	avatar: string;
}

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
		staleTime: 1000 * 60 * 5,
		retry: 2,
	});
};

// Utility function to prefetch user data
export const prefetchUserData = async (queryClient: any) => {
	await queryClient.prefetchQuery({
		queryKey: ["user"],
		queryFn: fetchUser,
	});
};

// Function to invalidate user cache when needed
export const invalidateUserCache = (queryClient: any) => {
	queryClient.invalidateQueries({ queryKey: ["user"] });
};

// Function to update user cache directly
export const updateUserCache = (queryClient: any, userData: User) => {
	queryClient.setQueryData(["user"], userData);
};
