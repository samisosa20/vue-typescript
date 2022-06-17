<template>
  <div class="text-center p-4">
    <div
      v-if="showMyCorrd"
      class="mb-4"
    >
      modal
    </div>
    <div class="absolute bg-white flex left-4 p-2 space-x-4 top-4 z-10 items-center justify-around rounded">
      <div>
        <input id="light-v10" type="radio" name="rtoggle" value="light" v-on:change="viewStyleChange">
        <label for="light-v10">light</label>
      </div>
      <div>
        <input id="dark-v10" type="radio" name="rtoggle" value="dark" v-on:change="viewStyleChange">
        <label for="dark-v10">dark</label>
      </div>
      <div>
        <input id="streets-v11" type="radio" name="rtoggle" value="streets" v-on:change="viewStyleChange">
        <label for="streets-v11">streets</label>
      </div>
    </div>
    <div
      id="map"
      class="absolute inset-0 w-full"
    />
  </div>
</template>
<script lang="ts">
import useControllers from "@/controllers";
const { useControllersView } = useControllers();
const { useMap } = useControllersView();

export default useMap;
</script>
