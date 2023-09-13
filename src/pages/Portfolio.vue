<template>
    <section class="portfolio">
        <div class="container">
            <h1 class="portfolio__title">Portfolio</h1>
            <Swiper :navigation="true" :keyboard="true" :pagination="{
                clickable: true,
            }" :modules="modules" :loop="true" :breakpoints="swiperOptions.breakpoints" :space-between="23"
                class="portfolio__swiper">
                <SwiperSlide class="slide">
                    <a class="portfolio__item" target="_blank" href="https://omnifood-walker.netlify.app/">
                        <img class="portfolio__item-img" src="../assets/images/screenshots/omni.png" alt="">
                        <p class="portfolio__item-text">Omnifood</p>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a class="portfolio__item" target="_blank" href="https://walkeed.github.io/horror-fellas/">
                        <img class="portfolio__item-img" src="../assets/images/screenshots/fellas.png" alt="">
                        <p class="portfolio__item-text">Horror Fellas</p>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a class="portfolio__item" target="_blank" href="https://walkeed.github.io/Vue-cinema/">
                        <img class="portfolio__item-img" src="../assets/images/screenshots/cinema.png" alt="">
                        <p class="portfolio__item-text">Vue Cinema</p>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a class="portfolio__item" target="_blank" href="https://walkeed.github.io/Car-blog/">
                        <img class="portfolio__item-img" src="../assets/images/screenshots/cars.png" alt="">
                        <p class="portfolio__item-text">Cars Blog</p>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a class="portfolio__item" target="_blank" href="https://walkeed.github.io/Construction-Company/"><img
                            class="portfolio__item-img" src="../assets/images/screenshots/build.png" alt="">
                        <p class="portfolio__item-text">Building Company</p>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a class="portfolio__item" target="_blank" href="https://walkeed.github.io/Digital-Clock/"><img
                            class="portfolio__item-img" src="../assets/images/screenshots/clock.png" alt="">
                        <p class="portfolio__item-text">Digital Clock</p>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a class="portfolio__item" target="_blank" href="https://walkeed.github.io/Grayson/"><img
                            class="portfolio__item-img" src="../assets/images/screenshots/mayson.png" alt="">
                        <p class="portfolio__item-text">Grayson</p>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a class="portfolio__item" target="_blank" href="https://walkeed.github.io/CV/"><img
                            class="portfolio__item-img" src="../assets/images/screenshots/cv.png" alt="">
                        <p class="portfolio__item-text">CV</p>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a class="portfolio__item" target="_blank" href="https://walkeed.github.io/Relvise"><img
                            class="portfolio__item-img" src="../assets/images/screenshots/relvise.png" alt="">
                        <p class="portfolio__item-text">Relvise</p>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a class="portfolio__item" target="_blank" href="https://walkeed.github.io/Tanish-bilish-Bank/"><img
                            class="portfolio__item-img" src="../assets/images/screenshots/tanish-bilish.png" alt="">
                        <p class="portfolio__item-text">Tanish-bilish Bank</p>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a class="portfolio__item" target="_blank" href="https://walkeed.github.io/Weight-converter/"><img
                            class="portfolio__item-img" src="../assets/images/screenshots/weight.png" alt="">
                        <p class="portfolio__item-text">Weight Converter</p>
                    </a>
                </SwiperSlide>
            </Swiper>
        </div>

    </section>
    <!-- <Loader v-else /> -->
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/keyboard";
import { ref } from "vue";

const modules = ref([Navigation, Pagination, Keyboard])


const swiperOptions = ref({
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        576: {
            slidesPerView: 2
        },
        900: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 3
        },
        1920: {
            slidesPerView: 4
        }
    }
})

</script>

<style lang="scss" scoped>
.swiper-button-prev, .swiper-button-next {
    color: white;
}
</style>