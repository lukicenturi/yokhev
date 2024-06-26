<script setup lang="ts">
import RiFileCopyLine from "vue-remix-icons/icons/ri-file-copy-line.vue";

import { useClipboard } from "@vueuse/core";
import { storeToRefs } from "pinia";
import { useStore } from "@/stores";

const accountNo = "0292255207";

const { copy } = useClipboard({ source: accountNo });
const { isChinese } = storeToRefs(useStore());
</script>

<template>
  <div>
    <div
      class="container border-t py-12 font-lora lg:flex flex-col items-center lg:text-center"
    >
      <template v-if="isChinese">
        Kami sangat bersyukur atas segala harapan dan doanya. <br />

        Satu hal yang perlu diperhatikan adalah kami tidak akan tinggal di
        Indonesia setelah pernikahan kami, <br />

        jadi
        <span class="font-bold font-lora">
          kami akan sangat menghargai jika anda tidak memberi kami hadiah dalam
          bentuk fisik.
        </span>
      </template>
      <template v-else>
        We are very grateful for all the wishes and prayers. <br />

        One thing to note is that we won't be living in Indonesia after our
        wedding, <br />

        so
        <span class="font-bold font-lora">
          we will really appreciate it if guests don't give us any physical
          gifts.
        </span>

        <br />
        <br />

        Instead, guests can show their support by supporting us financially by
        transfer to
      </template>

      <div class="pt-4">
        <button
          class="rounded text-white px-6 py-2 flex items-center gap-4 bg-primary hover:bg-primary-hover active:bg-primary-active"
          @click="copy()"
        >
          <div>
            <div class="font-lora font-bold text-lg">BCA {{ accountNo }}</div>
            <div class="font-light">AN YOKSAN HERLIE</div>
          </div>
          <span class="block w-6 h-6">
            <RiFileCopyLine />
          </span>
        </button>
      </div>
    </div>
  </div>
</template>
