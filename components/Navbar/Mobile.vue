<script setup lang="ts">
import {
    defineEmits
} from 'vue'

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
    <nav class="fixed z-10 w-full border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="/images/logo.png" class="h-8" alt="Flowbite Logo">
                <span class="self-center text-md font-medium whitespace-nowrap text-custom-black dark:text-custom-white">
                    Batam Pesona Wisata
                </span>
            </a>
            <button data-collapse-toggle="navbar-hamburger" type="button" class="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
                <span class="sr-only">
                    Open main menu
                </span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
            <div id="navbar-hamburger" class="hidden w-full">
                <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                    <li>
                        <nuxt-link to="/" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            Destinations
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            Tour Packages
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">
                            Traveler Review
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            About Us
                        </nuxt-link>
                    </li>
                    <li class="mt-4">
                        <custom-button button-class="w-full mx-2" @click="bookYourTripNowHandler">
                            Book Your Trip Now
                        </custom-button>
                    </li>
                    <li>
                        <custom-button button-class="w-full mx-2 mt-2" type="outline" @click="signUpHandler">
                            Sign Up
                        </custom-button>
                    </li>
                    <li>
                        <custom-button button-class="w-full mx-2 mt-2" type="bare" @click="loginHandler">
                            Login
                        </custom-button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
