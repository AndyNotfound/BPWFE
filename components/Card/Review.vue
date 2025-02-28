<script setup lang="ts">
import {
    defineProps
} from 'vue';
import type {
    ReviewCardProps
} from '~/types/props';

defineProps<{
    item: ReviewCardProps;
}>();
</script>

<template>
<div class="card">
    <div class="card-image">
        <img :src="item.image" :alt="item.name">
    </div>
    <div class="card-review">
        <div class="card-review-author">
            <img :src="item.profile" :alt="item.name" class="card-review-author__img">
            <div class="card-review-author__identity">
                <p>{{ item.name }}</p>
                <small>{{ item.origin }}</small>
            </div>
        </div>
        <p class="card-review-text">
            {{ item.comment }}
        </p>
    </div>
</div>
</template>

<style lang="postcss" scoped>
.card {
    @apply flex flex-col w-full gap-2;
}

.card-image {
    @apply w-full rounded;

    img {
        @apply w-full h-[150px] object-cover rounded-xl;
    }
}

.card-review {
    @apply w-full border-custom-gray rounded-xl p-4 border-[1px];
}

.card-review-author {
    @apply flex gap-4 items-center;
}

.card-review-text {
    @apply mt-4;
}

@screen md {
    .card {
        @apply w-full flex-row;
    }

    .card-image {
        @apply w-[45%];

        img {
            @apply h-[250px];
        }
    }

    .card-review {
        @apply w-[55%];
    }
}
</style>
