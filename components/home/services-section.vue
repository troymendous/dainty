<template>
  <div class="container mr-24 p-4">
    <div class="rounded-lg bg-white p-4 shadow-lg">
      <!-- <h2 class="text-lg font-bold">Main Card</h2> -->
      <div class="mt-4 flex flex-row">
        <div class="w-1/3 p-2" v-for="{ heading, text, linkto, id } in services" :key="id">
          <div class="rounded-lg bg-white p-4 shadow-lg">
            <h3 class="text-lg font-bold">{{ heading }}</h3>
            <p>{{ text }}</p>
            <div class="mt-4">
              <a :href="linkto" class="font-bold text-blue-500">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          heading: "Reliable Website Hosting",
          text:
            "Experience unmatched website performance with our fast, secure, and reliable hosting services. We guarantee 99.9% uptime, giving your customers the best possible experience.",
          icon: "laptop",
          linkto: "https://www.daintydigital.com/website-hosting",
          id: "03",
        },
        {
          heading: "Proactive Website Management",
          text:
            "Don't stress over the day-to-day upkeep of your site. Our team takes care of everything – from updates and backups to performance optimization.",
          linkto: "https://www.daintydigital.com/website-management",
          icon: "presentation",
          id: "09",
        },
        {
          heading: "Comprehensive SEO Services",
          text:
            "Stay ahead of the competition with our SEO services. Our experts employ the latest strategies to improve your online visibility and drive more organic traffic to your site.",
          icon: "target",
          id: "012",
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
$iconGreen: #5dd8d3;
$iconPurple: #9364d4;
$iconPink: #ee539b;
$iconYellow: #fddd6e;
@font-face {
  font-family: "DaintyIcon";
  font-style: normal;
  font-weight: normal;
  src: url("~static/fonts/dainty-icon.ttf") format("truetype");
}
.icon-wrapper {
  width: 191px;
  height: 191px;
}
.dainty-icon {
  font-family: DaintyIcon;
  font-size: 60px;
}
.dainty-icon-laptop:before {
  content: "\e907";
  color: $iconGreen;
}
.dainty-icon-presentation:before {
  content: "\e906";
  color: $iconPurple;
}
.dainty-icon-target:before {
  content: "\e905";
  color: $iconPink;
}
.dainty-icon-visualization:before {
  content: "\e904";
  color: $iconYellow;
}
.services-homepage {
  display: block;
  width: 100%;
  max-width: 1144px;
  margin: 0rem auto 6rem;
}
// .services-homepage-inner {
//   padding-bottom: 6rem;
// }
h2 {
  text-align: center;
  margin-bottom: 48px;
}
.service-cards {
  width: 100%;
  display: grid;
  height: 470px;

  grid-template-columns: repeat(3, 260px);
  grid-gap: 100px;
  padding: 0 7rem;
  > div {
    font-size: 20px;
    line-height: 30px;
    border-radius: 4px;
    padding: 36px 25px 16px 25px;
    box-shadow: rgba(46, 61, 98, 0.1) 0px 10px 60px 0px;
    &:hover {
      h5,
      p,
      .dainty-icon:before,
      a:before {
        color: #fff !important;
      }
    }
  }
  h5 {
    height: 28px;
    margin: 60px 0 40px;
  }
  p {
    height: 195px;
  }
  .arrow-link:before {
    content: "\e903";
    font-family: DaintyIcon;
    transform: rotate(180deg);
    display: inline-block;
    font-size: 32px;
    color: #bcbfc7;
    margin-top: 20px;
  }
  div:nth-child(1) {
    &:hover {
      background: $iconGreen;
      .dainty-icon {
        background: $iconGreen;
      }
    }
  }
  div:nth-child(2) {
    &:hover {
      background: $iconPurple;
      .dainty-icon {
        background: $iconPurple;
      }
    }
  }
  div:nth-child(3) {
    &:hover {
      background: $iconPink;
      .dainty-icon {
        background: $iconPink;
      }
    }
  }
  div:nth-child(4) {
    &:hover {
      background: $iconYellow;
      .dainty-icon {
        background: $iconYellow;
      }
    }
  }
  @screen md {
    grid-template-columns: repeat(2, 330px);
    justify-content: space-between;
  }
  @screen sm {
    grid-template-columns: minmax(300px, 1fr);
    justify-content: center;
  }
}
</style>
