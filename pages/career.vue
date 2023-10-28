<script setup>
  import { useI18n } from 'vue-i18n';
  import Career from '@/components/parts/Career.vue'


  const {t} = useI18n()

  useHead({
    title:  t('career.title', {name: t('name')}),
    meta: [
      { name: 'description', content: 'My amazing site.' }
    ],
  })
  
  definePageMeta({
    title: 'career.trans-title',
    description: 'career.desc',
  });

  const { data, pending, error, refresh } = await useAsyncData(
    'companies-list',
    () => $fetch(`/api/companies`)
  )

  const careers = data.value
  if(careers) careers.sort((a,b)=> b.start_date - a.start_date)

</script>
<template>
  <div class="wh-full container mx-auto px-5 lg:px-10 ">
    <template v-if="!error">
      <template
        v-for="(career, i) in careers"
        class=""
      >
        <Career
          data-aos="fade-up" data-aos-delay="300"
          :career="career" 
        />
        <div class="mb-40"></div>
      </template>
      <div v-if="!careers || careers.legnth<1" class="mt-12">
        Aucune entrée pour l'instant
      </div>
    </template>
    <div v-else class="mt-24 ">
     <GenericError></GenericError>
    </div>
  </div>
</template>