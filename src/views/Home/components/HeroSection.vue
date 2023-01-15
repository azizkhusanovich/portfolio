<script setup></script>
<template>
  <section class="hero">
    <div class="container">
      <div
        class="wrapper text-center pt-8 pb-10 md:flex md:justify-between md:items-center md:py-12 lg:pt-16"
      >
        <div
          class="img flex justify-center items-center md:order-2 rounded-full overflow-hidden w-64 h-64 mx-auto md:mr-0"
        >
          <img
            class="w-full h-full object-cover rounded-full"
            src="@/assets/images/my-image.png"
            alt="my image"
          />
        </div>
        <div class="info mt-5 md:text-left md:w-3/5">
          <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl">
            Hi, I am John, Creative Technologist
          </h1>
          <p class="text-base my-6 md:text-lg">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <button
            class="text-xl py-3 px-6 bg-pink text-white rounded border-2 border-pink duration-300 hover:bg-transparent hover:text-pink"
          >
            Download Resume
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
