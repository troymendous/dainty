<template>
  <section class="banner">
    <div class="banner-inner">
      <!-- <div class="banner-animations">
        <img src="/home/banner/animations/shaps1.png" class="shape shape1" alt="Animated shapes" />
        <img src="/home/banner/animations/shaps2.png" class="shape shape2" alt="Animated shapes" />
        <img src="/home/banner/animations/shaps3.png" class="shape shape3" alt="Animated shapes" />
        <img src="/home/banner/animations/shaps4.png" class="shape shape4" alt="Animated shapes" />
        <img src="/home/banner/animations/shaps5.png" class="shape shape5" alt="Animated shapes" />
        <img src="/home/banner/animations/shaps6.png" class="shape shape6" alt="Animated shapes" />
        <img src="/home/banner/animations/shaps7.png" class="shape shape7" alt="Animated shapes" />
      </div> -->

      <div class="banner-content">
        <div class="banner-content_text">
          <h1>
            Dainty is for your
            <br />
            internet app bussiness.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Vivamus at augue eget arcu dictum.
          </p>
          <div class="banner-links">
            <nuxt-link to="/" class="link-primary pink">Download</nuxt-link>
            <nuxt-link to="/" class="link-primary purple">Get Started</nuxt-link>
          </div>
        </div>
        <div class="banner-content_showcase">
          <img src="/home/banner/showcase.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BannerSection",
}
</script>

<style lang="scss">
.banner {
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 2rem 0;
}

.banner-inner {
  position: relative;
  padding: 12rem 0;
  margin: 8rem 2rem;

  @screen md {
    padding-top: 6rem;
  }

  @screen sm {
    padding-top: 3rem;
  }
}

.banner-animations {
  position: relative;
  .shape {
    position: absolute;
    top: 0;
  }

  .shape1 {
    top: -34%;
    left: -12%;
  }

  .shape2 {
    top: -24%;
    left: 37%;
  }

  .shape3 {
    top: -34%;
    left: 110%;
  }

  .shape4 {
    top: -5%;
    right: 13%;
  }

  .shape5 {
    top: 31%;
    left: 49%;
  }

  .shape6 {
    top: 53%;
    left: 0%;
  }

  .shape7 {
    top: 103%;
    right: 13%;
  }
}

.banner-content {
  display: flex;
  flex-direction: row;
  width: 100%;

  h1 {
    margin-bottom: 2.0625rem;
  }

  p {
    margin-bottom: 2.6875rem;
  }

  @screen sm {
    flex-direction: column;
  }
}

.banner-content_text,
.banner-content_showcase {
  width: 100%;
}

.banner-content_showcase {
  animation: MoveUpDown 2s linear infinite;

  img {
    position: absolute;
    z-index: 990;
    top: -7rem;
    width: auto;
    height: auto;

    @screen md {
      position: relative;
      top: 0rem;
    }

    @screen sm {
      position: relative;
      top: 7rem;
    }
  }

  @screen md {
    width: 45%;
  }

  @screen sm {
    width: 100%;
  }
}

@keyframes MoveUpDown {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-40px);
  }
}

.banner-links {
  .link-primary {
    @apply rounded-full;
    @apply inline-block;
    @apply p-4;
    @apply mr-4;
    @apply mb-4;
    @apply font-medium;
    width: 180px;
    text-align: center;
    font-size: 14px;
  }

  .pink {
    background: var(--acc-pink-color);
    color: #fff;
    border: 2px solid var(--acc-pink-color);

    &:hover {
      background: var(--dark-color);
      border: 2px solid var(--dark-color);
    }
  }

  .purple {
    background: #fff;
    color: var(--acc-purple-color);
    border: 2px solid var(--acc-purple-color);

    &:hover {
      background: var(--acc-purple-color);
      color: #fff;
    }
  }
}
</style>
