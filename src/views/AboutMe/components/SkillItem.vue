<script setup>
import { defineProps, ref, onMounted } from "vue";
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  progress: {
    type: Number,
    required: true,
  },
});

// -> methods
const start = (el) => {
  el.style.width = props.progress + "%";
};

const show = ref(false);

onMounted(() => {
  show.value = true;
});
</script>
<template>
  <div class="mb-2 w-full md:w-[48%]">
    <h3 class="text-lg text-brand md:text-xl">{{ title }}</h3>
    <div class="progress-bar bg-slate-300 rounded-xl">
      <Transition name="accordion" @enter="start">
        <div
          v-show="show"
          class="line bg-secondary rounded-xl text-white text-sm py-px px-2 md:text-base"
        >
          {{ progress }} %
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped lang="scss">
.accordion-enter-active {
  will-change: width, opacity;
  transition: width 1.5s ease, opacity 1s ease;
}

.accordion-enter-from {
  width: 10% !important;
  opacity: 0;
}
</style>
