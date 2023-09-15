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
  <div class="w-full h-full flex items-center justify-center text-center">
    <div class="md:max-w-[70%]">
      <div class="avatar">
        <div class="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src="/img/profil.jpg" />
        </div>
      </div>
      <div class="divider mb-9"><span class="text-base text-primary capitalize">{{ $t('about.title', {name: $t('me')}) }}</span></div>
      <div class="text-lg text-start grid xl:grid-cols-2 gap-9">
        <div class="">
          <h4 class="text-2xl text-primary mb-2">{{ $t('name') }}</h4>
          <p> {{ $t('about.desc-pro.text') }} </p>
          <p class="mt-5 text-sm ">
            <nuxt-link :to="{name:'career'}" class=" hover:text-primary italic underline underline-offset-4 hover:underline-offset-2 transition-all duration-150 group">
              <span> {{ $t('about.desc-pro.link') }} </span>
              <span class="ml-3"><Icon name="material-symbols:arrow-forward" class="text-sm group-hover:rotate-[360deg] duration-300 text-primary group-hover:text-white  group-hover:bg-primary rounded-full" /></span>
            </nuxt-link>
          </p>
        </div>

        <div class="">
          <h4 class="text-2xl text-primary mb-2">{{ $t('pseudo') }}</h4>
          <p> {{ $t('about.desc-geek.text') }} </p>
          <p class="mt-5 text-sm ">
            <a href="" class=" hover:text-primary italic underline underline-offset-4 hover:underline-offset-2 transition-all duration-150 group">
              <span> {{ $t('about.desc-geek.link') }} </span>
              <span class="ml-3"><Icon name="material-symbols:arrow-forward" class="text-sm group-hover:rotate-[360deg] duration-300 text-primary group-hover:text-white  group-hover:bg-primary rounded-full" /></span></a>
          </p>
        </div>
      </div>
      <div class=" md:w-1/3 mx-auto gap-5 mt-16">
        <a 
          :href="cvLink"
          target="_blank" 
          :title="$t('about.get-cv')"
          class="border block rounded-full p-0 text-base overflow-hidden group shadow-lg " 
        >
          <div class="flex w-full overflow-hidden items-center gap-3">
            <div class="bg-white group-hover:flex-1 duration-300 transition-all p-1 text-center">
              <Icon name="tabler:eye" class="text-xl group-hover:rotate-[360deg] duration-300 text-gray-800 group-hover:text-primary" />
            </div> 
            <div class="group-hover:opacity-0 group-hover:hidden delay-200 duration-300">{{ $t('about.get-cv') }}</div> 
          </div> 
        </a>
      </div>
    </div>
  </div>
</template>