<script setup lang="ts">
import { onBeforeMount, Ref, ref } from "vue";
import { get, set } from '@vueuse/core';
import axios, { AxiosResponse } from 'axios'

const from = ref<string>("");
const message = ref<string>("");
const confirmation = ref<"Hadir" | "Tidak Hadir">("Hadir");
const guests = ref<string>("1");

type DataItem = {
  from: string;
  message: string;
  confirmation: "Hadir" | "Tidak Hadir";
  guests: string;
}

const url = import.meta.env.VITE_SCRIPT_URL;

const items: Ref<DataItem[]> = ref([]);
const submitted: Ref<boolean> = ref(false);

const fetchData = async() => {
  try {
    const result: AxiosResponse<DataItem[]> = await axios.get(url);
    set(items, result.data);
  } catch (e) {
    console.error(e);
  }
}

onBeforeMount(() => {
  fetchData();
})

const add = async () => {
  const confirmationVal = get(confirmation);
  const newRow: DataItem = {
    from: get(from),
    message: get(message),
    confirmation: confirmationVal,
    guests: confirmationVal === "Hadir" ? get(guests) : "-",
  };

  try {
    const result: AxiosResponse<{ result: boolean }> = await axios.get(url, {
      params: {...newRow, action: 'add'}
    });
    if (result.data.result) {
      await fetchData();
      set(submitted, true);
    }
  } catch (e) {
    console.error(e);
  }
};
</script>
<template>
  <section class="w-full h-full" id="section-5">
    <div class="container py-20">
      <div class="font-bold text-primary text-4xl font-lora mb-8">
        Wedding Wish
      </div>
      <div class="grid lg:grid-cols-2 gap-10">
        <div class="flex flex-col gap-4">
          <input
            class="font-lora w-full py-2 px-4 rounded border border-primary/[.3] focus:border-primary outline-none"
            placeholder="From"
            v-model="from"
          />
          <textarea
            class="font-lora w-full py-2 px-4 rounded border border-primary/[.3] focus:border-primary outline-none"
            rows="4"
            placeholder="Message"
            v-model="message"
          />
          <div class="flex flex-col gap-2">
            <label for="confirmation" class="font-lora text-sm">
              Konfirmasi Kehadiran
            </label>
            <select
              v-model="confirmation"
              class="font-lora w-full py-2 px-4 rounded border border-primary/[.3] focus:border-primary outline-none"
              id="confirmation"
            >
              <option value="Hadir">Hadir</option>
              <option value="Tidak Hadir">Tidak Hadir</option>
            </select>
          </div>
          <div class="flex flex-col gap-2">
            <label for="guests" class="font-lora text-sm">Jumlah Tamu</label>
            <select
              v-model="guests"
              :disabled="confirmation === 'false'"
              class="font-lora w-full py-2 px-4 rounded border border-primary/[.3] focus:border-primary outline-none disabled:text-black/[.3]"
              id="guests"
            >
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <button
            class="bg-primary text-white rounded py-2 px-4 font-bold active:bg-primary-active hover:bg-primary-hover"
            @click="add()"
          >
            SEND
          </button>
          <div class="font-lora text-sm font-medium" v-if="submitted">
            Terima kasih atas konfirmasi anda
          </div>
        </div>
        <div class="flex flex-col divide-y">
          <div v-for="item in items" :key="item.from + item.message" class="py-3 flex flex-col gap-1">
            <div class="font-lora text-lg font-bold">{{ item.from }}</div>
            <div class="font-lora text-sm">{{ item.message }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
