<script setup lang="ts">
import { ref } from "vue";
import { set, useIntersectionObserver } from "@vueuse/core";
import { storeToRefs } from "pinia";
import { useStore } from "@/stores";

const { section } = storeToRefs(useStore());

const target = ref();

useIntersectionObserver(target, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    set(section, 3);
  }
});
</script>
<template>
  <section ref="target" class="w-full h-screen" id="section-3">
    <div class="container h-full">test</div>
  </section>
</template>
