<template>
    <section>
        <div class="mask"></div>
        <LoginForm v-show="mode === 'login'" @sign-up="mode = 'signup'" />
        <SignUp v-show="mode === 'signup'" @login="mode = 'login'" />
    </section>
</template>

<script setup>
import { ref } from 'vue';
import LoginForm from './loginForm.vue';
import SignUp from './signUpForm.vue';
const mode = ref("login")

defineOptions({
    name: "login"
})


</script>

<style lang="scss" scoped>
section {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-image: url("/background/cat.jpg");
    background-size: cover;

    .mask {
        position: absolute;
        inset: 0;
        background: rgba(255, 255, 255, 0.6);
        z-index: 0;
    }
}
</style>