<script setup>
import { defineProps } from "vue";

defineProps({
  projectInfo: Object,
  full: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<template>
  <div class="work-card mb-6 border-b-2 pb-3">
    <div class="xs:flex items-stretch">
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
          v-if="!full"
          class="decsription text-brand text-lg"
          v-html="projectInfo.description"
        ></p>
        <div class="technologies flex gap-x-3">
          <div
            class="tech px-3 py-1 rounded-full"
            v-for="tech in projectInfo?.usedTechnologies"
            :key="tech.name"
            :style="{ background: tech.color }"
          >
            {{ tech.name }}
          </div>
        </div>
      </div>
    </div>
    <div v-if="full" class="card-info pt-4">
      <p>{{ projectInfo?.fullDescription || projectInfo?.description }}</p>
      <a
        :href="projectInfo.url"
        class="link underline text-lg font-medium"
        target="_blank"
        >{{ projectInfo.domen }}</a
      >
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
