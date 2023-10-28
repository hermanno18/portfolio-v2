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

const { data, pending, error, refresh } = await useAsyncData(
  'contacts-list',
  () => $fetch(`/api/contacts/`)
)

const contacts = data.value?.filter(e=>!isContactSocial(e)) || []
const socials = data.value?.filter(e=>isContactSocial(e)) || []
</script>

<template>
  <div class="w-full h-full py-10 flex items-center justify-center">
    <div v-if="!error" class="w-[70%]">
      <div class="items-center flex justify-center">
        <div class="avatar m-auto">
          <div class="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="/img/profil.jpg" />
          </div>
        </div>
      </div>
      <div class="divider"><span class="text-base text-primary capitalize">{{ $t('contact.title', {name: t('me')}) }} </span></div>
      <div class="w-full flex flex-wrap gap-y-8 items-center justify-around mt-20 ">
        <a :href="contact.href" target="_blank" v-for="contact in contacts" class="group border border-primry overflow-hidden flex gap-3 hover:gap-0 p-2 rounded-full items-center cursor-pointer transition-all duration-500 ease-in-out w-[250px] ">
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
    <div v-else>
      <GenericError></GenericError>
    </div>
  </div>
</template>