<script setup>
import HeaderApp from "./layouts/HeaderApp.vue";
import FooterApp from "./layouts/FooterApp.vue";
</script>

<template>
  <HeaderApp />
  <main>
    <router-view v-slot="{ Component }">
      <transition name="scale" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
  <FooterApp />
</template>

<style scoped>
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
