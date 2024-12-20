import api from "@/utils/api";
import { useMutation } from "@tanstack/react-query";

export interface registerParams {
  firstName: string;
  lastName: string;
  contactNumber: string;
  email: string;
  password: string;
  age: number;
  type: string;
  gender: string;
}

const register = async (userData: registerParams) => {
  try {
    const res = await api.post("/user/register", userData);
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

export const useRegister = () => useMutation({ mutationFn: register });
