import { create } from "zustand";

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;

  login: (token: string) => void;
  logout: () => void;
  initialize: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  isAuthenticated: false,

  initialize: () => {
    const token = localStorage.getItem("token");

    set({
      token,
      isAuthenticated: !!token,
    });
  },

  login: (token) => {
    localStorage.setItem("token", token);

    set({
      token,
      isAuthenticated: true,
    });
  },

  logout: () => {
    localStorage.removeItem("token");

    set({
      token: null,
      isAuthenticated: false,
    });
  },
}));
