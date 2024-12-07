import { create } from "zustand";

interface GroupLedRegModalStore {
    isOpen: boolean;
    open: () => void;
    close: () => void;

}

const useGroupLedRegModal = create<GroupLedRegModalStore>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true}),
    close: () => set({ isOpen: false}),
}))

export default useGroupLedRegModal