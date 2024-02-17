<script setup>
import { storeToRefs } from "pinia";
import { useStore } from "@/stores";
import { ref } from "vue";
import { get, set } from "@vueuse/core";
import { useIntersection } from "@/utils/intersection";

const images = ["yoksan.jpg", "heavenny.jpg"];

const { section, opened } = storeToRefs(useStore());

const target = ref();

useIntersection(target, () => {
  if (get(opened)) {
    set(section, 2);
  }
});
</script>
<template>
  <section ref="target" class="w-full h-full" id="section-2">
    <div class="container h-full">
      <div class="flex items-center justify-center h-full">
        <div class="flex gap-6 lg:flex-col wrapper" :class="`state-${section}`">
          <div
            v-for="image in images"
            :key="image"
            class="w-[8rem] h-[8rem] rounded-full overflow-hidden p-2 bg-white shadow"
          >
            <img class="w-full h-full object-cover" :src="`/avatar/${image}`" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.wrapper {
  @apply relative z-[2] lg:pl-[calc(var(--passport-height)*var(--passport-scale))];
  @apply pb-[calc(var(--passport-width)*var(--passport-scale))] lg:pb-0;
  //@apply pt-[15vh] lg:pt-0;
  @apply transform -translate-y-12 lg:translate-y-0 lg:translate-x-12 opacity-0;
  transition: 0.7s all;
  transition-delay: 0.5s;

  &.state-2 {
    @apply translate-y-0 translate-x-0 opacity-100;
  }
}
</style>
