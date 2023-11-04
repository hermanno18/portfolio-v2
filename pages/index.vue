<script setup>

onMounted(()=>{
  window.addEventListener('storage', (event) => {
    isLight.value = isWhiteTheme()
  }, false)
})

import { useI18n } from 'vue-i18n';

const {t} = useI18n()

useHead({
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
})
definePageMeta({
  title: 'name',
  description: 'index.trans-desc',
});



const isLight = ref(isWhiteTheme())

const { data, pending, error, refresh } = await useAsyncData(
  'contacts-list',
  () => $fetch(`/api/contacts/`)
)

const socials = data.value?.filter(e=>isContactSocial(e)).reverse() || []

</script>
<template>
  <div  class=" fixed top-0 left-0 h-screen w-screen flex items-center justify-center text-center  overflow-hidden ">
    <div class="absolute  md:left-10 bottom-16 ">
      <div class="text-center gap-4 flex md:flex-col items-center md:-translate-x-[40%]  ">
        <template
          v-for="(social, i) in socials"
        >
          <a :href="social.link" target="_blank" :title="social.title"  class="shadow group bg-white bg-opacity-80 p-3 aspect-square rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-100  transition-all duration-500 ease-in-out">
            <Icon :name="social.icon" class="text-xl group-hover:rotate-[360deg] group-hover:text-2xl text-base-100 group-hover:text-primary transition-all duration-500 ease-in-out" />
          </a>
          <div v-if="i<socials.length-1" class="bg-primary opacity-50 h-5 w-2 rounded-full"></div>
        </template>
      </div>
    </div>
    <div class="absolute w-2 h-2 rounded-full bg-primary left-10 bottom-10 hidden md:block "></div>
    <div class="absolute gap-4 left-16 bottom-10 items-center translate-y-[40%] hidden md:flex">
      <div class="text-sm">{{ $t('index.wondered') }} <nuxt-link :to="{name: 'contacts'}" class="text-secondary">{{ $t('index.contact-me') }}</nuxt-link> {{ $t('index.and-more') }}</div>
      <div class="bg-primary opacity-50 w-5 h-2 rounded-full"></div>
    </div>
    <div class="absolute -z-[1]  ">
      <div class="spinner h-[300px] w-[300px]  md:h-[500px] md:w-[500px] rounded-full overflow-hidden">
        <div class=" bg-base-100  h-[300px] w-[300px]  md:h-[500px] md:w-[500px] rounded-full relative overflow-hidden">
          <img src="/img/video-bg-1.png" alt="" class="absolute  h-full w-ful opacity-50">
          <div v-if="!isLight" class="absolute h-full w-full  rounded-full" style=" background: rgba(31, 41, 55, 1.0); background: radial-gradient(at center, rgba(31, 41, 55, 1.0) 30%, rgba(31, 41, 55, 0.7), rgba(31, 41, 55, 1.0), rgba(255, 255, 255, 0.0));"></div>
        </div>
      </div>
    </div>
    <div>
      <div class="max-w-[450px] maxh-[480px] ">
        <div class="mb-5">
          <p class="mb-5">
            {{ $t('index.hello') }}  🙃 
          </p>
          <p>{{ $t('index.im') }} <span class="text-info">Hermann FOKOU</span>,</p>
          <p class=" mt-3 text-xl sm:text-lg">{{ $t('index.desc') }} <br class=sm:hidden> {{ $t('index.desc2') }}</p>
          <p class="-3 text-base sm:text-lg ">{{ $t('index.wellcome') }}</p>
          <p></p>
        </div>
        <div class="relative flex justify-center pt-4 mt-12">
          <nuxt-link :to="{name:'about'}" class="scroll-down bottom-0 mt-5 text-3xl">
            <Icon name="bi:rocket"/>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.spinner {
  background-image: -webkit-gradient(linear,left top, left bottom,color-stop(35%, #FF2B51),to(#00e1ff));
  background-image: linear-gradient(#FF2B51 35%,rgb(0, 225, 255));
  -webkit-animation: spinning82341 4s linear infinite;
          animation: spinning82341 4s linear infinite;
  -webkit-filter: blur(1px);
          filter: blur(1px);
  -webkit-box-shadow: 0px -5px 20px 0px #FF2B51, 0px 5px 20px 0px rgb(0, 225, 255);
          box-shadow: 0px -5px 20px 0px #FF2B51, 0px 5px 20px 0px rgb(0, 225, 255);
}

.spinner1 {
  -webkit-filter: blur(10px);
          filter: blur(10px);
}

@-webkit-keyframes spinning82341 {
  to {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

@keyframes spinning82341 {
  to {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}






.scroll-down {
  position: absolute;
  z-index: 100;

  -webkit-animation: fade_move_down 4s ease-in-out infinite;
  -moz-animation:    fade_move_down 4s ease-in-out infinite;
  animation:         fade_move_down 4s ease-in-out infinite;
}


/*animated scroll arrow animation*/
@-webkit-keyframes fade_move_down {
  0%   { -webkit-transform:translate(0, 10px); opacity: 0;  }
  50%  { opacity: 1;  }
  100% { -webkit-transform:translate(0,-10px); opacity: 0; }
}
@-moz-keyframes fade_move_down {
  0%   { -moz-transform:translate(0,10px); opacity: 0;  }
  50%  { opacity: 1;  }
  100% { -moz-transform:translate(0,-10px); opacity: 0; }
}
@keyframes fade_move_down {
  0%   { transform:translate(0,10px); opacity: 0;  }
  50%  { opacity: 1;  }
  100% { transform:translate(0,-10px); opacity: 0; }
}
</style>