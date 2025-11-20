<template>
  <div id="app">
    <Header />
    <carousel />
    <router-view /> <!-- 用來顯示當前頁面 -->

  </div>
</template>

<script setup>
import Header from './components/header.vue';
import carousel from './components/carousel.vue';


</script>

<style>
/* 可寫全域樣式（例如字體、背景） */
</style>
