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
      name: "Bootstrap",
      percent: 80,
    },
    {
      id: 4,
      name: "Tailwind",
      percent: 80,
    },
    {
      id: 5,
      name: "Sass/Scss",
      percent: 70,
    },
    {
      id: 6,
      name: "Git/Github/Gitlab",
      percent: 60,
    },
    {
      id: 7,
      name: "JavaScript",
      percent: 80,
    },
    {
      id: 8,
      name: "TypeScript",
      percent: 30,
    },
    {
      id: 9,
      name: "VueJS",
      percent: 80,
    },
    {
      id: 10,
      name: "Vuex/Pinia",
      percent: 80,
    },
    {
      id: 11,
      name: "NuxtJS",
      percent: 70,
    },
  ]);
  return { skills };
});
