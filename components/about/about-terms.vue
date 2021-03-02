<template>
  <div class="about-body_section">
    <div class="section-title">
      <h2>Terms Of Service</h2>
    </div>
    <div class="about-list_header">The language in this document</div>
    <div class="about-list_description">
      Although we like to be as human as possible, some of the below points are worded in a way that
      cannot be written how we’d like, due to legal reasons for both parties… If you've done work
      with us you know that we don't like sounding highly professional, so this terms of service
      does hurt our soul a little bit but it’s necessary.
    </div>
    <ul class="about-list">
      <li>
        <div @click="collapseToggle">Item 1</div>
        <div class="collapsible-content">Item1 content</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AboutTerms",
  methods: {
    collapseToggle(event) {
      const content = event.target.nextElementSibling
      if (content.style.display === "block") {
        content.style.display = "none"
      } else {
        content.style.display = "block"
      }
    },
  },
}
</script>

<style lang="scss">
.collapsible-content {
  display: none;
}
</style>
