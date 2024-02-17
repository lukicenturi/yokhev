<script setup lang="ts">
import { ref } from "vue";
import { get, set } from "@vueuse/core";
import { storeToRefs } from "pinia";
import { useStore } from "@/stores";
import { useIntersection } from "@/utils/intersection";

const { section, opened } = storeToRefs(useStore());

const target = ref();

useIntersection(
  target,
  () => {
    if (get(opened)) {
      set(section, 4);
    }
  },
  0.1
);
</script>
<template>
  <section ref="target" class="w-full h-full" id="section-4">
    <div class="container h-full">
      <div
        class="flex items-center justify-center flex-col h-full text-center py-20"
      >
        <img src="/boarding_pass.png" class="image" />
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.image {
  filter: drop-shadow(1.5rem 1.5rem 0 rgba(38, 87, 72, 0.5));

  @media (max-width: 767px) {
    filter: drop-shadow(0.5rem 0.5rem 0 rgba(38, 87, 72, 0.5));
  }
}
</style>
