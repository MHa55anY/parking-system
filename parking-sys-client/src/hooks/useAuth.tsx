import { create } from 'zustand';
import { loginUser, registerUser } from '../services/auth';
import toast from 'react-hot-toast';
import { isAxiosError } from 'axios';

interface AuthStore {
  authToken: string | null;
  login: (creds: { userName: string; password: string }) => Promise<void>;
  register: (creds: { userName: string; password: string }) => Promise<void>;
  logout: () => void;
  isAuthenticated: () => boolean;
  isGracefulLogout: boolean
}

const useAuth = create<AuthStore>((set, get) => ({
  authToken: localStorage.getItem('authToken') || null,
  login: async (creds) => {
    try {
      const { data } = await loginUser(creds);
      if (data?.success) {
        set({isGracefulLogout: false})
        localStorage.setItem('authToken', data?.accessToken);
        set({ authToken: data?.accessToken });
        toast.success("You have successfully Logged In 😀!");
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      if (isAxiosError(error)) {
        const message = error?.response?.data?.message;
        toast.error((message ?? "Server not running!") + "🤔");
      } else {
        toast.error("An unexpected error occurred 😔");
      }
    }
  },
  register: async (creds) => {
    try {
      const { data } = await registerUser(creds);
      if (data?.success) {
        toast.success("You have successfully registered 😀!");
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      if (isAxiosError(error)) {
        const message = error?.response?.data?.message;
        toast.error(message + "🤔");
      } else {
        toast.error("An unexpected error occurred 😔");
      }
    }
  },
  logout: () => {
    set({isGracefulLogout: true})
    localStorage.removeItem('authToken');
    set({ authToken: null });
    toast.success("You have logged out!");
  },
  isAuthenticated: () => !!get().authToken,
  isGracefulLogout: false
}));

export default useAuth;
