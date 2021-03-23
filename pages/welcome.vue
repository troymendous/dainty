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
        <div class="invite-form">
          <input type="email" />
          <button>Invite me</button>
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
}
</script>

<style lang="scss">
.invite-form {
  width: 420px;
  margin: 1rem auto;
  input {
    display: inline;
    border: 2px solid var(--light-color);
    border-right: none;
    border-radius: 8px 0 0 8px;
    height: 40px;
    width: 300px;
    vertical-align: bottom;
    padding: 0 0.5rem;
    &:focus {
      outline: none;
    }
  }
  button {
    display: inline;
    position: absolute;
    background: #fff;
    color: var(--acc-purple-color);
    border: 2px solid var(--acc-purple-color);
    height: 40px;
    width: 120px;
    text-align: center;
    border-radius: 0 8px 8px 0;
    font-size: 14px;
    font-weight: 600;
    &:hover {
      background-color: var(--acc-purple-color);
      color: white;
    }
    &:focus {
      outline: none;
    }
  }
}
</style>
