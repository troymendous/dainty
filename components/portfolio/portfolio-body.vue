<template>
  <div class="mosaic">
    <div
      v-for="item in items"
      :key="item.id"
      :class="`mosaic-item ${item.class}`"
      :style="`background-image: url(${item.img})`"
    ></div>
  </div>
</template>

<script>
export default {
  name: "PortfolioBody",
  data() {
    return {
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
</style>
