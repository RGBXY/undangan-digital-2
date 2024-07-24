<template>
  <div id="galery" class="bg-secondary rounded-br-[70px] text-center pt-5 pb-10 px-6">
    <h1 class="font-tangerine text-[40px] mb-4">Our Memories</h1>
    <div class="flex justify-center w-full">
      <div class="grid grid-cols-10 grid-row-7 gap-4">
        <button @click="imgClick" class="h-[220px] row-span-4 col-span-5">
          <img class="h-full w-full object-cover rounded-2xl" src="../../public/assets/assets-image-galery.png" alt="" />
        </button>
        <button class="h-[140px] row-span-3 col-span-5">
          <img class="h-full w-full object-cover rounded-2xl" src="../../public/assets/assets-image-galery-2.png" alt="" />
        </button>
        <button class="h-[220px] row-span-3 col-span-5">
          <img class="h-full w-full object-cover rounded-2xl" src="../../public/assets/assets-image-galery-3.png" alt="" />
        </button>
        <button class="h-[220px] row-span-3 col-span-5">
          <img class="h-full w-full object-cover rounded-2xl" src="../../public/assets/assets-image-galery-4.png" alt="" />
        </button>
        <button class="h-[220px] row-span-3 col-span-5">
          <img class="h-full w-full object-cover rounded-2xl" src="../../public/assets/assets-image-galery-5.png" alt="" />
        </button>
        <button class="h-[220px] row-span-3 col-span-5">
          <img class="h-full w-full object-cover rounded-2xl" src="../../public/assets/assets-image-galery-6.png" alt="" />
        </button>
        <button class="h-[220px] row-span-4 col-span-5">
          <img class="h-full w-full object-cover rounded-2xl" src="../../public/assets/assets-image-galery-7.png" alt="" />
        </button>
        <button class="h-[140px] row-span-3 col-span-5">
          <img class="h-full w-full object-cover rounded-2xl" src="../../public/assets/assets-image-galery-2.png" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useModalStore } from "@/stores/modal";

export default {
  setup() {
    const modal = useModalStore();

    const imgClick = () => {
      modal.imgClick();
    };

    return {
      imgClick,
    };
  },
};
</script>
