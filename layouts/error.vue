<template>
  <div class="not-found">
    <div class="not-found_text">
      <h2>404</h2>
      <h5>Sorry, we couldn't find that page...</h5>
    </div>
    <div class="not-found_img">
      <img src="/static/error/not-found.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Error",
  head() {
    return {
      script: [
        {
          hid: "stripe",
          src: "https://js.stripe.com/v3/",
          defer: true,
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.not-found {
  padding: 120px 10px;
  .not-found_text {
    text-align: center;
    h2 {
      font-size: 4rem;
      margin-bottom: 20px;
    }
    h5 {
      font-size: 1.5rem;
    }
  }
  .not-found_img {
    img {
      width: 40vw;
      margin: 0 auto;
      @screen sm {
        width: 95vw;
      }
    }
  }
}
</style>
