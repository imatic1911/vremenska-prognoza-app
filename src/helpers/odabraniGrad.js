import create from "zustand";
import { persist } from "zustand/middleware";

const useOdabraniGrad = create((set) => ({
  grad: 'Mostar',
  setDGrad: (grad) => set({ grad }),
}), persist);

export default useOdabraniGrad;