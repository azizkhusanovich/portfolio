<script setup>
import InputItem from "./components/InputItem.vue";
</script>
<template>
  <section class="contact">
    <div class="container">
      <h3 class="text-xl text-center my-3">Contact me</h3>
      <form class="form">
        <InputItem id="username" label="Full Name" />
      </form>
    </div>
  </section>
</template>
<style lang="scss" scoped></style>
