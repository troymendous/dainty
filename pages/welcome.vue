<template>
  <div>
    <section>
      <div class="about-header">
        <div class="about-header_title">
          <h2>Some say clients, we say family</h2>
        </div>
      </div>
    </section>
    <section class="about-body">
      <div class="info">
        <div class="text">
          Firstly… thank you so much for signing up with us, we’re genuinely so excited to get to
          know you and your projects.
        </div>
        <br />
        <div class="text">
          We’ll reach out to you within 24 hours (unless it’s a weekend) with some questionnaires to
          help get you started.
        </div>
        <br />
        <div class="text">
          Also, would you like to chat with us live on Slack? If so we’d love to get you involved in
          our Dainty community, there, you’ll experience faster response times and if we’re online
          at the same time as you we’ll be able to live chat and talk about any projects on which
          we’re working on. :-)
        </div>
        <br />
        <div class="text">
          If you’d like a slack invite just let us know by
          <span class="contact-btn" @click="openChat">clicking here</span>
        </div>
        <br />
        <div class="text">
          Alternatively, if you don’t want to wait for us, you can send us an email with your design
          description here <a href="mailto:hello@dainty.io">hello@dainty.io</a> and we’ll let you
          know if we have any questions to fill in any missing gaps.
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  head() {
    return {
      script: [
        {
          innerHTML: `gtag("event", "conversion", {
                'send_to': 'AW-398726489/nE9uCNKGzP4BENmqkL4B',
                'value': ${this.$route.params.price},
                'currency': 'USD'
            });`,
        },
      ],
      __dangerouslyDisableSanitizers: ["script"],
    }
  },
  methods: {
    openChat() {
      // eslint-disable-next-line no-undef
      Tawk_API.toggle()
    },
  },
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/pages/about-header.scss";
@import "~/assets/scss/pages/about-body.scss";
.contact-btn {
  color: var(--acc-purple-color);
  &:hover {
    color: var(--acc-pink-color);
  }
}
</style>
