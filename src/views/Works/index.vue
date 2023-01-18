<script setup>
import WorkCard from "@/components/WorkCard.vue";
import { useRealProjectsStore } from "../../stores/realproject";
import { useDemoProjectsStore } from "../../stores/demoprojects";
const realProjects = useRealProjectsStore()?.projects;
const demoProjects = useDemoProjectsStore()?.projects;
</script>
<template>
  <section class="works">
    <div class="container">
      <h2 class="text-brand font-bold text-3xl mb-3 mt-6">Real projects</h2>
      <WorkCard
        v-for="card in realProjects"
        :key="card.id"
        :projectInfo="card"
        :full="true"
      />

      <h2 class="text-brand font-bold text-3xl mb-3 mt-6">Demo projects</h2>
      <WorkCard
        v-for="card in demoProjects"
        :key="card.id"
        :projectInfo="card"
        :full="true"
      />
    </div>
  </section>
</template>
