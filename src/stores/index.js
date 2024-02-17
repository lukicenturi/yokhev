import { defineStore } from "pinia";
import { ref } from "vue";

export const useStore = defineStore("store", () => {
  const section = ref(1);
  const opened = ref(false);

  const playAudio = ref(false);

  return { section, opened, playAudio };
});
