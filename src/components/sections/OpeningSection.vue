<script setup>
import Passport from "@/components/Passport.vue";
import RiMailOpenLine from "vue-remix-icons/icons/ri-mail-open-line.vue";
import { ref, watch } from "vue";
import { set, whenever } from "@vueuse/core";
import { storeToRefs } from "pinia";
import { useStore } from "@/stores";
import Button from "@/components/Button.vue";

defineProps({
  name: {
    type: String,
  },
});

const emit = defineEmits(["open"]);

const { section, opened, playAudio, openedFully, isChinese } = storeToRefs(
  useStore()
);

const openInvitation = () => {
  set(opened, true);
  set(section, 2);
  set(playAudio, true);
  emit("open");
  setTimeout(() => {
    set(openedFully, true);
  }, 1000);
};

const passportState = ref(1);

watch(section, (section) => {
  set(passportState, Math.min(4, section));
});

whenever(openedFully, () => {
  document.body.classList.remove("overflow-hidden");
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
        class="flex flex-col lg:flex-row h-full w-full items-center justify-center gap-14 lg:gap-10"
      >
        <div class="relative">
          <div class="boarding_pass" :class="{ gone: section > 1 }">
            <img
              :src="
                isChinese ? '/boarding_pass_cn.webp' : '/boarding_pass.webp'
              "
            />
          </div>
        </div>
        <Passport :state="passportState" />
        <div class="flex flex-col items-center text-center">
          <div class="font-adelia text-gray-400 text-xl">
            {{ isChinese ? "Kepada" : "Dear" }}
          </div>
          <div
            class="font-bold text-primary text-4xl font-lora md:max-w-[400px] md:w-[400px]"
          >
            {{ name }}
          </div>
          <div class="mt-4">
            {{
              isChinese
                ? "Kami mengundang anda ke pernikahan kami."
                : "You are cordially invited to our wedding."
            }}
          </div>
          <div class="mt-10">
            <Button
              class="rounded-br-md rounded-t-full rounded-bl-full px-8 py-4"
              @click="openInvitation()"
            >
              <span class="w-4 h-4"><RiMailOpenLine /></span>
              <span>{{ isChinese ? "BUKA UNDANGAN" : "OPEN INVITATION" }}</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.wrapper {
  @apply fixed top-0 z-[3] transition duration-1000 bg-cover;
  background-image: url("../bg.webp");

  &.opened {
    @apply -translate-y-full;
  }

  &:before,
  &:after {
    content: "";
    @apply fixed -z-[1] bg-contain bg-no-repeat opacity-60 pointer-events-none max-w-[70vw] #{!important};
    filter: sepia(100%) hue-rotate(115deg);
    background: url("../plane.webp");
  }

  &:before {
    @apply top-[calc(4*var(--vh))] -left-[3rem] w-[412px] h-[130px];
  }

  &:after {
    @apply bottom-[calc(4*var(--vh))] -right-[3rem] w-[330px] h-[104px] rotate-180 -scale-y-100 #{!important};
  }
}

.boarding_pass {
  @apply absolute w-[380px] lg:w-[510px] translate-y-[8rem] lg:-translate-y-[7.5rem] -translate-x-[53%] lg:-translate-x-[82px] left-0 -rotate-90 transition-all rounded-lg overflow-hidden;
  filter: drop-shadow(0 0 8px rgb(0 0 0 / 0.2));

  &.gone {
    @apply opacity-0 invisible;
    margin-top: 10rem;
  }
}
</style>
