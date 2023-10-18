<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<script setup>
onMounted(()=>{
  if (isWhiteTheme() || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    toggleTheme('myDark')
  } else {
    toggleTheme('winter')
  }
})
</script>