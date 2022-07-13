<template>
  <div class="text-center p-4">
    <h1>About {{ name }}</h1>
    <router-link to="/"> Go to home page </router-link>
    <router-link to="/about/Sammy" class="font-bold mx-3 underline">
      About Sammy
    </router-link>
    <router-link to="/about/Pipe" class="font-bold mx-3 underline">
      About Pipe
    </router-link>
  </div>
</template>
<script lang="ts">
  import useControllers from "@/controllers";
  const { useControllersView } = useControllers();
  const { useAbout } = useControllersView();

  export default useAbout;
</script>
