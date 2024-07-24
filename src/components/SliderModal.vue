<template>
  <div @click="closeBtn" :class="['w-full h-screen flex justify-center items-center bg-white fixed left-0 top-0 right-0 z-[100]', { hidden: !modalStat }]">
    <div @click.stop class="flex items-center">
      <swiper
        :effect="'coverflow'"
        :grabCursor="true"
        :loop="true"
        :centeredSlides="true"
        :slidesPerView="'3'"
        :navigation="true"
        :coverflowEffect="{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }"
        :modules="modules"
        class="mySwiper m-0 w-[1000px]"
      >
        <swiper-slide>
          <img class="w-full h-full object-cover rounded-xl border-2 border-black" src="../../public/assets/assets-image-galery.png" />
        </swiper-slide>
        <swiper-slide>
          <img class="w-full h-full object-cover rounded-xl border-2 border-black" src="../../public/assets/assets-image-galery-2.png" />
        </swiper-slide>
        <swiper-slide>
          <img class="w-full h-full object-cover rounded-xl border-2 border-black" src="../../public/assets/assets-image-galery-3.png" />
        </swiper-slide>
        <swiper-slide>
          <img class="w-full h-full object-cover rounded-xl border-2 border-black" src="../../public/assets/assets-image-galery-4.png" />
        </swiper-slide>
        <swiper-slide>
          <img class="w-full h-full object-cover rounded-xl border-2 border-black" src="../../public/assets/assets-image-galery-5.png" />
        </swiper-slide>
        <swiper-slide>
          <img class="w-full h-full object-cover rounded-xl border-2 border-black" src="../../public/assets/assets-image-galery-6.png" />
        </swiper-slide>
        <swiper-slide>
          <img class="w-full h-full object-cover rounded-xl border-2 border-black" src="../../public/assets/assets-image-galery-7.png" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow, Navigation } from "swiper/modules";
import { useModalStore } from "@/stores/modal";
import { computed } from "vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const modal = useModalStore();

    const modalStat = computed(() => modal.status);

    const closeBtn = () => {
      modal.close();
    };

    return {
      modalStat,
      closeBtn,
      modules: [EffectCoverflow, Navigation],
    };
  },
};
</script>

<style scoped>
.swiper-slide {
  filter: blur(4px);
}
.swiper-slide-active {
  filter: blur(0);
}

::v-deep .swiper-button-next,
::v-deep .swiper-button-prev {
  background-position: center;
  background-size: 30px;
  background-repeat: no-repeat;
  padding: 8px 200px;
  border-radius: 100%;
}

::v-deep .swiper-button-prev {
  background-image: url("../../public/assets/Arrow_icon.svg");
}

::v-deep .swiper-button-next {
  background-image: url("../../public/assets/Arrow_icon.svg");
  transform: rotate(180deg);
}

::v-deep .swiper-button-next::after,
::v-deep .swiper-button-prev::after {
  content: "";
}

@media (max-width: 720px) {
  ::v-deep .swiper-button-next,
  ::v-deep .swiper-button-prev {
    padding: 8px 350px;
  }
}
</style>
