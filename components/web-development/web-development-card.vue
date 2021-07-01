<template>
  <div :class="`development-card ${checked ? 'checked-card' : ''}`">
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
  border-radius: 8px;
  box-shadow: 0px 3px 16px #77767629;
  padding: 24px;
  background: white;
  width: calc(25% - 18.75px);
  box-sizing: border-box;
  @screen md {
    width: calc(50% - 12.5px);
  }
  @screen sm {
    width: calc(50% - 5px);
  }
  &:hover {
    cursor: pointer;
    box-shadow: 0px 3px 16px #77767660;
  }
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
.checked-card {
  box-shadow: 0px 3px 16px #77767665;
}
</style>
