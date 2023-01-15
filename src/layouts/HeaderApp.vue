<script setup>
import { ref, watch } from "vue";
const isOpen = ref(false);
const menu = ref([
  { name: "Home", link: "home" },
  { name: "About me", link: "about" },
  { name: "Works", link: "works" },
  { name: "Contact", link: "contact" },
]);
const body = document.querySelector("body");

watch(isOpen, () => {
  if (isOpen.value) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "auto";
  }
});
</script>

<template>
  <header class="header">
    <div class="container">
      <nav class="nav w-full flex justify-between py-5 relative xs:justify-end">
        <ul
          :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
          class="w-2/3 bg-brand fixed top-0 left-0 bottom-0 flex flex-col items-center justify-center duration-300 xs:relative xs:bg-transparent xs:flex-row xs:gap-x-4 xs:translate-x-0 xs:w-max"
        >
          <li
            @click="isOpen = false"
            class="text-lg mb-1 font-medium text-white xs:text-brand"
            v-for="list in menu"
          >
            <RouterLink
              class="header__link relative px-4 py-1 rounded duration-300"
              :to="list.link"
              >{{ list.name }}</RouterLink
            >
          </li>
        </ul>

        <div
          @click="isOpen = !isOpen"
          class="burger w-8 h-5 flex flex-col justify-between absolute top-5 right-5 cursor-pointer xs:hidden"
        >
          <div
            :class="{ 'rotate-45 translate-y-[9px]': isOpen }"
            class="burger-line w-full h-0.5 bg-brand duration-300"
          ></div>
          <div
            :class="{ 'opacity-0 -translate-x-full': isOpen }"
            class="burger-line w-full h-0.5 bg-brand duration-300"
          ></div>
          <div
            :class="{ '-rotate-45 -translate-y-[9px]': isOpen }"
            class="burger-line w-full h-0.5 bg-brand duration-300"
          ></div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style>
.header__link:hover,
.header__link.active {
  background: #21243d;
  color: #fff;
}
/* .header__link::after {
  content: "";
  width: 0;
  height: 2px;
  background: #21243d;
  position: absolute;
  bottom: 0;
  left: 0;
  transition: 300ms;
  border-radius: 5px;
}

.header__link:hover::after, .header__link.active::after {
  width: 100%;
} */
</style>
