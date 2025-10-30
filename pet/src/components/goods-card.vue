<template>
    <div class="card-container">
        <div class="card-img">
            <img :src="product.src" :alt="product.name">
        </div>
        <div class="card-content">
            <div class="card-name">
                {{ product.name }}
            </div>
            <div class="card-price">
                {{ product.price }}元

                <button>
                    加入購物車
                </button>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "GoodsCard",
    props: {
        product: {
            type: Object,
            required: true,
        }
    },
    setup() {

        return {}
    }
}
</script>

<style lang="scss" scoped>
.card-container {
    display: flex;
    flex-direction: column;
    border: 1px solid lightgray;
    width: 100%;
    max-width: 300px;
    max-height: 500px;
    box-shadow: -5px 5px 15px lightgray;



    .card-content {
        display: grid;
        grid-template-rows: 1fr;
        width: 100%;
        height: 150px;

        .card-price {
            display: flex;
            justify-content: space-between;
            align-items: center;

            padding: 10%;

            button {

                color: white;
                background-color: #0070c9;
                padding: 5px;
                border-radius: 5px;
                border-color: white;
            }
        }

        .card-name {
            display: flex;
            justify-content: center;
            align-items: center;

        }
    }

    .card-img {
        display: flex;
        justify-content: center;
        padding: 15px;
    }

    .card-img>img {
        width: 100%;
        height: auto;
        object-fit: contain;
    }
}
</style>