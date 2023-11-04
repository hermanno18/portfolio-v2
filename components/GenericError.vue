<script setup>
 const router = useRouter()
</script>
<template>
  <div class="border border-primary p-12 text-center bg-base-100 shadow-lg">
    <h2 class="font-bold text-4xl md:text-7xl text-primary mb-6">Aie Aie Aie...</h2>
    <h4 class="text-2xl md:text-3xl mb-12">Something went wrong here !</h4>
    <slot >
      <h5 class="text-base">
        Is it my fault or it's the networ ? i'm on it. <br>  By there, you can :
      </h5>
      <div class="flex gap-12 flex-wrap items-center justify-center mt-6">
        <a :to="'/'" class="uppercase text-sm py-1 px-6 border border-primary w-fit rounded-full">Go to homePage</a>
        <a @click="router.go()" class="uppercase cursor-pointer text-sm py-1 px-6 border border-primary w-fit rounded-full">Reload this page</a>
      </div>
    </slot>
  </div>
</template>