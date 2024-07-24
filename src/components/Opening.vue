<template>
  <div class="h-full bg-primary">
    <div class="h-[55%] bg-primary flex text-white flex-col justify-center items-center relative">
      <img class="absolute w-24" src="../../public/assets/assets-1.png" alt="" />
      <div class="flex font-amita z-10 text-9xl">
        <p class="">H</p>
        <p class="mt-10">D</p>
      </div>
      <p>25 05 2025</p>
    </div>
    <div class="h-[45%] flex flex-col text-start md:text-center lg:text-start px-5 justify-center items-center bg-secondary rounded-tr-[80px] text-primary_text">
      <div class="w-full mb-12">
        <p class="text-[14px]">The Wedding Of</p>
        <h1 class="font-amita text-[40px] my-1">Hasna & Dimas</h1>
        <p class="text-[14px]">Kepada Bapak/Ibu/Saudara/i</p>
        <h1 class="text-[20px] font-semibold">Nama Tamu</h1>
      </div>
      <RouterLink to="/page">
        <Button> Buka Undangan </Button>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import Button from "../components/Button.vue";
import { RouterLink } from "vue-router";
</script>
