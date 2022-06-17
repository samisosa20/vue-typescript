<template>
  <div class="text-center p-4">
    <img alt="Vue logo" src="@/assets/logo.png" class="mx-auto" />
    <h1 class="text-red-600 text-xl font-black">Home</h1>
    <p>
      Welcome to project by Sammy Guttman, using VueJs + vite + TS + Tailwind
    </p>
    <button
      type="button"
      class="bg-gray-300 text-black py-5 px-6 rounded"
      @click="count++"
    >
      Counter = {{ count }}
    </button>
    <router-link to="/">
      Go to home page
    </router-link>
    <router-link to="/map">
      Go to Map page
    </router-link>
  </div>
</template>

<script lang="ts">
import useControllers from "@/controllers";
const { useControllersView } = useControllers();
const { useHome } = useControllersView();

export default useHome;
</script>
