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


const { data, pending, error, refresh } = await useAsyncData(
  'tools-list',
  () => $fetch(`/api/tools`)
)

const regrouperParAttribut = (tableau) => {
    const groupes = {};
    tableau.forEach(objet => {
        const groupTitleSlug = objet.group_title_slug || 'more';
        if (!groupes[groupTitleSlug]) {
            groupes[groupTitleSlug] = {
                title: groupTitleSlug,
                skills: []
            };
        }
        groupes[groupTitleSlug].skills.push(objet);
    });
    return Object.values(groupes);
}

let  domains = []
if(data.value) domains = regrouperParAttribut(data.value)


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
    const script = document.createElement('script');
    script.src = 'https://widgets.fiverr.com/api/v1/seller/hermanno18?widget_id=86e21192-774b-4dfd-8459-d23d508b84a9';
    script.setAttribute('data-config', '{"category_name":"\nProgramming \u0026 Tech\n\n"}');
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  })

</script>
<template>

  <div class=" container mx-auto pb-20 px-5 lg:px-10">
    <div
      v-if="!error"
      v-for="domain in domains.reverse()"
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
          v-for="(skill, i) in domain.skills.reverse()"
          class="cursor-pointer skill group "  
        >
          <div class="avatar block transition-all mx-auto">
            <div class="overflow-hidden w-16 md:w-24 mask mask-squircle p-1  group-hover:mask-hexagon-2 group-hover:rotate-180  transition-all duration-[900ms] ease-in-out" :style="`background-color: ${skill.color}`">
              <div class="mask mask-squircle bg-white  bg-opacity-70 p-3  group-hover:p-4  group-hover:mask-hexagon-2 transition-all duration-[900ms] ease-in-out ">
                <img :src="skill.img_link" class=" group-hover:-rotate-180 transition-all duration-[900ms] ease-in-out "/>
              </div>
            </div>
          </div>
          <span class="capitalize text-sm">{{ skill.title }}</span>
        </div>
      </div>
    </div>
    <div v-else class="mt-24">
      <GenericError />
    </div>
  </div> 
</template>