import { defineStore } from "pinia";
import { ref } from "vue";

export const useStore = defineStore("store", () => {
  const section = ref(1);
  const opened = ref(false);

  const playAudio = ref(false);

  const additionalHeight = ref(0);
  const openedFully = ref(false);

  const isChinese = ref(false);

  return { section, opened, playAudio, additionalHeight, openedFully, isChinese };
});
