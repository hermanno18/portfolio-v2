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
</script>

<template>
    <div class="mt-14 md:mt-28">
      <div class="flex items-center justify-between flex-wrap">
        <h2 class=" uppercase font-semibold"><span class="text-primary">#</span> {{ company.title}}</h2>
        <h2 class=" text-base italic">{{ formatDate(career.start_date)}} <span class="mx-5">-</span> {{ formatDate(career.end_date) || 'Today'}}</h2>
      </div>
      <div class="divider my-4"></div>
      <div class="flex  gap-7">
        <div class="w-8/12">
          <div>
            <h3 class=" capitalize text-lg text-secondary"> {{ career.occupation}} <span class="text-white mx-5">-</span> <span class="text-xs text-white italic">{{ company.location }}</span> </h3>
            <p class=" text-base" v-html="career.description"></p>
          </div>
          <div class="flex items-center gap-3 mt-6">
            <h2 class=" uppercase font-semibold text-sm"><span class="text-secondary">T</span>ools :</h2>
            <div class="badge  badge-outline text-xs"  v-for="tool in career.tools"> {{ tool.title }}</div>
          </div>
        </div>
        <div class="divider divider-horizontal"></div>
        <div class="flex-1">
        <h2 class="mb-1 uppercase font-semibold text-sm"><span class="text-primary">W</span>orks</h2>
          <div class="grid grid-cols-2 gap-5">  
            <a href="" v-for="project in career.projects" class="border p-1 px-2 text-base">
               {{ project.title }}
            </a>
          </div>
        </div>
      </div>

      <div></div>
    </div>
</template>
