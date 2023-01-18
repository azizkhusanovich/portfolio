<script setup>
import { ref, defineProps } from "vue";
const inputHasValue = ref(false);
const invalid = ref(false);

const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: String,
  id: String,
  label: String,
  regex: RegExp,
});

console.log(props.modelValue);

const checkInput = (value) => {
  value ? (inputHasValue.value = true) : (inputHasValue.value = false);
  props.regex.test(value) ? (invalid.value = false) : (invalid.value = true);
};

const setInput = (value) => {
  const x = value
    .replace(/\D/g, "")
    .match(/(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);

  value = !x[2]
    ? x[1]
    : "+(" +
      x[1] +
      ") " +
      x[2] +
      (x[3] ? "-" + x[3] : "") +
      (x[4] ? "-" + x[4] : "") +
      (x[5] ? "-" + x[5] : "");
  emit("update:modelValue", value);
};
</script>

<template>
  <div class="item relative mb-4">
    <input
      type="text"
      :id="id"
      :value="props.modelValue"
      @blur="checkInput($event.target.value)"
      @input="setInput($event.target.value)"
      class="w-full input outline-none border-2 border-brand text-lg px-3 py-2 rounded focus:shadow-md focus:shadow-slate-400 duration-300"
      :class="{ 'border-red-600': invalid }"
    />

    <label
      :for="id"
      :class="{ '!top-0': inputHasValue }"
      class="label text-sm absolute duration-300 -translate-y-1/2 top-1/2 left-3 px-1 bg-white rounded-sm"
      >{{ label }}
      <Transition>
        <span v-if="invalid" class="text-red-600 inline-block bg-white"
          >is invalid</span
        >
      </Transition>
    </label>
  </div>
</template>

<style scoped>
.input:focus + .label {
  top: 0 !important;
}

.v-enter-active {
  transition: all 300ms linear;
  animation: animation-in 400ms;
}
.v-leave-active {
  transition: all 300ms linear;
  animation: animation-in 400ms reverse;
}

@keyframes animation-in {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  50% {
    transform: translateX(30%);
    opacity: 0.7;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
