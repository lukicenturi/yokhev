<script setup lang="ts">
import { ref } from "vue";
import { set } from "@vueuse/core";
import { storeToRefs } from "pinia";
import { useStore } from "@/stores";
import { useIntersection } from "@/utils/intersection";
import Countdown from "@/components/Countdown.vue";

const { section } = storeToRefs(useStore());

const target = ref();

useIntersection(target, () => {
  set(section, 3);
});
</script>
<template>
  <section ref="target" class="w-full h-full" id="section-3">
    <div class="container h-full">
      <div
        class="flex items-center justify-end flex-col gap-4 h-full text-center py-20"
      >
        <div class="font-poppins text-gray-400 italic font-medium">
          The journey starts in
        </div>
        <Countdown />
      </div>
    </div>
  </section>
</template>
