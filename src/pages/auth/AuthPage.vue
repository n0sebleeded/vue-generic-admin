<script setup lang="ts">
import { LoginForm } from "@/features/auth/ui";
</script>

<template>
  <div class="login-form-container">
    <LoginForm />
  </div>
</template>

<style lang="scss" scoped>
.login-form-container {
  @include flex-center;
  container-type: inline-size;
  flex: 1;
  max-width: 450px;
  width: 100%;
  margin: 0 auto;
}
</style>
