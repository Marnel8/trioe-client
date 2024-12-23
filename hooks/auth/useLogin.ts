import api from "@/utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface LoginParams {
  email: string;
  password: string;
}

const login = async ({ email, password }: LoginParams) => {
  try {
    const res = await api.post("/user/", { email, password });
    return res.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message || "Login failed");
    } else if (error.request) {
      throw new Error("No response from server");
    } else {
      throw new Error("Error in login request: " + error.message);
    }
  }
};

export const useLogin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
    },
  });
};
