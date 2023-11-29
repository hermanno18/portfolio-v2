<script setup>
  import {menuItems} from '~/components/layout/static/menuItems';
  const route = useRoute()
</script>

<template>
  <div class="hidden sticky top-16  h-fit right-0 md:flex flex-col gap-2 uppercase text-xl">
    <nuxt-link 
      to="/" 
      class="w-fit ml-auto px-1 pb-4 block hover:text-primary duration-150 delay-150 transition-all"
      :class="route.name == 'index' ? 'text-secondary underline underline-offset-8' : ''"  
    >
      <Icon name="material-symbols:other-houses-outline-rounded" class="text-2xl text-end"  />
    </nuxt-link>
    <nuxt-link 
      class="group overflow-hidden h-fit flex justify-end cursor-pointer uppercase" 
      v-for="item in menuItems"
      :to="{name: item.route}"
    >
      <div 
        class="right-0 rotate-90 w-fit aspect-square  group-hover:!text-primary  group-hover:items-center group-hover:rotate-0 duration-300 transition-all"
      >
      <div class="flex items-center  justify-center align-middle group-hover:!text-primary"
      :class="route.name == item.route ? 'text-secondary underline underline-offset-8' : ''"
      >
        <span>
          {{ $t(item.title) }}
        </span>
          <Icon name="material-symbols:arrow-circle-left-outline" class="text-lg ml-3 text-transparent group-hover:text-primary duration-150 delay-150 transition-all  ease-linear"  />
      </div>
      </div>
    </nuxt-link>
  </div>
</template>