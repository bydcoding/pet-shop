    <template>
        <header class="header">
            <button class="burger" @click="openMenu">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <img src="/icon/pet_icon.png" alt="LOGO">
            <div class="option-container" :class="{ active: isOpen }">
                <ul class="menu">
                    <li>最新消息</li>
                    <li>商城</li>
                    <li>寵物住宿</li>
                </ul>
                <ul class="login">
                    <li>登入</li>
                </ul>
            </div>
        </header>
    </template>

<script setup>
import { ref } from "vue";
const isOpen = ref(false)
function openMenu() {
    isOpen.value = !isOpen.value
}
defineOptions({ name: 'Header' })
</script>

<style lang="scss" scoped>
* {
    list-style: none;
    margin: 0;
    padding: 0;
}

.header {
    position: relative;
    display: flex;
    margin: 0;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 10vh;
    background-color: #8CD62A;

    .burger {
        display: none;
        background: transparent;
        width: 30vw;
        height: 32px;
        flex-direction: column;
        justify-content: space-between;
        border: none;

        span {
            display: block;
            background-color: black;
            width: 50px;
            height: 5px;
        }
    }

    img {
        height: 100%;
    }

    .option-container {
        display: flex;
    }


    .menu {

        display: flex;
        width: 50vw;
        height: auto;
        justify-content: center;
        align-items: center;
        gap: 10%;

        li {
            cursor: pointer;
            display: inline-block;
            padding: 8px 16px;
        }

        li:hover {
            color: white;
        }
    }

    .login>li {
        padding-left: 16px;
    }
}

@media (max-width:768px) {
    .header {
        flex-direction: column;
        align-items: start;
        height: auto;
        padding: 10px;

        .burger {
            display: flex;
        }

        img {
            display: none;
        }

        .option-container {
            display: flex;
            flex-direction: column;
            overflow: hidden;
            transition: all 0.3s ease;
            max-height: 0;

            .menu {
                position: static;
                display: flex;
                flex-direction: column;
                width: 100vw;
                // padding: 0;
                top: 100%;
                left: 0;
                align-items: start;
                background-color: #8CD62A;

            }



            .active {
                display: flex;
            }
        }

        .option-container.active {
            transform: translateY(0);
            max-height: 300px;
        }
    }
}
</style>