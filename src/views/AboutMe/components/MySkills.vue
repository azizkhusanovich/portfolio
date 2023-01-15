<script setup>
import SkillItem from "./SkillItem.vue";
import { useSkillsStore } from "@/stores/skills";
const skills = useSkillsStore();
</script>
<template>
  <section class="skills">
    <div class="container">
      <h2 class="text-brand text-2xl font-bold mt-6 mb-2 md:text-3xl">
        My skills
      </h2>
      <div class="my-4 gap-5 flex flex-wrap justify-between">
        <SkillItem
          v-for="skill in skills.skills"
          :key="skill.id"
          :title="skill.name"
          :progress="skill.percent"
        />
      </div>
    </div>
  </section>
</template>
