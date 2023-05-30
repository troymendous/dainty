<template>
  <div>
    <section class="welcome-page">
      <div class="welcome-logo">
        <logo />
      </div>
      <div class="about-header_title">
        <h2>Some say clients, we say family</h2>
      </div>
      <p>
        Firstly… thank you so much for signing up with us, we’re genuinely so excited to get to know
        you and your projects.
      </p>
      <img src="/static/welcome/tick.gif" class="tick-img" />
      <div class="about-header_title">
        <h2>Your Task Has Been Submitted</h2>
      </div>
      <div class="text">
        Our designers will commence a start on your project the next business day after submission.
        :-) Keep in mind we’re Australian, so if this is submitted on your Friday morning we’ll
        attack it on Monday. If we have any questions about your tasks submission we’ll hit you up
        as soon as possible.
      </div>
      <div class="text">
        Also, would you like to chat with us live on Slack? If so we’d love to get you involved in
        our Dainty community, there, you’ll experience faster response times and if we’re online at
        the same time as you so we’ll be able to live chat and talk about any projects on which
        we’re working on. :-)
      </div>
      <div class="text">
        If you’d like a slack invite just let us know by
        <span class="contact-btn" @click="openChat">Clicking Here</span>
      </div>
      <div class="text">
        Alternatively, if you don’t want to wait for us, you can send us an email with your design
        description here <a href="mailto:hello@dainty.io">hello@dainty.io</a> and we’ll let you know
        if we have any questions to fill in any missing gaps.
      </div>
      <div class="about-header_title final-heading">
        <h2>Looking Forward to Getting to Know You & Your Business!</h2>
      </div>
    </section>
  </div>
</template>

<script>
import Logo from "../components/logo.vue"

export default {
  name: "Welcome",
  components: {
    Logo,
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
.welcome-page {
  max-width: 1152px;
  margin: auto;
  .contact-btn {
    color: var(--acc-purple-color);
    &:hover {
      color: var(--acc-pink-color);
    }
  }
  .welcome-logo {
    margin: auto;
    text-align: center;
    margin-top: 160px;
    transform: scale(1.5);
  }
  .about-header_title {
    min-height: auto;
    margin: 30px auto 10px;
  }
  p {
    text-align: center;
    width: 80%;
    margin: auto;
  }
  .tick-img {
    margin: 100px auto 50px;
    width: 120px;
    @screen md {
      margin: 60px auto 40px;
    }
  }
  .text {
    margin: 30px 0 0;
    @screen md {
      margin: 30px 5%;
    }
  }
  a {
    color: var(--acc-purple-color);
    &:hover {
      color: var(--acc-pink-color);
    }
  }
  .contact-btn {
    cursor: pointer;
  }
  .final-heading {
    margin-top: 70px;
    @screen md {
      margin-top: 50px;
    }
  }
  @screen sm {
    width: 90%;
  }
}
</style>
