<template>
  <div class="get-started">
    <div>
      <img src="/pricing/get-started.png" width="85px" class="get-started_img" />
    </div>
    <div class="get-started_text">
      Not sure where to start? Our Core Plan includes all the design essentials that startups or
      individuals could need. The best thing about it is, it’s risk-free, if you don’t get a design
      you like within 15 days you pay nothing. After that, our core plan is only $99 for unlimited
      concepts and revisions until you’re totally happy with the end result.
    </div>
    <nuxt-link to="/free-trial">
      <div class="pricing-btn_animated">Free 15-day trial <span> > </span></div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "GetStarted",
}
</script>

<style lang="scss">
.get-started {
  margin: 3rem;
}
.get-started_img {
  margin: 20px auto;
}
.get-started_text {
  width: 45%;
  margin: 0 auto;
  text-align: center;
  line-height: 1.7;
  @screen sm {
    width: 90%;
  }
}
.pricing-btn_animated {
  position: relative;
  text-align: center;
  width: fit-content;
  margin: 20px auto;
  cursor: pointer;
  color: var(--acc-purple-color);
  font-weight: 600;
  span {
    position: absolute;
    right: -12px;
    transition: all 0.3s;
  }
  &:hover {
    span {
      position: absolute;
      right: -20px;
    }
  }
}
</style>
