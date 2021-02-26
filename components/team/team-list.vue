<template>
  <div id="team" class="container team">
    <div v-if="members" class="wrapper">
      <div class="container section1">
        <team-member
          :height="`450px`"
          :name="members[0].name"
          :role="members[0].role"
          :link="members[0].link"
          :img="members[0].img"
        ></team-member>
        <team-member
          :height="`305px`"
          :name="members[1].name"
          :role="members[1].role"
          :link="members[1].link"
          :img="members[1].img"
        >
        </team-member>
        <team-member
          :height="`255px`"
          :name="members[1].name"
          :role="members[1].role"
          :link="members[1].link"
          :img="members[1].img"
        ></team-member>
      </div>
      <div class="container section2">
        <team-member
          :height="`255px`"
          :name="members[1].name"
          :role="members[1].role"
          :link="members[1].link"
          :img="members[1].img"
        ></team-member>
        <team-member
          :height="`374px`"
          :name="members[1].name"
          :role="members[1].role"
          :link="members[1].link"
          :img="members[1].img"
        ></team-member>
      </div>
      <div class="container section3">
        <team-member
          :height="`305px`"
          :name="members[1].name"
          :role="members[1].role"
          :link="members[1].link"
          :img="members[1].img"
        ></team-member>
        <team-member
          :height="`450px`"
          :name="members[1].name"
          :role="members[1].role"
          :link="members[1].link"
          :img="members[1].img"
        ></team-member>
        <team-member
          :height="`305px`"
          :name="members[1].name"
          :role="members[1].role"
          :link="members[1].link"
          :img="members[1].img"
        ></team-member>
        <team-member
          :height="`374px`"
          :name="members[1].name"
          :role="members[1].role"
          :link="members[1].link"
          :img="members[1].img"
        ></team-member>
        <team-member
          :height="`305px`"
          :name="members[1].name"
          :role="members[1].role"
          :link="members[1].link"
          :img="members[1].img"
        ></team-member>
        <team-member
          :height="`346px`"
          :name="members[1].name"
          :role="members[1].role"
          :link="members[1].link"
          :img="members[1].img"
        ></team-member>
        <team-member
          :height="`255px`"
          :name="members[1].name"
          :role="members[1].role"
          :link="members[1].link"
          :img="members[1].img"
        ></team-member>
        <team-member
          :height="`305px`"
          :name="members[1].name"
          :role="members[1].role"
          :link="members[1].link"
          :img="members[1].img"
        ></team-member>
        <team-member
          :height="`450px`"
          :name="members[1].name"
          :role="members[1].role"
          :link="members[1].link"
          :img="members[1].img"
        ></team-member>
        <team-member
          :height="`305px`"
          :name="members[1].name"
          :role="members[1].role"
          :link="members[1].link"
          :img="members[1].img"
        ></team-member>
        <team-member
          :height="`374px`"
          :name="members[1].name"
          :role="members[1].role"
          :link="members[1].link"
          :img="members[1].img"
        ></team-member>
      </div>
    </div>
  </div>
</template>

<script>
import TeamMember from "./team-member"
export default {
  name: "TeamList",
  components: { TeamMember },
  data() {
    return {
      members: [
        {
          name: "Nathan Hookway",
          link: "https://www.linkedin.com/in/webdesignnewcastle/",
          img: "https://zimple.digital/storage/app/media/Nathan%20Hookway.jpg",
          role: "General Manager",
        },
        {
          name: "Nathan Hookway",
          link: "https://www.linkedin.com/in/webdesignnewcastle/",
          img: "https://zimple.digital/storage/app/media/Nathan%20Hookway.jpg",
          role: "General Manager",
        },
        {
          name: "Nathan Hookway",
          link: "https://www.linkedin.com/in/webdesignnewcastle/",
          img: "https://zimple.digital/storage/app/media/Nathan%20Hookway.jpg",
          role: "General Manager",
        },
      ],
    }
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
    height: 1994px;
    @screen md {
      height: auto;
    }
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
}
</style>
