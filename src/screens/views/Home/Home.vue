<template>
  <div class="text-center p-4">
    <img alt="Vue logo" src="@/assets/logo.png" class="mx-auto" />
    <h1 class="text-red-600 text-xl font-black">Home</h1>
    <p>
      Welcome to project by Sammy Guttman, using VueJs + vite + TS + Tailwind
    </p>
    <p class="mt-2">Test the Vuex with the simple example</p>
    <div class="w-[150px] mx-auto mb-2">
      <p>Likes = {{ footer?.count }}</p>
      <div class="flex items-center justify-between">
        <button
          type="button"
          class="bg-blue-300 text-black py-2 px-4 rounded-full"
          @click="incr"
        >
          Like
        </button>
        <button
          type="button"
          class="bg-red-300 text-black py-2 px-4 rounded-full"
          @click="decr"
        >
          Dislike
        </button>
      </div>
    </div>
    <div class="w-2/3 mx-auto flex items-center justify-around">
      <router-link to="/about" class="underline font-semibold">
        Go to About page
      </router-link>
      <router-link to="/map" class="underline font-semibold">
        Go to Map page
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
  import useControllers from "@/controllers";
  const { useControllersView } = useControllers();
  const { useHome } = useControllersView();

  export default useHome;
</script>
