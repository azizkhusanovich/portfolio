import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useRealProjectsStore = defineStore("realProjects", () => {
  const projects = ref([
    {
      id: 1,
      name: "Porten",
      year: 2021,
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      fullDescription:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      image: "work.png",
      url: "http://www.youtube.com",
      domen: "porten.com",
      usedTechnologies: [
        {
          name: "HTML",
          color: "#F36A2C",
        },
        {
          name: "CSS",
          color: "#8DD0FF",
        },
        {
          name: "JavaScript",
          color: "#EFD81F",
        },
      ],
    },
    {
      id: 2,
      name: "Porten new",
      year: 2022,
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      fullDescription:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      image: "work.png",
      url: "http://www.youtube.com",
      domen: "porten.com",
      usedTechnologies: [
        {
          name: "HTML",
          color: "#F36A2C",
        },
        {
          name: "CSS",
          color: "#8DD0FF",
        },
        {
          name: "JavaScript",
          color: "#EFD81F",
        },
      ],
    },
  ]);

  const getMainInfo = computed(() => {
    return projects.value
      .map((project) => {
        return {
          id: project.id,
          name: project.name,
          image: project.image,
          description: project.description,
          year: project.year,
        };
      })
      .reverse();
  });
  return { projects, getMainInfo };
});
