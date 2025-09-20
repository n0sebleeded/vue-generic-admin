import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const api = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;
//
//     if (originalRequest.url?.includes("/auth")) {
//       localStorage.removeItem("accessToken");
//       useAuth.setState({ isAuthenticated: false });
//       return Promise.reject(error);
//     }
//
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       try {
//         const res = await api.post(`/cashier/auth/refresh`);
//
//         if (res.data?.accessToken) {
//           localStorage.setItem("accessToken", res.data.accessToken);
//           useAuth.setState({ isAuthenticated: true });
//           return api(originalRequest);
//         }
//
//         localStorage.removeItem("accessToken");
//         useAuth.setState({ isAuthenticated: false });
//       } catch (e) {
//         localStorage.removeItem("accessToken");
//         useAuth.setState({ isAuthenticated: false });
//         return Promise.reject(e);
//       }
//     }
//
//     return Promise.reject(error);
//   }
// );

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});
