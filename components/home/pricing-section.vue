<template>
  <section class="pricing">
    <div class="pricing-headliner">
      <h2>Choose Plans and Pricing</h2>
      <p>
        Purus viverra accumsan in nisl nisi. Volutpat commodo sed egestas egestas fringilla
        phasellus faucibus.
      </p>
    </div>
    <div class="pricing-plans">
      <div class="pricing-plan_action-wrapper">
        <div class="pricing-plan_action">
          <div
            role="button"
            v-bind:class="[isMonthly ? 'pinkClass' : 'whiteClass', 'baseClass']"
            @click="isMonthly = true"
          >
            Monthly
          </div>
          <div
            role="button"
            v-bind:class="[isMonthly ? 'whiteClass' : 'pinkClass', 'baseClass']"
            @click="isMonthly = false"
          >
            Yearly
          </div>
        </div>
      </div>
      <div class="pricing-plans_content">
        <div
          v-for="{ plan, id, monthlyPrice, annualPrice, services } in plans"
          v-bind:key="id"
          class="pricing-plans_content-item"
        >
          <h4>{{ plan }}</h4>
          <div class="pricing-plans_content-item-price">
            <span v-if="isMonthly">${{ monthlyPrice }}</span>
            <span v-else>${{ annualPrice }}</span>
          </div>
          <p v-for="{ type, isOffered, serviceId } in services" v-bind:key="serviceId">
            <check-icon v-if="isOffered" />
            <cross-icon v-else />
            <span>{{ type }}</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import crossIcon from "./plans/cross-icon.vue"
import CheckIcon from "./plans/check-icon.vue"

export default {
  components: { crossIcon, CheckIcon },
  data() {
    return {
      isMonthly: true,
      plans: [],
    }
  },
  async fetch() {
    this.plans = await this.$content("pricing-and-plans").fetch()
  },
}
</script>

<style lang="scss" scoped>
.pricing {
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 6rem 2rem;
}

.pricing-headliner {
  text-align: center;

  h2,
  p {
    margin-bottom: 30px;
  }
}

.pricing-plan_action-wrapper {
  display: flex;
  justify-content: center;
  padding: 3rem 0 3rem;
}

.pricing-plan_action {
  display: flex;

  > div:nth-child(1) {
    border-radius: 31px 0 0 31px;
  }

  > div:nth-child(2) {
    border-radius: 0 31px 31px 0;
  }
}

.baseClass {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 58px;
  padding: 0.5rem 0;
  font-weight: 500;
}

.pinkClass {
  background: var(--acc-pink-color) !important;
  color: #fff;
  border: 1px solid var(--acc-pink-color);
}

.whiteClass {
  background: #fff;
  color: var(--acc-pink-color);
  border: 1px solid #e6e6e6;
}

.pricing-plans_content {
  width: 100%;
  display: flex;
  justify-content: center;

  > div {
    text-align: center;
    border-radius: 10px;
    padding: 50px 0;
  }

  > div:nth-child(2) {
    border: 2px solid #5b39c9;
    width: 28%;
    margin: -20px 20px;

    @screen sm {
      width: 100%;
      margin: 1.5rem 0;
    }
  }

  > div:nth-child(1),
  > div:nth-child(3) {
    width: 28%;
    border: 4px solid #f7f6f9;

    @screen sm {
      width: 100%;
    }
  }

  @screen sm {
    flex-direction: column;
  }
}
.pricing-plans_content-item {
  // padding: 50px 0;

  h4 {
    text-transform: capitalize;
  }

  p {
    text-transform: capitalize;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    margin-right: 0.3rem;
  }
}

.pricing-plans_content-item-price {
  > span {
    @apply text-accentPink;
    font-size: 60px;
  }
}
</style>
