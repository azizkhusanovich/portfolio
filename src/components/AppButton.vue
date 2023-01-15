<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
defineProps({
  path: String,
  text: String,
});
</script>

<template>
  <div class="flex justify-end">
    <button
      @click="router.push(path)"
      class="text-white bg-brand border-brand border-2 hover:bg-transparent hover:text-brand duration-300 px-5 py-2 rounded text-lg mt-2"
    >
      {{ text }}
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
