<template>
  <section class="pricing-section">
    <h2 class="heading">Choose a monthly plan that suits you</h2>
    <h6 class="sub-heading">
      Get started now and our expert team will perform an 18 point site review for free ($99 value)
      as a bonus for signing up on a monthly plan.
    </h6>
    <div class="button-wrapper">
      <div class="toggle-btn">
        <div
          :class="[isMonthly ? 'active' : '', 'monthly-btn']"
          role="button"
          @click="isMonthly = true"
        >
          Monthly
        </div>
        <div
          :class="[isMonthly ? '' : 'active', 'yearly-btn']"
          role="button"
          @click="isMonthly = false"
        >
          Yearly
        </div>
      </div>
      <p>Click yearly above and save up to $480 on annual plans</p>
    </div>
    <table>
      <thead>
        <tr class="row-heading cell">
          <td class="borderless-cell">&nbsp;</td>
          <td>Standard</td>
          <td>Professional</td>
          <td>VIP</td>
        </tr>
        <tr class="row-heading-prices">
          <td class="borderless-cell">&nbsp;</td>
          <td v-for="{ monthlyPrice, yearlyPrice, index } in prices" :key="index" class="cell">
            <span v-if="isMonthly"
              >$ <span class="bg-price">{{ monthlyPrice }}</span></span
            >
            <span v-else
              >$ <span class="bg-price">{{ yearlyPrice }}</span></span
            >
            <p>USD per month</p>
            <p v-if="isMonthly" class="sm-text">Minimum 3months signup</p>
            <div v-if="!isMonthly" class="yearly-subs">
              <span class="sm-text">(billed yearly)</span>
              <span class="sm-text alert">You save ${{ monthlyPrice - yearlyPrice }}</span>
            </div>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ service, availability, index } in tableData" :key="index">
          <td class="service-cell">{{ service }}</td>
          <td v-for="(value, index) in availability" :key="index" class="cell">
            <span v-if="value === true"><check-icon /> </span>
            <span v-else-if="value === false"><cross-icon /></span>
            <p v-else class="sm-text">{{ value }}</p>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td class="borderless-cell">&nbsp;</td>
          <td v-for="index in [1, 2, 3]" :key="index" class="cell foot-cell">
            <nuxt-link to="">Get Started</nuxt-link>
          </td>
        </tr>
      </tfoot>
    </table>
    <div class="single-job">
      <span class="text">Don't require monthly support?</span>
      <nuxt-link to="/"> Order a single job for $79.</nuxt-link>
    </div>
  </section>
</template>

<script>
import checkIcon from "../home/plans/check-icon"
import crossIcon from "../home/plans/cross-icon"

export default {
  components: {
    checkIcon,
    crossIcon,
  },
  data() {
    return {
      isMonthly: true,
      prices: [
        {
          plan: "Standard",
          monthlyPrice: "79",
          yearlyPrice: "69",
        },
        {
          plan: "Proffesional",
          monthlyPrice: "99",
          yearlyPrice: "79",
        },
        {
          plan: "VIP",
          monthlyPrice: "199",
          yearlyPrice: "159",
        },
      ],
      tableData: [
        {
          service: "Unlimited small 30 min jobs for 1 site",
          serviceId: "",
          availability: {
            standard: true,
            professional: true,
            vip: true,
          },
        },
        {
          service: "Detailed notes for every job",
          serviceId: "",
          availability: {
            standard: true,
            professional: true,
            vip: true,
          },
        },
        {
          service: "24 hour live chat & email support",
          serviceId: "",
          availability: {
            standard: true,
            professional: true,
            vip: true,
          },
        },
        {
          service: "Security protection",
          serviceId: "",
          availability: {
            standard: true,
            professional: true,
            vip: true,
          },
        },
        {
          service: "Proactive WordPress upgrades",
          serviceId: "",
          availability: {
            standard: false,
            professional: true,
            vip: true,
          },
        },
        {
          service: "Proactive plugin and theme upgrades",
          serviceId: "",
          availability: {
            standard: false,
            professional: true,
            vip: true,
          },
        },
        {
          service: "Secure offsite backup",
          serviceId: "",
          availability: {
            standard: false,
            professional: true,
            vip: true,
          },
        },
        {
          service: "Monthly security scan",
          serviceId: "",
          availability: {
            standard: false,
            professional: true,
            vip: true,
          },
        },
        {
          service: "Jobs checked by QA team",
          serviceId: "",
          availability: {
            standard: false,
            professional: false,
            vip: "All jobs checked by QA team",
          },
        },
        {
          service: "Job request at a time",
          serviceId: "",
          availability: {
            standard: "1 job at a time",
            professional: "1 job at a time",
            vip: "Up to 3 jobs at a time",
          },
        },
        {
          service: "Average task response time",
          serviceId: "",
          availability: {
            standard: "12 hours",
            professional: "8 hours",
            vip: "4 hours",
          },
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.pricing-section {
  padding: 2rem 0 4rem;
  margin: 4rem 2rem 2rem;

  .heading,
  .sub-heading {
    text-align: center;
  }

  .sub-heading {
    width: 100%;
    max-width: 860px;
    margin: 1.5rem 0 0;
    margin: 0 auto;

    @screen sm {
      margin-bottom: 1.5rem;
    }
  }

  @screen sm {
    margin: 2rem 0 2rem;
    padding: 0 2rem;
  }
}

.button-wrapper {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  margin: 2rem 215px 2rem 0;

  .toggle-btn {
    display: flex;
  }

  .monthly-btn,
  .yearly-btn {
    width: 150px;
    padding: 0.75rem 1rem;
    font-weight: 500;
    text-align: center;
    font-size: 14px;
    background: #fff;
    color: var(--acc-purple-color);

    @screen sm {
      width: 100px;
    }
  }

  .monthly-btn {
    border-bottom: 2px solid var(--acc-purple-color);
    border-left: 2px solid var(--acc-purple-color);
    border-top: 2px solid var(--acc-purple-color);
    border-radius: 8px 0 0 8px;
  }

  .yearly-btn {
    border-bottom: 2px solid var(--acc-purple-color);
    border-right: 2px solid var(--acc-purple-color);
    border-top: 2px solid var(--acc-purple-color);
    border-radius: 0 8px 8px 0;
  }

  .active {
    background: var(--acc-pink-color);
    color: #fff;
  }

  @screen sm {
    align-items: center;
  }
}

table {
  width: 880px;
  margin: 0 auto;
  overflow-x: auto;

  @screen md {
    width: 700px;
    margin: 0 auto;
  }

  @screen sm {
    width: 100%;
    max-width: 460px;
    overflow-x: scroll;
  }
}

td:not(.borderless-cell) {
  border: 1px solid #dcdcdc;
}

td:not(.service-cell) {
  //   max-width: 172px;
  //   width: 172px;

  width: 150px;

  @screen md {
    width: 120px;
  }

  @screen sm {
    width: 100px;
  }
}

svg {
  display: inline-block;
  height: 12px;
  width: 12px;
}

.row-heading {
  width: 1rem;
}

.cell {
  text-align: center;
}

.foot-cell {
  border: none !important;
  padding: 1rem 2px !important;

  a {
    display: inline-block;
    width: 100%;
    padding: 0.75rem 1rem;
    font-weight: 500;
    text-align: center;
    font-size: 14px;
    background: #fff;
    color: var(--acc-purple-color);
    border: 2px solid var(--acc-purple-color);
    border-radius: 8px;

    &:hover,
    &:active {
      background: var(--acc-pink-color);
      border: 2px solid transparent;
      color: #fff;
    }
  }
}

.row-heading-prices td {
  padding: 20px 10px;
  white-space: nowrap;
}

.service-cell {
  padding: 10px 10px;
  width: 300px;

  @screen md {
    width: 250px;
  }

  @screen sm {
    width: auto;
  }
}

.sm-text {
  font-size: 10px;
}

.yearly-subs {
  span {
    display: block;
  }
}

.alert {
  color: red;
}

tbody td {
  padding: 5px;
}

.bg-price {
  font-size: 55px;
  font-weight: 700;

  @screen sm {
    font-size: 25px;
  }
}

// Single job call to action styles
.single-job {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 2rem 0;

  .text,
  a {
    font-weight: bold;
  }

  a {
    color: var(--acc-purple-color);
  }

  @screen sm {
    display: block;
  }
}
</style>
