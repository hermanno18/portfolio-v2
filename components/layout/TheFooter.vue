<template>
  <div class="flex justify-between absolute bottom-0 w-full">
    <div class="text-lg" >
      <Transition name="page">
        <div class="mockup-code">
          <pre data-prefix="$"><code><code class="text-yellow-500">ls</code> <code class="text-info">./some-of-my-works-scope/</code> </code></pre>
          <pre data-prefix=">"><code>Creative Dev </code></pre>
          <pre data-prefix=">"><code>FrontEnd Dev </code></pre>
          <pre data-prefix=">"><code>Figma Design </code></pre>
        </div>
      </Transition>
      <!-- <div>
        <p>FrontEnd Developper</p>
        <p>Creative Developper</p>
        <p>Junior Designer</p>
      </div> -->
      <div class="text-xs">And... heu... yeah, as you see <span class="text-primary">i'm a bite crasy</span> 😅</div>
    </div>
    <div class="flex items-end gap-4">
      <Icon name="uil:linkedin" class="text-3xl hover:text-primary duration-300" />
      <Icon name="uil:github" class="text-3xl hover:text-primary duration-300" />
      <Icon name="ph:figma-logo" class="text-3xl hover:text-primary duration-300" />
      <Icon name="uil:youtube" class="text-3xl hover:text-primary duration-300" />
      
    </div>
  </div>
</template>