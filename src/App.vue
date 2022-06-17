<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  computed: {
    layout() {
      return this.$route.meta.layout || 'LayoutDefault';
    },
  },
});
</script>
