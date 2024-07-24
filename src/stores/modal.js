import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", {
  state: () => ({
    status: false,
  }),

  actions: {
    imgClick() {
      this.status = !this.status;
    },

    close() {
      this.status = false;
    },
  },
});
