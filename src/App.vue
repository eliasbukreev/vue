<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();

const pageTitle = computed(() => route.meta.title || "");
const showBackButton = computed(() => route.meta.showBackButton ?? false);
const showSubmitButton = computed(() => route.meta.showSubmitButton ?? false);
</script>

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
          <component :is="Component" />
        </transition>
      </router-view>

      <div class="w-full flex gap-4 items-end justify-center">
        <transition name="fade" mode="out-in">
          <button
            v-if="showBackButton"
            @click="$router.back()"
            class="flex items-center max-w-md justify-center w-12 h-12 rounded-full border-2 border-red-600 text-red-600 bg-white hover:bg-red-100 transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </transition>
        <transition name="fade" mode="out-in">
          <button
            v-if="showSubmitButton"
            class="w-1/3 mt-6 flex items-center min-h-12 justify-center border-2 border-red-600 text-red-600 bg-white hover:bg-red-100 transition-colors duration-200"
          >
            Отправить
          </button>
        </transition>
      </div>
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
