<template>
    <div class="container">
        <Card v-for="(item, index) in list" :key="index" :img="item.img" :title="item.title" />
        <Card img="/card/cat.jpg" title="哈基米" />
    </div>
</template>

<script setup>
import Card from './card.vue';
const list = [
    {
        img: "/article/cat-scratching.png",
        title: "貓咪為什麼一直亂抓？其實是在做這件事"
    },
    {
        img: "/article/food.png",
        title: "寵物飲食迷思：不是「人能吃」就適合寵物"
    },
    {
        img: "/article/knowledge.png",
        title: "新手養寵物前一定要知道的 5 件事"
    },
    {
        img: "/article/lick.png",
        title: "狗狗一直舔人是在撒嬌還是有壓力？"
    }]
</script>

<style lang="scss" scoped>
.container {
    width: 60vw;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
    margin: 10px;
}

@media(max-width:768px) {
    .container {
        width: 100svw;
        grid-template-columns: 1fr;
    }
}
</style>