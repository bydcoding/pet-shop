<template>
    <article>
        <div class="container">
            <div class="layout">
                <img :src="img" alt="">
            </div>
            <div class="title">
                {{ title }}
            </div>
        </div>
    </article>
</template>

<script setup>
//父層用  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); 這邊卡片的寬度改width:100% 由父層 grid 切出一排幾個版型就好

defineProps({
    title: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    }
})
</script>

<style lang="scss" scoped>
* {
    box-sizing: border-box;

    .container {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: min(300px, 100svh);
        overflow: hidden;
        border-radius: 15px;
        box-shadow: -4px 5px 10px rgba(0, 0, 0, 0.15);
        // background-color: aqua;

        .layout {
            width: 100%;
            height: 70%;
            overflow: hidden;



            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            img:hover {
                scale: 1.1;
            }

        }

        .title {
            text-align: center;
            padding: 10px;
        }
    }

    @media(max-width:768px) {
        .container {
            aspect-ratio: 2/1;
            width: 100%;
            height: auto;
        }
    }
}
</style>