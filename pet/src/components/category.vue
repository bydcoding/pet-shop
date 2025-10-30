<template>
    <div class="category">
        <filter-bar v-model="selected" />
        <div class="sort_product">
            <div class="sort-container">
                項目{{ filtered.length }}個
                <select name="sort" class="sort">
                    <option value="desc">價格由高到低</option>
                    <option value="asd">價格由低到高</option>
                    <option value="random">隨機</option>
                </select>
            </div>
            <div class="product-container">
                <goods-card v-for="items in filtered" :key="items.id" :product="items" />
            </div>
        </div>
    </div>

</template>

<script>
import FilterBar from './filter-bar.vue';
import GoodsCard from './goods-card.vue'
import { ref, computed } from 'vue'
export default {

    name: "Category",
    components: {
        FilterBar,
        GoodsCard,
    },
    setup() {

        const data = [
            { id: 1, name: '雞肉無穀全犬主食罐', price: 1000, src: '/dog/instinct-01.png', tags: ['狗罐頭'] },
            { id: 2, name: 'CIAO 鰹魚貓罐', price: 45, src: '/cat/ciao-01.png', tags: ['貓罐頭'] },
            { id: 2, name: 'CIAO 鰹魚貓罐', price: 45, src: '/cat/ciao-01.png', tags: ['貓罐頭'] },
        ]

        const selected = ref([]) // v-model 綁這裡
        const filtered = computed(() => {
            if (selected.value.length === 0) return data
            return data.filter(p =>
                p.tags.some(t => selected.value.includes(t))
            )
        })
        return { data, filtered, selected }
    }
}
</script>

<style lang="scss" scoped>
.category {
    display: flex;
    gap: 1%
}

.sort_product {
    display: flex;
    flex-direction: column;
    margin: auto;
    gap: 30px;

    .sort-container {
        display: flex;
        justify-content: space-between;
        border: 1px solid lightgray;
        width: 100%;
        padding: 1% 3%;
        border-radius: 5px;

        .sort {
            width: 150px;
            text-wrap: nowrap;

        }
    }
}

.product-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    width: 70vw;
    gap: 15px;
    // background-color: aqua;

}

img {
    width: 100px;
    height: 100px;
}

@media (max-width: 640px) {
    .product-container {
        width: 100vw;
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}
</style>