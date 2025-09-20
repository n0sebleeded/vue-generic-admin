import { useMutation } from "@tanstack/vue-query";
import type {
  IPostLogin,
  IPostLoginResponse,
} from "@/features/auth/api/types.ts";
import { api } from "@/shared/api/axiosInstance.ts";
import { toast } from "vue-sonner";
import { useAuthStore } from "@/features/auth/model/store.ts";
import { useRouter } from "vue-router";

export const useLoginMutation = () => {
  const authStore = useAuthStore();
  const router = useRouter();

  return useMutation({
    mutationKey: ["login"],
    mutationFn: async (
      credentials: IPostLogin
    ): Promise<IPostLoginResponse> => {
      const response = await api.post("/api/v1/admin/auth/login", {
        username: credentials.username,
        password: credentials.password,
      });
      return response.data;
    },
    onError: () => {
      toast.error("Возникла ошибка", {
        description: "Неверный логин или пароль",
      });
    },
    onSuccess: (data) => {
      localStorage.setItem("accessToken", data.accessToken);
      authStore.setAuthenticated(true);
      router.push({ path: "/" });
    },
  });
};

export const useRefreshMutation = () => {
  const auth = useAuthStore();

  return useMutation({
    mutationKey: ["refresh"],
    mutationFn: async (): Promise<IPostLoginResponse> => {
      const response = await api.post("/api/v1/admin/auth/refresh");

      return response.data;
    },
    onError: () => {
      auth.setAuthenticated(false);
      localStorage.removeItem("accessToken");
    },
    onSuccess: (data) => {
      auth.setAuthenticated(true);
      localStorage.setItem("accessToken", data.accessToken);
    },
  });
};
