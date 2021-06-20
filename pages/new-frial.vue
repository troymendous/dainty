<template>
  <div>
    <design-type-step />
    <business-type-step />
  </div>
</template>

<script>
import BusinessTypeStep from "../components/onboarding/business-type-step.vue"
import DesignTypeStep from "../components/onboarding/design-type-step.vue"

export default {
  components: { DesignTypeStep, BusinessTypeStep },
}
</script>

<style lang="scss" scoped></style>
