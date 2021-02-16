<template>
  <header>
    <div ref="menuRef" class="menu">
      <div class="menu_logo">
        <img src="/logo/dainty_logo.png" alt="Dainty" width="150" height="50" />
      </div>
      <div class="menu_main">
        <div>
          <div class="menu_icon" role="button" @click="showPopup = !showPopup">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </div>

          <ul class="menu_links">
            <li><NuxtLink to="/">Pricing</NuxtLink></li>
            <li>
              <NuxtLink to="/">Team</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">Portfolio</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">Web Development</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">Terms of service</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">About us</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">Marketing</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="menu_call">
        <nuxt-link to="/"> Get Dainty </nuxt-link>
      </div>
    </div>

    <ul class="menu_popup" v-if="showPopup">
      <li>
        <NuxtLink to="/">Pricing</NuxtLink>
        <hr />
      </li>
      <li>
        <NuxtLink to="/">Team</NuxtLink>
        <hr />
      </li>
      <li>
        <NuxtLink to="/">Portfolio</NuxtLink>
        <hr />
      </li>
      <li>
        <NuxtLink to="/">Web Development</NuxtLink>
        <hr />
      </li>
      <li>
        <NuxtLink to="/">Terms of service</NuxtLink>
        <hr />
      </li>
      <li>
        <NuxtLink to="/">About us</NuxtLink>
        <hr />
      </li>
      <li>
        <NuxtLink to="/">Marketing</NuxtLink>
        <hr />
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "HeaderSection",
  data() {
    return {
      showPopup: false,
    }
  },
  mounted() {
    // Note: do not add parentheses () for this.handleScroll
    window.addEventListener("scroll", this.handleScroll)
  },

  methods: {
    handleScroll() {
      if (window.scrollY > 80) {
        this.$refs.menuRef.classList.add("white-background")
        console.log(this.$refs.menuRef.classList)
      } else {
        this.$refs.menuRef.classList.remove("white-background")
      }
    },
  },
}
</script>

<style lang="scss">
.menu {
  position: fixed;
  top: 0;
  z-index: 999;
  padding: 0 1rem;
  width: 100%;
  margin: 0 auto;
  @apply grid;
  @apply grid-cols-12;

  a {
    @apply text-darkColor;
    @apply font-medium;
  }
}

.white-background {
  background: #fff !important;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
}

.menu_logo {
  @apply col-span-2;

  @screen md {
    @apply col-span-4;
  }
  @screen sm {
    @apply col-span-6;
  }
}

.menu_main {
  display: flex;
  align-items: center;
  @apply col-span-8;

  @screen md {
    @apply col-span-4;
  }

  @screen sm {
    @apply col-span-6;
  }
}

.menu_icon > svg {
  @apply font-semibold;
  @apply text-accentPink;
  display: none;

  @screen md {
    display: block;
  }
}

.menu_main > div {
  width: 100%;
  display: flex;

  @screen md {
    justify-content: center;
  }

  @screen sm {
    justify-content: flex-end;
  }
}

.menu_links {
  width: 100%;
  display: flex;
  justify-content: space-between;

  li {
    padding: 0.5rem 0;
  }

  a:hover {
    @apply text-accentPink;
  }

  @screen md {
    display: none;
  }
}

.menu_call {
  display: flex;
  align-items: center;
  justify-content: center;
  @apply col-span-2;

  > a {
    padding: 16px 36px;
    @apply rounded-full;
    background: #fff;
    transition: 0.3s all linear;
    border: 3px solid transparent;

    &:hover {
      background: var(--dark-color);
      border: 3px solid transparent;
      color: #fff;
    }

    @screen md {
      border: 3px solid #5b39c9;
    }
  }

  @screen md {
    @apply col-span-4;
  }

  @screen sm {
    display: none;
  }
}

.menu_popup {
  position: absolute;
  z-index: 990;
  top: 130px;
  left: 1rem;
  right: 1rem;
  width: auto;
  background: var(--dark-color);
  padding: 1rem 1rem;
  list-style: none;

  li {
    padding: 0.5rem 0;
  }

  a {
    color: #979caf;
    padding: 1rem 0;
    @apply font-medium;
  }
}
</style>
