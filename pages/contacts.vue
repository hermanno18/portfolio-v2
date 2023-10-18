<script setup>
import { useI18n } from 'vue-i18n';

const {t} = useI18n()

useHead({
  title:  t('contact.title', {name: t('name')}),
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
})
definePageMeta({
  title: 'contact.trans-title',
  description: 'contact.desc',
});

const contacts = ref([
  {
    title: "contact.phone",
    icon: "material-symbols:phone-in-talk",
    action: ()=> 'tel:+237699167012',
    value: "699167012",
  },
  {
    title: "whatsapp",
    action: ()=> 'https://wa.me/237699167012',
    icon: "ri:whatsapp-fill",
    value: "699167012"
  },
  {
    title: "Email",
    action: ()=> 'mailto:hermann18pavel@gmailcom',
    icon: "bi:envelope-at-fill",
    value: "hermann18pavel@gmail.com"
  },
])
const socials = ref([
{
    title:'LinkedIn',
    link:'https://www.linkedin.com/in/hermann-fokou',
    icon: 'bi:linkedin'
  },
  {
    title:'GitHub',
    link:'https://github.com/hermanno18',
    icon: 'bi:github'
  },
  {
    title:'Figma',
    link:'https://www.figma.com/@hermannfokou',
    icon: 'fa6-brands:figma'
  },
  {
    title:'Telegram',
    link:'https://t.me/hermanno18',
    icon: 'bx:bxl-telegram'
  },
])
</script>

<template>
  <div class="w-full h-full py-10 flex items-center justify-center">
    <div class="w-[70%]">
      <div class="items-center flex justify-center">
        <div class="avatar m-auto">
          <div class="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="/img/profil.jpg" />
          </div>
        </div>
      </div>
      <div class="divider"><span class="text-base text-primary capitalize">{{ $t('contact.title', {name: t('me')}) }} </span></div>
      <div class="w-full flex flex-wrap gap-y-8 items-center justify-around mt-20 ">
        <a :href="contact.action()" target="_blank" v-for="contact in contacts" class="group border border-primry overflow-hidden flex gap-3 hover:gap-0 p-2 rounded-full items-center cursor-pointer transition-all duration-500 ease-in-out w-[250px] ">
          <div class="bg-white  group-hover:flex-1 transition-all duration-500 ease-in-out flex items-center justify-center p-2 rounded-full ">
            <Icon :name="contact.icon" class="text-2xl group-hover:rotate-[360deg] duration-300 text-base-100 group-hover:text-primary" />
          </div>
          <div class=" w-0 group-hover:opacity-0 transition-all duration-500 ease-in-out flex flex-col">
            <span class="text-lg ">{{ $t(contact.title) }}</span>
            <span class="text-xs">{{ contact.value }}</span>
          </div>
        </a>
      </div>
      <div class="mt-20" >
        <p class="text-base text-center ">{{ $t('contact.follow-me') }}</p>
        <div class="text-center mt-5 gap-4 flex justify-center flex-wrap items-center  ">
          <a :href="social.link" target="_blank" :title="social.title" v-for="social in socials" class="group bg-white bg-opacity-80 w-12 aspect-square rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-100  transition-all duration-500 ease-in-out">
            <Icon :name="social.icon" class="text-2xl group-hover:rotate-[360deg] group-hover:text-3xl text-base-100 group-hover:text-primary transition-all duration-500 ease-in-out" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>