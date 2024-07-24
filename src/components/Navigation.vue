<template>
  <div class="fixed z-50 w-full left-0 right-0 bottom-[2%] flex justify-center">
    <div class="w-[80%] md:w-[30%] lg:w-[20%] bg-secondary flex justify-between p-2 rounded-xl">
      <a href="#home" class="group">
        <div class="p-2 bg-primary rounded-lg group-hover:bg-white transition-all">
          <HomeIcon class="transition-all text-white group-hover:text-primary" />
        </div>
      </a>
      <a href="#mempelai" class="group">
        <div class="p-2 bg-primary rounded-lg group-hover:bg-white transition-all">
          <LoveIcon class="transition-all text-white group-hover:text-primary" />
        </div>
      </a>
      <a href="#tanggal" class="group">
        <div class="p-2 bg-primary rounded-lg group-hover:bg-white transition-all">
          <CalenderIcon class="transition-all text-white group-hover:text-primary" />
        </div>
      </a>
      <a href="#galery" class="group">
        <div class="p-2 bg-primary rounded-lg group-hover:bg-white transition-all">
          <GalleryIcon class="transition-all text-white group-hover:text-primary" />
        </div>
      </a>
      <a href="#ucapan" class="group">
        <div class="p-2 bg-primary rounded-lg group-hover:bg-white transition-all">
          <ChatIcon class="transition-all text-white group-hover:text-primary" />
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import HomeIcon from "../components/icon/HomeIcon.vue"; // Adjust the path as necessary
import LoveIcon from "../components/icon/LoveIcon.vue"; // Adjust the path as necessary
import CalenderIcon from "../components/icon/CalenderIcon.vue"; // Adjust the path as necessary
import GalleryIcon from "../components/icon/GalleryIcon.vue"; // Adjust the path as necessary
import ChatIcon from "../components/icon/ChatIcon.vue"; // Adjust the path as necessary

export default {
  components: {
    HomeIcon,
    LoveIcon,
    CalenderIcon,
    GalleryIcon,
    ChatIcon,
  },
};
</script>
