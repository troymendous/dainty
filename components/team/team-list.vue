<template>
  <div id="team" class="container team">
    <div v-if="members" class="wrapper">
      <div class="container section1 slide-in">
        <team-member
          v-for="i in [0, 1, 2]"
          :key="i"
          :height="heights[i]"
          :member="members[i]"
          @memberClicked="showMember"
        ></team-member>
      </div>
      <div class="container section2">
        <team-member
          v-for="i in [3, 4]"
          :key="i"
          :height="heights[i]"
          :member="members[i]"
          @memberClicked="showMember"
        ></team-member>
      </div>
      <div class="container section3">
        <team-member
          v-for="i in [5, 6, 6, 8, 9, 10, 11, 12, 13, 14, 15]"
          :key="i"
          :height="heights[i]"
          :member="members[i]"
          @memberClicked="showMember"
        ></team-member>
      </div>
    </div>
    <div v-if="modalActive" class="team-modal">
      <div class="modal-mask" @click="toggleModal">
        <div class="modal-wrapper">
          <div class="modal-container" @click.stop>
            <div class="close"></div>
            <swiper class="swiper" :options="swiperOption">
              <swiper-slide v-for="{ name, role, link, id } in members" :key="id">
                <div class="modal-container-text text-scroll">
                  <h4 class="modal-container_name">
                    {{ name }}
                    <a :href="link" target="_blank" class="linkedin">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#322F31"
                          d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                        ></path>
                      </svg>
                    </a>
                  </h4>
                  <h5 class="modal-container_role">{{ role }}</h5>
                  <h6 class="modal-container_value">VALUE TO THE ROOM</h6>
                  <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                  </p>
                  <nuxt-link to="/about">
                    <div class="modal-container_read">Read About Us</div>
                  </nuxt-link>
                </div>
              </swiper-slide>
            </swiper>
            <swiper class="swiper" :options="swiperOption">
              <swiper-slide v-for="{ img, id } in members" :key="id">
                <div
                  class="features-carousel-wrapper modal-container_img"
                  :style="`
                    background-image: url('${img}');
                  `"
                >
                  <div class="container nav">
                    <div slot="button-prev" class="item modal-button-prev">
                      <div class="container bg"></div>
                      <span>Prev</span>
                    </div>
                    <div slot="button-next" class="item modal-button-next">
                      <div class="container bg"></div>
                      <span>Next</span>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import json from "../../content/team-members"
import TeamMember from "./team-member"
export default {
  name: "TeamList",
  components: { TeamMember },
  data() {
    return {
      members: json,
      heights: [
        "450px",
        "305px",
        "255px",
        "255px",
        "374px",
        "305px",
        "450px",
        "305px",
        "374px",
        "305px",
        "346px",
        "255px",
        "305px",
        "450px",
        "305px",
        "374px",
      ],
      slideInElements: [],
      modalActive: false,
      memberSelected: null,
      swiperOption: {
        navigation: {
          nextEl: ".modal-button-next",
          prevEl: ".modal-button-prev",
        },
        initialSlide: 0,
        width: 500,
      },
    }
  },
  mounted() {
    this.slideInElements = Array.from(document.getElementsByClassName("slide-in"))
    document.addEventListener("scroll", this.handleScroll)
    this.handleScroll()
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.handleScroll)
  },
  methods: {
    handleScroll(evt) {
      for (let i = 0; i < this.slideInElements.length; i++) {
        const elem = this.slideInElements[i]
        if (this.isElemVisible(elem)) {
          elem.style.opacity = "1"
          elem.style.transform = "scale(1)"
          this.slideInElements.splice(i, 1)
        }
      }
    },
    isElemVisible(el) {
      const rect = el.getBoundingClientRect()
      const elemTop = rect.top + 200
      const elemBottom = rect.bottom
      return elemTop < window.innerHeight && elemBottom >= 0
    },
    showMember(member) {
      this.swiperOption.initialSlide = member.id
      this.memberSelected = member
      this.toggleModal()
    },
    toggleModal() {
      this.modalActive = !this.modalActive
    },
  },
}
</script>

<style lang="scss">
footer {
  clear: left;
}
.container {
  float: left;
  width: 100%;
}
.wrapper {
  margin: 0 auto;
  width: 1170px;

  @screen md {
    width: 100%;
  }
}
.team {
  padding: 40px 0;
  .box {
    float: left;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    margin-top: 0;
    background-position: center;
    background-size: cover;
    @screen md {
      height: 85% !important;
      width: 85% !important;
      float: none !important;
      margin-left: auto !important;
      margin-right: auto !important;
    }
    .text {
      position: absolute;
      background: #ffffff;
      width: 250px;
      height: 70px;
      .padding {
        padding: 15px 30px 17px 18px;
        width: 250px;
      }
      .name {
        font-size: 16px;
        font-weight: bold;
        line-height: 22px;
        float: left;
      }
      .linkedin {
        float: right;
        margin-top: 4px;
        img {
          width: 13px;
          float: right;
        }
      }
      .role {
        font-size: 12px;
        line-height: 16px;
        float: left;
        clear: left;
      }
      &.hover {
        width: 0;
        overflow: hidden;
        color: #ffffff;
        background: linear-gradient(90deg, var(--acc-pink-color) 0%, var(--acc-purple-color) 100%);
        transition: all 0.5s cubic-bezier(0.55, 0, 0.28, 1);
        transition-property: all;
        transition-duration: 0.5s;
        transition-timing-function: cubic-bezier(0.55, 0, 0.28, 1);
        transition-delay: 0s;
      }
      .line {
        width: 3px;
        background: linear-gradient(180deg, var(--acc-pink-color) 0%, var(--acc-purple-color) 100%);
        height: 100%;
      }
    }
    &:hover {
      .text {
        &.hover {
          width: 250px;
        }
      }
    }
    .triangle {
      position: absolute;
      @screen md {
        display: none;
      }
    }
  }
  .section1 {
    position: relative;
    .box {
      &:nth-child(1) {
        width: 700px;
        position: absolute;
        bottom: 0;
        left: 0;
        @screen md {
          position: relative;
        }
        .text {
          left: 0;
          bottom: 30px;
          @screen md {
            bottom: 0;
            -webkit-clip-path: polygon(
              0 0,
              0 100%,
              100% 100%,
              100% 30px,
              -webkit-calc(100% - 30px) 0
            );
            clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 30px, calc(100% - 30px) 0);
          }
        }
        .triangle {
          border-bottom: 80px solid transparent;
          border-left: 80px solid #ffffff;
          left: 0;
          top: 0;
        }
      }
      &:nth-child(2) {
        width: 470px;
        float: right;
        .text {
          left: 0;
          bottom: 0;
          -webkit-clip-path: polygon(
            0 0,
            0 100%,
            100% 100%,
            100% 30px,
            -webkit-calc(100% - 30px) 0
          );
          clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 30px, calc(100% - 30px) 0);
        }
        .triangle {
          border-bottom: 80px solid transparent;
          border-right: 80px solid #ffffff;
          right: 0;
          top: 0;
        }
      }
      &:nth-child(3) {
        width: 370px;
        float: right;
        clear: right;
        margin-right: 100px;
        .text {
          bottom: 0;
          right: 0;
          @screen md {
            left: 0;
            -webkit-clip-path: polygon(
              0 0,
              0 100%,
              100% 100%,
              100% 30px,
              -webkit-calc(100% - 30px) 0
            );
            clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 30px, calc(100% - 30px) 0);
          }
        }
      }
    }
  }
  .section2 {
    padding: 0 80px 0 100px;
    @screen md {
      padding: 0;
    }
    .box {
      &:nth-child(1) {
        width: 370px;
        .text {
          left: 0;
          bottom: 0;
          -webkit-clip-path: polygon(
            0 0,
            0 100%,
            100% 100%,
            100% 30px,
            -webkit-calc(100% - 30px) 0
          );
          clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 30px, calc(100% - 30px) 0);
        }
      }
      &:nth-child(2) {
        width: 620px;
        float: right;
        .text {
          left: 0;
          bottom: 119px;
          -webkit-clip-path: polygon(
            0 0,
            0 100%,
            -webkit-calc(100% - 30px) 100%,
            100% -webkit-calc(100% - 30px),
            100% 0
          );
          clip-path: polygon(0 0, 0 100%, calc(100% - 30px) 100%, 100% calc(100% - 30px), 100% 0);
          @screen md {
            bottom: 0;
            -webkit-clip-path: polygon(
              0 0,
              0 100%,
              100% 100%,
              100% 30px,
              -webkit-calc(100% - 30px) 0
            );
            clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 30px, calc(100% - 30px) 0);
          }
        }
        .triangle {
          border-bottom: 80px solid transparent;
          border-right: 80px solid #ffffff;
          right: 0;
          top: 0;
        }
      }
    }
  }
  .section3 {
    position: relative;
    .box {
      top: 0;
      &.column1 {
        right: 700px;
      }
      &.column2 {
        left: 470px;
      }
      &:nth-child(7n + 1) {
        width: 470px;
        @screen md {
          width: 100%;
        }
        .text {
          bottom: 0;
          right: 0;
          -webkit-clip-path: polygon(
            0 0,
            0 100%,
            100% 100%,
            100% 30px,
            -webkit-calc(100% - 30px) 0
          );
          clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 30px, calc(100% - 30px) 0);
          @screen md {
            left: 0;
          }
        }
        .triangle {
          border-bottom: 80px solid transparent;
          border-left: 80px solid #ffffff;
          left: 0;
          top: 0;
        }
      }
      &:nth-child(7n + 2) {
        width: 700px;
        float: right;
        @screen md {
          float: left;
          width: 100%;
        }
        .text {
          bottom: 0;
          right: 0;
          @screen md {
            left: 0;
            -webkit-clip-path: polygon(
              0 0,
              0 100%,
              100% 100%,
              100% 30px,
              -webkit-calc(100% - 30px) 0
            );
            clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 30px, calc(100% - 30px) 0);
          }
        }
        .triangle {
          border-bottom: 80px solid transparent;
          border-right: 80px solid #ffffff;
          right: 0;
          top: 0;
        }
      }
      &:nth-child(7n + 3) {
        width: 470px;
        @screen md {
          width: 100%;
        }
        .text {
          left: 0;
          bottom: 0;
          -webkit-clip-path: polygon(
            0 0,
            0 100%,
            100% 100%,
            100% 30px,
            -webkit-calc(100% - 30px) 0
          );
          clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 30px, calc(100% - 30px) 0);
        }
      }
      &:nth-child(7n + 4) {
        width: 600px;
        float: right;
        margin-right: 100px;
        @screen md {
          float: left;
          width: 100%;
        }
        .text {
          left: 0;
          top: 0;
          -webkit-clip-path: polygon(
            0 0,
            0 100%,
            -webkit-calc(100% - 30px) 100%,
            100% -webkit-calc(100% - 30px),
            100% 0
          );
          clip-path: polygon(0 0, 0 100%, calc(100% - 30px) 100%, 100% calc(100% - 30px), 100% 0);
          @screen md {
            bottom: 0;
            top: auto;
            -webkit-clip-path: polygon(
              0 0,
              0 100%,
              100% 100%,
              100% 30px,
              -webkit-calc(100% - 30px) 0
            );
            clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 30px, calc(100% - 30px) 0);
          }
        }
        .triangle {
          &.tri1 {
            border-bottom: 80px solid transparent;
            border-right: 80px solid #ffffff;
            right: 0;
            top: 0;
          }
          &.tri2 {
            border-top: 80px solid transparent;
            border-right: 80px solid #ffffff;
            right: 0;
            bottom: 0;
          }
        }
      }
      &:nth-child(7n + 5) {
        width: 470px;
        @screen md {
          width: 100%;
        }
        .text {
          bottom: 0;
          right: 0;
          @screen md {
            left: 0;
            -webkit-clip-path: polygon(
              0 0,
              0 100%,
              100% 100%,
              100% 30px,
              -webkit-calc(100% - 30px) 0
            );
            clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 30px, calc(100% - 30px) 0);
          }
        }
        .triangle {
          border-top: 80px solid transparent;
          border-left: 80px solid #ffffff;
          left: 0;
          bottom: 0;
        }
      }
      &:nth-child(7n + 6) {
        width: 520px;
        float: right;
        margin-right: 180px;
        @screen md {
          float: left;
          width: 100%;
        }
        .text {
          bottom: 0;
          right: 0;
          @screen md {
            left: 0;
            -webkit-clip-path: polygon(
              0 0,
              0 100%,
              100% 100%,
              100% 30px,
              -webkit-calc(100% - 30px) 0
            );
            clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 30px, calc(100% - 30px) 0);
          }
        }
      }
      &:nth-child(7n + 7) {
        width: 390px;
        float: right;
        @screen md {
          float: left;
          width: 100%;
        }
        .text {
          bottom: 0;
          right: 0;
          -webkit-clip-path: polygon(
            0 0,
            0 100%,
            100% 100%,
            100% 30px,
            -webkit-calc(100% - 30px) 0
          );
          clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 30px, calc(100% - 30px) 0);
          @screen md {
            left: 0;
          }
        }
        .triangle {
          border-top: 80px solid transparent;
          border-left: 80px solid #ffffff;
          left: 0;
          bottom: 0;
        }
      }
    }
  }
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    display: table;
    transition: opacity 0.3s ease;
  }
  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }
  .modal-container {
    display: flex;
    position: relative;
    width: 1000px;
    margin: 0px auto;
    background-color: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    -webkit-clip-path: polygon(
      0 0,
      0 calc(100% - 80px),
      80px 100%,
      100% 100%,
      100% 80px,
      calc(100% - 80px) 0
    );
    clip-path: polygon(
      0 0,
      0 calc(100% - 80px),
      80px 100%,
      100% 100%,
      100% 80px,
      calc(100% - 80px) 0
    );
    .close {
      position: absolute;
      width: 20px;
      height: 20px;
      top: 0px;
      right: g0px;
      background-image: url(../../static/icons/x.svg);
      background-position: center center;
      background-size: cover;
      background-repeat: no-repeat;
      cursor: pointer;
      z-index: 10;
    }
    .text-scroll {
      max-height: 500px;
      overflow: scroll;
    }
    .modal-container-text {
      padding: 40px 50px 80px 40px;
      .modal-container_name {
        font-weight: 600;
        a {
          float: right;
          margin-top: 15px;
        }
      }
      .modal-container_role {
        font-weight: 400;
        margin-bottom: 40px;
      }
      .modal-container_value {
        color: var(--acc-purple-color);
        font-family: "sofia-pro", sans-serif;
        font-size: 10px;
        text-transform: uppercase;
        font-weight: bold;
        margin-bottom: 30px;
      }
      .modal-container_read {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 0 90px;
        font-family: "sofia-pro", sans-serif;
        font-weight: 600;
        line-height: 60px;
        color: #e9e9e9;
        background-color: var(--acc-purple-color);
      }
    }
    .modal-container_img {
      background-repeat: no-repeat;
      background-position: center;
      height: 500px;
      background-size: auto 100%;
    }
    .nav {
      position: absolute;
      bottom: 0;
      .item {
        float: left;
        line-height: 60px;
        padding: 0 20px;
        font-size: 16px;
        width: 50%;
        cursor: pointer;
        font-weight: bold;
        opacity: 0.5;
        span {
          background-size: 20px;
          background-repeat: no-repeat;
        }
        &.modal-button-prev {
          background-color: #e9e9e9;
          span {
            padding-left: 40px;
            background-image: url(../../static/icons/arrow-left.svg);
            background-position: left center;
          }
        }
        &.modal-button-next {
          color: white;
          background-color: black;
          text-align: right;
          span {
            padding-right: 40px;
            background-image: url(../../static/icons/arrow-right.svg);
            background-position: right center;
          }
        }
      }
    }
  }
}
</style>
