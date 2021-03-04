<template>
  <div class="mosaic">
    <div class="test"></div>
    <div class="test cols2" style="background-color: aquamarine"></div>
    <div class="test"></div>
    <div class="test"></div>
    <div class="test rows2" style="background-color: rosybrown"></div>
    <div class="test"></div>
    <div class="test"></div>
    <div class="test"></div>
    <div class="test"></div>
    <div class="test cols2" style="background-color: aquamarine"></div>
    <div class="test"></div>
    <div class="test"></div>
    <div class="test rows2" style="background-color: rosybrown"></div>
    <div class="test"></div>
    <div class="test"></div>
    <div class="test"></div>
  </div>
</template>

<script>
export default {
  name: "PortfolioBody",
}
</script>

<style lang="scss">
.test {
  min-height: 260px;
  height: auto;
  background-color: #b8b8d9;
}
.mosaic {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-template-rows: auto;
  grid-gap: 1rem;
  grid-auto-flow: dense;
  padding: 1rem;
}
.cols2 {
  @media (min-width: 580px) {
    grid-column: span 2;
  }
}
.rows2 {
  @media (min-width: 580px) {
    grid-row: span 2;
  }
}
</style>
