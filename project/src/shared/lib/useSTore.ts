import { create } from "zustand";
import type { IProductTour, Step } from "./productTourData";

interface IStore {
  productTourData: IProductTour | null;
  setProductTour: (data: IProductTour) => void;
  ind: number;
  step: Step | null;
  changeIndAndStep: (idx: number) => void;
  removeSteps: () => void;
}

export const useProductTourStore = create<IStore>((set) => ({
  productTourData: null,
  setProductTour: (data: IProductTour) => set({ productTourData: data }),

  ind: 0,
  step: null,
  changeIndAndStep: (ind) =>
    set((state) => ({
      ind,
      step: state.productTourData?.steps[ind],
    })),
  removeSteps: () => set({ step: null, ind: 0 }),
}));