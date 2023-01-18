<script setup>
// custom components
import AppButton from "@/components/AppButton.vue";
import Real from "./RealProjects.vue";
import Demo from "./DemoProjects.vue";

import { ref } from "vue";

const projectsTabName = { Real, Demo };
const currentTab = ref("Demo");
</script>

<template>
  <section class="my-works">
    <div class="container">
      <div>
        <h2 class="text-brand font-bold text-3xl mb-3 mt-6">My works</h2>
        <div class="tabs mb-4 flex justify-evenly items-stretch gap-x-3">
          <button
            v-for="(_, tab) in projectsTabName"
            :key="tab"
            @click="currentTab = tab"
            class="text-lg text-secondary grow rounded py-2 text-center capitalize border-2 border-secondary duration-300 hover:bg-transparent md:text-xl"
            :class="{ 'bg-secondary !text-white': currentTab === tab }"
          >
            {{ tab }}
          </button>
        </div>
        <transition name="scale" mode="out-in">
          <component :is="projectsTabName[currentTab]" />
        </transition>

        <AppButton text="See more" path="/works" />
      </div>
    </div>
  </section>
</template>

<style>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.3s ease;
}
.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>
