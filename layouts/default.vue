<script lang="ts">
import {
    onMounted
} from 'vue';
import {
    useIsMobile
} from '@/composables/useIsMobile';
import {
    useFlowbite
} from '@/composables/useFlowBite';
import {
    initFlowbite
} from 'flowbite';

const signUpHandler = () => {}

const bookYourTripNowHandler = () => {}

const loginHandler = () => {}

onMounted(() => {
    useFlowbite(() => {
        initFlowbite();
    })
})

const {
    isMobile
} = useIsMobile();
</script>

<template>
<div>
    <navbar-mobile v-if="isMobile" @login="loginHandler" @book="bookYourTripNowHandler" @sing-up="signUpHandler" />
    <navbar v-else @login="loginHandler" @book="bookYourTripNowHandler" @sing-up="signUpHandler" />
    <main>
        <slot />
    </main>
    <web-footer />
</div>
</template>
