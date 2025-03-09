<template>
    <div class="hero">
        <div class="hero-content custom-container">
            <h1 class="hero-content__heading">
                Where You Get Trapped in the Beauty of the World and Unforgettable Happiness!
            </h1>
            <Button class="hero-content__button">
                <div class="hero-content__button-icon">
                    <LucideMapPinCheck />
                </div>
                <p>Booking Now</p>
            </Button>
        </div>

    </div>
</template>

<style lang="postcss" scoped>
.hero {
    background-image: url('/images/travel.jpg');
    height: 600px;
    @apply w-full object-cover bg-no-repeat bg-cover flex items-center;
}

.hero-content {
    @apply flex flex-col gap-[50px];
}

.hero-content__heading {
    @apply text-4xl font-semibold leading-snug text-custom-white w-full;
    line-height: 1.2;
}

.hero-content__button {
    @apply flex items-center justify-start bg-custom-white py-6 pl-2 pr-6 rounded-[30px] gap-4 w-fit;

    p {
        @apply text-custom-black;
    }
}

.hero-content__button-icon {
    @apply bg-custom-black text-custom-white p-[10px] rounded-full;

    svg {
        width: 18px;
        height: 18px;
    }
}

@screen md {
    .hero {
        height: 870px;
    }

    .hero-content__heading { 
        @apply text-6xl;
    }
}

@screen lg {
    .hero {
        height: 950px;
    }

    .hero-content {
        @apply !pt-[40px];
    }
}
</style>
