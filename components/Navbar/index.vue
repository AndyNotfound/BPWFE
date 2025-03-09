<script setup lang="ts">
/*
    import { defineEmits } from 'vue'

    const emits = defineEmits(['signUp', 'login', 'book'])

    const signUpHandler = () => {
        emits('signUp')
    }

    const bookYourTripNowHandler = () => {
        emits('book')
    }

    const loginHandler = () => {
        emits('login')
    }
*/
</script>

<template>
    <nav>
        <div class="desktop-navbar">
            <div class="top">
                <div class="top-navbar custom-container">
                    <p>
                        <nuxt-link to="/" class="link">
                            Login
                        </nuxt-link>
                        or
                        <nuxt-link to="/" class="link">
                            Sign Up
                        </nuxt-link>
                    </p>
                    <nuxt-link to="/" class="link">
                        Book Your Trip Now
                    </nuxt-link>
                </div>
            </div>
            <div class="middle-navbar custom-container">
                <div class="middle-navbar__img">
                    <img src="/images/logo.png" alt="">
                </div>
                <div class="middle-navbar__search">
                    <Input type="email" placeholder="Where to or what trip?" class="middle-navbar__search-input" />
                    <LucideSearch class="middle-navbar__search-icon" />
                </div>
            </div>
            <div class="bottom-navbar custom-container">
                <div class="bottom-navbar__nav">
                    <nuxt-link to="/">
                        Tour Recommendation
                    </nuxt-link>
                    <nuxt-link to="/">
                        Seasonal Events
                    </nuxt-link>
                    <nuxt-link to="/">
                        Traveler Review
                    </nuxt-link>
                    <nuxt-link to="/">
                        About Us
                    </nuxt-link>
                </div>
                <div class="bottom-navbar__costumer">
                    <p>Costumer Service: 08210909032</p>
                </div>
            </div>
        </div>
    </nav>
</template>

<style lang="postcss" scoped>
nav {
    font-family: "Poppins", serif;
}

.desktop-navbar {
    @apply hidden md:block;
}

.top {
    @apply p-2 bg-[#fafafa];
}

.top-navbar {
    @apply flex justify-end items-center gap-6 text-sm text-custom-black font-normal;
}

.middle-navbar {
    @apply flex justify-start items-center gap-6 mt-6;
}

.middle-navbar__img {
    @apply h-[50px];

    img {
        height: 100%;
    }
}

.middle-navbar__search {
    @apply flex relative min-w-[500px];
}

.middle-navbar__search-input {
    @apply text-base !py-6 !pl-6 !pr-8 rounded-3xl placeholder:text-sm focus:outline-none;
}

.middle-navbar__search-icon {
    @apply absolute end-[20px] top-[12px];
}

.bottom-navbar {
    @apply flex items-center justify-between mt-8 mb-6 text-sm text-custom-black font-normal;
}

.bottom-navbar__nav {
    @apply flex items-center gap-10;
}
</style>
