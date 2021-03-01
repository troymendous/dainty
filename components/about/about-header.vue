<template>
  <div>
    <section>
      <div class="about-header">
        <div class="about-header_title">
          <h2>Who the heck are we</h2>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "AboutHeader",
}
</script>

<style lang="scss">
.about-header {
  position: relative;
  display: flex;
  align-items: flex-end;
  min-height: 300px;
  height: auto;
  padding: 2rem;
  margin: 2rem;
}
.about-header_title {
  margin: 0 auto;
}
</style>
