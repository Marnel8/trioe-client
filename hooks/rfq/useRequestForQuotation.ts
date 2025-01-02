import api from "@/utils/api";
import { useMutation } from "@tanstack/react-query";

const requestForQuotation = async (data: any) => {
	try {
		const response = await api.post("/rfq", data);
		return response.data;
	} catch (error: any) {
		if (error.response) {
			throw new Error(
				error.response.data.message || "Failed to request for quotation"
			);
		} else if (error.request) {
			throw new Error("No response from server");
		} else {
			throw new Error(
				"Error in request for quotation request: " + error.message
			);
		}
	}
};

export const useRequestForQuotation = () => {
	return useMutation({
		mutationFn: requestForQuotation,
	});
};
