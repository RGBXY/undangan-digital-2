<template>
  <div id="tanggal" class="flex flex-col items-center px-6 justify-center pt-10 pb-32">
    <h1 class="font-tangerine text-[40px] mb-4 text-white">Menuju Hari Bahagia</h1>
    <div class="w-full bg-secondary p-1 rounded-3xl">
      <div class="border-2 border-slate-500 rounded-3xl text-center py-10">
        <h1 class="font-amita text-[24px] mb-5">Akad Nikah</h1>
        <div class="flex justify-center divide-x-2">
          <div class="w-20 h-20 flex items-center justify-center">
            <p>Minggu</p>
          </div>
          <div class="w-20 h-20 flex flex-col items-center justify-center">
            <p>Mei</p>
            <p class="text-4xl">25</p>
          </div>
          <div class="w-20 h-20 flex items-center justify-center">
            <p>2025</p>
          </div>
        </div>
        <p class="my-5">08:00 - 10:00</p>
        <p>
          Jl.Sentiyaki Raya No.1 <br />
          Semarang utara
        </p>
      </div>
    </div>

    <div class="text-center flex my-10 gap-5">
      <div class="bg-secondary py-1 px-4 rounded-lg">
        <p class="text-xl font-bold">{{ timerStore.days }}</p>
        <p class="text-sm">Hari</p>
      </div>
      <div class="bg-secondary py-1 px-4 rounded-lg">
        <p class="text-xl font-bold">{{ timerStore.hours }}</p>
        <p class="text-sm">Jam</p>
      </div>
      <div class="bg-secondary py-1 px-4 rounded-lg">
        <p class="text-xl font-bold">{{ timerStore.minutes }}</p>
        <p class="text-sm">Menit</p>
      </div>
      <div class="bg-secondary py-1 px-4 rounded-lg">
        <p class="text-xl font-bold">{{ timerStore.seconds }}</p>
        <p class="text-sm">Detik</p>
      </div>
    </div>

    <div class="w-full bg-secondary p-1 rounded-3xl">
      <div class="border-2 border-slate-500 rounded-3xl text-center py-10">
        <h1 class="font-amita text-[24px] mb-5">Resepsi</h1>
        <div class="flex justify-center divide-x-2">
          <div class="w-20 h-20 flex items-center justify-center">
            <p>Minggu</p>
          </div>
          <div class="w-20 h-20 flex flex-col items-center justify-center">
            <p>Mei</p>
            <p class="text-4xl">25</p>
          </div>
          <div class="w-20 h-20 flex items-center justify-center">
            <p>2025</p>
          </div>
        </div>
        <p class="my-5">10:00 - 13:00</p>
        <p>
          Jl.Sentiyaki Raya No.1 <br />
          Semarang utara
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { useTimerStore } from "@/stores/timer";
import { onMounted, onUnmounted } from "vue";

export default {
  setup() {
    const timerStore = useTimerStore();

    onMounted(() => {
      timerStore.startTimer();
    });

    onUnmounted(() => {
      timerStore.stopTimer();
    });

    return {
      timerStore,
    };
  },
};
</script>
