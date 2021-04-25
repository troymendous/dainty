<template>
  <section class="banner">
    <img src="/web-development/bg_23.jpg" alt="" />

    <div class="banner-text">
      <h1>Imagine never having another WordPress headache...</h1>
      <p>
        With 24/7 access to the world's best developers for unlimited small jobs,
        <br />
        where will you spend your new found time?
      </p>
      <nuxt-link to="/">Sign up today</nuxt-link>
      <div class="job-statistics">
        <div v-for="{ number, text, id } in jobsStatistics" :key="id" class="job-statistics-card">
          <div class="job-statistics-card_number">{{ number }}</div>
          <div class="job-statistics-card_text">{{ text }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      jobsStatistics: [
        {
          id: 10000,
          number: "40000+",
          text: "jobs complete since Jun 2013",
        },
        {
          id: 20000,
          number: "39",
          text: "team members 24/7 worldwide",
        },
        {
          id: 30000,
          number: "4000",
          text: "jobs completed this month",
        },
        {
          id: 40000,
          number: "1000+",
          text: "current active customers",
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.banner {
  height: 445px;
  width: 100%;
  background: black;
  overflow: hidden;
  margin: 6rem 0 0;

  img {
    width: 100%;
    height: 100%;
    opacity: 0.4;
  }

  h1 {
    color: white;
    margin: 0.67rem 0;
  }

  @screen md {
    height: 635px;
  }

  @media (max-width: 768px) {
    height: 570px;
  }

  @screen sm {
    height: 690px;
  }
}

.banner-text {
  width: 100%;
  position: absolute;
  top: 20%;
  text-align: center;

  p {
    color: #ffffff;
  }

  a {
    display: inline-block;
    padding: 0.75rem 1rem;
    font-weight: 500;
    border-radius: 8px;
    width: 140px;
    text-align: center;
    font-size: 14px;
    background: #fff;
    color: var(--acc-purple-color);
    border: 2px solid var(--acc-purple-color);
    margin: 1rem 0;

    &:hover {
      background: var(--acc-pink-color);
      border: 2px solid transparent;
      color: #fff;
    }
  }
}

.job-statistics {
  margin: 25px auto 0px;
  max-width: 700px;
  border-top: 1px solid #686b68;
  padding-top: 30px;
  padding-bottom: 30px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @screen sm {
    grid-template-columns: repeat(2, 1fr);
  }
}

.job-statistics-card {
  &_number {
    color: #ffffff;
    font-weight: 300;
    font-size: 36px;

    @screen sm {
      font-size: 25px;
    }
  }

  &_text {
    color: #ffffff;
    font-weight: 100;
    font-size: 14px;
    opacity: 0.6;
  }
}
</style>
