import { defineStore } from "pinia";

export const useGiftStore = defineStore("gift", {
  state: () => ({
    status: false,
  }),

  actions: {
    giftClick() {
      this.status = !this.status;
    },

    close() {
      this.status = false;
    },
  },
});
