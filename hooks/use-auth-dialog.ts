import { create } from "zustand";

type useAuthDialog = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useAuthDialog = create<useAuthDialog>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
