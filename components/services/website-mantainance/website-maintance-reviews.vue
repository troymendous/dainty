<template>
  <section class="website-maintanance_reviews">
    <h3 class="website-maintanance_reviews-heading">Who we are</h3>
    <div class="website-maintanance_reviews-heading-border"></div>
    <p class="website-maintanance_reviews-sub-heading">
      Dainty is your one stop development and digital marketing agency
    </p>
    <div class="website-maintanance_stats">
      <div class="website-maintanance_stats-card">
        <div>44,000+</div>
        <p>
          jobs completed since
          <br />
          June 2013
        </p>
      </div>

      <div class="website-maintanance_stats-card">
        <div>39</div>
        <p>team members</p>
        <p>24/7 worldwide</p>
      </div>

      <div class="website-maintanance_stats-card">
        <div>4,000+</div>
        <p>jobs completed</p>
        <p>this month</p>
      </div>

      <div class="website-maintanance_stats-card">
        <div>1,000+</div>
        <p>current active customers</p>
        <p>customers</p>
      </div>
    </div>

    <div class="website-maintanance_slider"></div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.website-maintanance_reviews {
  background-color: #f3fbff;
  height: 476px;
  width: 100%;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;

  &-heading {
    padding-top: 60px;
    text-align: center;
    // font-size: 30px;
  }

  &-heading-border {
    border-bottom: 2px solid #5b39c9;
    width: 60px;
  }

  &-sub-heading {
    text-align: center;
    padding-top: 36px;
  }
}

.website-maintanance_stats {
  margin-top: 48px;
  display: grid;
  grid-template-columns: 240px 240px 240px 240px;
}

.website-maintanance_stats-card {
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    font-size: 24px;
    font-weight: bolder;
  }
}

.website-maintanance_slider {
  margin-top: 36px;
}
</style>
