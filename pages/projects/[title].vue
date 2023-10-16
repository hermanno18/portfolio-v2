<script setup>

const isModalOpen = ref(false)
const toggleModal = (status = true) => {

}

if(process.client)document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape' && isModalOpen.value) {
    toggleModal(false)
  }
})

const modalRef = ref()
const  closeModal = () => {
  modalRef.value.close();
}
const openModal = () => {
  modalRef.value.showModal();
}
</script>

<template>

  <div class="h-full w-full mx-auto pt-9 md:p-9 lg:px-10 mt-9 ">
    <!-- The button to open modal -->

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my_modal_7" class="modal-toggle" />
<div class="modal bg-gray-800 bg-opacity-70  backdrop-blur-sm">
  <div class="modal-box bg-gray-900 max-w-7xl aspect-video p-0 rounded relative ">
      <img src="https://placehold.co/1080x800?text=Hello+World" class="w-full h-full object-center object-fill  " alt="">
  </div>
  <label class="modal-backdrop h-full w-full  absolute -z-10" for="my_modal_7"></label>
</div>
    <div v-if="isModalOpen" class="fixed flex p-16 h-screen w-screen bg-gray-900 bg-opacity-50 top-0 right-0 z-[9999999999]" @click="toggleModal(false)">
      <img class="w-full object-contain" src="https://placehold.co/2400x1000?text=Hello+World" alt="">
    </div>
    <div class="h-full w-full bg-gray-900 bg-opacity-50 relative">
      <div class="w-1/3 border-b-2 -left-3 -top-[1px] absolute z-50 border-primary"></div>
      <div class="w-1/3 border-b-2 -right-3 -bottom-[1px] absolute z-50 border-primary"></div>
      <div class="h-2/3 border-l-2 -bottom-3 -right-[1px] absolute z-50 border-primary"></div>
      <div class="h-2/3 border-l-2 -top-3 -left-[1px] absolute z-50 border-primary"></div>
      <div class="w-full h-full p-8 lg:p-16 flex flex-col justify-between transition-all duration-500 overflow-hidden relative">
        <div class="bg-primary opacity-10 top-[50%] -translate-y-[50%] absolute rotate-90 -right-20 h-96 aspect-square rounded-full shadow-md shadow-gray-400 z-0">
        </div>
        <div class="bg-secondary opacity-10 top-[70%] -translate-y-[50%] absolute rotate-90 right-[15%] h-48 aspect-square rounded-full shadow-md shadow-gray-400 z-0">
        </div>
        <div class="bg-secondary opacity-10 top-[30%] -translate-y-[50%] absolute rotate-90 right-[15%] h-32 aspect-square rounded-full shadow-md shadow-gray-400">
        </div>
        <div class="w-full relative flex flex-col flex-1">
          <div class="w-full lg:flex ">
            <h1 class="uppercase text-3xl md:text-4xl lg:text-5xl flex-1 break-words "> <span class="text-primary">#</span> INSTAPAy modern eversion ever</h1>
            <div class="mt-9 lg:mt-0 w-full lg:w-fit uppercase flex gap-9 text-xl">
              <span class="hover:text-primary cursor-pointer">source code</span>
              <span class="hover:text-primary cursor-pointer">WEBSITE</span>
            </div>
          </div>
          <div class="w-full lg:flex mt-9 flex-1 ">
            <div class="lg:w-1/2 flex flex-col gap-9 mb-3">
              <p class="leading-9 opacity-60 text-xl text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga architecto possimus, voluptatem maiores laboriosam debitis aut? Commodi dolorum omnis accusantium ab officia beatae atque odit possimus? Doloribus eum fugiat maiores.
              </p>
              <p class="flex flex-wrap gap-5">
                <template v-for="tag in 5">
                  <span class="text-xs"> <span class="text-primary">#</span>  tag 1</span>
                </template>
              </p>
            </div>
            <div class="lg:w-1/2 flex lg:justify-end items-center bg-red-500 mybox border-2 group border-primary cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out opacity-60 hover:opacity-100 w-full aspect-video">
              <div class="bg-gray-900  h-full w-full ">
                <label for="my_modal_7" class="btn h-full w-full">
                  <img src="https://placehold.co/1080x800?text=Hello+World" class="w-full h-full object-center object-fill opacity-30 group-hover:opacity-100 transtion-all duration-300 " alt="">
                </label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="flex gap-5 opacity-60 text-base mb-6">
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


<style>
  @media screen and (min-width: 1024px) {
    .mybox{
      clip-path: polygon(20% 0, 100% 0, 100% 100%, 0% 100%);
    }
}
</style>