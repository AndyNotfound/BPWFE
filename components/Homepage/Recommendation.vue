<script setup lang="ts">
import { defineProps } from 'vue';
import { useIsMobile } from '#imports';

const { isMobile } = useIsMobile() 

const props = defineProps<{ 
    recommendations: Array<{ 
        image: string; 
        price: string; 
        title: string; 
        desc: string 
    }> 
}>();

</script>

<template>
    <div class="cards-container">
        <!-- Mobile -->
        <div
            v-for="(item, index) in recommendations"
            :key="index"
            class="card card-mobile" 
            :style="{ 
                backgroundImage: `url('${item.image}')`, 
                width: '100%'
            }"
        >
            <div class="price-tag">
                {{ item.price }}
            </div>
            <div class="card-content">
                <h2>
                    {{ item.title }}
                </h2>
                <p>
                    {{ item.desc }}
                </p>
                <custom-button 
                    class="booking-btn"
                    icon-position="left"
                >
                    <p>Booking Trip</p>
                    <LucideMoveRight />
                </custom-button>
            </div>
        </div>
        <!-- Desktop -->
        <div
            v-for="(item, index) in recommendations"
            :key="index"
            class="card card-desktop" 
            :style="{ 
                backgroundImage: `url('${item.image}')`, 
                width: index === 0 ? '33.14%' : '22.96%'
            }"
        >
            <div class="price-tag">
                {{ item.price }}
            </div>
            <div class="card-content">
                <h2>
                    {{ item.title }}
                </h2>
                <p>
                    {{ item.desc }}
                </p>
                <custom-button 
                    class="booking-btn"
                    icon-position="left"
                >
                    <p>Booking Trip</p>
                    <LucideMoveRight />
                </custom-button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="postcss">
/* Card Container */
.cards-container {
    @apply flex flex-col;
    gap: 20px;
}

/* Card Styling */
.card {
    height: 600px;
    border-radius: 20px;
    background-size: cover;
    background-position: center;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
    @apply relative flex flex-col justify-end text-custom-white overflow-hidden;
}

@screen md {
    .cards-container {
        @apply flex flex-row;
    }

    .card-mobile {
        @apply hidden;
    }
    
    .card-desktop {
        @apply static flex;
    }
}

.card-mobile {
    @apply flex;
}

.card-desktop {
    @apply hidden;
}

/*
    .card::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3);
    }
*/

/* Card Content */
.card-content {
    position: static;
    padding: 0 35px 25px;
}

/* Card Heading */
h2 {
    @apply text-3xl;
    margin: 0;
}

/* Card Description */
p {
    @apply text-sm;
    opacity: 0.8;
}

/* Price Tag */
.price-tag {
    @apply absolute bg-custom-white text-custom-black text-xs py-2 px-4;
    top: 10px;
    right: 10px;
    border-radius: 15px;
    z-index: 2;
}

/* Booking Button */
.booking-btn {
    @apply w-full bg-custom-white text-custom-black border-0 cursor-pointer mt-8 p-6 text-base;
    padding: 10px 15px;
    border-radius: 30px;
    transition: background 0.3s ease;
}

.booking-btn:hover {
    background: #ddd;
}
</style>