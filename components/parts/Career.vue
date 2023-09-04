<script setup>
  const props = defineProps({
    company: {
      require: true,
      type: Object,
      default: ()=> null
    },
    career: {
      require: true,
      type: Object,
      default: ()=> null
    },
  })
  const activeProject = ref()
  const projectHovered = (project) => {
    activeProject.value = project
  }
</script>

<template>
    <div class="mt-14 md:mt-28">
      <div class="w-screen h-screen bg-gray-800 right-0 fixed top-0  -z-50 ease-in-out transition-all duration-500"
        :class="activeProject ? ' opacity-10 ' : 'opacity-0 '"
      >
        <img v-if="activeProject" class="w-full h-full object-cover" :src="activeProject?.thumbnail">
      </div>
      <div class="flex items-center justify-between flex-wrap">
        <h2 class=" uppercase font-semibold"><span class="text-primary">#</span> {{ company.title}}</h2>
        <h2 class=" text-base italic">{{ formatDate(career.start_date)}} <span class="mx-5">-</span> {{ formatDate(career.end_date) || 'Today'}}</h2>
      </div>
      <div class="divider my-4"></div>
      <div class="flex  gap-7">
        <div class="w-8/12 flex flex-col justify-between gap-6">
          <div>
            <h3 class=" capitalize text-lg text-secondary"> {{ career.occupation}} <span class="text-white mx-5">-</span> <span class="text-xs text-white italic">{{ company.location }}</span> </h3>
            <p class=" text-base" v-html="career.description"></p>
          </div>
          <div class="flex items-center gap-3 ">
            <h2 class=" uppercase font-semibold text-sm"><span class="text-secondary">T</span>ools :</h2>
            <div class="badge  badge-outline text-xs "  v-for="tool in career.tools"> {{ tool.title }}</div>
          </div>
        </div>
        <div class="divider divider-horizontal"></div>
        <div class="flex-1">
        <h2 class="mb-1 uppercase font-semibold text-sm"><span class="text-primary">W</span>orks</h2>
          <div class="grid grid-cols-2 gap-5">  
            <a 
              href="" v-for="project in career.projects" 
              :title="project.title"
              class="border rounded p-0 text-base overflow-hidden group shadow-lg" 
              @mouseover="projectHovered(project)" 
              @mouseout="activeProject = null"
            >
              <div class="flex w-full overflow-hidden items-center gap-3">
                <div class="bg-white group-hover:flex-1 duration-300 transition-all p-1 text-center">
                  <Icon name="fa6-brands:figma" class="text-xl group-hover:rotate-[360deg] duration-300 text-gray-800 group-hover:text-primary" />
                </div> 
                <div class="group-hover:opacity-0 group-hover:hidden delay-200 duration-300">{{ project.title }}</div> 
              </div> 
            </a>
          </div>
        </div>
      </div>

      <div></div>
    </div>
</template>
