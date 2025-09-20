import { defineStore } from "pinia";

export interface AuthState {
  isAuthenticated: boolean | null;
}

export const useAuthStore = defineStore("auth", {
  state: (): AuthState => ({
    isAuthenticated: null,
  }),

  actions: {
    setAuthenticated(isAuthenticated: boolean) {
      this.isAuthenticated = isAuthenticated;
    },
  },
});
