<template>
  <div>
    <section>
      <div class="section-header">
        <div class="section-header_title">
          <h1>Team</h1>
        </div>
      </div>
      <div
        :style="`
      background-image: url(/_nuxt/static/team/team-rs.webp);
      height: 100%;
    `"
        class="section-header_background"
      ></div>
      <div class="fade"></div>
    </section>
  </div>
</template>

<script>
export default {
  name: "SectionHeader",
}
</script>

<style lang="scss">
.section-header_title {
  z-index: 10;
  h1 {
    font-size: 8rem;
    font-weight: 600;
  }
}
.section-header {
  position: relative;
  display: flex;
  align-items: flex-end;
  min-height: 500px;
  height: auto;
  padding: 2rem;
  margin: 2rem;

  @screen md {
    padding-top: 6rem;
  }

  @screen sm {
    padding-top: 3rem;
  }
}
.section-header_background {
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
.fade {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%),
    linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.7) 100%);
  z-index: 0;
}
</style>
