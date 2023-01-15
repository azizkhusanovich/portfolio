<script setup>
import { defineProps } from "vue";

defineProps({
  projectInfo: Object,
});
</script>

<template>
  <div class="work-card mb-5 xs:flex items-stretch">
    <div class="work-img w-full rounded-md overflow-hidden xs:w-2/5 md:w-1/4">
      <img
        :src="'src/assets/images/' + projectInfo.image"
        alt="image of project"
        class="w-full h-full object-cover"
      />
    </div>
    <div class="work-info xs:w-3/5 pl-5 md:w-3/4">
      <h2
        class="title text-brand text-2xl mt-4 xs:mt-0"
        v-html="projectInfo.name"
      ></h2>
      <span
        class="year px-3 py-1 rounded-full bg-brand text-white inline-block mt-4 mb-6"
        >{{ projectInfo.year }}</span
      >
      <p
        class="decsription text-brand text-lg"
        v-html="projectInfo.description"
      ></p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
