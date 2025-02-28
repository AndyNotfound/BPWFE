<script setup lang="ts">
import {
    ref
} from 'vue';
import {
    Swiper,
    SwiperSlide
} from 'swiper/vue';
import {
    Navigation,
    Pagination
} from 'swiper/modules';
import type {
    Swiper as SwiperType
} from 'swiper/types';
import {
    activities,
    reviews,
    recommendations
} from '~/public/data';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const modules = [Pagination, Navigation];
const swiperRecommend = ref < SwiperType | null > (null);
const swiperReview = ref < SwiperType | null > (null);

const slides = ref(Array(3));
const currentIndex = ref(0);

const onSwiperRecommendInit = (swiper: SwiperType) => {
    swiperRecommend.value = swiper;
};

const onSwiperReviewInit = (swiper: SwiperType) => {
    swiperReview.value = swiper;
};

const nextSlideRecommend = () => {
    if (swiperRecommend.value) swiperRecommend.value.slideNext();
};

const prevSlideRecommend = () => {
    if (swiperRecommend.value) swiperRecommend.value.slidePrev();
};

const nextSlideReview = () => {
    if (swiperReview.value) swiperReview.value.slideNext();
};

const prevSlideReview = () => {
    if (swiperReview.value) swiperReview.value.slidePrev();
};

const onSlideChange = (swiper: SwiperType) => {
    currentIndex.value = swiper.activeIndex;
};

const goToSlide = (index: SwiperType) => {
    if (swiperReview.value) {
        swiperReview.value.swiper.slideTo(index);
    }
};
</script>

<template>
<div>

    <homepage-hero />

    <div class="main custom-container">

        <section class="section">
            <section-head title="Tour Recommendation" desc="Our Specially Picked Tour Package Recommendation" desc-class="w-full md:w-[521px]" container-class="mt-28 mb-6" />
            <div class="cards-container">
                <card-potrait v-for="(item, index) in activities" :key="index" :item="{...item, index}" />
            </div>
        </section>

        <section class="section relative">
            <section-head title="Events for the season" desc="Recommended Place to Go this Summer for 2025!" desc-class="w-full md:w-[521px]" container-class="mt-28 mb-6" />

            <div class="md:relative">
                <swiper class="w-full relative md:static" :slides-per-view="1" :space-between="50" :modules="modules" :navigation="false" @swiper="onSwiperRecommendInit">
                    <swiper-slide v-for="(item, index) in recommendations" :key="index">
                        <card-landscape :item="item" />
                    </swiper-slide>
                </swiper>
            </div>
            <div class="swiper-button-container">
                <button class="swiper-button prev-button" @click="prevSlideRecommend">
                    <LucideChevronLeft />
                </button>
                <button class="swiper-button next-button" @click="nextSlideRecommend">
                    <LucideChevronRight />
                </button>
            </div>
        </section>

        <section class="section relative">
            <section-head title="Customer Reviews" desc="See What Our Fellow Travelers Have to Say About Us" desc-class="w-full md:w-[521px] text-center" container-class="mt-28 mb-6 flex flex-col items-center" />
            <swiper :slides-per-view="1.8" :space-between="50" :navigation="false" :pagination="{ clickable: true, el: '.custom-pagination' }" :modules="modules" @slide-change="onSlideChange" @swiper="onSwiperReviewInit">
                <swiper-slide v-for="(item, index) in reviews" :key="index">
                    <card-review :item="item" />
                </swiper-slide>
            </swiper>
            <div class="swiper-button-review">
                <button class="swiper-button prev-button" @click="prevSlideReview">
                    <LucideChevronLeft />
                </button>
                <div class="custom-pagination !w-fit flex items-center">
                    <span v-for="(_, index) in slides" :key="index" :class="[{ active: currentIndex === index }]" @click="goToSlide(index)">
                        {{ index + 1 }}
                    </span>
                </div>
                <button class="swiper-button next-button" @click="nextSlideReview">
                    <LucideChevronRight />
                </button>
            </div>
        </section>

    </div>
</div>
</template>

<style lang="postcss" scoped>
.cards-container {
    @apply flex flex-col;
    gap: 20px;
}

.swiper-button-container {
    @apply w-full flex justify-between absolute;
    top: 300px;
    z-index: 4;
}

:deep .swiper-pagination-bullet-active {
    @apply text-custom-black bg-custom-black;
}

.swiper-button-review {
    @apply w-full flex gap-4 justify-center mt-4;
}

.swiper-button {
    @apply p-2 rounded-full bg-custom-white text-custom-black hover:bg-custom-black hover:text-custom-white;
    border: 1px solid black;
}

.swiper-button:hover {
    background: rgba(0, 0, 0, 0.8);
}

.prev-button {
    left: 10px;
}

.next-button {
    right: 10px;
}

@screen sm {
    .cards-container {
        @apply grid grid-cols-2;
    }
}

@screen md {
    .swiper-button-container {
        @apply w-fit gap-2 absolute;
        top: 60px;
        right: 0;
    }
}

@screen lg {
    .cards-container {
        @apply flex flex-row;
    }
}
</style>
