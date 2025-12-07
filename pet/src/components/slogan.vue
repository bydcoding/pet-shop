<template>
    <div class="container">
        <div class="layout">
            <figure>
                <img src="/slogan/dog.png" alt="slogan">
                <figcaption>
                    專屬毛孩的一站式購物平台。<br>
                    品牌飼料・保健補給・玩具生活，全部一次找齊！
                </figcaption>
            </figure>
            <figure>
                <img src="/slogan/cat.png" alt="slogan">
                <figcaption>
                    用科學與愛，讓毛孩更健康。<br>
                    嚴格挑選每一款商品，給你最安心的照顧選擇。
                </figcaption>
            </figure>
            <figure>
                <img src="/slogan/bird.png" alt="slogan">
                <figcaption>
                    專業寵物用品，快速到貨。<br>
                    讓照顧毛孩變得更簡單。
                </figcaption>
            </figure>
        </div>

    </div>
</template>

<script setup>
defineOptions({ name: "slogan" })
</script>

<style lang="scss" scoped>
.container {
    width: 100vw;
    background-color: #F0FADD;

    .layout {
        display: flex;
        align-items: center;
        justify-content: center;

        figure {

            img {
                width: 300px;
                height: 300px;
            }

            figcaption {
                text-align: center;
            }
        }
    }
}

@media(max-width:768px) {
    .layout {
        flex-direction: column;

        img {
            width: 60vw;
        }
    }
}
</style>