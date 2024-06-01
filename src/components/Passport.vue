<script setup>
import { storeToRefs } from "pinia";
import { get } from "@vueuse/core";
import { computed } from "vue";
import { useStore } from "@/stores";

defineProps({
  state: {
    type: Number,
  },
});

const { additionalHeight, openedFully } = storeToRefs(useStore());

const additionalPx = computed(() => {
  return Math.round(get(additionalHeight) + 60) + "px";
});
</script>
<template>
  <div
    class="passport"
    :class="[`passport--state-${state}`, { fully: openedFully }]"
  >
    <div class="passport__cover">
      <div class="passport__cover__back"></div>
      <div class="passport__cover__front"></div>
    </div>
    <div class="passport__page"></div>
  </div>
</template>
<style lang="scss" scoped>
.passport {
  width: var(--passport-width);
  height: var(--passport-height);
  min-width: var(--passport-width);
  min-height: var(--passport-height);
  max-width: var(--passport-width);
  max-height: var(--passport-height);
  perspective: 2000px;
  transition: 1s;
  transform-style: preserve-3d;
  filter: drop-shadow(0 0 8px rgb(0 0 0 / 0.5));

  &__cover {
    @apply w-full h-full relative;
    transform-origin: left;
    transition: 2s;
    transform-style: preserve-3d;

    &__back {
      @apply absolute w-full h-full top-0 rounded-r-lg md:rounded-r-xl overflow-hidden border-l-2;
      background-size: 100% 100%;
      background-image: url("../page1.webp");
      transform: rotateX(180deg);
      transition: 0.7s;
      backface-visibility: hidden;
      transform-style: preserve-3d;
    }

    &__front {
      @apply w-full h-full rounded-r-lg md:rounded-r-xl overflow-hidden bg-primary;
      background-size: 100% 100%;
      background-image: url("../passport_cover.webp");
      backface-visibility: hidden;
    }
  }

  &__page {
    @apply w-full h-full absolute top-0 z-[-1] opacity-20 transition rounded-r-2xl border-l-2;
    background-size: 100% 100%;
    background-image: url("../page2.webp");
  }

  &--state-2,
  &--state-3,
  &--state-4 {
    @apply rotate-90 scale-[var(--passport-scale)];
    filter: drop-shadow(0 0 8px rgb(0 0 0 / 0.2));

    .passport {
      &__cover {
        transform: rotateY(-180deg);
      }
    }

    @media screen and (max-width: 768px) {
      --additional: v-bind(additionalPx);
      @apply translate-y-[calc(var(--passport-top)+(var(--passport-width)*var(--passport-scale))-(var(--additional)*var(--passport-scale)))];

      &.fully {
        @apply transition-none;
      }
    }
  }

  &--state-2 {
    @apply md:translate-y-[calc(var(--passport-top)+(var(--passport-width)*var(--passport-scale)))];
  }

  &--state-3,
  &--state-4 {
    .passport {
      &__cover {
        &__back {
          @apply opacity-30;
        }
      }

      &__page {
        @apply opacity-100;
      }
    }
  }

  &--state-3 {
    @apply md:translate-y-[calc(var(--passport-top-2)+(var(--passport-width)*var(--passport-scale)))];
    @apply lg:translate-x-[calc(var(--passport-width)*var(--passport-scale)/2)];
  }

  &--state-4 {
    @apply lg:translate-y-0 lg:translate-x-[calc(var(--passport-width)*var(--passport-scale)/2)];
  }

  &.fully {
    .passport {
      &__cover {
        &__front {
          @apply opacity-0;
        }
      }
    }
  }
}
</style>
