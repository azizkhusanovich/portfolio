<script setup>
import WorkCard from "@/components/WorkCard.vue";
import { useRealProjectsStore } from "../../../stores/realproject";
const realProjectsList = useRealProjectsStore();
</script>
<template>
  <div class="wrapper">
    <WorkCard
      v-for="project in realProjectsList.getMainInfo"
      :key="project.id"
      :project-info="project"
    >
    </WorkCard>
  </div>
</template>
