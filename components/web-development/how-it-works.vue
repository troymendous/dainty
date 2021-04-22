<template>
  <section class="how-it-works-section">
    <h2 class="heading">How it works!</h2>
    <h6 class="sub-heading">
      We can fix any small issue you request and improve your site in a number of ways. Here's how
      it works:
    </h6>
    <div class="image-wrapper">
      <img src="/web-development/bg-works.png" alt="Work flow for web development jobs" />
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.how-it-works-section {
  padding: 0 2rem;

  .heading,
  .sub-heading {
    text-align: center;
  }

  .sub-heading {
    margin: 1.5rem 0 0;

    @screen sm {
      margin-bottom: 1.5rem;
    }
  }
}

.image-wrapper {
  max-width: 703px;
  width: 100%;
  margin: 0 auto;

  img {
    width: 100%;
    height: auto;
  }
}
</style>
