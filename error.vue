<script setup lang="ts">
const props = defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="error-body h-screen w-screen">
      <div
        id="sky"
        class=" fixed z-50 top-0 h-screen w-screen flex justify-center items-center"
      >
        <div
          class="hidden flex-col items-center justify-center text-white w-screen h-screen md:flex"
        >
          <div id="stars" class="self-start z-30"></div>
          <div id="stars2" class="self-start z-40"></div>
          <div id="stars3" class="self-start z-20"></div>
          <Tilt
            class="h-72 w-72 bg-primary bg-opacity-40 border border-secondary rounded-full p-500 flex items-center justify-center mb-5"
          >
            <h2 class="text-9xl text-secondary font-extrabold font-mono errorcode">
              {{ error.statusCode }}
            </h2>
          </Tilt>
          <h1 class="font-mono text-white z-50 text-xl">
            <span v-if="error.statusCode == 500">{{ $t('page-500') }}</span>
            <span v-if="error.statusCode == 404">{{ $t('page-404') }}</span>
          </h1>
          <h5>
            <div class="mt-12 flex justify-center gap-6 items-center" >
              <Icon class="text-3xl -rotate-90" name="material-symbols:expand-circle-down-outline-rounded" />
              <nuxt-link :to="{name:'index'}" class="uppercase  text-sm py-3 px-9 border border-primary w-fit rounded-full hover:text-white hover:bg-primary hover:border-white transtion-all duration-200">{{ $t('back-to-home') }}</nuxt-link>
              <Icon class="text-3xl rotate-90" name="material-symbols:expand-circle-down-outline-rounded" />
            </div>
          </h5>
        </div>
      </div>
    </div>
</template>

<style scopped>
.errorcode {
  transform: translate3d(0,0,50px);
  transform-style: preserve-3d;
}
.error-body {
  /* background-color: #263238; */
}

.space img {
  -webkit-animation: mover 2s ease-in-out infinite alternate;
  animation: mover 2s ease-in-out infinite alternate;
}

@-webkit-keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-30px);
  }
}
@keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-30px);
  }
}


</style>
