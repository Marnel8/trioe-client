import api from "@/utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const logout = async () => {
  try {
    const res = await api.post("/user/logout");
    return res.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message || "Logout failed");
    } else if (error.request) {
      throw new Error("No response from server");
    } else {
      throw new Error("Error in logout request: " + error.message);
    }
  }
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: logout,
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], null);
    },
  });
};
