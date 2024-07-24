<template>
  <div class="py-16 rounded-tl-[100px] bg-secondary">
    <div class="px-6 text-center mb-20">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63365.30694236085!2d110.36201409727983!3d-6.970140315692652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b12b5694f0f%3A0x72210ee40fee75ce!2sCAN%20Creative%20%7C%20Jasa%20Pembuatan%20Web%20dan%20Aplikasi%20Mobile%20Android%20IOS!5e0!3m2!1sid!2sid!4v1721637387439!5m2!1sid!2sid"
        class="w-full h-[400px]"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <h1 class="mt-10 mb-5 font-amita text-black text-xl">Kediaman Mempelai Wanita</h1>
      <p class="mb-5">Jl. Sentiyaki Raya No.1, Bulu Lor, Semarang Utara, Kota Semarang</p>
      <Button>Petunjuk Ke Lokasi</Button>
    </div>
    <div class="relative border-2 border-dashed border-primary">
      <img class="absolute -top-14 -left-5" src="../../public/assets/assets-2.png" alt="" />
    </div>
  </div>
</template>

<script setup>
import Button from "../components/Button.vue";
</script>
