<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

import { Pagination } from "swiper/modules";

import "swiper/css/pagination";
// Import Swiper styles
import "swiper/css";

const modules = [Pagination];

const pagination = {
  clickable: true,
  renderBullet: function (index, className) {
    return '<span class="' + className + '">' + (index + 1) + "</span>";
  },
};
</script>

<template>
  <div class="py-16 md:py-32">
    <div
      class="font-bold text-primary text-4xl font-lora mb-4 md:mb-8 text-center"
    >
      Our Stories
    </div>
    <Swiper
      :space-between="64"
      class="[&>.swiper-wrapper]:items-center pb-16"
      :modules="modules"
      :pagination="pagination"
    >
      <SwiperSlide>
        <div
          class="container flex flex-col md:grid grid-cols-5 items-center gap-8 lg:gap-16 !px-8 md:px-0"
        >
          <div class="col-span-3 rounded-xl lg:rounded-3xl overflow-hidden">
            <img
              class="max-w-[400px] md:max-w-none w-full"
              src="/story/01.webp"
            />
          </div>
          <div
            class="col-span-2 font-lora md:text-lg lg:text-xl lg:leading-10 text"
          >
            They first met in 2010 at church. Long story short,
            <b class="text text__pink">Heav</b> was going to Jakarta for her
            college, and <b class="text text__blue">Yoksan</b> was trained for a
            competition at Jakarta too.
            <br />
            <br />
            They met sometimes, but at that time, our meeting was only as
            friends catching up about life.
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          class="container flex flex-col md:grid grid-cols-5 items-center gap-8 lg:gap-16 !px-8 md:px-0"
        >
          <div class="col-span-3">
            <img
              class="max-w-[400px] md:max-w-none w-full"
              src="/story/02.webp"
            />
          </div>
          <div
            class="col-span-2 font-lora md:text-lg lg:text-xl lg:leading-10 text"
          >
            Then, they became closer in 2019-2020, and on
            <b class="text">14th March 2020</b>,
            <b class="text text__blue">Yoksan</b> asked
            <b class="text text__pink">Heav</b> to be his girlfriend.
            <br />
            <br />
            Their journey was not easy.
            <b class="text text__blue">Yoksan</b> had to continue his studies in
            Nottingham, UK, while <b class="text text__pink">Heav</b> was still
            working in Pontianak, Indonesia.
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          class="container flex flex-col md:grid grid-cols-5 items-center gap-8 lg:gap-16 !px-8 md:px-0"
        >
          <div class="col-span-3 rounded-xl lg:rounded-3xl overflow-hidden">
            <img
              class="max-w-[400px] md:max-w-none w-full"
              src="/story/03.webp"
            />
          </div>
          <div
            class="col-span-2 font-lora md:text-lg lg:text-xl lg:leading-10 text"
          >
            Finally, <b class="text text__blue">Yoksan</b> proposed
            <b class="text text__pink">Heav</b> on
            <b class="text">26th June 2023</b>, and here's the beginning of
            their lifetime story begins.
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<style lang="scss">
.text {
  color: #555555;
  @apply font-lora;

  &__blue {
    color: #1c84ff;
  }

  &__pink {
    color: #ff91e0;
  }
}

.swiper-pagination-bullets {
  @apply bottom-0 #{!important};
}

.swiper-pagination-bullet {
  @apply transition w-8 h-8 leading-8 text-center text-sm font-lora text-black;
  opacity: 1;
  background: rgba(0, 0, 0, 0.2);

  &-active {
    @apply bg-primary text-white;
  }
}
</style>
<script setup></script>
