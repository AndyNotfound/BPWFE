<script lang="ts">
import {
    defineProps
} from 'vue';
import type {
    ActivityCardProps
} from '~/types/props';

defineProps < {
    item: ActivityCardProps
} > ();
</script>

<template>
<!-- Mobile -->
<div class="card card-mobile" :style="{
        backgroundImage: `url('${item.image}')`,
        width: '100%'
    }">
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
        <custom-button class="booking-btn" icon-position="left">
            <p>Booking Trip</p>
            <LucideMoveRight />
        </custom-button>
    </div>
</div>
<!-- Desktop -->
<div class="card card-desktop" :style="{
        backgroundImage: `url('${item.image}')`,
        width: item.index === 0 ? '33.14%' : '22.96%'
    }">
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
        <custom-button class="booking-btn" icon-position="left">
            <p>Booking Trip</p>
            <LucideMoveRight />
        </custom-button>
    </div>
</div>
</template>

<style lang="postcss" scoped>
.card {
    height: 400px;
    border-radius: 20px;
    background-size: cover;
    background-position: center;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
    @apply relative flex flex-col justify-end text-custom-white overflow-hidden;
}

.card-mobile {
    @apply flex;
}

.card-desktop {
    @apply hidden;
}

.card-content {
    position: static;
    padding: 0 35px 25px;

    h2 {
        @apply text-3xl;
        margin: 0;
    }

    p {
        @apply text-sm;
        opacity: 0.8;
    }
}

.price-tag {
    @apply absolute bg-custom-white text-custom-black text-xs py-2 px-4;
    top: 10px;
    right: 10px;
    border-radius: 15px;
    z-index: 2;
}

.booking-btn {
    @apply w-[200px] bg-custom-white text-custom-black border-0 cursor-pointer mt-8 py-6 px-8 text-base;
    border-radius: 30px;
    transition: background 0.3s ease;

    p {
        @apply text-base;
    }
}

.booking-btn:hover {
    background: #ddd;
}

@screen md {
    .card {
        height: 600px;
    }

    .card-mobile {
        @apply hidden;
    }

    .card-desktop {
        @apply relative flex;
    }

    .booking-btn {
        @apply w-full;
    }
}
</style>
