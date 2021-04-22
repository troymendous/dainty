<template>
  <section class="services-offered-section">
    <h2 class="heading">Here are just a few ways that we can help you...</h2>
    <h6 class="sub-heading">
      We can fix any small issue you request and improve your site in a number of ways. A few
      examples include:
    </h6>
    <div class="icon-wrapper">
      <div class="container grid-icon-container_primary">
        <div>
          <span class="sprite-image-front sprite-hack"></span>
          <p>Stop site hacking</p>
        </div>
        <div>
          <span class="sprite-image-front sprite-boost"></span>
          <p>Boost your brand</p>
        </div>
        <div>
          <span class="sprite-image-front sprite-conversion"></span>
          <p>Boost conversion</p>
        </div>
        <div>
          <span class="sprite-image-front sprite-speed"></span>
          <p>Speed up your site</p>
        </div>
      </div>
      <div class="container grid-icon-container_secondary">
        <div>
          <span class="sprite-image-front sprite-grow"></span>
          <p>Grow your bussiness traffic</p>
        </div>
        <div>
          <span class="sprite-image-front sprite-search"></span>
          <p>Increase search engine traffic</p>
        </div>
        <div class="bounce-lg">
          <span class="sprite-image-front sprite-bounce"></span>
          <p>Reduce your bounce rate</p>
        </div>
      </div>
      <div>
        <div class="bounce-sm">
          <span class="sprite-image-front sprite-bounce"></span>
          <p>Reduce your bounce rate</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.services-offered-section {
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

.icon-wrapper {
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
}

.container {
  margin-top: 5rem;
  @screen sm {
    margin-top: 0rem;
  }
}

.grid-icon-container_primary {
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @screen sm {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 2rem;
    margin: 0 0 2rem;
  }
}

.grid-icon-container_secondary {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 5rem;

  @screen sm {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 2rem;
    margin: 0 0 2rem;
  }
}

.sprite-image-front {
  background: url(../../static/web-development/sprite-front.png) no-repeat transparent;
}

.sprite-hack {
  background-position: -390px 0px;
  background-size: auto 75px;
  display: inline-block;
  width: 48px;
  height: 48px;
}

.sprite-boost {
  background-position: 0px 0px;
  background-size: auto 75px;
  display: inline-block;
  width: 48px;
  height: 48px;
}

.sprite-conversion {
  background-position: -285px 0px;
  background-size: auto 75px;
  display: inline-block;
  width: 48px;
  height: 48px;
}

.sprite-speed {
  background-position: -580px 0px;
  background-size: auto 75px;
  display: inline-block;
  width: 48px;
  height: 48px;
}

.sprite-grow {
  background-position: -340px 0px;
  background-size: auto 75px;
  display: inline-block;
  width: 48px;
  height: 48px;
}

.sprite-search {
  background-position: -530px 0px;
  background-size: auto 75px;
  display: inline-block;
  width: 48px;
  height: 48px;
}

.sprite-bounce {
  background-position: -55px 0px;
  background-size: auto 75px;
  display: inline-block;
  width: 48px;
  height: 48px;
}

.bounce-lg {
  display: block;

  @screen sm {
    display: none;
  }
}

.bounce-sm {
  display: none;

  @screen sm {
    display: block;
    margin: 2rem 0;
  }
}
</style>
