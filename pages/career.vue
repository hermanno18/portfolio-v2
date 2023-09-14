<script setup>
  import { useI18n } from 'vue-i18n';
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


import Career from '@/components/parts/Career.vue'
  const domains = [
    {
      title: 'WEB DEVeloppement',
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
      title: 'Mobile apps DEVeloppement',
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
      title: 'Devops',
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
      title: 'Design',
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
      title: 'Others',
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
  const careers = [
    {
      company_id: 0,
      start_date: new Date('2020-01'),
      end_date: null,
      occupation: 'FullStack Developper',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, quas mollitia vel, ipsa numquam perspiciatis ipsam quod enim dolore fugiat sapiente officiis velit inventore quasi reprehenderit quisquam? Voluptates, maiores deleniti', 
      location:'remote',
      tools: [
        {
          title: 'vueJS'
        },
        {
          title: 'PHP'
        },
        {
          title: 'CSS'
        },
      ],
      projects: [
        {
          title: 'PayCat'
        },
        {
          title: 'Ticket-Vivi'
        },
        {
          title: 'Nosilab'
        },
      ],
    },
    {
      company_id: 1,
      start_date: new Date('2022-01'),
      end_date: new Date('2022-07'),
      occupation: 'FullStack Developper',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, quas mollitia vel, ipsa numquam perspiciatis ipsam quod enim dolore fugiat sapiente officiis velit inventore quasi reprehenderit quisquam? Voluptates, maiores deleniti', 
      location:'remote',
      tools: [
        {
          title: 'vueJS'
        },
        {
          title: 'PHP'
        },
        {
          title: 'CSS'
        },
      ],
      projects: [
        {
          title: 'PayCat'
        },
        {
          title: 'Ticket-Vivi'
        },
        {
          title: 'Nosilab'
        },
      ],
    },
    {
      company_id: 2,
      start_date: new Date('2022-07'),
      end_date: null,
      occupation: 'FullStack Developper',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, quas mollitia vel, ipsa numquam perspiciatis ipsam quod enim dolore fugiat sapiente officiis velit inventore quasi reprehenderit quisquam? Voluptates, maiores deleniti', 
      location:'remote',
      tools: [
        {
          title: 'vueJS'
        },
        {
          title: 'Javascript'
        },
        {
          title: 'CSS'
        },
        {
          title: 'Sass'
        },
        {
          title: 'Wordpress'
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
          title: 'FireBase'
        },
      ],
      projects: [
        {
          title: 'Instapay',
          thumbnail: 'https://www.svgrepo.com/show/355190/reactjs.svg'
        },
        {
          title: 'Cash-Collector',
          thumbnail: 'https://www.svgrepo.com/show/373595/firebase.svg'
        },
        {
          title: 'Spideli',
          thumbnail: 'https://www.svgrepo.com/show/452202/figma.svg'
        },
        {
          title: 'Quickei',
          thumbnail: 'https://www.svgrepo.com/show/452202/figma.svg'
        },
        
      ],
    },
  ]
  careers.sort((a,b)=> b.start_date - a.start_date)
  const companies = [
    {
      title: 'FreeLance',
      site: null,
      location: 'Remote',
      id:0
    },
    {
      title: 'Gohze',
      location: 'Yaounde, Cameroon',
      site: null,
      id:1
    },
    {
      title: 'I.T Solutions & Advisory',
      location: 'Yaounde, Cameroon',
      site: null,
      id:2
    },

  ]

  const findCompanyByID = id => {
    return companies.find(e=>e.id == id)
  }
</script>
<template>
  <div class="wh-full container mx-auto px-5 lg:px-10 ">
    <template
      v-for="(career, i) in careers"
      class="pt-20"
    >
      <Career
        class="mb-40" 
        :career="career" 
        :company="findCompanyByID(career.company_id)"
      />
    </template>
  </div>
</template>