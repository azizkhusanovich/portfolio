<script setup>
import InputItem from "./components/InputItem.vue";
import { ref, reactive } from "vue";
const username = ref("");
const inputList = reactive([
  {
    id: "username",
    label: "Full Name",
    regex: new RegExp(/^[\w-\.]{2,}/g),
  },
  {
    id: "email",
    label: "Email address",
    regex: new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g),
  },
  {
    id: "phone",
    label: "Phone Number",
    regex: new RegExp(
      /^[\+][(][0-9]{3}[)][-\s\.][0-9]{2}[-\s\.][0-9]{3}[-\s\.][0-9]{2}[-\s\.][0-9]{2}$/g
    ),
  },
]);
</script>
<template>
  <section class="contact">
    <div class="container">
      <h3 class="text-xl text-center my-3">Contact me</h3>
      <form class="form">
        <InputItem
          v-for="input in inputList"
          :key="input.id"
          :label="input.label"
          :regex="input.regex"
          v-model="input.id"
        />
      </form>
    </div>
  </section>
</template>
<style lang="scss" scoped></style>
