<template>
  <div class="homepage">
    <!-- <ul>
      <li v-for="{ id, todo } in todos" :key="id">{{ todo }}</li>
    </ul> -->
    <banner-section />
    <services-section />
    <media-section />
    <reviews />
    <!--    <call-to-action />-->
    <portfolio-examples />
    <pricing-cards-v-2 :is-stripe-loaded="isStripeLoaded" />
    <button @click="createUser">Create a user</button>
  </div>
</template>

<script>
import BannerSection from "../components/home/banner-section"
// import CallToAction from "../components/home/call-to-action.vue"
import PricingCardsV2 from "../components/pricing/pricing-cards-v2.vue"
import MediaSection from "../components/home/media-section"
import PortfolioExamples from "../components/home/portfolio-examples"
import Reviews from "../components/home/reviews/reviews.vue"

export default {
  components: {
    PortfolioExamples,
    MediaSection,
    BannerSection,
    // CallToAction,
    PricingCardsV2,
    Reviews,
  },
  data() {
    return {
      isStripeLoaded: false,
    }
  },
  head() {
    return {
      script: [
        {
          hid: "stripe",
          src: "https://js.stripe.com/v3/",
          defer: true,
          callback: () => {
            this.isStripeLoaded = true
          },
        },
      ],
    }
  },
  // async asyncData() {
  //   const data = await this.$fire.firestore.collection("todos").get()
  //   const todos = data.docs.map((doc) => ({
  //     ...doc.data(),
  //     id: doc.id,
  //   }))
  //   return { todos }
  // },
  mounted() {
    console.log(this.$fire.firestore)
  },
  methods: {
    async createUser() {
      try {
        console.log("Creating a user....")
        await this.$fire.auth.createUserWithEmailAndPassword("foo@foo.foo", "testing")
      } catch (e) {
        console.log(e)
      }
    },
  },
}
</script>

<style lang="scss">
.homepage {
  position: relative;
}
.text-btn {
  text-align: center;
  margin: 3rem auto 1rem auto;
  a,
  button {
    color: var(--acc-purple-color);
  }
  @screen sm {
    display: block;
    width: 90%;
    margin: 1rem auto;
    padding-left: 1rem;
  }
}
</style>
