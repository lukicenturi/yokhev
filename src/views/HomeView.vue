<script setup>
import OpeningSection from "@/components/sections/OpeningSection.vue";
import BridesSection from "@/components/sections/BridesSection.vue";
import { onBeforeMount, onMounted, ref, watch } from "vue";
import { get, set, useElementSize, whenever } from "@vueuse/core";
import { storeToRefs } from "pinia";
import { useStore } from "@/stores";
import HolyMatrimonySection from "@/components/sections/HolyMatrimonySection.vue";
import RiVolumeUpLine from "vue-remix-icons/icons/ri-volume-up-line.vue";
import RiVolumeMuteLine from "vue-remix-icons/icons/ri-volume-mute-line.vue";
import Button from "@/components/Button.vue";
import BoardingPassSection from "@/components/sections/BoardingPassSection.vue";
import WeddingWishSection from "@/components/sections/WeddingWishSection.vue";
import { useRoute } from "vue-router";
import PresentSection from "@/components/sections/PresentSection.vue";
import PhotosSection from "@/components/sections/PhotosSection.vue";
import StorySection from "@/components/sections/StorySection.vue";

const { playAudio, opened, section, additionalHeight, openedFully } =
  storeToRefs(useStore());

watch(playAudio, (playAudio) => {
  const audio = document.querySelector("#audio");
  if (playAudio) {
    audio.play();
    audio.volume = 0.5;
  } else {
    audio.pause();
  }
});

const name = ref("Mr./Mrs.");
const route = useRoute();

onBeforeMount(() => {
  const query = get(route).query;

  if (query.to) {
    set(name, query.to);
  }
});

const downCheckpoints = ref([]);

const onScroll = () => {
  if (!get(openedFully)) return;
  const scrollPosition = window.scrollY + window.innerHeight;

  const downCheckpointsVal = get(downCheckpoints);
  let newSection = 4;
  if (scrollPosition < downCheckpointsVal[0]) newSection = 2;
  else if (scrollPosition < downCheckpointsVal[1]) {
    newSection = 3;
  }

  if (get(section) !== newSection) {
    set(section, newSection);
  }

  calculateAdditional(downCheckpointsVal);
};

const calculateAdditional = (downCheckpoints) => {
  const scrollPosition = window.scrollY + window.innerHeight;
  const additional = scrollPosition - downCheckpoints[0];
  set(additionalHeight, additional);
};

const calculateCheckpoints = () => {
  const section2 = document.querySelector("#section-2").getBoundingClientRect();
  const section3 = document.querySelector("#section-3").getBoundingClientRect();
  const section4 = document.querySelector("#section-4").getBoundingClientRect();

  const width = window.innerWidth;
  const isSmall = width < 768;

  const downCheckpointsVal = [
    section2.height + section3.height * (isSmall ? 0.3 : 0.5),
    section2.height + section3.height + section4.height * (isSmall ? 0.5 : 0.2),
  ];

  set(downCheckpoints, downCheckpointsVal);

  calculateAdditional(downCheckpointsVal);
};

onMounted(() => {
  calculateCheckpoints();
  window.addEventListener("resize", calculateCheckpoints);
  window.addEventListener("scroll", onScroll);
});
</script>
<template>
  <OpeningSection :name="name" @open="calculateCheckpoints()" />
  <BridesSection />
  <HolyMatrimonySection />
  <BoardingPassSection />
  <StorySection />
  <PhotosSection />
  <WeddingWishSection :name="name" />
  <PresentSection />
  <Button
    class="fixed bottom-4 right-4 rounded-full z-[10] border-2 border-white"
    v-if="opened"
    @click="playAudio = !playAudio"
  >
    <span class="block w-6 h-6">
      <RiVolumeUpLine v-if="playAudio" />
      <RiVolumeMuteLine v-else />
    </span>
  </Button>
</template>
