<script setup lang="ts">
import { onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/features/auth/model/store.ts";
import { useRefreshMutation } from "@/features/auth/api";

const router = useRouter();
const auth = useAuthStore();

const refreshMutation = useRefreshMutation();

onMounted(async () => {
  if (auth.isAuthenticated === null) {
    try {
      await refreshMutation.mutateAsync();
    } catch (error) {
      router.replace({ path: "/auth" });
    }
  } else if (!auth.isAuthenticated) {
    router.replace({ path: "/auth" });
  }
});

watch(
  () => auth.isAuthenticated,
  () => {
    if (auth.isAuthenticated === false) {
      router.replace({ path: "/auth" });
    }
  }
);
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
