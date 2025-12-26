import { create } from "zustand";

interface NavState {
  isNavOpen: boolean;
  isUserNavOpen: boolean;
  openNav: () => void;
  closeNav: () => void;
  toggleUserNav: () => void;
}

export const useNavStore = create<NavState>((set) => ({
  isNavOpen: false,
  isUserNavOpen: false,

  openNav: () => set({ isNavOpen: true }),
  closeNav: () => set({ isNavOpen: false }),
  toggleUserNav: () =>
    set((state) => ({ isUserNavOpen: !state.isUserNavOpen })),
}));
