<script setup lang="ts">
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
</script>

<template>
    <nav>
        <div class="desktop-navbar">
            <div class="top">
                <div class="top-navbar custom-container">
                    <p>
                        <nuxt-link to="/login" class="link">
                            Login
                        </nuxt-link>
                        or
                        <nuxt-link to="/signup" class="link">
                            Sign Up
                        </nuxt-link>
                    </p>
                    <nuxt-link to="/book" class="link">
                        Book Your Trip Now
                    </nuxt-link>
                </div>
            </div>
            <div class="middle-navbar custom-container">
                <div class="middle-navbar__img">
                    <img 
                        src="/images/logo.png" 
                        alt="" 
                    />
                </div>
                <div class="middle-navbar__search">
                    <Input 
                        type="email" 
                        placeholder="Where to or what trip?" 
                        class="middle-navbar__search-input"
                    />
                    <LucideSearch class="middle-navbar__search-icon" />
                </div>
            </div>
            <div class="bottom-navbar custom-container">
                <div class="bottom-navbar__nav">
                    <nuxt-link to="/">
                        Destinations
                    </nuxt-link>
                    <nuxt-link to="/">
                        Tour Packages
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

<style scoped lang="postcss">
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
        @apply flex justify-end items-center gap-6 text-sm text-custom-black font-medium;
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
        @apply text-base !py-6 !px-8 rounded-3xl;
    }

    .middle-navbar__search-icon {
        @apply absolute end-[20px] top-[12px];
    }

    .bottom-navbar {
        @apply flex items-center justify-between my-6 text-sm text-custom-black font-medium;
    }

    .bottom-navbar__nav {
        @apply flex items-center gap-6;
    }
</style>