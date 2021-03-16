<template>
  <div class="coming">
    <div class="coming-text">
      <hr />
      <h2>Coming Soon</h2>
      <span>We are currently working on this feature and will launch soon</span>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  name: "Coming",
}
</script>

<style lang="scss">
.coming {
  position: relative;
  display: table-cell;
  vertical-align: middle;
  height: 100vh;
  width: 100vw;
  text-align: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/coming/coming-background.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  .coming-text {
    padding: 20px;
    font-size: 1.5rem;
    @screen sm {
      font-size: 1.2rem;
    }
    hr {
      width: 70%;
      margin: 50px auto;
      color: white;
      opacity: 0.5;
    }
    h2 {
      color: white;
      margin-bottom: 30px;
      @screen sm {
        font-size: 1.5rem;
      }
    }
    span {
      color: white;
    }
  }
}
</style>
