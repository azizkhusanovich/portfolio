<script setup>
import WorkCard from "@/components/WorkCard.vue";
import { useRealProjectsStore } from "../../stores/realproject";
import { useDemoProjectsStore } from "../../stores/demoprojects";
const realProjectsList = useRealProjectsStore()?.projects;
const demoProjectsList = useDemoProjectsStore()?.projects;
</script>
<template>
  <section class="works">
    <div class="container">
      <h2
        v-if="realProjectsList.length"
        class="text-brand font-bold text-2xl mb-3"
      >
        Real projects
      </h2>
      <WorkCard
        v-for="project in realProjectsList"
        :key="project.id"
        :project-info="project"
        :full="true"
      />
      <h2
        v-if="demoProjectsList.length"
        class="text-brand font-bold text-2xl mb-3 pt-5"
      >
        Demo projects
      </h2>
      <WorkCard
        v-for="project in demoProjectsList"
        :key="project.id"
        :project-info="project"
        :full="true"
      />
    </div>
  </section>
</template>
