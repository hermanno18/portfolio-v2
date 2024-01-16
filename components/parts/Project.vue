<script setup>
  const props = defineProps({
    project: {
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
  <div>
    <div class="w-screen h-screen bg-base-100 !right-0 !fixed !top-0  -z-50 ease-in-out transition-all duration-500"
      :class="activeProject ? ' opacity-5 ' : 'opacity-0 '"
    >
      <img v-if="activeProject" class="w-full h-full object-cover blur-md" :src="activeProject?.featured_image">
    </div>
    <nuxt-link 
      @mouseout="activeProject = null"
      @mouseover="projectHovered(project)" 
      class=" flex flex-row bg-neutral relative p-3 bg-opacity-30 border border-primary border-opacity-20 group cursor-pointer" 
      :to="{name:'projects-slug', params: {slug: project.slug} }"
    >
      <div class="w-1/3 border-b-2 -left-3 -top-[1px] absolute border-primary"></div>
      <div class="w-1/3 border-b-2 -right-3 -bottom-[1px] absolute border-primary"></div>
      <div class="h-2/3 border-l-2 -bottom-3 -right-[1px] absolute border-primary"></div>
      <div class="h-2/3 border-l-2 -top-3 -left-[1px] absolute border-primary"></div>
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
          <p class="text-base leading-8 line-clamp-3 md:w-1/2" v-html="project.content"></p>
        </div>
        <div class="mt-4 text-xs flex flex-col md:flex-row items-center gap-4">
          <div class="flex-1">
            <div class="w-48 opacity-0 group-hover:opacity-100">
              <nuxt-link 
                :to="{name:'projects-slug', params: {slug: project.slug} }"
                title=" Voir les détails"
                class="border block  rounded-full p-0 text-base overflow-hidden group shadow-lg " 
              >
                <div class="flex w-full overflow-hidden items-center gap-3">
                  <div class="bg-white group-hover:flex-1 duration-300 transition-all p-1 text-center">
                    <Icon name="tabler:eye" class="text-xl group-hover:rotate-[360deg] duration-300 text-base-100 group-hover:text-primary" />
                  </div> 
                  <div class="group-hover:opacity-0 group-hover:hidden delay-200 duration-300"> {{ $t('works.see-details') }} </div> 
                </div> 
              </nuxt-link>
            </div>
          </div>
          <div class="w-full hidden ">
             {{ $t('works.tags') }}
          </div>
          <div class="flex justify-center flex-wrap gap-2">
            <span class="" v-for="tag in project.tags">
              <span class="text-primary">#</span>
              <span class="capitalize">{{ tag }}</span>
            </span>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>