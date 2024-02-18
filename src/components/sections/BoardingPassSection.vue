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
  0.2
);
</script>
<template>
  <section ref="target" class="w-full h-full bg-primary" id="section-4">
    <div class="container h-full">
      <div
        class="flex items-center justify-center flex-col h-full text-center py-20"
      >
        <div class="image rounded-xl overflow-hidden max-w-[1200px]">
          <img src="/boarding_pass.webp" />
        </div>
      </div>
    </div>
  </section>
</template>
