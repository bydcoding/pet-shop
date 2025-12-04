<template>
    <div class="container">
        <div class="viewport">
            <div class="track" :style="trackStyle">
                <div v-for="image in banner" class="img-container" :key="image" ref="items">
                    <img :src="image" alt="輪播圖">
                </div>
            </div>
        </div>
        <button @click="back" class="back">&lt;</button>
        <button @click="next" class="next">&gt;</button>


    </div>
</template>

<script setup>
import { reactive, ref, onMounted, onUnmounted, computed, nextTick } from "vue"
defineOptions({ name: 'Carousel' })
const items = ref([]);
const itemWidth = ref(0);
const index = ref(0); //這個value是多少就決定哪一張圖片在最左邊，ex: 0=> banner-01.png
const banner = reactive([]);
const displayBanner = ref(3);//控制當前媒體顯示幾張圖片

const updateDisplayBanner = () => displayBanner.value = window.innerWidth <= 768 ? 1 : 3;


const computeItemWidth = () => {
    nextTick(() => {
        const first = items.value[0];
        if (!first) return;
        const rect = first.getBoundingClientRect();
        itemWidth.value = rect.width + 10;
    })
}

const handleResize = () => {
    updateDisplayBanner();
    computeItemWidth();
}

const trackStyle = computed(() => {
    return {
        transform: `translateX(-${index.value * itemWidth.value}px)`
    }
})


onMounted(() => {
    setTimeout(() => {
        banner.push("/carousel/banner-01.png")
        banner.push("/carousel/banner-03.png")
        banner.push("/carousel/banner-02.png")
        banner.push("/carousel/banner-04.png")
        banner.push("/carousel/banner-05.png")
        banner.push("/carousel/banner-06.png")
        computeItemWidth();
        updateDisplayBanner();
        window.addEventListener('resize', handleResize)
    }, 300)

})
onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
});



const lastIndex = computed(() => {
    return Math.max(banner.length - displayBanner.value, 0);
})


let back = () => {
    index.value -= 1
    if (index.value < 0) index.value = lastIndex.value;
};
let next = () => {
    index.value++
    if (index.value > lastIndex.value) index.value = 0
};

</script>

<style lang="scss" scoped>
.container {
    position: relative;
    display: flex;
    width: 100vw;
    height: auto;

    overflow: hidden;

    .viewport {
        width: 100%;
        overflow: hidden;

        .track {
            display: flex;
            padding: 10px 0;
            gap: 10px;
            transition: transform 0.4s ease;

            .img-container {
                width: calc((100vw - 20px) / 3);
                height: auto;
                flex-shrink: 0;

                img {
                    object-fit: fill;
                    width: 100%;
                    height: 100%;
                }
            }
        }

    }

    .next,
    .back {
        border: none;
        background-color: transparent;
        position: absolute;
        font-size: xx-large;
        cursor: pointer;
    }

    .next {
        right: 0;
        top: 50%
    }

    .back {
        top: 50%
    }
}

@media (max-width: 768px) {
    .container {
        .viewport {
            .track {
                .img-container {
                    width: 100vw;
                }
            }
        }
    }

}
</style>