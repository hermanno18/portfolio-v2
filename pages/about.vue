<script setup>  
  import { useI18n } from 'vue-i18n';
  const {t} = useI18n()

  useHead({
    title:  t('about.title', {name: t('name')}),
    meta: [
      { name: 'description', content: 'My amazing site.' }
    ],
  })
  definePageMeta({
    title: 'about.trans-title',
    description: 'about.desc',
  });
  const cvLink = "https://docs.google.com/document/d/10DNm9bAm2deAKrlhitC5LIRuFO0tcqOlEGHiFPMNO5c/edit?usp=sharing"
</script>
<template>
    <div class="w-full h-full flex items-center justify-center text-center px-3">
      <div class="md:max-w-[70%]">
        <div class="avatar">
          <div class="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="/img/profil.jpg" />
          </div>
        </div>
        <div class="divider mb-9"><span class="text-base text-primary capitalize">{{ $t('about.title', {name: $t('me')}) }}</span></div>
        <div class="text-lg text-start  bg-primary h-fit  p-2 grid xl:grid-cols-2 gap-5 xl:gap-0 relative">
          <a target="_blank" 
            to="https://docs.google.com/document/d/10DNm9bAm2deAKrlhitC5LIRuFO0tcqOlEGHiFPMNO5c/edit?usp=sharing" 
            class="absolute text-xs flex items-center justify-center align-middle text-center uppercase
                  z-[500] bg-base-100 border border-secondary !aspect-square w-20 rounded-full 
                  right-3 top-3
                  xl:left-[50%] xl:-translate-x-[50%] xl:top-[50%] xl:-translate-y-[50%] cursor-pointer 
                  hover:bg-primary hover:border-base-100 hover:rotate-[360deg] origin-center hover:text-base-100 transition-all duration-300
                "
            >
            <p>
              <span>{{ $t('about.see') }}</span> <br>
              {{ $t('about.my-cv') }}
            </p>
          </a>
          <div class="left-side  group xl:self-end xl:h-full   bg-base-100 border-primary border-2 shadow-sm -translate-x-6 xl:translate-y-6 hover:translate-x-0 hover:translate-y-0 transition-all duration-300 ease-in-out"> 
            <div class="content">
              <h4 class="text-2xl text-primary mb-2">{{ $t('name') }}</h4>  
              <p> {{ $t('about.desc-pro.text') }} </p>
              <p class="mt-5 text-sm ">
                <a :to="{name:'career'}" class=" group-hover:text-primary italic underline underline-offset-4 hover:underline-offset-2 transition-all duration-150 ">
                  <span> {{ $t('about.desc-pro.link') }} </span>
                  <span class="ml-3"><Icon name="material-symbols:arrow-forward" class="text-sm group-hover:rotate-[360deg] duration-300 text-primary group-hover:text-white  group-hover:bg-primary rounded-full" /></span>
                </a>
              </p>
            </div>
          </div>
          <div class="group right-side xl:text-end self-start xl:h-full flex justify-end  bg-base-100 border-primary border-2 translate-x-6 xl:-translate-y-6 hover:translate-x-0 hover:translate-y-0 transition-all duration-300 ease-in-out">
            <div class="content">
              <h4 class="text-2xl text-primary mb-2">{{ $t('pseudo') }}</h4>
              <p> {{ $t('about.desc-geek.text') }} </p>
              <p class="mt-5 text-sm gap-2 flex flex-col">
                <a href="https://twins-art.vercel.app" target="_blank
                " class=" group-hover:text-primary italic underline underline-offset-4 hover:underline-offset-2 transition-all duration-150 ">
                  <span> {{ $t('about.desc-geek.link2') }} </span>
                  <span class="ml-3"><Icon name="material-symbols:arrow-forward" class="text-sm group-hover:rotate-[360deg] duration-300 text-primary group-hover:text-white  group-hover:bg-primary rounded-full" /></span>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div class="mt-12 flex justify-center gap-6" >
          <Icon class="text-3xl -rotate-90" name="material-symbols:expand-circle-down-outline-rounded" />
          <a :to="{name:'contacts'}" class="uppercase  text-sm py-1 px-6 border border-primary w-fit rounded-full">{{ $t('about.contact-me') }}</a>
          <Icon class="text-3xl rotate-90" name="material-symbols:expand-circle-down-outline-rounded" />
        </div>
      </div>
    </div>
</template>

<style scoped>
  .left-side {
    clip-path: polygon(0 0, 80% 0, 100% 100%, 0% 100%);
    .content {
      shape-outside: polygon(0 0, 80% 0, 100% 100%, 0% 100%);
      max-width: 80%; /* Ajustez en fonction de votre mise en page */
      padding: 20px; /* Ajustez selon vos préférences */
    }
  }

  .right-side {
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 20% 100%);
    .content {
      shape-outside: polygon(0 0, 100% 0, 80% 100%, 0% 100%);
      max-width: 80%; /* Ajustez en fonction de votre mise en page */
      padding: 20px; /* Ajustez selon vos préférences */
    }
  }



</style>