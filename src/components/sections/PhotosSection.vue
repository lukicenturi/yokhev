<script setup lang="ts">
import { VueMarqueeSlider } from "vue3-marquee-slider";
import { computed, ref } from "vue";
import { get, set, useIntersectionObserver, useWindowSize } from "@vueuse/core";

const firsts = [
  "/gallery/01.jpg",
  "/gallery/02.jpg",
  "/gallery/03.jpg",
  "/gallery/04.jpg",
  "/gallery/05.jpg",
  "/gallery/06.jpg",
  "/gallery/07.jpg",
  "/gallery/08.jpg",
];

const seconds = [
  "/gallery/09.jpg",
  "/gallery/10.jpg",
  "/gallery/11.jpg",
  "/gallery/12.jpg",
  "/gallery/13.jpg",
  "/gallery/14.jpg",
  "/gallery/15.jpg",
];

const paused = ref(true);

const { width } = useWindowSize();
const isSmall = computed(() => {
  return get(width) < 768;
});

const target = ref();

useIntersectionObserver(
  target,
  () => {
    set(paused, false);
  },
  {
    threshold: 0,
  }
);

const props = computed(() => {
  const small = get(isSmall);
  return {
    speed: small ? 12000 : 40000,
    space: small ? 8 : 16,
    width: small ? 200 : 400,
    paused: get(paused),
  };
});
</script>

<template>
  <div
    ref="target"
    @mousedown="paused = true"
    @mouseup="paused = false"
    @mouseout="paused = false"
  >
    <VueMarqueeSlider id="first" v-bind="props">
      <img
        v-for="item in firsts"
        :key="item"
        class="w-full h-auto"
        :src="item"
      />
    </VueMarqueeSlider>
    <VueMarqueeSlider id="second" v-bind="props" class="mt-2 md:mt-4">
      <img
        v-for="item in seconds"
        :key="item"
        class="w-full h-auto transform -translate-x-40"
        :src="item"
      />
    </VueMarqueeSlider>
  </div>
</template>
