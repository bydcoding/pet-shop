<template>
    <div class="container">
        <img src="/icon/pet_icon.png" alt="寵物icon" class="icon">
        <p>註冊帳號</p>
        <form @submit="controlSubmit" class="form">
            <input type="text" v-model="name" placeholder="請輸入姓名">
            <input type="text" v-model="account" placeholder="請輸入帳號">
            <input type="password" v-model="password" placeholder="請輸入密碼">
            <button type="submit" @click="login">註冊</button>
        </form>


    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRouter } from "vue-router"

defineOptions({
    name: "signUpForm"
})
const account = ref("");
const password = ref("");
const name = ref("")
const router = useRouter();
const emit = defineEmits(['login']);
const login = () => emit("login")



watch([account, password], (newValue) => {
    console.log("用戶輸入的是" + newValue);
})

const controlSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await fetch("http://localhost:3000/api/sign-up",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: name.value,
                    account: account.value,
                    password: password.value
                })
            }
        )
        const data = await res.json();
        if (!res.ok || data.ok === false) {
            throw new Error(data.error || "註冊失敗")
        }
        alert("註冊成功，請輸入帳密")
        router.push("/login")
    }
    catch (err) {
        console.log(err);
        alert(err.message || "發生錯誤")
    }
}


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