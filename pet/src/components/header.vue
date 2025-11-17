    <template>
        <header class="header">
            <button class="burger" @click="openMenu">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <img src="/icon/pet_icon.png" alt="LOGO">
            <ul class="menu" :class="{ active: isOpen }">
                <li>最新消息</li>
                <li>商城</li>
                <li>寵物住宿</li>
            </ul>
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

@media (max-width:768px) {
    .header {
        flex-direction: column;
        align-items: start;

        .burger {
            display: flex;
        }

        img {
            display: none;
        }

        .menu {
            position: absolute;
            display: none;
            flex-direction: column;
            width: 100vw;
            // padding: 0;
            top: 100%;
            left: 0;
            align-items: start;
            background-color: #8CD62A;
            ;
        }

        .active {
            display: flex;
        }
    }
}
</style>