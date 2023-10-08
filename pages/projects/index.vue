<script setup>
  import { useI18n } from 'vue-i18n';
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
  <div class="h-full w-full mx-auto container px-5 lg:px-10 mt-6">
    <div class="pt-16 md:pt-32 sticky top-0 bg-transparent backdrop-blur-sm pb-28">
      <div class="flex flex-col gap-16 md:gap-32" >
        <div 
          class=" flex flex-row bg-gray-900 relative p-3 bg-opacity-20 border border-white border-opacity-10 group" 
          v-for="project in projects"
          data-aos="fade-up" data-aos-delay="300"
        >
          <div class="w-1/3 border-b-2 -left-3 -top-[1px] absolute"></div>
          <div class="w-1/3 border-b-2 -right-3 -bottom-[1px] absolute"></div>
          <div class="h-2/3 border-l-2 -bottom-3 -right-[1px] absolute"></div>
          <div class="h-2/3 border-l-2 -top-3 -left-[1px] absolute"></div>
          <div class="w-full p-2 flex flex-col transition-all duration-500">
            <div class="flex flex-col text-center md:text-left md:flex-row gap-3 w-full items-center">
              <div class="flex-1">
                <h2 class="uppercase "><span class="text-primary">#</span> <span class="text-2xl">{{ $t(project.title) }}</span></h2>
              </div>
              <div class="flex-wrap flex justify-center md:justify-end gap-3">
                <div class="badge  badge-outline text-xs "
                    data-aos="fade-left"
                    :data-aos-delay="200* (project.tools.length - i + 1)"  
                    data-aos-duration="900"
                    v-for="(tool, i) in project.tools">{{ tool.title }}</div>
              </div>
            </div>
            <div class="h-0 overflow-hidden mt-4 group-hover:flex-1 transition-all duration-500">
              <p class="text-base">{{ project.description }}</p>
            </div>
            <div class="mt-4 text-xs flex flex-col md:flex-row items-center gap-4">
              <div class="flex-1">
                <div class="w-48 opacity-0 group-hover:opacity-100">
                  <nuxt-link 
                    :to="{name:'projects-title', params: {title: project.title} }"
                    title=" Voir les détails"
                    class="border block  rounded-full p-0 text-base overflow-hidden group shadow-lg " 
                  >
                    <div class="flex w-full overflow-hidden items-center gap-3">
                      <div class="bg-white group-hover:flex-1 duration-300 transition-all p-1 text-center">
                        <Icon name="tabler:eye" class="text-xl group-hover:rotate-[360deg] duration-300 text-gray-800 group-hover:text-primary" />
                      </div> 
                      <div class="group-hover:opacity-0 group-hover:hidden delay-200 duration-300"> Voir les détails </div> 
                    </div> 
                  </nuxt-link>
                </div>
              </div>
              <div class="w-full hidden ">
                Made for:
              </div>
              <div class="flex justify-center flex-wrap gap-2">
                <span class="" v-for="tag in project.tags">
                  <span class="text-primary">#</span>
                  <span>{{ tag }}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style>
.project-item {

}
</style>