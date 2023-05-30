<script setup>
  const domains = [
    {
      title: 'WEB DEVeloppement',
      skils: [
        {
          title: 'Nuxt JS',
          imgSRC: 'https://www.svgrepo.com/show/452130/vue.svg',
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
          imgSRC: 'https://www.svgrepo.com/show/452130/vue.svg',
          percentage: 100,
          color: '#41B883'
        },
        {
          title: 'JavaScript',
          imgSRC: 'https://www.svgrepo.com/show/452130/vue.svg',
          percentage: 100,
          color: '#41B883'
        },
        {
          title: 'TypeScript',
          imgSRC: 'https://www.svgrepo.com/show/452130/vue.svg',
          percentage: 100,
          color: '#41B883'
        },
        {
          title: 'TailwindCSS',
          imgSRC: 'https://www.svgrepo.com/show/452130/vue.svg',
          percentage: 100,
          color: '#41B883'
        },
        {
          title: 'SASS',
          imgSRC: 'https://www.svgrepo.com/show/452130/vue.svg',
          percentage: 100,
          color: '#41B883'
        },
        {
          title: 'Laravel',
          imgSRC: 'https://www.svgrepo.com/show/452130/vue.svg',
          percentage: 100,
          color: '#41B883'
        },
        {
          title: 'Django',
          imgSRC: 'https://www.svgrepo.com/show/452130/vue.svg',
          percentage: 100,
          color: '#41B883'
        },
        {
          title: 'Wordpress',
          imgSRC: 'https://www.svgrepo.com/show/452130/vue.svg',
          percentage: 100,
          color: '#41B883'
        },
        {
          title: 'Wordpress',
          imgSRC: 'https://www.svgrepo.com/show/452130/vue.svg',
          percentage: 100,
          color: '#41B883'
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
          title: 'IONIC',
          imgSRC: 'https://www.svgrepo.com/show/355190/reactjs.svg',
          percentage: 100,
          color: '#00D8FF'
        },
      ]
    },
    {
      title: 'Devops',
      skils: [
        {
          title: 'Vercel',
          imgSRC: 'https://www.svgrepo.com/show/355190/reactjs.svg',
          percentage: 100,
          color: '#00D8FF'
        },
        {
          title: 'Azure',
          imgSRC: 'https://www.svgrepo.com/show/355190/reactjs.svg',
          percentage: 100,
          color: '#00D8FF'
        },
      ]
    }
  ]
</script>
<template>
  <div class="w-full h-full container mx-auto">
    <div
      v-for="domain in domains"
      class="mt-20"
    >
      <h2 class=" uppercase text-lg"><span class="text-primary">#</span> {{ domain.title }}</h2>
      <div class="divider my-4"></div>
      <div class="text-center flex gap-12 flex-wrap">
        <div 
          v-for="skill in domain.skils"
          class="cursor-pointer skill group "  
        >
          <div class="avatar mx-auto block transition-all ">
            <div class="w-24 mask mask-squircle p-1  group-hover:mask-hexagon-2 group-hover:rotate-180  transition-all duration-500 ease-in-out" :style="`background-color: ${skill.color}`">
              <div class="mask mask-squircle bg-white  bg-opacity-70 p-3  group-hover:p-4  group-hover:mask-hexagon-2 transition-all duration-500 ease-in-out ">
                <img :src="skill.imgSRC" class=" group-hover:-rotate-180 transition-all duration-500 ease-in-out "/>
              </div>
            </div>
          </div>
          <span class="capitalize text-sm">{{ skill.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>