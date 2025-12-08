<template>
    <section>
        <div class="container">
            <img src="/icon/pet_icon.png" alt="寵物icon" class="icon">
            <p>歡迎回來</p>
            <form @submit="controlSubmit" class="form">
                <input type="text" v-model="account" placeholder="帳號">
                <input type="text" v-model="password" placeholder="密碼">
                <button type="submit">登入</button>
            </form>
            <p>沒有帳號嗎? <span>點我註冊</span></p>
        </div>
    </section>
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

<style lang="scss" scoped>
section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;



    .container {
        .icon {
            width: 100px;
            height: 100px;
        }

        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        width: 400px;
        height: 600px;
        padding: 0 40px 40px 40px;
        align-items: center;
        justify-content: center;
        background-color: #96f021;

        border-radius: 24px;

        .form {
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: center;
            width: 100%;
            height: 30%;
            gap: 20px;
        }

        input {
            width: 100%;
            height: 30px;
            border: none;
            border-radius: 5px;
            background-color: #F8F8F8;
        }

        button {
            width: 100%;
            border-radius: 5px;
            border: gray;
        }

        span {
            cursor: pointer;
        }
    }
}
</style>