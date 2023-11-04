<script setup>

const router = useRouter()
const title =  ref(process.client ? document.title: null)

router.afterEach((to, from)=>{
  title.value = document.title
})

  const route = useRoute()

</script>
<template>
  <div id="transitionner" class="bg-neutral border-t-2 fixed z-[99999999999999999] transition-all duration-500 overflow-hidden -bottom-[120%]  h-screen w-screen flex items-center justify-center">
    <div class=" text-center flex flex-col gap-y-8 w-fit">
      <!-- {{ route.meta.title }}: -->
      <h2 class="text-6xl uppercase">
        {{ $t(route.meta?.title || 'Hop Téléportation !') }}
      </h2>
      <h4 class="text-3xl">
        -- {{ $t(route.meta?.description || "L'univers est infini, comme le savoir que je veux aquerir !") }} --
      </h4>
    </div>
  </div>
  <div id="appContainer" class="h-full p-3 md:p-6 !pt-0 text-2xl flex flex-col ">
    <div class="fixed top-0 left-0 -z-[500] h-full w-full bg-base-100 ">
      <div id="stars" class="self-start z-30"></div>
      <div id="stars2" class="self-start z-40"></div>
      <div id="stars3" class="self-start z-20"></div>
      <AnimatedBG />
    </div>
    <div class=" flex-1 w-full h-full flex flex-col relative ">
      <TheHeader />
      <div class="flex-1  flex relative">
        <div class="flex-1 pt-3 md:p-6 ">
          <NuxtPage />
        </div>
        <VerticalMenu />
        <MobileMenu />
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