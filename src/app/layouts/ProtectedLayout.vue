<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/features/auth/model/store.ts";
import { useRefreshMutation } from "@/features/auth/api";

const router = useRouter();
const auth = useAuthStore();

const refreshMutation = useRefreshMutation();

onMounted(() => {
  if (auth.isAuthenticated === null) {
    refreshMutation.mutateAsync();
  }

  if (!auth.isAuthenticated && auth.isAuthenticated !== null) {
    router.replace({ path: "auth" });
  }
});
</script>

<template>
  <div
    v-if="auth.isAuthenticated === null"
    class="flex flex-1 justify-center items-center blur-sm"
  >
    <RouterView />
  </div>
  <RouterView v-else v-if="auth.isAuthenticated" />
</template>
