<template>
  <div id="app">
    <Header />
    <router-view /> <!-- 用來顯示當前頁面 -->

  </div>
</template>

<script>
import Header from './components/header.vue';
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
/* 可寫全域樣式（例如字體、背景） */
</style>
