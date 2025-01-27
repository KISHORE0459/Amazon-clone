import { create } from "zustand";
import { persist } from "zustand/middleware";

const useProduct = create(
  persist((set) => ({
    currentproduct: [
      {
        name: "#########",
        imageUrl: "##########",
        price: 0,
        discount: 0,
        rating: 0,
      },
    ],
    setproduct: (product) => {
      set((state) => ({
        currentproduct: [product],
      }));
    },
  }))
);

export default useProduct;
