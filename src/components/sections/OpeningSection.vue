<script setup>
import Passport from "@/components/Passport.vue";
import { RiMailOpenLine } from "vue-remix-icons";
import { ref, watch } from "vue";
import { set } from "@vueuse/core";
import { storeToRefs } from "pinia";
import { useStore } from "@/stores";

const { section, opened, playAudio } = storeToRefs(useStore());

const openInvitation = () => {
  set(playAudio, true);
  document.body.classList.remove("overflow-hidden");
  set(opened, true);
  set(section, 2);
};

const passportState = ref(1);

watch(section, (section) => {
  set(passportState, Math.min(3, section));
});
</script>

<template>
  <section
    ref="target"
    class="w-full h-full wrapper"
    id="section-1"
    :class="{ opened: section > 1 }"
  >
    <div class="container h-full">
      <div
        class="flex flex-col lg:flex-row h-full w-full items-center justify-center gap-10"
        :class="{
          'lg:flex-row': passportState < 3,
        }"
      >
        <Passport :state="passportState" />
        <div class="flex flex-col items-center text-center">
          <div class="font-adelia text-gray-400 text-xl">Dear</div>
          <div class="font-bold text-primary text-4xl font-lora">
            Luki Centuri
          </div>
          <div class="mt-4">You are cordially invited to our wedding.</div>
          <div class="mt-10">
            <button
              class="rounded-br-md rounded-t-full rounded-bl-full flex items-center gap-3 bg-primary text-white text-sm font-bold px-8 py-4 hover:opacity-80 active:opacity-90"
              @click="openInvitation()"
            >
              <span class="w-4 h-4"><RiMailOpenLine /></span>
              <span>OPEN INVITATION</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.wrapper {
  @apply fixed top-0 z-[3] transition duration-1000 bg-cover;
  background: url("../bg.jpg");

  &.opened {
    @apply -translate-y-full;
  }

  &:before {
    content: "";
    @apply fixed top-[4vh] -left-[3rem] w-[412px] h-[130px] bg-contain opacity-60 pointer-events-none #{!important};
    filter: sepia(100%) hue-rotate(115deg);
    background: url("../plane.webp");
  }

  &:after {
    content: "";
    @apply fixed bottom-[4vh] -right-[3rem] w-[330px] h-[104px] bg-contain opacity-60 pointer-events-none transform rotate-180 -scale-y-100 #{!important};
    filter: sepia(100%) hue-rotate(115deg);
    background: url("../plane.webp");
  }
}
</style>
