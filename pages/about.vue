<template>
  <div class="w-full h-full flex items-center justify-center text-center">
    <div class="md:max-w-[70%]">
      <div class="avatar">
        <div class="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src="/img/profil.jpg" />
        </div>
      </div>
      <div class="divider mb-9"><span class="text-base text-primary">About Me</span></div>
      <div class="text-lg text-start grid md:grid-cols-2 gap-9">
        <div class="">
          <h4 class="text-2xl text-primary mb-2">Hermann FOKOU</h4>
          <p>
            Amoureux de l’informatique,  l'ingénieur de travaux en génie Logiciel que je suis s'est dévoué à l’apprentissage et  à la retransmission de ce qu'il apprend. Notamment dans le développement WEB, la technologie, mais aussi les sciences en général. 
          </p>
          <p class="mt-5 text-sm ">
            <nuxt-link :to="{name:'career'}" class=" hover:text-primary italic underline underline-offset-4 hover:underline-offset-2 transition-all duration-150 group">
              <span>Découvrez mon parcours profféssionel</span>
              <span class="ml-3"><Icon name="material-symbols:arrow-forward" class="text-sm group-hover:rotate-[360deg] duration-300 text-primary group-hover:text-white  group-hover:bg-primary rounded-full" /></span>
            </nuxt-link>
          </p>
        </div>

        <div class="">
          <h4 class="text-2xl text-primary mb-2">Hermanno_18</h4>
          <p>
            La caricature parfaite du Geek qui  passe 25h par jour sur sa machine, mes passions pour le code finissent souvent par m'emporter, et mon imagination plus que débordante me fait me lancer dans des projets tous plus farlelus les uns que les autres. 
          </p>
          <p class="mt-5 text-sm ">
            <a href="" class=" hover:text-primary italic underline underline-offset-4 hover:underline-offset-2 transition-all duration-150 group">
              <span>Découvrez mes projets communautaires</span>
              <span class="ml-3"><Icon name="material-symbols:arrow-forward" class="text-sm group-hover:rotate-[360deg] duration-300 text-primary group-hover:text-white  group-hover:bg-primary rounded-full" /></span></a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>