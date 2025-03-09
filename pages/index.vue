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
    recommendations
} from '~/public/data';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { 
    fetchTravelPackages,
    fetchTravelReviews
} from '~/composables/fetchData'
import { useHead } from '@vueuse/head';

useHead({
    title: 'Batam Pesona Wisata - Amazing Tour Packages for you to travel the World',
    meta: [
        { name: 'description', content: 'Discover our top-rated travel packages for the best destinations around the world. Book your next adventure with us!' },
        { name: 'og:title', content: 'Amazing Tour Packages - Travel the World' },
        { name: 'og:description', content: 'Discover our top-rated travel packages for the best destinations around the world. Book your next adventure with us!' },
        { name: 'og:image', content: '/images/logo.png' },
        { name: 'og:url', content: 'https://batampesonawisata.com' },
        { name: 'og:type', content: 'website' },
        { name: 'og:site_name', content: 'Batam Pesona Wisata' },

        { name: 'twitter:title', content: 'Amazing Tour Packages - Travel the World' },
        { name: 'twitter:description', content: 'Discover our top-rated travel packages for the best destinations around the world. Book your next adventure with us!' },
        { name: 'twitter:image', content: '/images/logo.png' },
        { name: 'twitter:card', content: 'summary_large_image' },

        { name: 'robots', content: 'index, follow' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
});

const loading = reactive<Record<string, any>>({
    activities: true,
    reviews: true
})

const packageData = reactive<Record<string, any>>({
    activities: [],
    reviews: [],
})

const modules = [Pagination, Navigation];
const swiperRecommend = ref < SwiperType | null > (null);
const swiperReview = ref < SwiperType | null | any > (null);

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

const goToSlide = (index: SwiperType | any) => {
    if (swiperReview.value) {
        swiperReview.value.swiper.slideTo(index);
    }
};

const getTravelPackages = async () => {
    try {
        loading.activities = true
        const { data } = await fetchTravelPackages({}) as any
        packageData.activities = data
    } catch (e) {
        console.error('error fetching travel packages: ', e)
    } finally {
        loading.activities = false
    }
}

const activities = computed(() =>
    (packageData.activities as any[] || []).map(activity => ({
        image: `https://strapi.batampesonawisata.com${activity.thumbnail}`,
        title: activity.name,
        desc: activity.brief,
        price: activity.price,
        slug: activity.slug
    })),
)

const getTravelReviews = async () => {
    try {
        loading.reviews = true
        const { data } = await fetchTravelReviews({}) as any
        packageData.reviews = data
    } catch (e) {
        console.error('error fetching package reviews: ', e)
    } finally {
        loading.reviews = false
    }
}

const reviews = computed(() => 
    (packageData.reviews.data as any[] || []).map(review => ({
        name: review.name,
        origin: review.origin || 'Indonesia',
        comment: review.review && review.review[0].children[0].text || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    })),
)

onMounted(() => {
    getTravelPackages()
    getTravelReviews()
})
</script>

<template>
    <div>

        <homepage-hero />

        <div class="main custom-container">
            <section class="section">
                <section-head 
                    title="Tour Recommendation" 
                    desc="Our Specially Picked Tour Package Recommendation" 
                    desc-class="w-full md:w-[521px]" 
                    container-class="mt-28 mb-6" 
                />
                <div v-if="loading.activities" class="cards-container">
                    <div
                        v-for="i in 3"
                        :key="i"
                        class="loading-card-potrait"
                    />
                </div>
                <div v-else class="cards-container">
                    <card-potrait 
                        v-for="(item, index) in activities" 
                        :key="index" 
                        :item="{...item, index}" 
                    />
                </div>
            </section>

            <section class="section relative">
                <section-head 
                    title="Events for the season" 
                    desc="Recommended Place to Go this Summer for 2025!" 
                    desc-class="w-full md:w-[521px]" 
                    container-class="mt-28 mb-6" 
                />

                <div class="md:relative">
                    <swiper 
                        class="w-full relative md:static" 
                        :slides-per-view="1" 
                        :space-between="50" 
                        :modules="modules" 
                        :navigation="false" 
                        @swiper="onSwiperRecommendInit"
                    >
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
                <section-head 
                    title="Customer Reviews" 
                    desc="See What Our Fellow Travelers Have to Say About Us" 
                    desc-class="w-full md:w-[521px] text-center" 
                    container-class="mt-28 mb-6 flex flex-col items-center" 
                />
                <swiper 
                    :slides-per-view="1" 
                    :space-between="10" 
                    :navigation="false" 
                    :pagination="{ 
                        clickable: true, 
                        el: '.custom-pagination' 
                    }" 
                    :modules="modules" 
                    @slide-change="onSlideChange" 
                    @swiper="onSwiperReviewInit" 
                    :breakpoints="{
                        '640': {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        '768': {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        '1024': {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        }
                    }"
                >
                    <swiper-slide v-for="(item, index) in reviews" :key="index">
                        <card-review :item="item" />
                    </swiper-slide>
                </swiper>
                <div class="swiper-button-review">
                    <button class="swiper-button prev-button" @click="prevSlideReview">
                        <LucideChevronLeft />
                    </button>
                    <div class="custom-pagination !w-fit flex items-center">
                        <span 
                            v-for="(_, index) in slides" 
                            :key="index" 
                            :class="[{ active: currentIndex === index }]" 
                            @click="goToSlide(index)"
                        >
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
