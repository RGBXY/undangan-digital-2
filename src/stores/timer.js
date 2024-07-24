// src/stores/timer.js
import { defineStore } from "pinia";

export const useTimerStore = defineStore("timer", {
  state: () => ({
    targetTime: new Date().getTime() + 357 * 24 * 60 * 60 * 1000 + 17 * 60 * 60 * 1000 + 26 * 60 * 1000 + 28 * 1000,
    currentTime: new Date().getTime(),
    timer: null,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  }),
  actions: {
    startTimer() {
      this.calculateTime();
      this.timer = setInterval(() => {
        this.currentTime = new Date().getTime();
        this.calculateTime();
      }, 1000);
    },
    calculateTime() {
      const timeDifference = this.targetTime - this.currentTime;
      this.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    },
    stopTimer() {
      clearInterval(this.timer);
    },
  },
  beforeDestroy() {
    this.stopTimer();
  },
});
