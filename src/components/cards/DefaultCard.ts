import type { FormKitGroupValue } from "@formkit/core";
import { defineStore } from "pinia";

export const useCardStore = defineStore("card", {
  state: () => ({
    formData: {} as FormKitGroupValue,
  }),

  actions: {
    setData(data: FormKitGroupValue) {
      this.formData = { ...this.formData, ...data };
    },
  },
});
