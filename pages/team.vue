<template>
  <section-header></section-header>
  <team-list></team-list>
</template>

<script>
import SectionHeader from "../components/team/section-header"
import TeamList from "../components/team/team-list"
export default {
  name: "Team",
  components: { TeamList, SectionHeader },
}
</script>

<style lang="scss"></style>
