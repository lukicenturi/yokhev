<template>
  <section class="w-full bg-primary relative min-h-[414px]" id="section-4">
    <div
      class="container !px-12 h-full max-w-none flex lg:justify-center text-center py-20 overflow-x-auto scroller relative"
    >
      <div
        class="image rounded-xl overflow-hidden max-w-[1200px] min-w-[700px]"
      >
        <img class="w-full h-full object-contain" src="/boarding_pass.webp" />
      </div>
    </div>

    <div class="left-0 indicator indicator__start" />
    <div class="right-0 indicator indicator__end" />
  </section>
</template>
<style lang="scss" scoped>
.scroller {
  &::-webkit-scrollbar {
    display: none;
  }
}

.indicator {
  @apply from-transparent to-primary absolute w-12 h-full top-0;

  &__start {
    @apply bg-gradient-to-l;
  }
  &__end {
    @apply bg-gradient-to-r;
  }
}
</style>
