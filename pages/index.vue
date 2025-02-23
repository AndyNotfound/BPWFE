<script setup lang="ts">
    import { reactive } from 'vue';
    import { useIsMobile } from '#imports';

    const { isMobile } = useIsMobile()

    const recommendations = reactive([
        {
            image: '/images/snorkling.png',
            price: 'Rp 1 Million',
            title: 'Snorkeling and Diving at Kepri Coral',
            slug: 'snorkeling-and-diving-at-kepri-coral',
            desc: 'Experience stunning coral and fish ecosystem'
        },
        {
            image: '/images/canoe.png',
            price: 'Rp 1 Million',
            title: 'Canoe at the River Side of Bintan',
            slug: 'snorkeling-and-diving-at-kepri-coral',
            desc: 'Experience stunning coral and fish ecosystem'
        },
        {
            image: '/images/beach.png',
            price: 'Rp 1 Million',
            title: 'Snorkeling and Diving at Kepri Coral',
            slug: 'snorkeling-and-diving-at-kepri-coral',
            desc: 'Experience stunning coral and fish ecosystem'
        },
        {
            image: '/images/trees.png',
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
            <card-potrait
                :recommendations="recommendations"
            />
        </section>
        <section class="section">
            <section-head 
                :title="'Events for the season'"
                :desc="'Recommended Place to Go this Summer for 2025!'"
                desc-class="w-full md:w-[521px]"
                container-class="mt-28 mb-6"
            />
            <Carousel class="w-full">
                <CarouselContent>
                    <CarouselItem>
                        <card-landscape />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious v-if="!isMobile" />
                <CarouselNext v-if="!isMobile" />
            </Carousel>
        </section>
        <section class="section">
            <section-head
                title="Costumer Reviews"
                desc="See What Our Fellow Travelers Have to Say About Us"
                desc-class="w-full md:w-[521px] text-center"
                container-class="mt-28 mb-6 flex flex-col items-center"
            />
        </section>
    </div>
</template>

<style scoped lang="postcss">

</style>