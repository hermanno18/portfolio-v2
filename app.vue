<script setup>
  const menuItems = [
    {
      title: 'menu.about',
      route: 'about'
    },
    {
      title: 'menu.career',
      route: 'career'
    },
    {
      title: 'menu.works',
      route: 'projects'
    },
    {
      title: 'menu.skills',
      route: 'skills'
    },
    {
      title: 'menu.contacts',
      route: 'contacts'
    },
  ]
  const route = useRoute()
</script>
<template>
  <div class="">
    <div class=" h-screen w-screen p-3 md:p-6 text-2xl !overflow-x-hidden">
      <div class="fixed top-0 left-0 -z-[500] h-full w-full bg-gray-800 ">
        <AnimatedBG />
      </div>
      <div class=" h-full w-full flex flex-col relative bg-yello-500">
        <TheHeader />
        <div class="flex-1  flex relative">
          <div class="w-full h-full">
            <NuxtPage />
          </div>
          <div class="hidden sticky top-16  h-fit right-0 md:flex flex-col gap-2 uppercase text-xl">
            <div 
              class="group overflow-hidden h-fit flex justify-end cursor-pointer" 
              v-for="item in menuItems"
              @click="$router.push({name: item.route})"
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
                 <Icon name="material-symbols:arrow-circle-left-outline" class="text-lg ml-3 text-transparent group-hover:text-primary duration-150 delay-150 transition-all"  />
              </div>
              </div>
            </div>
          </div>

          <div class="md:hidden fixed bottom-0 p- flex   items-center bg-gray-800 border shadow  shadow-white gap-1 text-lg mx-auto w-fit mb-3 -translate-x-[50%] left-[50%] py-2 px-5 rounded-full">
            <div class="flex items-center" @click="$router.push('/')">
            <Icon name="uil:home" class="text-lg "  />
            </div>
            <div class="divider divider-horizontal m-0"></div>
            <template
              v-for="(item, key) in menuItems"
              :key="key"
            >
              <nuxt-link 
                :to="item.route"
                class="text-base capitalize" 
              >
                {{ item.title }}
              </nuxt-link>
              <div v-if="key != menuItems.length-1" class="divider divider-horizontal m-0"></div>
            </template>
          </div> 
        </div>
        <div class="relative">
          
          <!-- <TheFooter /> -->
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