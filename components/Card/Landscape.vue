<script setup lang="ts">
    import { defineProps } from 'vue';
    import { useIsMobile } from '#imports';

    const { isMobile } = useIsMobile() 

    /*
        const props = defineProps<{ 
            recommendations: Array<{ 
                image: string; 
                price: string; 
                title: string; 
                desc: string 
            }> 
        }>();
    */
</script>

<template>
    <div class="card">
        <div class="card-layer">
            <div class="card-content">
                <h2>
                    Kayaking on The Lake Toba at South Sumatera Island
                </h2>
                <p>
                    Experience the best kayaking experience on the lake Toba at south sumatera island
                </p>
                <custom-button 
                    class="booking-btn"
                    icon-position="left"
                >
                    <p>Booking Trip</p>
                    <LucideMoveRight />
                </custom-button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="postcss">
    .card {
        background-image: url('/images/kayak.png');
        height: 400px;
        border-radius: 20px;
        background-size: cover;
        background-position: center;
        @apply w-full text-custom-white flex items-end;
    }

    .card-content {
        position: static;
        padding: 0 35px 25px;
        @apply w-full; 

        h2 {
            @apply text-3xl;
            margin: 0;
        }
        
        p {
            @apply text-sm;
            opacity: 0.8;
        }
    }

    .booking-btn {
        max-width: 200px;
        @apply w-full bg-custom-white text-custom-black border-0 cursor-pointer mt-8 py-6 px-8 text-base;
        border-radius: 30px;
        transition: background 0.3s ease;
    
        p {
            @apply text-base;
        }
    }

    @screen md {
        .card-content {
            width: 500px;
        }
    }
</style>