<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
    title: String,
    desc: String,
    containerClass: String,
    titleClass: String,
    descClass: String,
})
</script>

<template>
    <div :class="[
            'section', 
            containerClass
        ].join(' ')"
    >
        <p :class="[
                'section-title', 
                titleClass
            ].join(' ')"
        >
            {{ title }}
        </p>
        <h3 :class="[
                'section-desc', 
                descClass
            ].join(' ')"
        >
            {{ desc }}
        </h3>
    </div>
</template>

<style scoped lang="postcss">
    .section-title {
        @apply text-base text-custom-black font-normal tracking-[-5%]; 
    }

    .section-desc {
        @apply text-3xl tracking-[-5%] mt-2;
    }
</style>