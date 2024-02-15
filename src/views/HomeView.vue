<script setup>
import OpeningSection from "@/components/sections/OpeningSection.vue";
import BridesSection from "@/components/sections/BridesSection.vue";
import { onMounted, watch } from "vue";
import { get } from "@vueuse/core";
import { storeToRefs } from "pinia";
import { useStore } from "@/stores/index";
import HolyMatrimonySection from "@/components/sections/HolyMatrimonySection.vue";

const { section } = storeToRefs(useStore());

const goToSection = () => {
  const el = document.querySelector(`#section-${get(section)}`);
  if (el) {
    const top = el.offsetTop;
    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }
};

watch(section, () => {
  // goToSection();
});

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

  // window.addEventListener("wheel", (e) => {
  //   throttleFn(e);
  // });
});
</script>
<template>
  <OpeningSection />
  <BridesSection />
  <HolyMatrimonySection />
</template>
