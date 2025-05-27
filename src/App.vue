<template>
  <div>
    <header class="h-[60px] border-b-[1px] border-[#DDD] border-solid flex items-center px-[20px] overflow-auto">
      <RouterLink v-for="(item, index) of getRouters" :key="`r_${index}`" :to="item.path" :class="[`mr-[32px] shrink-0`, { 'text-blue-600 underline': route.path == item.path }]">
        {{ item.meta.name }}
      </RouterLink>
    </header>

    <main class="p-[20px]">
      <RouterView></RouterView>
    </main>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const getRouters = router.options.routes.filter((v) => v.path != '/');
</script>

<style scoped lang="scss"></style>
