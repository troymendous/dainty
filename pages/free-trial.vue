<template>
  <div class="free-trial">
    <h2>15 Day Free Trial</h2>
    <div class="free-trial_inner">
      <div class="free-trial_content-wrapper">
        <div class="free-trial_content">
          <str-form
            v-if="!isSendingNotifs"
            :isLoading="isLoading"
            v-on:showStrCheckout="userDataCollected"
          />
          <div v-else>
            <p>Subscription is sucessful 🎊<br /></p>
            <div class="flex justify-center text-gray-500">
              <loader class="animate-spin h-10 w-20 mt-2" />
            </div>
          </div>
        </div>
      </div>

      <str-services :services="core.services" :price="core.price">
        <template v-slot:heading> {{ core.name }} </template>
        <template v-slot:price> {{ core.price }}</template>
      </str-services>
    </div>
  </div>
</template>

<script>
import mail from "../mixins/mail"
import slackNotifs from "../mixins/slack-notifs"
import zapierDocs from "../mixins/zapier-docs"

import StrForm from "../components/stripe-checkout/str-form.vue"

export default {
  components: {
    StrForm,
  },
  mixins: [mail, slackNotifs, zapierDocs],
  data() {
    return {
      isLoading: false,
      isSendingNotifs: false,
      plan: "Free Trial",
      core: {
        name: "Trial",
        price: "",
        services: [
          "Unlimited concepts and revisions",
          "All source files",
          "Print Design",
          "High quality work",
          "Social Media Posts",
          "Advertisements",
          "Logo Design",
          "Business Card Design",
          "Letterhead Design",
          "Stationary",
          "E-Book Cover",
          "Infographic",
          "Flyer",
          "Brochure",
          "Packaging",
          "T-shirt",
          "and more...",
          "No contracts - cancel anytime",
        ],
      },
    }
  },
  mounted() {
    this.$store.commit("updateEmail", "")
  },
  computed: {
    email: {
      get() {
        return this.$store.state.email
      },
      set(value) {
        this.$store.commit("updateEmail", value)
      },
    },
    fullname: {
      get() {
        return this.$store.state.fullname
      },
      set(value) {
        this.$store.commit("updateFullname", value)
      },
    },
  },
  methods: {
    async userDataCollected() {
      console.log(this.email)
      this.isSendingNotifs = true
      try {
        // Send slack notifications
        await this.sendSlackNotifs(this.plan)

        // Send mail to subbed client and admins
        await this.sendUserMail()

        // Append the user to Google Doc
        await this.appendUsersToGoogleDocs(this.plan)
      } catch (error) {
        // TODO: How to effectively handle errors
        console.log(error)
      }

      // Reset email and full name
      // this.$store.commit("updateEmail", "")
      this.$store.commit("updateFullname", "")

      this.isSendingNotifs = false

      // Redirect the user to the onboarding / request page
      this.$router.push("/onboarding")
    },
  },
}
</script>

<style lang="scss" scoped>
.free-trial {
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding-top: 9rem;

  h2 {
    text-align: center;
  }
}

.free-trial_inner {
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5rem;
  @screen md {
    grid-template-columns: repeat(1, 1fr);
  }
}

.free-trial_content-wrapper {
  border-top: 1px solid #d5d5d5;
  padding: 30px 60px 60px;
  @screen sm {
    padding: 20px 30px;
  }
}
</style>
