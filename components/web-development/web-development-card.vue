<template>
  <div class="development-card">
    <div class="card-top">
      <img class="card-image" :src="image" />
      <img
        class="checked-image"
        :src="checked ? '/web-development/checked.png' : '/web-development/unchecked.svg'"
      />
    </div>
    <h5>{{ text }}</h5>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: () => "",
    },
    checked: {
      type: Boolean,
      default: () => false,
    },
    text: {
      type: String,
      default: () => "",
    },
  },
}
</script>

<style lang="scss" scoped>
.development-card {
  box-shadow: 0px 3px 16px #77777729;
  border-radius: 8px;
  padding: 24px;
  background: white;
  .card-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .card-image {
      @screen sm {
        width: 36px;
        height: 36px;
      }
    }
    .checked-image {
      width: 24px;
      width: 24px;
      @screen sm {
        width: 16px;
        height: 16px;
      }
    }
  }
  h5 {
    margin: 17px 0 0;
  }
}
</style>
