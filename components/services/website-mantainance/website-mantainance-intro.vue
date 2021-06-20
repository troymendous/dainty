<template>
  <section class="website-mantainance-intro">
    <div class="website-mantainance-intro_inner">
      <div class="website-mantainance-intro_dots">
        <dots />
      </div>
      <h1 class="website-mantainance-intro_heading">Website Maintanance</h1>
      <div class="website-mantainance-intro_main">
        <div class="website-mantainance-intro_main-left">
          <h2 class="website-mantainance-intro_main-left-heading">
            Imagine never having another
            <span>Wordpress headache...😎</span>
          </h2>

          <p class="website-mantainance-intro_main-left-sub-heading">
            With 24/7 access to the worlds best developers for unlimited small jobs,
            <br />
            where will you spend your new found time.
          </p>

          <nuxt-link to="/">Sign up today</nuxt-link>
        </div>
        <div class="website-mantainance-intro_main-right">
          <div class="website-mantainance-intro_main-right-dialogue dialogue-one">
            <span> Affordable and fast turnaround 😍 </span>
          </div>

          <div class="website-mantainance-intro_main-right-dialogue dialogue-two">
            <span>Awesome as always 😃</span>
          </div>

          <div class="website-mantainance-intro_main-right-dialogue dialogue-three">
            <span> Creative deliverables 😘😘😘 </span>
          </div>

          <nuxt-link to="/">Checkout our work!</nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import dots from "./dots.vue"
export default {
  components: { dots },
}
</script>

<style lang="scss" scoped>
.website-mantainance-intro {
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 2rem 0;

  &_inner {
    width: 100%;
    position: relative;
    padding: 5rem 0 4rem;
    margin: 3rem 0 2rem;

    @screen md {
      padding-top: 6rem;
      margin: 3rem 2rem;
    }

    @screen sm {
      padding-top: 3rem;
    }
  }
}

.website-mantainance-intro_heading {
  @apply text-accentPink;
  text-align: center;
  margin-bottom: 50px;
  // font-size: 30px;
}

.website-mantainance-intro_main-left {
  a {
    display: inline-block;
    margin-top: 68px;
    border: 1px solid #f77ade;
    border-radius: 8px;
    padding: 12px;
    color: #000000;
    font-size: 14px;
  }

  &-heading {
    font-size: 36px;
    color: #6f6c7f;
    font-weight: normal;

    span {
      color: #36324a;
      font-weight: bold;
      display: block;
    }
  }
}

.website-mantainance-intro_main-left-sub-heading {
  margin-top: 30px;
}

.website-mantainance-intro_main {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 392px;
}

// .website-mantainance-intro_main-left {
// //   background: chartreuse;
// }

// .website-mantainance-intro_main-right {
//   background: chocolate;
// }

.website-mantainance-intro_main-right {
  position: relative;

  &-dialogue,
  a {
    position: absolute;

    span {
      display: inline-block;
      border: 1px solid #00000000;
      box-shadow: 2px 2px 24px #bcbcbc45;
      margin-top: 5px;
      padding: 12px;
      border-radius: 12px;
      color: #36324a;
    }
  }

  a {
    top: 366px;
  }

  .dialogue-one {
    top: 0;
  }

  .dialogue-two {
    top: 115px;
    left: 165px;
  }

  .dialogue-three {
    top: 244px;
  }
}
</style>
