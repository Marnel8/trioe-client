import api from "@/utils/api";
import { useMutation } from "@tanstack/react-query";

const subscribe = async (email: string) => {
	try {
		const response = await api.post("/subscriber", { email });
		return response.data;
	} catch (error: any) {
		if (error.response) {
			throw new Error(error.response.data.message || "Failed to subscribe");
		} else if (error.request) {
			throw new Error("No response from server");
		} else {
			throw new Error("Error in subscribe request: " + error.message);
		}
	}
};

export const useSubscribe = () =>
	useMutation({
		mutationFn: subscribe,
	});
