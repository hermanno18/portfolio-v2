<script setup>
  import { useI18n } from 'vue-i18n';
  import Project from '@/components/parts/Project.vue'


  const {t} = useI18n()

  useHead({
    title:  t('works.title', {name: t('name')}),
    meta: [
      { name: 'description', content: 'My amazing site.' }
    ],
  })
  definePageMeta({
    title: 'works.trans-title',
    description: 'works.desc',
  });

  const { data, pending, error, refresh } = await useAsyncData(
    'projects-list',
    () => $fetch('/api/projects')
  )
  const projects = data.value
</script>
<template>
  <div class="wh-full container mx-auto px-5 lg:px-10 mt-36">
    <template v-if="!error" >
      <template
        v-for="(project, i) in projects"
        class=""
      >
        <Project
          data-aos="fade-up" data-aos-delay="300"
          :project="project" 
        />
        <div class="mb-40"></div>
      </template>
    </template>
    <div v-else>
      <GenericError />
    </div>
  </div>
</template>
<style>

</style>