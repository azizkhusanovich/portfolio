<script setup>
import { ref, defineProps } from "vue";
const inputHasValue = ref(false);

defineProps({
  label: String,
  id: String,
});
</script>

<template>
  <div class="item relative">
    <input
      type="text"
      :id="id"
      class="w-full input outline-none border-2 border-brand text-lg px-3 py-2 rounded-sm"
    />
    <label
      :for="id"
      :class="{ '!top-0': inputHasValue }"
      class="label text-sm absolute duration-300 -translate-y-1/2 top-1/2 left-3 p-1 bg-white"
      >{{ label }}</label
    >
  </div>
</template>

<style>
.input:focus + .label {
  top: 0 !important;
}
</style>
