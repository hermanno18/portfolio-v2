<script setup>
  definePageMeta({
    layout: "none",
  });
  const router = useRouter()
  const hostname = computed(()=>window.location.hostname)
  const goOptions = {
    github : 'https://github.com/hermanno18',
    linkedin : 'https://www.linkedin.com/in/hermann-fokou?originalSubdomain=cm',
    youtube : 'https://youtube.com/@c-curieux',
    gui : '/',
  }
  const commands = [
    {
      prompt: "help",
      result: {
        type: '',
        content: `
        <div>
            <div class="mb-4">
              <p>Syntax: <code>&lt;command&gt;</code> <code>&lt;options&gt;</code></p>
              <p>Commands: <b>go</b>, <b>contact</b>, <b>clear</b>, <b>exit</b></p>
            </div>

            <div class="mb-4">
              <p>The <b>go</b> command - Visit a specific link about me.</p>
              <p class="indent-3">Usage: go <code>&lt;option&gt;</code></p>
              <p class="indent-3">Options: github, linkedin, youtube, gui</p>
            </div>

            <div class="mb-4">
              <p>The contact command - Contact me.</p>
              <p class="indent-3">Usage: <b>contact</b></p>
            </div>

            <div class="mb-4">
              <p>The <b>clear</b> command - Clear the terminal.</p>
              <p class="indent-3">Usage: <b>clear</b></p>
            </div>

            <div class="mb-4">
              <p>The <b>exit</b> command - Close the Terminal and Switch to the Graphic Interface.</p>
              <p class="indent-3">Usage: <b>exit</b></p>
            </div>
          </div>
        `
      },
    },
    {
      prompt: "clear",
    },
    {
      prompt: "exit",
      result: {
        type :'',
        content: 'Going to GUI'
      }
    },
    {
      prompt: "go",
      result: {
        type:'redirection',
        content: 'redirection in progress, please wait . . . '
      }
    },
    {
      prompt: "contact",
      result: {
        type: '',
        content: `
        <div class="flex gap-3">
          <a class="hover:underline" href="tel:+237699167012">+237 699167012</a>  <span>|</span>
          <a class="hover:underline" href="mailto:hermann18pavel@gmail.com">hermann18pavel@gmail.com</a>
          <a class="hover:underline" href="https://t.me/hermanno18">telegram/@Hermanno18</a>
        </div>
        `
      }
    }
  ]
  const prompInput = ref()
  const outputs = ref([])

  const scrollToBottom = () => {
    document.scrollTop = document.documentElement.scrollHeight;
    document.body.scrollTop = document.body.scrollHeight;
  }

  const handlePrompt = () => {
    const found = commands.find(com => prompInput.value.split(' ')[0].toLowerCase().includes(com.prompt.toLowerCase()))
    let result = {
      type: 'error',
      content: `<p class="text-red-500">Command '${prompInput.value}' not found. Type 'help' to see available commands </p>`
    }
    if (found)  result = found.result
    const outPut = {
      location: '/',
      prompt: prompInput.value,
      result: result
    }

    if(found?.prompt == 'exit') {
      router.push('/')
    }
    if(found?.prompt == 'go') {
      const param =  prompInput.value.split(' ')[1]
      if (goOptions[param]) {
        location.href= goOptions[param]
      }
    }
    outputs.value.push(outPut)
    if(found?.prompt == 'clear') {
      outputs.value = []
    }
    prompInput.value=null
    scrollToBottom()
  }
  const inputEvent = () => {
    prompInput.value= prompInput.value.toLowerCase()
  }

</script>

<template>
  
  <label id="terminal" for="input" class="p-4 h-screen w-screen  block">
    
<pre class="text-xs" >
            _______    _______    _______    _______    _          _          _______         __     _____  
|\     /|  (  ____ \  (  ____ )  (       )  (  ___  )  ( (    /|  ( (    /|  (  ___  )       /  \   / ___ \ 
| )   ( |  | (    \/  | (    )|  | () () |  | (   ) |  |  \  ( |  |  \  ( |  | (   ) |       \/) ) ( (___) )
| (___) |  | (__      | (____)|  | || || |  | (___) |  |   \ | |  |   \ | |  | |   | |         | |  \     / 
|  ___  |  |  __)     |     __)  | |(_)| |  |  ___  |  | (\ \) |  | (\ \) |  | |   | |         | |  / ___ \ 
| (   ) |  | (        | (\ (     | |   | |  | (   ) |  | | \   |  | | \   |  | |   | |         | | ( (   ) )
| )   ( |  | (____/\  | ) \ \__  | )   ( |  | )   ( |  | )  \  |  | )  \  |  | (___) |       __) (_( (___) )
|/     \|  (_______/  |/   \__/  |/     \|  |/     \|  |/    )_)  |/    )_)  (_______)       \____/ \_____/ 
                                                                                                            
</pre>
    <div ref="r" id="greetings" class="">
      <p>Hello i'm Hermann FOKOU ! Welcomme on the terminal's version of my portfolio ! Cool ! isn't it ??
      <br> Type <span class="font-semibold">'help'</span> to see available commands. </p>
      <p class="mb-4">
        If you are not familiar with this interface, you can switch to the graphic one at any time by typing <span class="font-semibold">'exit'</span> or <span class="font-semibold">'go gui'</span>.
      </p>
    </div>
    <div id="oupt" class="">
      <div class="" v-for="output in outputs">
        <div class="flex items-center gap-1">
          <span class="flex items-center gap-1">
            <span class="text-green-500 font-medium">guest@{{ hostname }} <span class="text-white">:</span></span>
            <span class="flex">
              <span class="text-blue-500">{{ output.location }}</span>
              <span>$</span>
            </span>
          </span>
          <span>
            {{ output.prompt }}
          </span>
        </div>
        <div class="" v-html="output?.result?.content"></div>
      </div>
    </div>
    <div id="greetings" class="">
      <form class="flex items-center gap-2" @submit.prevent="handlePrompt">
        <span class="flex items-center gap-1">
          <span class="text-green-500 font-medium">guest@{{ hostname }} <span class="text-white">:</span></span>
          <span class="flex">
            <span class="text-blue-500">/</span>
            <span>$</span>
          </span>
        </span>
        <input v-model="prompInput" type="text" name="input" id="input" autofocus autocomplete="off" class="border-none outline-none bg-transparent flex-1" @input="inputEvent">
        <button id='button'></button>
      </form>
    </div>
  </label>
</template>