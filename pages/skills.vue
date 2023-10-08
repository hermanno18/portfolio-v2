<script setup>
import gsap from "gsap"
import { useI18n } from 'vue-i18n';

  const {t} = useI18n()

  useHead({
    title:  t('skills.title', {name: t('name')}),
    meta: [
      { name: 'description', content: 'My amazing site.' }
    ],
  })
  definePageMeta({
    title: 'skills.trans-title',
    description: 'skills.desc',
  });

  const domains = [
    {
      title: 'skills.titles.web-dev',
      skils: [
        {
          title: 'Nuxt JS',
          imgSRC: 'https://www.svgrepo.com/show/354131/nuxt-icon.svg',
          percentage: 100,
          color: '#41B883'
        },
        {
          title: 'VueJS',
          imgSRC: 'https://www.svgrepo.com/show/452130/vue.svg',
          percentage: 100,
          color: '#41B883'
        },
        {
          title: 'React JS',
          imgSRC: 'https://www.svgrepo.com/show/355190/reactjs.svg',
          percentage: 100,
          color: '#00D8FF'
        },
        {
          title: 'JavaScript',
          imgSRC: 'https://www.svgrepo.com/show/303206/javascript-logo.svg',
          percentage: 100,
          color: '#F7DF1E'
        },
        {
          title: 'TypeScript',
          imgSRC: 'https://www.svgrepo.com/show/354478/typescript-icon.svg',
          percentage: 100,
          color: '#007ACC'
        },
        {
          title: 'Tree JS',
          imgSRC: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Three.js_Icon.svg/512px-Three.js_Icon.svg.png?20211115112438',
          percentage: 100,
          color: '#000000'
        },
        {
          title: 'TailwindCSS',
          imgSRC: 'https://www.svgrepo.com/show/354431/tailwindcss-icon.svg',
          percentage: 100,
          color: '#16BDB8'
        },
        {
          title: 'SASS',
          imgSRC: 'https://www.svgrepo.com/show/374061/sass.svg',
          percentage: 100,
          color: '#CD6799'
        },
        {
          title: 'Laravel',
          imgSRC: 'https://www.svgrepo.com/show/353985/laravel.svg',
          percentage: 100,
          color: '#FF2D20'
        },
        {
          title: 'Django',
          imgSRC: 'https://www.svgrepo.com/show/353657/django-icon.svg',
          percentage: 100,
          color: '#092E20'
        },
        {
          title: 'Wordpress',
          imgSRC: 'https://www.svgrepo.com/show/452136/wordpress.svg',
          percentage: 100,
          color: '#028CB0'
        },
      ]
    },
    {
      title: 'skills.titles.mob-dev',
      skils: [
        {
          title: 'React Native',
          imgSRC: 'https://www.svgrepo.com/show/355190/reactjs.svg',
          percentage: 100,
          color: '#00D8FF'
        },
        {
          title: 'Ionic',
          imgSRC: 'https://www.svgrepo.com/show/353912/ionic-icon.svg',
          percentage: 100,
          color: '#3880FF'
        },
        {
          title: 'Quasar',
          imgSRC: 'https://www.svgrepo.com/show/374024/quasar.svg',
          percentage: 100,
          color: '#1976D2'
        },
      ]
    },
    {
      title: 'skills.titles.devops',
      skils: [
        {
          title: 'Vercel',
          imgSRC: 'https://www.svgrepo.com/show/354513/vercel-icon.svg',
          percentage: 100,
          color: '#000'
        },
        {
          title: 'Azure',
          imgSRC: 'https://www.svgrepo.com/show/448271/azure-devops.svg',
          percentage: 100,
          color: '#2588DF'
        },
      ]
    },
    {
      title: 'skills.titles.design',
      skils: [
        {
          title: 'Figma',
          imgSRC: 'https://www.svgrepo.com/show/452202/figma.svg',
          percentage: 100,
          color: '#A259FF'
        },
        {
          title: 'canva',
          imgSRC: 'https://www.svgrepo.com/show/305835/canva.svg',
          percentage: 100,
          color: '#000'
        },
        {
          title: 'photoshop',
          imgSRC: 'https://www.svgrepo.com/show/167746/photoshop.svg',
          percentage: 100,
          color: '#393687'
        },
      ]
    },
    {
      title: 'skills.titles.others',
      skils: [
        {
          title: 'Git',
          imgSRC: 'https://www.svgrepo.com/show/452210/git.svg',
          percentage: 100,
          color: '#EE513B'
        },
        {
          title: 'Firebase',
          imgSRC: 'https://www.svgrepo.com/show/373595/firebase.svg',
          percentage: 100,
          color: '#f4b81f'
        },
        {
          title: 'Trello',
          imgSRC: 'https://www.svgrepo.com/show/354463/trello.svg',
          percentage: 100,
          color: '#007CC3'
        },
        {
          title: 'Adobe Premiere Pro',
          imgSRC: 'https://www.svgrepo.com/show/452150/adobe-premiere.svg',
          percentage: 100,
          color: '#00005B'
        },
      ]
    }
  ]

  onMounted(()=>{
    // gsap.from('.skill', {
    //   duration:.4,
    //   stagger:0.1,
    //   y:-100,
    //   scrollTrigger: {
    //     trigger: ".skill",
    //     start: 'top 80%', // Déclenche l'animation lorsque l'élément est à 80% de la vue
    //   },
    // })
  })

</script>
<template>
  <div class=" container mx-auto pb-20 px-5 lg:px-10">
    <div
      v-for="domain in domains"
      :id="domain.title"
      data-aos="fade"
      data-aos-delay="200"  
      class="mt-14 md:mt-20 !overflow-hidden"
    >
      <h2
        class=" uppercase text-lg"
        data-aos-delay="300"  
        data-aos="fade-up"
        :data-aos-anchor="`#${domain.title}`"
      >
        <span class="text-primary">#</span> {{ $t(domain.title) }}
      </h2>
      <div class="divider my-4"></div>
      <div class="text-center flex gap-12 flex-wrap">
        <div 
          data-aos="zoom-in-right"
          :data-aos-delay="200* i "  
          data-aos-duration="1200"
          v-for="(skill, i) in domain.skils"
          class="cursor-pointer skill group "  
        >
          <div class="avatar block transition-all mx-auto">
            <div class="overflow-hidden w-16 md:w-24 mask mask-squircle p-1  group-hover:mask-hexagon-2 group-hover:rotate-180  transition-all duration-[900ms] ease-in-out" :style="`background-color: ${skill.color}`">
              <div class="mask mask-squircle bg-white  bg-opacity-70 p-3  group-hover:p-4  group-hover:mask-hexagon-2 transition-all duration-[900ms] ease-in-out ">
                <img :src="skill.imgSRC" class=" group-hover:-rotate-180 transition-all duration-[900ms] ease-in-out "/>
              </div>
            </div>
          </div>
          <span class="capitalize text-sm">{{ skill.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>