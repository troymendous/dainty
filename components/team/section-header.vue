<template>
  <div>
    <section>
      <div class="section-header">
        <div class="section-header_title">
          <h1>Team</h1>
        </div>
      </div>
      <div id="team-background" class="section-header_background"></div>
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
.section-header_background#team-background {
  background-image: url("../../static/team/team-rs.webp");
}
</style>
