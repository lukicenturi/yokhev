<script setup>
import { RouterView } from "vue-router";
import { onMounted } from "vue";

const onResize = () => {
  const root = document.querySelector(":root");

  const vh = window.innerHeight / 100;

  root.style.setProperty("--vh", `${vh}px`);
};

onMounted(() => {
  onResize();

  window.addEventListener("resize", onResize);
});
</script>

<template>
  <RouterView />
</template>
