<script setup lang="ts">
import { Toaster } from "@/shared/ui/sonner";
import "vue-sonner/style.css";
</script>

<template>
  <div class="app-container">
    <RouterView />
    <Toaster rich-colors position="top-center" />
  </div>
</template>

<style lang="scss" scoped>
.app-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: $foreground;
}
</style>
