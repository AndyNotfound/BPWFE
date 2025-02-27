<template>
<footer class="footer-hero">
    <div class="overlay" />
    <div class="content">
        <h2 class="title">
            Ready to embark on your next adventure? <br>
            Connect with Batam Pesona Wisata today.
        </h2>
        <custom-button class="cta-button" type="sec">
            <p>Booking Trip</p>
        </custom-button>
    </div>
</footer>
</template>

<style lang="postcss" scoped>
.footer-hero {
    @apply mt-24 relative w-full h-[1000px] flex items-center justify-center bg-cover bg-center;
    background-image: url('/images/footer.png');
    /* Update path */
}

.overlay {
    @apply absolute inset-0 bg-black bg-opacity-40;
}

.content {
    @apply relative z-10 text-white text-center px-6 flex flex-col items-center gap-8;
}

.title {
    @apply text-2xl md: text-6xl font-semibold leading-snug;
}

.cta-button {
    @apply border-0 mt-4 py-6 px-14 bg-custom-white text-custom-black text-base rounded-full font-medium hover: bg-gray-200 transition;
}
</style>
