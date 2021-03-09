<template>
  <section>
    <h2>Dainty is your one-stop development and digital marketing agency</h2>
    <div>
      <div v-for="{ heading, text, icon, id } in services" :key="id">
        <span :class="`dainty-icon dainty-icon-${icon}`"></span>
        <h4>{{ heading }}</h4>
        <p>{{ text }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          heading: "All Your Design Needs",
          text:
            "Why go to all the headaches of hiring a freelancer when you can have an amazing dedicated designer for all your needs.",
          icon: "laptop",
          id: "03",
        },
        {
          heading: "Website & App Development",
          text:
            "No templates here. We custom design your website because it is your digital asset that best represents your brand. ",
          icon: "presentation",
          id: "09",
        },
        {
          heading: "Marketing",
          text:
            "Imagine your product/service is on one side of a ledge and your customers are on the other side. We are the bridge that brings the two together.",
          icon: "target",
          id: "012",
        },
        {
          heading: "Tweaks & Improvements",
          text:
            "Got an existing site and just need something touched up? We got you covered… don’t outsource, try us first. We promise you won’t regret it.",
          icon: "visualization",
          id: "015",
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "DaintyIcon";
  font-style: normal;
  font-weight: normal;
  src: url("~static/fonts/dainty-icon.ttf") format("truetype");
}

.dainty-icon {
  font-family: DaintyIcon;
}

.dainty-icon-laptop:before {
  content: "\e907";
}

.dainty-icon-presentation:before {
  content: "\e906";
}

.dainty-icon-target:before {
  content: "\e905";
}

.dainty-icon-visualization:before {
  content: "\e904";
}
</style>
