<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useStore } from "@/stores";
import RiExternalLinkLine from "vue-remix-icons/icons/ri-external-link-line.vue";

const url = "https://maps.app.goo.gl/vJvcphZiqHZS1FAi9";
const { isChinese } = storeToRefs(useStore());
</script>

<template>
  <section id="section-4" class="bg-primary py-20">
    <div class="w-full relative">
      <div
        class="container !px-12 h-full max-w-none flex lg:justify-center text-center overflow-x-auto scroller relative"
      >
        <div
          class="image rounded-xl overflow-hidden max-w-[1200px] min-w-[700px]"
        >
          <img
            class="w-full h-full object-contain"
            :src="isChinese ? '/boarding_pass_cn.webp' : '/boarding_pass.webp'"
          />
        </div>
      </div>

      <div class="left-0 indicator indicator__start" />
      <div class="right-0 indicator indicator__end" />
    </div>

    <div class="flex justify-center pt-10">
      <a
        class="text-white flex items-center gap-2 cursor-pointer hover:underline uppercase font-bold"
        target="_blank"
        :href="url"
      >
        <span> {{ isChinese ? "Lihat lokasi" : "Open location" }}</span>
        <RiExternalLinkLine class="w-6" />
      </a>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.scroller {
  &::-webkit-scrollbar {
    display: none;
  }
}

.indicator {
  @apply from-transparent to-primary absolute w-12 h-full top-0;

  &__start {
    @apply bg-gradient-to-l;
  }
  &__end {
    @apply bg-gradient-to-r;
  }
}
</style>
