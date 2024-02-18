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
        <div class="image">
          <img src="/boarding_pass.webp" />
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.image {
  @apply rounded-xl overflow-hidden;
  box-shadow: 1rem 1rem 0 rgba(38, 87, 72, 0.5);

  @media (max-width: 767px) {
    box-shadow: 0.5rem 0.5rem 0 rgba(38, 87, 72, 0.5);
  }
}
</style>
