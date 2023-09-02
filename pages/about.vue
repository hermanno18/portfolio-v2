<template>
  <div class="w-full h-full flex items-center justify-center text-center">
    <div class="md:max-w-[70%]">
      <div class="avatar">
        <div class="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src="/img/profil.jpg" />
        </div>
      </div>
      <div class="divider mb-9"><span class="text-base text-primary">a propos de moi</span></div>
      <div class="text-lg text-start grid md:grid-cols-2 gap-9">
        <div class="">
          <h4 class="text-2xl text-primary mb-2">Un titre sur moi</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur voluptatem neque provident consectetur corporis reiciendis, et expedita! Modi fugit aliquam optio omnis eligendi. Eos labore ab officiis qui voluptatem voluptatum.
          </p>
        </div>

        <div class="">
          <h4 class="text-2xl text-primary mb-2">Un titre sur moi</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur voluptatem neque provident consectetur corporis reiciendis, et expedita! Modi fugit aliquam optio omnis eligendi. Eos labore ab officiis qui voluptatem voluptatum.
          </p>
        </div>
      </div>
      <p class="mt-9 text-lg hidden md:block">
        <div class="text-lg">
          <nuxt-link to="/" >Home</nuxt-link>
        </div>
      </p>
    </div>
  </div>
</template>