<script setup>
import AppButton from "@/components/AppButton.vue";
</script>
<template>
  <section class="about-me bg-light-blue">
    <div class="container py-6">
      <h2 class="text-brand font-bold text-3xl mb-3">About Me</h2>
      <p class="text-base md:text-lg">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid iure
        doloribus aperiam, veritatis est eligendi illum, beatae rerum
        consectetur incidunt quasi a eius, repudiandae dolores?
      </p>
      <AppButton text="Read more" path="/about" />
    </div>
  </section>
</template>
