<template>
    <div class="container">
        <img src="/icon/pet_icon.png" alt="寵物icon" class="icon">
        <p>歡迎回來</p>
        <form @submit="controlSubmit" class="form">
            <input type="text" v-model="account" placeholder="帳號" required ref="accountInput">
            <input type="password" v-model="password" placeholder="密碼">
            <button type="submit">登入</button>
        </form>
        <p>沒有帳號嗎? <span @click="goSignUp">點我註冊</span></p>
        <button @click="logout">測試登出</button>
    </div>
</template>

<script setup>
import { ref, reactive, watch, onMounted } from 'vue';
import { useRouter } from "vue-router"
import { useUser } from '../store/user.js';
defineOptions({
    name: "loginForm"
})
const account = ref("");
const accountInput = ref(null);
const password = ref("");
const useStore = useUser();
const logout = useStore.logout;
const router = useRouter();

const emit = defineEmits(['sign-up']);

const goSignUp = () => emit("sign-up")


watch([account, password], (newValue) => {
    console.log("用戶輸入的是" + newValue);
})

const controlSubmit = async (e) => {
    e.preventDefault();
    if (!accountInput.value.reportValidity()) {
        return;
    }
    const access = await useStore.login(account.value, password.value);
    if (access) {
        router.push("/")
    }
}



onMounted(() => {
    if (useStore.token) {
        router.push("/");
        alert("把你丟回首頁")
    }
})

</script>

<style lang="scss" scoped>
.container {
    z-index: 1;

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

    button:active {
        transform: scale(0.98);
        background-color: #f3f4f6;
    }

    span {
        cursor: pointer;
    }
}
</style>