<template>
  <section class="testimonials">
    <div class="testimonials-headliner">
      <h2>What some of our awesome customers are saying...</h2>
    </div>

    <div class="testimonials-carousel">
      <client-only>
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide v-for="{ url, name, text, id, company } in testimonials" v-bind:key="id">
            <div class="testimonials-card">
              <p>"{{ text }}"</p>
              <div>
                <img :src="require(`../static/testimonials/${url}`)" alt="Avatar" />
                <div>
                  <h5>{{ name }}</h5>
                  <div>{{ company }}</div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <!-- <div class="swiper-pagination" slot="pagination"></div> -->
        </swiper>
      </client-only>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        // slidesPerView: 3,
        // spaceBetween: 0,
        grabCursor: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      },
      testimonials: [
        {
          id: 1,
          url: "testimonial-01.webp",
          name: "Arya Stark",
          company: "Pebbled",
          text:
            "Dainty has helped us connect with our customers whilst they do all the technical work so effectively.",
        },
        {
          id: 2,
          url: "testimonial-02.webp",
          name: "Xavier Phillips",
          company: "Help Scout",
          text:
            "Dainty has helped us connect with our customers whilst they do all the technical work so effectively.",
        },
        {
          id: 3,
          url: "testimonial-03.webp",
          name: "Melissa Simmons",
          company: "Gleam",
          text:
            "Dainty has helped us connect with our customers whilst they do all the technical work so effectively.",
        },
        {
          id: 4,
          url: "testimonial-04.webp",
          name: "Harrison Smith",
          company: "SparkInc",
          text:
            "Dainty has helped us connect with our customers whilst they do all the technical work so effectively.",
        },
        {
          id: 5,
          url: "testimonial-05.webp",
          name: "Jamie Hillby",
          company: "Twitter",
          text:
            "Dainty has helped us connect with our customers whilst they do all the technical work so effectively.",
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
// -swiper-theme-color: green;

.testimonials-headliner {
  margin-bottom: 60px;
}

// .testimonials-carousel {
//   background: deepskyblue;
// }

.testimonials-card {
  width: 100%;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 15px 35px 0 rgba(46, 46, 84, 0.1), 0 5px 15px 0 rgba(0, 0, 0, 0.07);
  padding: 20px 25px;
  opacity: 0.5;
  // margin-left: 195px;
  // transition: opacity, 0.3s, transform 0.3s;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  > p {
    margin-bottom: 25px;
  }

  > div {
    display: flex;
  }

  @screen md {
    opacity: 1;
  }
}

.swiper {
  height: 300px;
  width: 100%;
  // background: deeppink;
  padding: 60px 0;
}

.swiper-slide {
  width: 535px !important;

  @screen md {
    width: 435px !important;
  }

  @screen sm {
    width: 310px !important;
  }
}

.swiper-slide {
  transform: scale(0.89);
  // opacity: 0;
}

.swiper-slide-active {
  position: relative;
  transform: scale(1);
  width: 700px !important;

  @screen md {
    width: 435px !important;
  }

  @screen sm {
    width: 310px !important;
  }
}

.swiper-slide-active > .testimonials-card {
  opacity: 1;
}
</style>
