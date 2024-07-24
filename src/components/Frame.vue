<template>
  <div class="relative w-full h-[100svh] flex justify-center font-nunito bg-lime-50-100 text-primary_text">
    <div class="w-[60vh] scroll-smooth relative md:w-full lg:w-[60vh] bg-primary overflow-y-auto">
      <!-- <swiper :direction="'vertical'" :slidesPerView="'auto'" :freeMode="true" :scrollbar="true" :mousewheel="true" :modules="modules" class="mySwiper">
        <swiper-slide> -->
      <slot></slot>
      <!-- </swiper-slide>
      </swiper> -->
    </div>
  </div>
</template>

<script></script>
