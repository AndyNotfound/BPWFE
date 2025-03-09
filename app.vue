<script>
import { useHead } from '@vueuse/head';

useHead({
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/images/logo.png' }
  ]
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>