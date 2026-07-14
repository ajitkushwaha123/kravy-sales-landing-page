import { create } from "zustand";

import { PLANS } from "@/constants/plans";

const initialState = {
  planId: "kravy-pos-bundle",
  plan: PLANS["kravy-pos-bundle"],
};

export const useAppConfigStore = create((set) => ({
  ...initialState,

  setPlanId: (planId) =>
    set({
      planId,
    }),

  setPlan: (plan) =>
    set({
      plan,
    }),
  reset: () => set(initialState),
}));
