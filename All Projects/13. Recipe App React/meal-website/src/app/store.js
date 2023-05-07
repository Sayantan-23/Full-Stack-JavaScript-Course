import { create } from "zustand";

const useStore = create((set) => ({
  inputValue: "",
  categoryInputValue: "",
  changeInputValue: (searchInput) => set({ inputValue: searchInput }),
  changeCategoryInputValue: (categoryInput) =>
    set({ categoryInputValue: categoryInput }),
}));

export default useStore;
