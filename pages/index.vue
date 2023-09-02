<template>
  <div  class="h-full w-full flex items-center justify-center text-center  overflow-hidden">
    <div class="absolute -z-[1]  ">
      <div class="spinner h-[300px] w-[300px]  md:h-[500px] md:w-[500px] rounded-full overflow-hidden">
        <div class=" bg-gray-800  h-[300px] w-[300px]  md:h-[500px] md:w-[500px] rounded-full relative overflow-hidden">
          <img src="/img/video-bg-1.png" alt="" class="absolute  h-full w-ful opacity-50">
          <div class="absolute h-full w-full  rounded-full" style=" background: rgba(31, 41, 55, 1.0); background: radial-gradient(at center, rgba(31, 41, 55, 1.0) 30%, rgba(31, 41, 55, 0.7), rgba(31, 41, 55, 1.0), rgba(255, 255, 255, 0.0));"></div>
        </div>
      </div>
    </div>
    <div>
      <div class="max-w-[450px] maxh-[480px] ">
        <div class="mb-5">
          <p class="mb-5">
            Hi !  🙃
          </p>
          <p>I'm <span class="text-info">Hermann FOKOU</span>,</p>
          <p class=" mt-3 text-xl sm:text-lg">a passionate about WEB <br class=sm:hidden> developement and I.T. </p>
          <p class="-3 text-base sm:text-lg ">Welcome on my portfolio</p>
          <p></p>
        </div>
        <div class="relative flex justify-center pt-4">
          <div class="scroll-down bottom-0 mt-5"></div>
        </div>
        <!-- <p>
          <span>"</span>
          <span>Il y'a encore un truc à apprendre ! ege er e  dfv fd df </span>
          <span>"</span>
        </p> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.spinner {
  background-image: -webkit-gradient(linear,left top, left bottom,color-stop(35%, #FF2B51),to(rgb(0, 225, 255)));
  background-image: linear-gradient(#FF2B51 35%,rgb(0, 225, 255));
  -webkit-animation: spinning82341 4s linear infinite;
          animation: spinning82341 4s linear infinite;
  -webkit-filter: blur(1px);
          filter: blur(1px);
  -webkit-box-shadow: 0px -5px 20px 0px #FF2B51, 0px 5px 20px 0px rgb(0, 225, 255);
          box-shadow: 0px -5px 20px 0px #FF2B51, 0px 5px 20px 0px rgb(0, 225, 255);
}

.spinner1 {
  -webkit-filter: blur(10px);
          filter: blur(10px);
}

@-webkit-keyframes spinning82341 {
  to {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

@keyframes spinning82341 {
  to {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}






.scroll-down {
  position: absolute;
  z-index: 100;
  width: 30px;
  height: 30px;
  border-bottom: 4px solid #fff;
  border-right: 4px solid #fff;
  border-radius: 5px;
  z-index: 9;
  -webkit-transform:  rotate(45deg);
  -moz-transform:  rotate(45deg);
  transform:  rotate(45deg);
  -webkit-animation: fade_move_down 4s ease-in-out infinite;
  -moz-animation:    fade_move_down 4s ease-in-out infinite;
  animation:         fade_move_down 4s ease-in-out infinite;
}


/*animated scroll arrow animation*/
@-webkit-keyframes fade_move_down {
  0%   { -webkit-transform:translate(0,-10px) rotate(45deg); opacity: 0;  }
  50%  { opacity: 1;  }
  100% { -webkit-transform:translate(0,10px) rotate(45deg); opacity: 0; }
}
@-moz-keyframes fade_move_down {
  0%   { -moz-transform:translate(0,-10px) rotate(45deg); opacity: 0;  }
  50%  { opacity: 1;  }
  100% { -moz-transform:translate(0,10px) rotate(45deg); opacity: 0; }
}
@keyframes fade_move_down {
  0%   { transform:translate(0,-10px) rotate(45deg); opacity: 0;  }
  50%  { opacity: 1;  }
  100% { transform:translate(0,10px) rotate(45deg); opacity: 0; }
}
</style>