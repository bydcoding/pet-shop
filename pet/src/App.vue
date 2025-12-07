<template>
  <div id="app">
    <Header v-if="showHeader" />

    <router-view /> <!-- 用來顯示當前頁面 -->

  </div>
</template>

<script setup>
import Header from './components/header.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const showHeader = computed(() => route.path !== "/login")

</script>

<style>
/* 可寫全域樣式（例如字體、背景） */
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
