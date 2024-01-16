<template>
  <NuxtLoadingIndicator color="repeating-linear-gradient(to right, #1FB2A5 0%, #00e1ff 40%, #FF2B51 100%)" />
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