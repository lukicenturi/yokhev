<script setup lang="ts">
import RiFileCopyLine from "vue-remix-icons/icons/ri-file-copy-line.vue";
import RiHandHeartLine from "vue-remix-icons/icons/ri-hand-heart-line.vue";
import RiCloseLine from "vue-remix-icons/icons/ri-close-line.vue";

import { useClipboard } from "@vueuse/core";
import { storeToRefs } from "pinia";
import { useStore } from "@/stores";
import { ref } from "vue";

const accountNo = "0292255207";

const { copy } = useClipboard({ source: accountNo });
const { isChinese } = storeToRefs(useStore());

const showDialog = ref(false);
</script>

<template>
  <div>
    <div
      class="container border-t py-12 font-lora lg:flex flex-col items-center lg:text-center max-w-[620px]"
    >
      <template v-if="isChinese">
        Kami sangat bersyukur atas segala harapan dan doanya. <br />

        Satu hal yang perlu diperhatikan adalah kami tidak akan tinggal di
        Indonesia setelah pernikahan kami, jadi <br />

        <span class="font-bold font-lora">
          kami akan sangat menghargai jika anda tidak memberi kami hadiah dalam
          bentuk fisik.
        </span>

        <br />

        Tanpa mengurangi rasa hormat kami bagi Anda yang ingin mengirimkan
        hadiah kepada kedua mempelai dapat mengirimkannya melalui:
      </template>
      <template v-else>
        We are very grateful for all the wishes and prayers. <br />

        One thing to note is that we won't be living in Indonesia after our
        wedding, so

        <br />

        <span class="font-bold font-lora">
          we will really appreciate it if guests don't give us any physical
          gifts.
        </span>

        <br />

        Instead, guests can show their support by supporting us financially by
        transfer to:
      </template>

      <div class="pt-6">
        <button
          class="rounded-full text-white px-6 py-2 flex items-center gap-4 bg-primary hover:bg-primary-hover active:bg-primary-active transition"
          @click="showDialog = true"
        >
          <RiHandHeartLine class="w-7" />
          <div class="whitespace-nowrap">
            {{ isChinese ? "Klik di sini" : "Click here" }}
          </div>
        </button>
      </div>
    </div>
  </div>
  <div>
    <Transition
      enter-class="opacity-0"
      enter-active-class="ease-out duration-150"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-in duration-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="showDialog"
        class="fixed top-0 left-0 w-full h-full bg-black/[0.5] z-[100]"
        @click="showDialog = false"
      />
    </Transition>
    <Transition
      enter-from-class="opacity-0 scale-75"
      enter-active-class="ease-out duration-150"
      enter-to-class="opacity-100 scale-100"
      leave-from-class="opacity-100 scale-100"
      leave-active-class="ease-in duration-100"
      leave-to-class="opacity-0 scale-75"
    >
      <div
        v-if="showDialog"
        class="w-[600px] max-w-[calc(100%-2rem)] fixed top-1/2 left-1/2 transition -translate-x-1/2 -translate-y-1/2 bg-white rounded shadow p-4 z-[100]"
      >
        <div class="flex justify-between">
          <div class="flex flex-col gap-3 mt-1">
            <h4 class="font-bold text-2xl">Wedding Gift</h4>
            <div>
              {{
                isChinese
                  ? "Doa restu anda merupakan karunia yang sangat berarti bagi kami. Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless."
                  : "Your blessings are a great gift to us. And if giving is your expression of love, you can gift cashless."
              }}
            </div>
          </div>
          <div>
            <button
              class="rounded-full p-2 hover:bg-gray-100 active:bg-gray-200 transition"
              @click="showDialog = false"
            >
              <RiCloseLine class="w-6" />
            </button>
          </div>
        </div>

        <hr class="my-4" />
        <div class="flex items-center justify-center gap-x-6 gap-y-4 flex-wrap">
          <div>
            <div class="font-lora font-bold text-lg">BCA {{ accountNo }}</div>
            <div class="font-light">AN YOKSAN HERLIE</div>
          </div>
          <button
            class="rounded-full text-white px-4 py-2 flex items-center gap-3 bg-primary hover:bg-primary-hover active:bg-primary-active"
            @click="copy()"
          >
            {{ isChinese ? "Salin" : "Copy" }}
            <span class="block w-6">
              <RiFileCopyLine />
            </span>
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>
