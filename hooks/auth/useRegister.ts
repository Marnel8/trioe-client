import api from "@/utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export interface registerParams {
	firstName: string;
	lastName: string;
	contactNumber: string;
	email: string;
	password: string;
	age: number;
	type: string;
	gender: string;
	avatar?: string;
}

const register = async (userData: registerParams) => {
	const formData = new FormData();

	formData.append("firstName", userData.firstName);
	formData.append("lastName", userData.lastName);
	formData.append("contactNumber", userData.contactNumber);
	formData.append("email", userData.email);
	formData.append("password", userData.password);
	formData.append("age", userData.age.toString());
	formData.append("type", userData.type);
	formData.append("gender", userData.gender);
	if (userData.avatar) formData.append("avatar", userData.avatar || "");

	try {
		const res = await api.post("/user/register", formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});

		return res.data;
	} catch (error: any) {
		if (error.response) {
			throw new Error(error.response.data.message || "Registration failed");
		} else if (error.request) {
			throw new Error("No response from server");
		} else {
			throw new Error("Error in registration request: " + error.message);
		}
	}
};

export const useRegister = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: register,
		onSuccess: (data) => {
			queryClient.setQueryData(["activationToken"], data.activationToken);
		},
	});
};

const activateUser = async ({
	activation_token,
	activation_code,
}: {
	activation_token: string;
	activation_code: string;
}) => {
	try {
		const response = await api.post("/user/activate-user", {
			activation_token,
			activation_code,
		});
		return response.data;
	} catch (error: any) {
		if (error.response) {
			throw new Error(error.response.data.message || "Failed to activate user");
		} else if (error.request) {
			throw new Error("No response from server");
		} else {
			throw new Error("Error activating user: " + error.message);
		}
	}
};

export const useActivateUser = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: activateUser,
	});
};
