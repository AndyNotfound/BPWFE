<script setup lang="ts">
import {
    defineProps
} from 'vue';
import type {
    SectionHeadProps
} from '~/types/props';

defineProps<SectionHeadProps>();
</script>

<template>
    <div :class="[
            'section',
            containerClass
        ].join(' ')">
        <p :class="[
                'section-title',
                titleClass
            ].join(' ')">
            {{ title }}
        </p>
        <h2 :class="[
                'section-desc',
                descClass
            ].join(' ')">
            {{ desc }}
        </h2>
    </div>
</template>

<style lang="postcss" scoped>
.section-title {
    @apply text-base text-custom-black font-normal tracking-[-5%];
}

.section-desc {
    @apply text-2xl md:text-3xl tracking-[-5%] mt-2;
}
</style>
