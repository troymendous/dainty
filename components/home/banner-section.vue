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
            Need a design done affordably?
            <br />
            We got you.
          </h1>
          <span>
            Unlimited graphic design requests and revisions for one monthly rate, No hourly billing
            or contracts, cancel anytime. Start your free trial today!
          </span>
          <div class="banner-links">
            <nuxt-link to="/free-trial" class="link-primary pink">Start Free Trial</nuxt-link>
            <nuxt-link to="/pricing" class="link-primary purple">Learn More</nuxt-link>
          </div>
          <div class="banner-user-review">
            <p>
              “Dainty has been a huge help for our agency, I highly recommend these guys for any
              agency or even an individual just wanting some regular designs or web development
              done”
            </p>
            <!-- TODO name & image -->
            <div>
              <img src="/testimonials/testimonial-01.webp" alt="Avatar" />
              <span>Sophia Lewis, Statusbrew</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="banner-content_img">
      <img src="/home/banner/bear.png" alt="dainty-bear" />
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
  padding: 6rem 0 4rem;
  margin: 8rem 2rem 2rem;

  @screen md {
    padding-top: 6rem;
    margin: 3rem 2rem;
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

.banner-content_text {
  width: 80%;
  @screen sm {
    width: 100%;
  }
}

.banner-content_text > span {
  display: block;
  font-size: 20px;
  @apply text-lightColor;
  line-height: 1.875rem;
  margin-bottom: 40px;

  @screen md {
    font-size: 18px;
  }

  @screen sm {
    font-size: 16px;
  }
}

.banner-content_img {
  position: absolute;
  right: 0;
  top: 14rem;
  height: 27rem;
  width: 30%;
  overflow: hidden;
  z-index: -1;
  img {
    position: absolute;
    right: -20%;
    width: 60%;
    height: auto;
    transform: rotate(-50deg);
  }
  @screen sm {
    display: none;
  }
}

.banner-user-review {
  margin-top: 1.2rem;

  > div {
    display: flex;
    align-items: center;
  }

  img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }

  p {
    margin-bottom: 1rem !important;
  }

  span {
    display: inline-block;
    margin-left: 6px;
    color: #b8b8d9;
  }
}

.banner-content_showcase {
  img {
    position: relative;
    width: 100%;
    height: auto;

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

.banner-links {
  .link-primary {
    @apply inline-block;
    @apply p-4;
    @apply mr-4;
    @apply mb-4;
    @apply font-medium;
    border-radius: 8px;
    width: 180px;
    text-align: center;
    font-size: 14px;
  }

  .pink {
    background: white;
    color: var(--acc-pink-color);
    border: 2px solid var(--acc-pink-color);

    &:hover {
      background: var(--acc-pink-color);
      color: #fff;
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
