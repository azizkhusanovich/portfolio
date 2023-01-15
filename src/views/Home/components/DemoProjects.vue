<script setup>
import WorkCard from "@/components/WorkCard.vue";
import { useDemoProjectsStore } from "../../../stores/demoprojects";
const demoProjectsList = useDemoProjectsStore();
</script>
<template>
  <div class="wrapper">
    <WorkCard
      v-for="project in demoProjectsList.getMainInfo"
      :key="project.id"
      :project-info="project"
    >
    </WorkCard>
  </div>
</template>
