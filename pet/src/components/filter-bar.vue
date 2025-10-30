<template>
    <aside class="filter-box">
        <ul class="filter-list">
            <li class="filter-item" v-for="items in filter" :key="items">
                <label>
                    <input type="checkbox" :value="items" v-model="local">{{ items }}
                </label>
            </li>
        </ul>
    </aside>
</template>

<script>
import { ref, watch } from "vue"
export default {
    // ✅ 用 props 定義 v-model 的值(modelValue) 和 選項(options)
    props: {
        modelValue: { type: Array, default: () => [] },

    },
    emits: ["update:modelValue"], // ✅ 告訴 Vue 這個事件會被觸發
    name: "FilterBar",
    setup(props, { emit }) {
        const local = ref([...props.modelValue])
        const filter = ["貓罐頭", "狗罐頭", "貓抓板", "寵物保健", "美容護理", "環境清潔"]
        watch(local, (val) => emit('update:modelValue', [...val]), { deep: true })
        watch(() => props.modelValue, (val) => {
            if (JSON.stringify(val) !== JSON.stringify(local.value)) {
                local.value = [...val]
            }
        }, { deep: true })
        return { filter, local }



    }
}
</script>

<style lang="scss" scoped>
.filter-box {
    display: flex;
    width: 10vw;
    flex: 0 0 15vw;
    flex-direction: column;
}

.filter-list {
    display: flex;
    flex-direction: column;
    border: 2px solid lightgray;
    list-style: none;
    padding: 15px 10px;
}
</style>