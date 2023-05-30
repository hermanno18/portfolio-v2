<script setup>
  const menuItems = [
    {
      title: 'about',
      route: '/about'
    },
    {
      title: 'Experience',
      route: '/experience'
    },
    {
      title: 'skills',
      route: '/skills'
    },
    {
      title: 'companies',
      route: '/companies'
    },
  ]
</script>
<template>
  <div class="">
    <div class=" h-screen p-6 text-2xl ">
      <div class="fixed top-0 left-0 -z-[500] h-full w-full bg-gray-800 ">
        <AnimatedBG />
      </div>
      <div class=" h-full flex flex-col relative">
        <TheHeader />
        <div class="flex-1 flex relative">
          <div class="w-full h-full ">
            <NuxtPage />
          </div>
          <div class=" absolute h-full right-0 flex flex-col gap-12 uppercase text-xl">
            <div 
              class="group overflow-hidden h-fit flex justify-end cursor-pointer" 
              v-for="item in menuItems"
              @click="$router.push(item.route)"
            >
              <div 
                class="right-0 rotate-90 w-fit aspect-square  group-hover:text-primary  group-hover:items-center group-hover:rotate-0 duration-300 transition-all"
              >
                {{ item.title }}
              </div>
            </div>
          </div>
        </div>
        <div class="relative">
          <TheFooter />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.teste {
  color: red 500;
  .circle {
    opacity: .25;
    filter: blur(25px);
  }
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>