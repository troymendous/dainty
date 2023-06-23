<template>
  <div>
    <nav
      class="flex flex-wrap shadow-sm flex-shrink-0 items-center justify-between w-full lg:py-2 md:py-0 px-4 text-lg text-gray-700 bg-white"
    >
      <div class="ml-28 flex flex-wrap flex-row items-center space-x-3">
        <img src="../public/img/logo.png" alt="logo" />
        <p class="text-indigo-600 text-base logo-font">Dainty</p>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="menu-button"
        @click="showMenu"
        class="h-6 w-6 cursor-pointer md:hidden block"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>

      <div
        class="hidden w-full md:flex md:items-center links-font md:w-auto"
        id="menu"
      >
        <ul
          class="pt-4 text-base text-black md:flex md:justify-between md:pt-0"
        >
          <li>
            <a class="md:p-4 py-2 block hover:text-purple-400" href="#"
              >Premium Host Plans</a
            >
          </li>
          <li>
            <a class="md:p-4 py-2 block hover:text-purple-400" href="#"
              >About Us</a
            >
          </li>
          <li class="relative">
            <a
              class="md:p-4 py-2 block hover:text-purple-400"
              @mouseleave="service_sub_menu = false"
              @mouseover="service_sub_menu = true"
              href="#"
              >Services <Icon name="ep:arrow-down"
            /></a>
            <ul
              class="absolute left-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg z-20"
              v-if="service_sub_menu"
            >
              <li>
                <a class="block px-4 py-2 hover:bg-gray-100" href="#"
                  >Service 1</a
                >
              </li>
              <li>
                <a class="block px-4 py-2 hover:bg-gray-100" href="#"
                  >Service 2</a
                >
              </li>
              <li>
                <a class="block px-4 py-2 hover:bg-gray-100" href="#"
                  >Service 3</a
                >
              </li>
              <!-- Add more dropdown menu items as needed -->
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup>
const service_sub_menu = ref(false);
const showMenu = () => {
  const menu = document.getElementById("menu");
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
</style>