import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useDemoProjectsStore = defineStore("DemoProjects", () => {
  const projects = ref([
    {
      id: 1,
      name: "Porten demo",
      year: 2021,
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      fullDescription:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      image: "work.png",
      fullpage: "fullpage.png",
      url: "http://www.youtube.com",
      usedTechnologies: [
        {
          name: "HTML",
          color: "#F36A2C",
        },
        {
          name: "CSS",
          color: "8DD0FF",
        },
        {
          name: "JavaScript",
          color: "#EFD81F",
        },
      ],
    },
    {
      id: 2,
      name: "Porten new demo",
      year: 2022,
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      fullDescription:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      image: "work.png",
      fullpage: "fullpage.png",
      url: "http://www.youtube.com",
      usedTechnologies: [
        {
          name: "HTML",
          color: "#F36A2C",
        },
        {
          name: "CSS",
          color: "8DD0FF",
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
