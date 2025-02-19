<script setup lang="ts">
import { reactive } from 'vue';

const recommendations = reactive([
    {
        image: '/images/snorkling.png',
        price: 'Rp 1 Million',
        title: 'Snorkeling and Diving at Kepri Coral',
        slug: 'snorkeling-and-diving-at-kepri-coral',
        desc: 'Experience stunning coral and fish ecosystem'
    },
    {
        image: '/images/snorkling.png',
        price: 'Rp 1 Million',
        title: 'Snorkeling and Diving at Kepri Coral',
        slug: 'snorkeling-and-diving-at-kepri-coral',
        desc: 'Experience stunning coral and fish ecosystem'
    },
    {
        image: '/images/snorkling.png',
        price: 'Rp 1 Million',
        title: 'Snorkeling and Diving at Kepri Coral',
        slug: 'snorkeling-and-diving-at-kepri-coral',
        desc: 'Experience stunning coral and fish ecosystem'
    },
    {
        image: '/images/snorkling.png',
        price: 'Rp 1 Million',
        title: 'Snorkeling and Diving at Kepri Coral',
        slug: 'snorkeling-and-diving-at-kepri-coral',
        desc: 'Experience stunning coral and fish ecosystem'
    },
])
</script>

<template>
    <homepage-hero />
    <div class="main custom-container">
        <section class="section">
            <section-head 
                :title="'Tour Reccomendation'"
                :desc="'Our Specially Picked Tour Package Recommendation'"
                desc-class="w-full md:w-[521px]"
                container-class="mt-28 mb-6"
            />
            <homepage-recommendation
                :recommendations="recommendations"
            />
        </section>
        <section class="section">
            <section-head 
                :title="'Events for the season'"
                :desc="'Recommended Place to Go this Summer for 2025!'"
                desc-class="w-full md:w-[521px]"
                container-class="mt-28"
            />
        </section>
    </div>
</template>

<style scoped lang="postcss">

</style>