<script setup>
const router = useRouter()
const title =  ref(process.client ? document.title: null)

router.afterEach((to, from)=>{
  title.value = document.title
})



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
  <div id="transitionner" class="bg-gray-900 border-t-2 fixed z-[99999999999999999] transition-all duration-500 overflow-hidden -bottom-[120%]  h-screen w-screen flex items-center justify-center">
    <div class=" text-center flex flex-col gap-y-8 w-fit">
      <!-- {{ route.meta.title }}: -->
      <h2 class="text-6xl uppercase">
        {{ $t(route.meta?.title || 'Hop Transition !') }}
      </h2>
      <h4 class="text-3xl">
        -- {{ $t(route.meta?.description || "Il y a beaucoup d'amour dans la page où tu vas !") }} --
      </h4>
    </div>
  </div>
  <div id="appContainer" class="h-full p-3 md:p-6 !pt-0 text-2xl flex flex-col">
    <div class="fixed top-0 left-0 -z-[500] h-full w-full bg-gray-800 ">
      <AnimatedBG />
    </div>
    <div class=" flex-1 w-full h-full flex flex-col relative ">
      <TheHeader />
      <div class="flex-1  flex relative">
        <div class="flex-1 pt-3 md:p-6 ">
          <NuxtPage />
        </div>
        <div class="hidden sticky top-16  h-fit right-0 md:flex flex-col gap-2 uppercase text-xl">
          <nuxt-link 
            to="/" 
            class="w-fit ml-auto px-1 pb-4 block hover:text-primary duration-150 delay-150 transition-all"
            :class="route.name == 'index' ? 'text-secondary underline underline-offset-8' : ''"  
          >
            <Icon name="material-symbols:other-houses-outline-rounded" class="text-2xl text-end"  />
          </nuxt-link>
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
                <Icon name="material-symbols:arrow-circle-left-outline" class="text-lg ml-3 text-transparent group-hover:text-primary duration-150 delay-150 transition-all  ease-linear"  />
            </div>
            </div>
          </div>
        </div>
        <button ref="mobileMenuOpener" @click="openMenu" class="fixed md:hidden left-[50%] -translate-x-[50%] h-16 focus:bg-red-500 aspect-square bg-gray-800 border shadow  shadow-white  mx-auto  mb-3 flex items-center justify-center rounded-full bottom-0 transition-all duration-500">
          <Icon name="material-symbols:menu-rounded" class="text-4xl text-center"  />
        </button>
        <div @click="closeMenu" ref="mobileMenuOverlay" class="fixed bg-primary h-0 w-screen left-0 bottom-0 bg-opacity-30 transition-all duration-500 z-[5000]">
        </div>
        <div ref="mobileMenuContainer" class=" fixed bg-opacity- left-[50%] -translate-x-[50%] text-base  text-center bg-gray-900  rounded-t-full -bottom-20 w-16 h-16 ease-linear z-[5001]  opacity-0 transition-all duration-500 ">
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
                :to="item.route"
                @click="closeMenu"
                class="w-full h-fit text-center absolute border shadow shadow-white rounded-full px-1 transition-all duration-300 hover:text-primary hover:border-primary hover:shadow-primary focus:text-primary focus:border-primary focus:shadow-primary"
                :class="`
                  ${i==0? ' translate-x-[20%] translate-y-[50%]' : 'items-end'}
                  ${i==2? ' -translate-x-[20%] translate-y-[50%]' : 'items-end'}
                `"
              >{{ $t(item.title) }}</nuxt-link>
            </div>
            <div class="flex justify-center items-end ">
              <button @click="closeMenu" class="h-16 focus:bg-red-500 aspect-square bg-primary bg-opacity-20 border shadow  shadow-white  mx-auto flex items-center justify-center rounded-full ">
                <Icon name="uil:times" class="text-4xl text-center "  />
              </button>
            </div>
            <div class="flex relative items-center justify-start" v-for="item in menuItems.slice(4,5)">
              <nuxt-link 
                @click="closeMenu"
                :to="item.route"
                class="w-full h-fit text-center absolute border shadow shadow-white rounded-full px-1 transition-all duration-300 hover:text-primary hover:border-primary hover:shadow-primary focus:text-primary focus:border-primary focus:shadow-primary"
              >
                {{ $t(item.title) }}
              </nuxt-link>
            </div>

          </div>
        </div>

        <!-- <div class=" fixed bottom-0 md:flex   items-center bg-gray-800 border shadow  shadow-white gap-1 text-lg mx-auto w-fit mb-3 -translate-x-[50%] left-[50%] py-2 px-5 rounded-full">
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
        </div>  -->
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.router {
  color: red 500;
  .circle {
    opacity: .25;
    filter: blur(25px);
  }
}

.page-enter-active,
.page-leave-active {
  transition: all 1.8s;
}
.page-enter-from,
.page-leave-to {
  #transitionner {
    @apply bg-yellow-300
  }

  opacity: 0;
  filter: blur(1rem);
}

:is(:is(div:has(.page-leave-to)) > #transitionner ),
:is(:is(div:has(.page-enter-from)) > #transitionner ){
  animation: pageTransit 2s ease-in-out;
}

@keyframes pageTransit {
    0% {
      @apply hidden  rounded-t-full opacity-0;
        
    }
    25% {
      // @apply h-screen w-screen;
      @apply   flex bottom-0 rounded-none opacity-100;
    }
    50% {
      // @apply h-screen w-screen;
    }
    75% {
      // @apply w-screeh w-screen;
      @apply  flex bottom-0 rounded-none opacity-100;
    }
    100% {
        // transform: translateX(50px) rotate(360deg) translateX(-50px);
      @apply hidden rounded-t-full opacity-0;
    }
}

.orbit {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #e74c3c;
    border-radius: 50%;
    transform-origin: center;
    animation: orbitAnimation 2s infinite linear;
}

@keyframes orbitAnimation {
    0% {
        transform: translateX(50px) rotate(0deg) translateX(-50px);
    }
    100% {
        transform: translateX(50px) rotate(360deg) translateX(-50px);
    }
}
</style>