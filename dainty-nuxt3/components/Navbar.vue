<template>
  <div>
    <nav
      class="flex flex-wrap shadow-sm flex-shrink-0 items-center justify-between w-full lg:py-2 md:py-0 px-4 text-lg text-gray-700 bg-white">
      <div class="ml-28 flex flex-wrap flex-row items-center space-x-3">
        <img src="../public/img/logo.png" alt="logo" />
        <p class="text-indigo-600 text-base logo-font">Dainty</p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" id="menu-button" @click="showMenu"
        class="h-6 w-6 cursor-pointer md:hidden block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      <div class="hidden w-full md:flex sm:flex sm:justify-center sm:items-center  md:items-center links-font md:w-auto" id="menu">
        <ul class="pt-4 text-base text-black md:flex md:justify-between md:pt-0">
          <!-- <li>
            <a class="md:p-4 py-2 block hover:text-purple-400" href="#">Premium Host Plans</a>
          </li> -->
          <li>
            <a class="md:p-4 py-2 block hover:text-purple-400" href="#">About Us</a>
          </li>
          <li class="relative">
            <a class="md:p-4 py-2 block hover:text-purple-400" @mouseover="service_sub_menu = true" @click="service_sub_menu===true?service_sub_menu=false:service_sub_menu=true" href="#">Services
              <Icon name="ep:arrow-down" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="flex lg:justify-end sm:justify-end md:justify-end xs:justify-center mr-10 rounded-md flex-shrink-0" v-if="service_sub_menu"
      @mouseleave="service_sub_menu = false">
      <ul class="bg-blue-50 mt-1 h-48 w-96 shadow-lg z-20">
        <li class="border-b-1.5 border-gray-400">
          <div class="flex flex-row flex-wrap flex-shrink-0 py-2">
            <div class="icon-img flex justify-center items-center"><img src="../public/img/pwh.png"
                alt="premium web hosting"></div>
            <div class="flex flex-col flex-wrap pl-2">
              <p class="text-black text-base links-font font-medium">Premium Website Hosting</p>
              <p class="sublink-text">The best hosting you could ever ask for</p>
            </div>
          </div>
          <hr class="bg-black mx-4" />
        </li>
        <li>
          <div class="flex flex-row flex-wrap flex-shrink-0 py-2">
            <div class="icon-img2 flex justify-center items-center"><img src="../public/img/cwm.png"
                alt="Complete Website Management"></div>
            <div class="flex flex-col flex-wrap pl-2">
              <p class="text-black text-base links-font font-medium">Complete Website Management</p>
              <p class="sublink-text">Website issues solved, performance optimised!</p>
            </div>
          </div>
        </li>
        <hr class="bg-black mx-4" />
        <li>
          <div class="flex flex-row flex-wrap flex-shrink-0 py-2">
            <div class="icon-img flex justify-center items-center"><img src="../public/img/seo.png"
                alt="Search Engine Optimisation"></div>
            <div class="flex flex-col flex-wrap pl-2">
              <p class="text-black text-base links-font font-medium">Search Engine Optimisation</p>
              <p class="sublink-text">Improve your ranking, improve your conversions!</p>
            </div>
          </div>
        </li>
        <!-- Add more dropdown menu items as needed -->
      </ul>
    </div>
  </div>
</template>

<script setup>
const service_sub_menu=ref(false);
const showMenu=() => {
  const menu=document.getElementById("menu");
  menu.classList.toggle("hidden");
};
</script>

<style lang="scss" scoped>
.logo-font {
  font-family: "Poly Rounded";
}

.links-font {
  font-family: "Poppins";
}

.sublink-text {
  color: #7D7D7D;
  font-size: 12px;
  font-family: Poppins;
  font-weight: 300;
}

.icon-img {
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  border-radius: 4px;
  background: #F77ADE;
}

.icon-img2 {
  border-radius: 4px;
  background: #5B39C9;
  width: 36px;
  height: 36px;
  flex-shrink: 0;
}</style>
