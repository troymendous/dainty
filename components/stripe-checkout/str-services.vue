<template>
  <div class="str-services-wrapper">
    <div class="free-trial_content-side">
      <div class="free-trial_content-side-headliner">
        <div class="free-trial_content-side-headliner-inner">
          <h4>
            <slot name="heading"></slot>
          </h4>
          <p>
            <span v-if="!price.length">Book Free Consult of the Core plan</span>
            <span v-else> $<slot name="price"></slot><span>/month</span></span>
          </p>
        </div>
      </div>

      <ul>
        <div>
          <li v-for="service in services" :key="service.length">
            <check-icon />
            <span> {{ service }}</span>
          </li>
        </div>
      </ul>
    </div>
    <nuxt-link to="/free-trial" v-if="slug === 'core' || slug === 'plus' || slug === 'enterprise'">
      <h4>Trial</h4>
      <p>Book Free Consult of the Core plan</p>
    </nuxt-link>
    <nuxt-link
      to="/pricing/core"
      v-if="slug === 'plus' || slug === 'enterprise' || currentRouteName === 'free-trial'"
    >
      <h4>Core</h4>
      <p>$99/month</p>
    </nuxt-link>
    <nuxt-link
      to="/pricing/plus"
      v-if="slug === 'enterprise' || slug === 'core' || currentRouteName === 'free-trial'"
    >
      <h4>Plus</h4>
      <p>$249/month</p>
    </nuxt-link>
    <nuxt-link
      to="/pricing/enterprise"
      v-if="slug === 'plus' || slug === 'core' || currentRouteName === 'free-trial'"
    >
      <h4>Enterprise</h4>
      <p>$599/month</p></nuxt-link
    >
  </div>
</template>

<script>
import checkIcon from "../home/plans/check-icon"
export default {
  props: {
    services: Array,
    slug: String,
    price: String,
  },
  components: {
    checkIcon,
  },
  computed: {
    currentRouteName() {
      return this.$route.name
    },
  },
}
</script>

<style lang="scss" scoped>
.str-services-wrapper {
  @screen md {
    padding: 5%;
  }
  a {
    display: block;
    margin-top: 1rem;
    padding: 30px 70px 60px;
    box-shadow: 0 5px 30px 0 rgba(39, 63, 74, 0.15);
    text-align: center;
  }
}
.free-trial_content-side {
  border-top: 6px solid var(--acc-purple-color);
  padding: 30px 70px 60px;
  box-shadow: 0 5px 30px 0 rgba(39, 63, 74, 0.15);

  &-headliner {
    display: flex;
    justify-content: center;
  }

  &-headliner-inner {
    text-align: center;
  }

  li {
    padding: 0.6rem 0;
  }

  svg {
    display: inline-block !important;
    margin-right: 0.3rem;
    width: 12px;
    height: 12px;
  }
}
</style>
