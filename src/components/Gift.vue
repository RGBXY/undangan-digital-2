<template>
  <div class="text-center py-12 px-6 overflow-hidden text-white border-b-2 border-dashed border-secondary">
    <h1 class="font-tangerine text-[40px] mb-10">Wedding Gift</h1>
    <div class="relative bg-secondary py-8 rounded-2xl px-5 flex flex-col items-center justify-center">
      <img class="w-[110px] absolute -top-10 -left-10" src="../../public/assets/assets-3.png" alt="" />
      <img class="w-[110px] absolute -bottom-8 -right-8 rotate-180" src="../../public/assets/assets-3.png" alt="" />
      <h1 class="text-[14px] z-10 text-black mb-10 w-[90%]">Terima kasih telah menambah semangat kegembiraan pernikahan kami dengan kehadiran dan hadiah indah Anda.</h1>
      <div :class="['flex flex-col items-center', { hidden: !giftStat }]">
        <img class="mb-6" src="../../public/assets/assets-image-card.svg" alt="" />
        <img class="pointer-events-none mb-10" src="../../public/assets/assets-image-card-2.svg" alt="" />
        <div class="w-full bg-primary flex flex-col gap-3 justify-center items-center p-4 rounded-xl text-sm mb-8">
          <img src="../../public/assets/Gift-Icon.svg" alt="" />
          <p class="text-base font-semibold">Kirim Hadiah</p>
          <p @click="" class="font-light">Nama Penerima: Hasna Zakia</p>
          <p class="font-light">No HP: 08829928918</p>
          <p class="font-light">Jl. Sentiyaki Raya No.1, Bulu Lor, Semarang Utara, Kota Semarang</p>
        </div>
      </div>
      <Button v-if="giftStat === false" @click.native="giftClick" class="text-[14px]">Klik Disini</Button>
      <Button v-else @click.native="giftClick" class="text-[14px]">Konfirmasi</Button>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button.vue";
import { useGiftStore } from "../stores/gift";
import { computed } from "vue";

export default {
  components: {
    Button,
  },
  setup() {
    const gift = useGiftStore();

    const giftClick = () => {
      gift.giftClick();
    };

    const giftStat = computed(() => gift.status);

    return {
      giftClick,
      giftStat,
    };
  },
};
</script>
