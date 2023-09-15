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

  const projects = []
</script>
<template>
  <div class="h-full container mx-auto  px-5 lg:px-10 mt-6">
    <div class="pt-16 md:pt-32 sticky top-0 bg-transparent backdrop-blur-sm pb-28">
      <div class="w-full flex flex-col transition-all duration-500 gap-16 md:gap-32" >
        <div 
          class="w-full flex flex-row bg-gray-900 relative p-3 bg-opacity-20 border border-white border-opacity-10 group" 
          v-for="i in 6"
        >
          <div class="w-1/3 border-b-2 -left-3 -top-[1px] absolute"></div>
          <div class="w-1/3 border-b-2 -right-3 -bottom-[1px] absolute"></div>
          <div class="h-2/3 border-l-2 -bottom-3 -right-[1px] absolute"></div>
          <div class="h-2/3 border-l-2 -top-3 -left-[1px] absolute"></div>
          <div class="w-full p-2 flex flex-col transition-all duration-500">
            <div class="flex flex-col md:flex-row gap-3 w-full items-center">
              <div class="flex-1">
                <h2 class="uppercase "><span class="text-primary">#</span> <span class="text-2xl">Instapay</span></h2>
              </div>
              <div class=" flex justify-end gap-3">
                <div class="badge  badge-outline text-xs "> VueJS</div>
                <div class="badge  badge-outline text-xs "> React</div>
                <div class="badge  badge-outline text-xs "> Figma</div>
              </div>
            </div>
            <div class="h-0 overflow-hidden mt-4 group-hover:flex-1 transition-all duration-500">
              <p class="text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, blanditiis veniam. Pariatur hic accusantium itaque, nisi quis voluptatum suscipit laudantium blanditiis totam nemo tempora, consequatur placeat, est labore eum debitis!
              </p>
            </div>
            <div class="mt-4 text-xs flex flex-col items-center gap-4">
              <div class="flex-1">
                <div class="w-48 opacity-0 group-hover:opacity-100">
                  <a 
                    href="/"
                    title=" Voir les détails"
                    class="border block  rounded-full p-0 text-base overflow-hidden group shadow-lg " 
                  >
                    <div class="flex w-full overflow-hidden items-center gap-3">
                      <div class="bg-white group-hover:flex-1 duration-300 transition-all p-1 text-center">
                        <Icon name="tabler:eye" class="text-xl group-hover:rotate-[360deg] duration-300 text-gray-800 group-hover:text-primary" />
                      </div> 
                      <div class="group-hover:opacity-0 group-hover:hidden delay-200 duration-300"> Voir les détails </div> 
                    </div> 
                  </a>
                </div>
              </div>
              <div class="w-full hidden ">
                Made for:
              </div>
              <div class="flex gap-2">
                <span class="">
                  <span class="text-primary">#</span>
                  <span>its-advisory</span>
                </span>
                <span class="">
                  <span class="text-primary">#</span>
                  <span>its-advisory</span>
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