<script setup>

const isModalOpen = ref(false)
const toggleModal = (status = true) => {

}

if(process.client)document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape' && isModalOpen.value) {
    toggleModal(false)
  }
})

</script>

<template>
  <div class="h-full w-full mx-auto  p-9 lg:px-10 mt-9">
    <div v-if="isModalOpen" class="fixed flex p-16 h-screen w-screen bg-gray-900 bg-opacity-50 top-0 right-0 z-[9999999999]" @click="toggleModal(false)">
      <img class="w-full object-contain" src="https://placehold.co/2400x1000?text=Hello+World" alt="">
    </div>
    <div class="h-full w-full bg-gray-900 bg-opacity-50 relative">
      <div class="w-1/3 border-b-2 -left-3 -top-[1px] absolute z-50"></div>
      <div class="w-1/3 border-b-2 -right-3 -bottom-[1px] absolute z-50"></div>
      <div class="h-2/3 border-l-2 -bottom-3 -right-[1px] absolute z-50"></div>
      <div class="h-2/3 border-l-2 -top-3 -left-[1px] absolute z-50"></div>
      <div class="w-full h-full p-8 lg:p-16 flex flex-col justify-between transition-all duration-500 overflow-hidden relative">
        <div class="bg-primary opacity-10 top-[50%] -translate-y-[50%] absolute rotate-90 -right-20 h-96 aspect-square rounded-full shadow-md shadow-gray-400 z-40">
        </div>
        <div class="bg-secondary opacity-10 top-[70%] -translate-y-[50%] absolute rotate-90 right-[15%] h-48 aspect-square rounded-full shadow-md shadow-gray-400 z-50">
        </div>
        <div class="bg-secondary opacity-10 top-[30%] -translate-y-[50%] absolute rotate-90 right-[15%] h-32 aspect-square rounded-full shadow-md shadow-gray-400">
        </div>
        <div class="w-full relative flex flex-col flex-1">
          <div class="w-full lg:flex ">
            <h1 class="uppercase text-5xl flex-1 break-words "> <span class="text-primary">#</span> INSTAPAy</h1>
            <div class="mt-4 lg:mt-0 w-full lg:w-fit uppercase flex gap-9 text-xl">
              <span>source code</span>
              <span>WEBSITE</span>
            </div>
          </div>
          <div class="w-full lg:flex mt-9 flex-1 ">
            <div class="lg:w-1/2 flex flex-col gap-9">
              <p class="leading-9 opacity-60 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga architecto possimus, voluptatem maiores laboriosam debitis aut? Commodi dolorum omnis accusantium ab officia beatae atque odit possimus? Doloribus eum fugiat maiores.
              </p>
              <p class="flex flex-wrap gap-5">
                <template v-for="tag in 5">
                  <span class="text-xs"> <span class="text-primary">#</span>  tag 1</span>
                </template>
              </p>
            </div>
            <div class="lg:w-1/2 flex lg:justify-end items-center">
              <div class="relative aspect-video bg-gray-900 w-full mt-5 lg:mt-0 lg:w-2/3 h-fit z-[5000] shadow-lg">
                <div class="aspect-square w-12 bg-gray-800 rounded-full absolute top-[50%] -translate-y-[50%] -translate-x-[50%] shadow shadow-gray-300"></div>
                <div class="aspect-square w-12 bg-gray-800 rounded-full absolute top-[50%] -translate-y-[50%] right-0 translate-x-[50%] shadow shadow-gray-300"></div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="flex gap-5 opacity-60 text-base">
            <span>20/10/2023</span> 
            <span>ITS-ADVISORY</span> 
          </div>
          <div class="flex justify-between items-end">
            <div class="h-fit flex flex-wrap gap-3 text-sm items-center">
              <span v-for="i in 9" class="px-1 border rounded-full">Vue JS</span>
            </div>
            <h1 class="uppercase text-5xl hidden lg:block"> <span class="text-primary">#</span> INSTAPAy</h1>
          </div>
        </div>
      </div>  
    </div>
  </div>
</template>