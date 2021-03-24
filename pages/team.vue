<template>
  <div>
    <div class="page-header"><h2>Team</h2></div>
    <team-list></team-list>
    <contact-section></contact-section>
  </div>
</template>

<script>
import TeamList from "../components/team/team-list"
import ContactSection from "../components/team/contact-section"
export default {
  name: "Team",
  components: { ContactSection, TeamList },
}
</script>

<style lang="scss"></style>
