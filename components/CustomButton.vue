<script setup lang="ts">
import {
    defineProps,
    defineEmits
} from 'vue';
import type {
    CustomButtonProps
} from '~/types/props';

const emit = defineEmits(['click'])

const onClickHandler = () => {
    emit('click')
}

defineProps<CustomButtonProps> ()
</script>

<template>
    <Button :class="[
            iconPosition === 'left' && 'button-icon__left',
            iconPosition === 'right' && 'button-icon__right',
            iconPosition === 'none' && 'button-icon__none',
            'button-icon',
            buttonClass,
            type === 'sec' && 'button-sec',
            type === 'outline' && 'button-outline',
            type === 'bare' && 'button-bare',
        ].join(' ')" @click="onClickHandler">
        <slot />
    </Button>
</template>

<style lang="postcss" scoped>
.button-icon {
    @apply flex items-center justify-between py-2 px-4 text-custom-white outline-none border-0 bg-custom-black;
    box-shadow: none;
}

.button-sec {
    @apply text-custom-black bg-custom-white;
    border: 1px solid;
}

.button-outline {
    @apply border-custom-gray bg-custom-white text-custom-black;
    border: 1px solid;
}

.button-bare {
    @apply bg-custom-white text-custom-black outline-none;
    box-shadow: none;
}

.button-icon__right {
    @apply justify-between flex-row-reverse;
}

.button-icon__left {
    @apply justify-between;
}

.button-icon__none {
    @apply justify-center;
}
</style>
