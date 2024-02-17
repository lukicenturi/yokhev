<script setup>
import OpeningSection from "@/components/sections/OpeningSection.vue";
import BridesSection from "@/components/sections/BridesSection.vue";
import { onMounted, watch } from "vue";
import { get } from "@vueuse/core";
import { storeToRefs } from "pinia";
import { useStore } from "@/stores/index";
import HolyMatrimonySection from "@/components/sections/HolyMatrimonySection.vue";
import { RiVolumeUpLine, RiVolumeMuteLine } from "vue-remix-icons";
import Button from "@/components/Button.vue";

const { section, playAudio, opened } = storeToRefs(useStore());

const goToSection = () => {
  const sectionVal = get(section);

  // if (sectionVal < 2) return;

  const el = document.querySelector(`#section-${sectionVal}`);
  if (el) {
    const top = el.offsetTop;
    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }
};

//
// const throttleFn = useThrottleFn((e) => {
//   let sectionVal = get(section);
//   // if (sectionVal === 1) return;
//   if (checkScrollDirectionIsUp(e)) {
//     // if (sectionVal === 2) return;
//     sectionVal--;
//   } else {
//     sectionVal++;
//   }
//   set(section, Math.max(1, Math.min(3, sectionVal)));
// }, 2000);

onMounted(() => {
  goToSection();

  window.addEventListener("resize", () => {
    goToSection();
  });
});

watch(playAudio, (playAudio) => {
  const audio = document.querySelector("#audio");
  if (playAudio) {
    audio.play();
    audio.volume = 0.7;
  } else {
    audio.pause();
  }
});
</script>
<template>
  <OpeningSection />
  <BridesSection />
  <HolyMatrimonySection />
  <Button
    class="fixed bottom-4 right-4 rounded-full z-[10] p-4"
    v-if="opened"
    @click="playAudio = !playAudio"
  >
    <span class="block w-6 h-6">
      <RiVolumeUpLine v-if="playAudio" /> <RiVolumeMuteLine v-else />
    </span>
  </Button>
</template>
