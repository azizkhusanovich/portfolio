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
  <div class="work-body mb-5">
    <div class="work-card xs:flex items-stretch">
      <div class="work-img w-full rounded-md overflow-hidden xs:w-2/5 md:w-1/4">
        <img
          :src="'src/assets/images/' + projectInfo.image"
          alt="image of project"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="work-info xs:w-3/5 xs:pl-5 md:w-3/4">
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
        <div v-else class="technologies">
          <div
            class="inline-block px-3 py-1 rounded-full mr-1 font-medium"
            :style="{ background: tech.color }"
            v-for="tech in projectInfo.usedTechnologies"
          >
            {{ tech.name }}
          </div>
        </div>
      </div>
    </div>
    <div v-if="full" class="more py-2">
      <p
        class="decsription text-brand text-lg"
        v-html="projectInfo.fullDescription || projectInfo.description"
      ></p>

      <a
        :href="projectInfo.url"
        target="_blank"
        class="text-brand text-lg font-medium underline pt-2"
      >
        {{ projectInfo.domen }}
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
