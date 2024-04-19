<script setup>
import { computed, ref } from "vue";
import { get, set, useIntervalFn } from "@vueuse/core";

const countdown = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

const timers = computed(() => {
  const countdownVal = get(countdown);
  return [
    [countdownVal.days, "days"],
    [countdownVal.hours, "hours"],
    [countdownVal.minutes, "minutes"],
    [countdownVal.seconds, "seconds"],
  ];
});

const targetDate = new Date("2024-08-10 10:30");

const updateCountdown = () => {
  const now = new Date();
  const difference = targetDate - now;

  if (difference <= 0) {
    set(countdown, { days: 0, hours: 0, minutes: 0, seconds: 0 });
    stop(); // Stop the interval if the date has passed
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / 1000 / 60) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  set(countdown, { days, hours, minutes, seconds });
};

const { pause: stop } = useIntervalFn(updateCountdown, 1000, {
  immediate: true,
});
</script>
<template>
  <div class="flex flex-wrap w-full items-center justify-center gap-3 md:gap-8">
    <div v-for="item in timers" :key="item[1]" class="flex flex-col gap-3">
      <div class="text-primary font-lora text-3xl md:text-5xl font-bold">
        {{ item[0] }}
      </div>
      <div class="uppercase font-bold font-poppins text-sm">
        {{ item[1] }}
      </div>
    </div>
  </div>
</template>
