<template>
  <section class="job-description-section">
    <div class="icon-container">
      <div class="icon-container_inner">
        <div class="icon-col">
          <span class="sprite-image-front sprite-hand"></span>
          <h5 class="heading">Never lift a finger</h5>
          <p class="text">Because time is better spent not wrestling WordPress</p>
        </div>
        <div class="icon-col">
          <span class="sprite-image-front sprite-bug"></span>
          <h5 class="heading">A bug free site</h5>
          <p class="text">Because broken sites mean lost customers</p>
        </div>
        <div class="icon-col">
          <span class="sprite-image-front sprite-cal"></span>
          <h5 class="heading">24/7/365</h5>
          <p class="text">Because problems happen at the worst possible time</p>
        </div>
      </div>
    </div>
    <div class="image-container">
      <img src="/web-development/bg-dot.png" alt="" />
    </div>
    <p class="desc">
      Our developers are available 24/7 to fix any small jobs, on the same day, from $79 /month.
    </p>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.job-description-section {
  padding: 2rem 0 4rem;
  margin: 4rem 2rem 2rem;

  @screen sm {
    margin-top: 2rem;
  }
}
.icon-container {
  margin: 0 auto;
  width: 92%;
  max-width: 960px;
}
.icon-container_inner {
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @screen sm {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 2rem;
  }
}
.sprite-image-front {
  background: url(../../static/web-development/sprite-front.png) no-repeat transparent;
}
.sprite-hand {
  background-position: -422px 0px;
  background-size: auto 72px;
  display: inline-block;
  width: 88px;
  height: 72px;
}

.sprite-bug {
  background-position: -98px 0px;
  background-size: auto 72px;
  display: inline-block;
  width: 88px;
  height: 72px;
}

.sprite-cal {
  background-position: -186px 0px;
  background-size: auto 72px;
  display: inline-block;
  width: 88px;
  height: 72px;
}

.icon-col {
  text-align: center;

  .text {
    max-width: 600px;
  }
}

.image-container {
  margin: 0 auto;
  width: 92%;
  max-width: 960px;
  display: flex;
  justify-content: center;
  img {
    max-width: 607px;
    width: 70%;
    height: auto;
  }

  @screen sm {
    display: none;
  }
}

.desc {
  max-width: 900px;
  margin: 0 auto;
  padding-bottom: 60px;
  border-bottom: 1px solid grey;
  text-align: center;
}
</style>
