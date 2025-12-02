<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { computed, ref } from "vue";

const route = useRoute();
const router = useRouter();
const defaultCardRef = ref();
const pageTitle = computed(() => route.meta.title || "");
const showBackButton = computed(() => route.meta.showBackButton ?? false);
const showSubmitButton = computed(() => route.meta.showSubmitButton ?? false);

const buttonText = computed(() => {
  if (showBackButton.value) return "<<< Назад";
  if (showSubmitButton.value) return "Отправить";
  return "";
});

const buttonAction = () => {
  if (showBackButton.value) {
    router.back();
  } else if (showSubmitButton.value) {
    defaultCardRef.value?.submitForm();
  }
};
</script>
у
<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-gray-100"
  >
    <div class="w-full text-center mb-6 mt-6 max-w-md lg:max-w-2xl">
      <h1 class="text-2xl font-bold text-red-600 uppercase">
        {{ pageTitle }}
      </h1>
    </div>

    <div
      class="bg-white rounded-xl shadow-xl p-8 w-full text-center max-w-md lg:max-w-2xl"
    >
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" ref="defaultCardRef" />
        </transition>
      </router-view>
    </div>

    <div class="w-1/2 flex mb-12 mt-6 gap-4 items-end justify-center">
      <transition name="fade" mode="out-in">
        <button
          v-if="showBackButton || showSubmitButton"
          @click="buttonAction"
          class="w-1/3 mt-6 flex items-center min-h-12 justify-center border-2 border-red-600 text-red-600 bg-white hover:bg-red-100 transition-colors duration-200"
        >
          {{ buttonText }}
        </button>
      </transition>
    </div>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
