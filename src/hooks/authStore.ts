import { create } from 'zustand';

interface AuthState {
  accessToken: string | null | undefined;
  setAccessToken: (token: string | null | undefined) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  setAccessToken: (token) => set({ accessToken: token }),
}));

export default useAuthStore;