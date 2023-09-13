<template>
  <div class="w-full h-full flex items-center justify-center text-center">
    <div class="md:max-w-[70%]">
      <div class="avatar">
        <div class="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src="/img/profil.jpg" />
        </div>
      </div>
      <div class="divider mb-9"><span class="text-base text-primary capitalize">{{ $t('about.title') }}</span></div>
      <div class="text-lg text-start grid xl:grid-cols-2 gap-9">
        <div class="">
          <h4 class="text-2xl text-primary mb-2">{{ $t('name') }}</h4>
          <p> {{ $t('about.desc-pro.text') }} </p>
          <p class="mt-5 text-sm ">
            <nuxt-link :to="{name:'career'}" class=" hover:text-primary italic underline underline-offset-4 hover:underline-offset-2 transition-all duration-150 group">
              <span> {{ $t('about.desc-pro.link') }} </span>
              <span class="ml-3"><Icon name="material-symbols:arrow-forward" class="text-sm group-hover:rotate-[360deg] duration-300 text-primary group-hover:text-white  group-hover:bg-primary rounded-full" /></span>
            </nuxt-link>
          </p>
        </div>

        <div class="">
          <h4 class="text-2xl text-primary mb-2">{{ $t('pseudo') }}</h4>
          <p> {{ $t('about.desc-geek.text') }} </p>
          <p class="mt-5 text-sm ">
            <a href="" class=" hover:text-primary italic underline underline-offset-4 hover:underline-offset-2 transition-all duration-150 group">
              <span> {{ $t('about.desc-geek.link') }} </span>
              <span class="ml-3"><Icon name="material-symbols:arrow-forward" class="text-sm group-hover:rotate-[360deg] duration-300 text-primary group-hover:text-white  group-hover:bg-primary rounded-full" /></span></a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>