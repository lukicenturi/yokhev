<script setup>
import Passport from "@/components/Passport.vue";
import { RiMailOpenLine } from "vue-remix-icons";
import { ref, watch } from "vue";
import { set, useIntersectionObserver } from "@vueuse/core";
import { storeToRefs } from "pinia";
import { useStore } from "@/stores";
import { useIntersection } from "@/utils/intersection";

const { section } = storeToRefs(useStore());

const openInvitation = () => {
  set(section, 2);
};

const passportState = ref(1);

watch(section, (section) => {
  set(passportState, Math.min(3, section));
});

const target = ref();

useIntersection(target, () => {
  set(section, 1);
});
</script>

<template>
  <section ref="target" class="w-full h-full" id="section-1">
    <div class="container h-full">
      <div
        class="flex flex-col h-full w-full items-center justify-center gap-10"
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
              class="rounded-br-md rounded-t-full rounded-bl-full flex items-center gap-3 bg-primary text-white text-sm font-bold px-8 py-4"
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
