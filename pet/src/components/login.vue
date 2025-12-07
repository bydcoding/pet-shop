<template>
    <div>
        <form @submit="controlSubmit">
            <input type="text" v-model="account">
            <input type="text" v-model="password">
            <button type="submit">登入</button>

        </form>
    </div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue';
defineOptions({
    name: "login"
})

const account = ref("");
const password = ref("");
watch([account, password], (newValue) => {
    console.log("用戶輸入的是" + newValue);
})

const controlSubmit = (e) => e.preventDefault();


</script>

<style lang="scss" scoped></style>