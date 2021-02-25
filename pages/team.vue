<template>
  <div>
    <section class="banner">
      <div class="banner-inner">
        <div class="banner-content">
          <div class="banner-content_title">
            <h1 class="">Team</h1>
          </div>
        </div>
      </div>
      <div id="team-background" class="banner_background"></div>
    </section>
  </div>
</template>

<script>
export default {
  name: "team",
}
</script>

<style lang="scss">
.banner-content_title {
  h1 {
    font-size: 4rem;
  }
}
.banner_background {
  opacity: 30%;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
}
.banner_background#team-background {
  background-image: url("../static/team/team-rs.webp");
}
</style>
