<template>
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
  props: {
    showFooter: {
      type: Boolean,
      default: true,
    },
  },
});
</script>

<style>
.min-h-body {
  min-height: calc(100vh - 3.5rem);
}
</style>
