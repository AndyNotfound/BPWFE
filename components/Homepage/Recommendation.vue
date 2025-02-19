<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{ 
    recommendations: Array<{ 
        image: string; 
        price: string; 
        title: string; 
        desc: string 
    }> 
}>();

console.log('recommendation: ', props.recommendations)
</script>

<template>
    <div class="cards-container">
        <div
            v-for="(item, index) in recommendations"
            :key="index"
            class="card" 
            :style="{ 
                backgroundImage: `url('${item.image}')`, 
                width: index === 0 ? '33.14%' : '22.96%'
            }"
        >
            <div class="price-tag">
                {{ item.price }}
            </div>
            <div class="card-content">
                <h2>
                    {{ item.title }}
                </h2>
                <p>
                    {{ item.desc }}
                </p>
                <button class="booking-btn">
                    Booking Trip →
                </button>
            </div>
        </div>

        <!-- <div class="card" style="background-image: url('canoe1.jpg');">
            <div class="price-tag">Rp 1 Million</div>
            <div class="card-content">
                <h2>Canoe at the River Side of Bintan</h2>
                <p>Experience stunning coral and fish ecosystem</p>
                <button class="booking-btn">Booking Trip →</button>
            </div>
        </div>

        <div class="card" style="background-image: url('canoe2.jpg');">
            <div class="price-tag">Rp 1 Million</div>
            <div class="card-content">
                <h2>Canoe at the River Side of Bintan</h2>
                <p>Experience stunning coral and fish ecosystem</p>
                <button class="booking-btn">Booking Trip →</button>
            </div>
        </div>

        <div class="card" style="background-image: url('canoe3.jpg');">
            <div class="price-tag">Rp 1 Million</div>
            <div class="card-content">
                <h2>Canoe at the River Side of Bintan</h2>
                <p>Experience stunning coral and fish ecosystem</p>
                <button class="booking-btn">Booking Trip →</button>
            </div>
        </div> -->
    </div>
</template>

<style scoped lang="postcss">
/* Card Container */
.cards-container {
    display: flex;
    gap: 20px;
    overflow-x: auto;
}

/* Card Styling */
.card {
    position: relative;
    width: 250px;
    height: 500px;
    border-radius: 20px;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    color: white;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
}

/* Dark Overlay */
.card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
}

/* Card Content */
.card-content {
    position: relative;
    padding: 20px;
    z-index: 2;
}

/* Card Heading */
h2 {
    font-size: 20px;
    margin: 0;
}

/* Card Description */
p {
    font-size: 14px;
    opacity: 0.8;
}

/* Price Tag */
.price-tag {
    position: absolute;
    top: 10px;
    right: 10px;
    background: white;
    color: black;
    padding: 5px 10px;
    border-radius: 15px;
    font-size: 12px;
    font-weight: bold;
    z-index: 2;
}

/* Booking Button */
.booking-btn {
    background: white;
    color: black;
    border: none;
    padding: 10px 15px;
    border-radius: 30px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    width: 100%;
    margin-top: 10px;
    transition: background 0.3s ease;
}

.booking-btn:hover {
    background: #ddd;
}
</style>