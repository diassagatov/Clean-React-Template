import { create } from "zustand";

export const useStorage = create((set) => ({
  penguins: 1,
  addPenguin: () => set((state) => ({ penguins: state.penguins + 1 })),
}));
