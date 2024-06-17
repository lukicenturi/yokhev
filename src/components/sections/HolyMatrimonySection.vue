<script setup lang="ts">
import Countdown from "@/components/Countdown.vue";
import { storeToRefs } from "pinia";
import { useStore } from "@/stores";

const { isChinese } = storeToRefs(useStore());
</script>
<template>
  <section class="w-full md:h-full" id="section-3">
    <div class="container h-full">
      <div
        class="flex items-center justify-end flex-col gap-4 h-full text-center min-h-[400px] py-20"
      >
        <div class="font-poppins text-gray-400 italic font-medium">
          {{ isChinese ? "Perjalanan dimulai dalam" : "The journey starts in" }}
        </div>
        <Countdown />
      </div>
    </div>
  </section>
</template>
