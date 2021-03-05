<template>
  <div class="portfolio-body">
    <div class="mosaic">
      <div
        v-for="item in items"
        :key="item.id"
        :class="`mosaic-item ${item.class}`"
        :style="`background-image: url(${item.img})`"
        @click="showItem(item.id)"
      ></div>
    </div>
    <div v-if="modalActive" class="portfolio-modal" @click="toggleModal">
      <div class="portfolio-swiper-wrapper">
        <div class="close">
          <swiper :options="swiperOptions">
            <swiper-slide v-for="item in items" :key="item.id">
              <div class="portfolio-modal-img">
                <img :src="item.img" alt="" />
              </div>
            </swiper-slide>
            <div slot="pagination" class="swiper-pagination"></div>
            <div slot="button-prev" class="swiper-button-prev" @click.stop></div>
            <div slot="button-next" class="swiper-button-next" @click.stop></div>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioBody",
  data() {
    return {
      modalActive: false,
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        slidesPerView: 1,
        initialSlide: 0,
        loop: true,
        spaceBetween: 50,
      },
      items: [
        {
          id: 0,
          img: "/team/members/jacqueline.jpg",
          class: "",
        },
        {
          id: 1,
          img: "/team/members/john.png",
          class: "col2",
        },
        {
          id: 2,
          img: "/team/members/kevin.jpg",
          class: "",
        },
        {
          id: 3,
          img: "/team/members/nicolas.jpg",
          class: "row2",
        },
        {
          id: 4,
          img: "/team/members/reka.png",
          class: "row2",
        },
        {
          id: 5,
          img: "/team/members/troy.jpg",
          class: "col2",
        },
        {
          id: 6,
          img: "/team/members/valeria.jpg",
          class: "",
        },
      ],
    }
  },
  methods: {
    showItem(id) {
      this.swiperOptions.initialSlide = id
      this.toggleModal()
    },
    toggleModal() {
      this.modalActive = !this.modalActive
    },
  },
}
</script>

<style lang="scss">
.mosaic-item {
  min-height: 260px;
  height: auto;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mosaic {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-template-rows: auto;
  grid-gap: 1rem;
  grid-auto-flow: dense;
  padding: 1rem;
}
.col2 {
  @media (min-width: 580px) {
    grid-column: span 2;
  }
}
.row2 {
  @media (min-width: 580px) {
    grid-row: span 2;
  }
}
.portfolio-modal {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  padding: 10px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2001;
  background: rgba(0, 0, 0, 0.8);
  .portfolio-swiper-wrapper {
    position: relative;
    width: 100%;
    .swiper-wrapper {
      align-items: center;
    }
    .swiper-container {
      overflow: visible;
      .swiper-pagination {
        bottom: -35px;
        color: white;
        font-weight: 600;
      }
      .swiper-button-prev,
      .swiper-button-next {
        color: white;
      }
    }
    .portfolio-modal-img {
      margin: 0 auto;
      img {
        margin: 0 auto;
        max-height: 80vh;
        max-width: 60vw;
        width: auto;
        @screen sm {
          max-height: 90vh;
          max-width: 95vw;
        }
      }
    }
  }
}
</style>
