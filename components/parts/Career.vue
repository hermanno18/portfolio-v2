<script setup>
const localePath = useLocalePath()

  const props = defineProps({
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
    <div class="mt-14 md:mt-28" :id="`career_${career.title}`">
      <div class="w-screen h-screen bg-base-100 right-0 fixed top-0  -z-50 ease-in-out transition-all duration-500"
        :class="activeProject ? ' opacity-10 ' : 'opacity-0 '"
      >
        <img v-if="activeProject" class="w-full h-full object-cover" :src="activeProject?.featured_image">
      </div>
      <div class="flex items-center gap-y-3 justify-between flex-wrap">
        <h2 class=" uppercase font-semibold"><span class="text-primary">#</span> {{ career.title}} </h2>
        <h2 class="flex-1 text-end text-xs lg:text-base italic flex justify-end">
          <div class=" w-max text-end ">
            {{ formatDate(career.start_date, $i18n.locale)}} <span class="mx-2 md:mx-5">-</span> {{ formatDate(career.end_date, $i18n.locale) || $t('time.today')}}
          </div>
        </h2>
      </div>
      <div class="divider my-4 divider-primary "></div>
      <div class="flex flex-col lg:flex-row gap-7">
        <div class="w-full lg:w-8/12 flex flex-col justify-between gap-6">
          <div class="">
            <h3 class="mb-2  capitalize text-lg text-secondary"> {{ career.occupation}} <span class="text-white mx-5">-</span> <span class="text-xs text-white italic">{{ career.location }}</span> </h3>
            <div class=" text-base" v-html="career.content"></div>
          </div>
          <div class="flex flex-wrap items-center gap-3 ">
            <h2 class=" uppercase font-semibold text-sm"><span class="text-secondary">T</span>ools :</h2>
            <div class="badge badge-outline text-xs capitalize"  v-for="tool in career.tools"> {{ tool.title }}</div>
          </div>
        </div>
        <div class="divider divider-red-500 hidden lg:flex divider-horizontal"></div>
        <div class="flex-1">
          <h2 class="mb-2 uppercase font-semibold text-sm"><span class="text-secondary">W</span>orks</h2>
          <div class="grid sm:grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2 gap-5">  
            <nuxt-link 
              v-for="(project, i) in career.projects" 
              :to="localePath({name:'projects-slug', params: {slug: project.slug} })"
              data-aos="fade-left"
              :data-aos-anchor="`#career_${career.title}`"
              data-aos-duration="900"                                   
              :data-aos-delay="500*i"  
              :title="project.title"
              class="border border-primary rounded p-0 text-base overflow-hidden group shadow-lg" 
              @mouseover="projectHovered(project)" 
              @mouseout="activeProject = null"
            >
              <div class="flex w-full overflow-hidden items-center gap-3 line-clamp-1">
                <div class="bg-primary  group-hover:flex-1 duration-300 transition-all p-1 text-center hover:bg-white">
                  <Icon name="tabler:eye" class="text-xl group-hover:rotate-[360deg] duration-300 text-white group-hover:text-primary" />
                </div> 
                <div class="group-hover:opacity-0 group-hover:hidden delay-200 duration-300 line-clamp-1 text-">{{ project.title }}</div> 
              </div> 
            </nuxt-link>
          </div>
        </div>
      </div>

      <div></div>
    </div>
</template>
