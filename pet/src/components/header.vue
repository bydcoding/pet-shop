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
                    <li v-if="user.isLogin">
                        <router-link to="/login">
                            登入
                        </router-link>
                    </li>
                    <button @click="logout">測試用登出</button>
                    <li>{{ user.userName }}</li>
                </ul>
            </div>
        </header>
    </template>

<script setup>
import { computed, ref } from "vue";
import { useUser } from "../store/user";
defineOptions({ name: 'Header' })
const isOpen = ref(false)
const user = useUser();
const logout = user.logout; //測試用
function openMenu() {
    isOpen.value = !isOpen.value
}
</script>

<style lang="scss" scoped>
* {
    list-style: none;
    margin: 0;
    padding: 0;
}

a {
    text-decoration: none;
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
        padding-left: 10px;
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

    .login {
        display: flex;
        align-items: center;
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