<script setup>
const contacts = ref([
  {
    title: "Appel",
    icon: "",
    value: "699167012",
  },
  {
    title: "whatsapp",
    icon: "",
    value: "699167012"
  },
  {
    title: "Email",
    icon: "",
    value: "hermann18pavel@gmail.com"
  },
])
</script>

<template>
  <div class="w-full h-full flex items-center justify-center">
    <div class="w-[70%]">
      <div class="items-center flex justify-center">
        <div class="avatar m-auto">
          <div class="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="/img/profil.jpg" />
          </div>
        </div>
      </div>
      <div class="divider"><span class="text-base text-primary">Restons en contact</span></div>
      <div class="w-full flex flex-wrap items-center justify-around mt-20 ">
        <div v-for="contact in contacts" class="group border border-primry overflow-hidden flex gap-3 hover:gap-0 p-2 rounded-full items-center cursor-pointer transition-all duration-500 ease-in-out w-[250px] ">
          <div class="bg-white  group-hover:flex-1 transition-all duration-500 ease-in-out flex items-center justify-center p-2 rounded-full ">
            <Icon name="uil:linkedin" class="text-2xl group-hover:rotate-[360deg] duration-300 text-gray-800" />
          </div>
          <div class=" w-0 group-hover:opacity-0 transition-all duration-500 ease-in-out flex flex-col">
            <span class="text-lg">{{ contact.title }}</span>
            <span class="text-xs">{{ contact.value }}</span>
          </div>
        </div>
      </div>
      <div class="mt-20" >
        <p class="text-base text-center ">Or folow me on my socials</p>
        <div class="text-center mt-5 gap-4 flex justify-center flex-wrap items-center overflow-y-hidden ">
          <div v-for="i in 6" class="group bg-white bg-opacity-80 w-12 aspect-square rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-100  transition-all duration-500 ease-in-out">
            <Icon name="uil:linkedin" class="text-2xl group-hover:rotate-[360deg] group-hover:text-3xl text-gray-800 group-hover:text-primary transition-all duration-500 ease-in-out" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>