<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { Label } from "@/shared/ui/label";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { EyeOff, Eye } from "lucide-vue-next";
import { ref } from "vue";
import { Field, useForm } from "vee-validate";
import { authSchema } from "@/features/auth/model/schema.ts";
import { useLoginMutation } from "@/features/auth/api";

const isPasswordHidden = ref(false);
const { handleSubmit, meta } = useForm({
  validateOnMount: false,
  validationSchema: authSchema,
  initialValues: {
    username: "",
    password: "",
  },
});

const loginMutation = useLoginMutation();

const onSubmit = handleSubmit(async (data) => {
  await loginMutation.mutateAsync(data);
});
</script>

<template>
  <Card class="login-container">
    <form @submit.prevent="onSubmit" class="login-form">
      <CardHeader class="login-form-card">
        <CardTitle>Вход в систему</CardTitle>
        <CardDescription> Введите свои данные для входа</CardDescription>
      </CardHeader>

      <CardContent class="login-form-card login-container-spacing-lg">
        <div class="login-form-field login-container-spacing-sm">
          <Label for="username">Username</Label>
          <Field name="username" v-slot="{ field }">
            <Input
              id="username"
              v-bind="field"
              :model-value="field.value"
              @update:model-value="field.onInput"
            />
          </Field>
        </div>

        <Field name="password" v-slot="{ field }">
          <div class="login-form-field login-container-spacing-sm">
            <Label for="password">Пароль</Label>

            <div class="relative">
              <Input
                id="password"
                class="password-input"
                v-bind="field"
                :model-value="field.value"
                @update:model-value="field.onInput"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                class="password-icon"
                @click="isPasswordHidden = !isPasswordHidden"
              >
                <EyeOff v-if="isPasswordHidden" />
                <Eye v-else />
              </Button>
            </div>
          </div>
        </Field>
      </CardContent>

      <CardFooter class="login-form-card">
        <Button :disabled="!meta.valid" type="submit" class="w-full">
          Войти
        </Button>
      </CardFooter>
    </form>
  </Card>
</template>

<style lang="scss" scoped>
.login-container {
  width: 90%;
  @include container-query(md) {
    width: 100%;
  }
}

.login-form {
  width: 100%;
  @include spacing-y-(1.25);
}

.login-form-card {
  padding: 0 0.5rem;
  @include container-query(md) {
    padding: 0 1.5rem;
  }
}

.login-form-field {
  padding: 0 0.25rem;
  @include container-query(md) {
    padding: 0;
  }
}

.login-container-spacing-lg {
  @include spacing-y-(1.25);
}

.login-container-spacing-sm {
  @include spacing-y-(0.5);
}

.password-input {
  padding-right: 2rem;
}

.password-icon {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  padding: 0.75rem 0.5rem;

  &:hover {
    background-color: transparent;
  }
}
</style>
