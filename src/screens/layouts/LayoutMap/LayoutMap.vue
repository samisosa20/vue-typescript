<template>
  <header class="h-14 py-2 px-6 w-full border-b border-gray-300">
    <div class="h-10 w-10">
      <img
        alt="Logo"
        src="https://www.citypng.com/public/uploads/preview/-316008155470z0f6if4ay.png"
        class="w-full"
      >
    </div>
  </header>
  <div class="relative shadow min-h-body">
    <!--Slot use to render a child-->
    <slot />
  </div>
  <footer
    class="w-full border-t border-gray-300 py-2 px-6 flex items-center justify-around h-14"
  >
    <p>Sammy Guttman L.</p>
    <p>VueJs Project.</p>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LayoutMap",
  props: {},
});
</script>

<style>
.min-h-body {
  min-height: calc(100vh - 7rem);
}
</style>