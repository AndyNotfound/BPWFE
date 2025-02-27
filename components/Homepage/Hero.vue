<template>
<div class="hero">
    <div class="hero-content custom-container">
        <h1 class="hero-content__heading">
            Where You Get Trapped in the <br>Beauty of the World and <br>Unforgettable Happiness!
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
    height: 800px;
    @apply w-full object-cover bg-no-repeat bg-cover;
}

.hero-content {
    @apply flex flex-col gap-[50px] pt-40;
}

.hero-content__heading {
    @apply text-6xl font-semibold leading-snug text-custom-white w-full;
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

    .hero-content__heading {}
}

@screen lg {
    .hero {
        height: 950px;
    }

    .hero-content {
        @apply pt-48;
    }
}
</style>
