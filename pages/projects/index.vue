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

  const projects = [
    {
      _id:1,
      thumbnail: 'https://www.svgrepo.com/show/355190/reactjs.svg',
      title: "Instapay",
      description: "",
      tags: [
        "ITS-Advisory",
        "Finances",
        "WEB-App",
      ],
      tools:[
        {
          title: 'vueJS'
        },
        {
          title: 'Vuetify'
        },
        {
          title: 'Bootstrap'
        },
        {
          title: 'Azure'
        },
        {
          title: 'Vercel'
        },
        {
          title: 'Git'
        },
        {
          title: 'Javascript'
        },
      ]

    },
    {
      _id:1,
      title: "Cash-Collector",
      description: "",
      tags: [
        "ITS-Advisory",
        "Finances",
        "Micro-finance",
        "WEB-App",
      ],
      tools:[
        {
          title: 'vueJS'
        },
        {
          title: 'Vuetify'
        },
        {
          title: 'Bootstrap'
        },
        {
          title: 'Azure'
        },
        {
          title: 'Vercel'
        },
        {
          title: 'Git'
        },
        {
          title: 'Javascript'
        },
      ]

    },
    {
      title: "My Portfolio",
      description: "",
      tags: [
        "Personal",
      ],
      tools:[
        {
          title: 'NuxtJS'
        },
        {
          title: 'Tailwind-CSS'
        },
        {
          title: 'Figma'
        },
        {
          title: 'SCSS'
        },
        {
          title: 'Trello'
        },
        {
          title: 'Vercel'
        },
        {
          title: 'Git'
        },
        {
          title: 'Javascript'
        },
      ]
    },
    {
      title: "My Portfolio - Version 1",
      thumbnail: 'https://www.svgrepo.com/show/355190/reactjs.svg',
      description: "pour exercer mes compétences, j'ai mis en commun les bases que j'avais ",
      tags: [
        "Personal",
        "Open Source",
      ],
      tools:[
        {
          title: 'Nuxt JS 2'
        },
        {
          title: 'Tailwind-CSS'
        },
        {
          title: 'SCSS'
        },
        {
          title: 'Vercel'
        },
        {
          title: 'Git'
        },
        {
          title: 'Javascript'
        },
      ]
    },

  ]
</script>
<template>
<div class="wh-full container mx-auto px-5 lg:px-10 mt-36">
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
  </div>
</template>
<style>

</style>