import { ref } from "vue";
import { defineStore } from "pinia";

export const useSkillsStore = defineStore("skills", () => {
  const skills = ref([
    {
      id: 1,
      name: "HTML5",
      percent: 90,
    },
    {
      id: 2,
      name: "CSS3",
      percent: 90,
    },
    {
      id: 3,
      name: "Bootstrap/Tailwind",
      percent: 80,
    },
    {
      id: 4,
      name: "Sass/Scss",
      percent: 70,
    },
    {
      id: 5,
      name: "Git/Github/Gitlab",
      percent: 70,
    },
    {
      id: 6,
      name: "JavaScript",
      percent: 85,
    },
    {
      id: 7,
      name: "TypeScript",
      percent: 30,
    },
    {
      id: 8,
      name: "VueJS",
      percent: 80,
    },
    {
      id: 9,
      name: "Vuex/Pinia",
      percent: 90,
    },
    {
      id: 10,
      name: "NuxtJS",
      percent: 70,
    },
  ]);
  return { skills };
});
