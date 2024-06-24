<script setup lang="ts">
import { VueMarqueeSlider } from "vue3-marquee-slider";
import { computed, onBeforeMount, ref } from "vue";
import { get, set, useIntersectionObserver, useWindowSize } from "@vueuse/core";

const firsts = ref([]);
const seconds = ref([]);

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

onBeforeMount(() => {
  let gallery = [];
  for (let i = 1; i <= 24; i++) {
    let number = i < 10 ? "0" + i : i;
    gallery.push(`/gallery/${number}.jpg`);
  }

  gallery = shuffle(gallery);

  set(firsts, gallery.slice(0, 12));
  set(seconds, gallery.slice(12, 24));
});

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
    speed: small ? 18000 : 60000,
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
