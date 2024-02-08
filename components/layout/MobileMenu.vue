<script setup>
import {menuItems} from '~/components/layout/static/menuItems';
  const route = useRoute()
  const localePath = useLocalePath()

  const mobileMenuContainer = ref('mobileMenuContainer')
  const mobileMenuOverlay = ref("mobileMenuOverlay")
  const mobileMenuOpener = ref('mobileMenuOpener')

  const openMenu = ()=> {
    mobileMenuContainer.value.classList.add('w-full')
    mobileMenuContainer.value.classList.add('w-16')
    mobileMenuContainer.value.classList.remove('h-16')
    mobileMenuContainer.value.classList.remove('opacity-0')
    mobileMenuContainer.value.classList.remove('-bottom-20')
    mobileMenuContainer.value.classList.add('bottom-0')
    mobileMenuOverlay.value.classList.add("h-screen")
    mobileMenuOverlay.value.classList.remove("h-0")
    mobileMenuOpener.value.classList.remove("bottom-0")
    mobileMenuOpener.value.classList.add("-bottom-20")
  }
  const closeMenu = ()=> {
    setTimeout(()=>{
      mobileMenuContainer.value.classList.remove('w-full')
      mobileMenuContainer.value.classList.add('w-16')
      mobileMenuContainer.value.classList.add('h-16')
      mobileMenuContainer.value.classList.add('opacity-0')
      mobileMenuContainer.value.classList.remove('bottom-0')
      mobileMenuContainer.value.classList.add('-bottom-20')
      mobileMenuOverlay.value.classList.remove("h-screen")
      mobileMenuOverlay.value.classList.add("h-0")
      mobileMenuOpener.value.classList.add("bottom-0")
      mobileMenuOpener.value.classList.remove("-bottom-20")
    },100)
  }
</script>

<template>
    <nuxt-link ref="mobileMenuOpener" @click="openMenu" class="fixed md:hidden left-[50%] -translate-x-[50%] h-16 focus:bg-red-500 aspect-square bg-base-100 border shadow  shadow-white  mx-auto  mb-3 flex items-center justify-center rounded-full bottom-0 transition-all duration-500">
      <Icon name="material-symbols:menu-rounded" class="text-4xl text-center"  />
    </nuxt-link>
    <div @click="closeMenu" ref="mobileMenuOverlay" class="fixed bg-primary h-0 w-screen left-0 bottom-0 bg-opacity-30 transition-all duration-500 z-[5000]">
    </div>
    <div ref="mobileMenuContainer" class=" fixed bg-opacity- left-[50%] -translate-x-[50%] text-base  text-center bg-neutral  rounded-t-full -bottom-20 w-16 h-16 ease-linear z-[5001]  opacity-0 transition-all duration-500 ">
      <nuxt-link @click="closeMenu" to="/" class="pt-4 w-fit mx-auto block hover:text-primary duration-150 delay-150 transition-all">
        <Icon name="material-symbols:other-houses-outline-rounded" class=" text-5xl text-center"  />
      </nuxt-link>
      <div class="grid grid-cols-3 grid-rows-2 py-2 px-3 gap-2 aspect-[2/1] ">
        <div
          v-for="(item, i) in menuItems.slice(0,4)"
          class="flex relative"
          :class="`
            ${i==1? ' items-center justify-center': 'items-end'}
            ${i==0? ' justify-end': ''}
            ${i==2? ' justify-start': ''}
            ${i==3? ' justify-end items-center': ''}
          `" 
        >
          <nuxt-link 
            :to="localePath(item.route)"
            @click="closeMenu"
            class="w-full h-fit text-center absolute border shadow shadow-white rounded-full px-1 transition-all duration-300 hover:text-primary hover:border-primary hover:shadow-primary focus:text-primary focus:border-primary focus:shadow-primary"
            :class="`
              ${i==0? ' translate-x-[20%] translate-y-[50%]' : 'items-end'}
              ${i==2? ' -translate-x-[20%] translate-y-[50%]' : 'items-end'}
            `"
          >{{ $t(item.title) }}</nuxt-link>
        </div>
        <div class="flex justify-center items-end ">
          <nuxt-link @click="closeMenu" class="h-16 focus:bg-red-500 aspect-square bg-primary bg-opacity-20 border shadow  shadow-white  mx-auto flex items-center justify-center rounded-full ">
            <Icon name="uil:times" class="text-4xl text-center "  />
          </nuxt-link>
        </div>
        <div class="flex relative items-center justify-start" v-for="item in menuItems.slice(4,5)">
          <nuxt-link 
            @click="closeMenu"
            :to="localePath(item.route)"
            class="w-full h-fit text-center absolute border shadow shadow-white rounded-full px-1 transition-all duration-300 hover:text-primary hover:border-primary hover:shadow-primary focus:text-primary focus:border-primary focus:shadow-primary"
          >
            {{ $t(item.title) }}
          </nuxt-link>
        </div>

      </div>
    </div>
</template>