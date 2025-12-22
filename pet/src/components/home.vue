<template>
    <div class="content">

        <carousel />
        <slogan />
        <cardList />
    </div>
</template>

<script setup>

import carousel from './carousel.vue';
import slogan from './slogan.vue';
import cardList from './cardList.vue';
</script>

<style lang="scss" scoped>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>