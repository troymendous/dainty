<template>
  <div>
    <ul>
      <li v-for="{ type, isOffered, serviceId } in services.slice(0, 7)" v-bind:key="serviceId">
        <check-icon v-if="isOffered" />
        <cross-icon v-else />
        <span>{{ type }}</span>
      </li>
      <li class="dots" v-if="isAtHome">...</li>
      <div v-else>
        <div></div>
        <li role="button" class="toggle-services_desktop" @click="showOverlay(cardId)">
          View more
        </li>
        <ul v-if="cardId === id" class="position-relative">
          <div class="popup-services_desktop">
            <h4>{{ plan }}</h4>
            <button @click="hideOverlay">View less</button>
            <div class="popup-services-inner_desktop">
              <div>
                <li
                  v-for="{ type, isOffered, serviceId } in services.slice(0, 7)"
                  v-bind:key="serviceId"
                >
                  <check-icon v-if="isOffered" />
                  <cross-icon v-else />
                  <span>{{ type }}</span>
                </li>
              </div>
              <div>
                <li
                  v-for="{ type, isOffered, serviceId } in services.slice(8)"
                  v-bind:key="serviceId"
                >
                  <check-icon v-if="isOffered" />
                  <cross-icon v-else />
                  <span>{{ type }}</span>
                </li>
              </div>
            </div>
          </div>
        </ul>

        <!-- Medium screens -->
        <div class="popup-services_mobile">
          <li
            role="button"
            class="card-btn"
            v-show="!hasCardExpanded"
            @click="hasCardExpanded = true"
          >
            View more
          </li>
          <div v-if="hasCardExpanded">
            <li
              role="button"
              class="card-btn"
              v-show="hasCardExpanded"
              @click="hasCardExpanded = false"
            >
              Veiw less
            </li>
            <li v-for="{ type, isOffered, serviceId } in services.slice(8)" v-bind:key="serviceId">
              <check-icon v-if="isOffered" />
              <cross-icon v-else />
              <span>{{ type }}</span>
            </li>
          </div>
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    services: Array,
    cardId: Number,
    plan: String,
  },
  data() {
    return {
      isAtHome: null,
      id: "",
      hasCardExpanded: false,
    }
  },
  created() {
    if (this.$route.path === "/pricing") this.isAtHome = false

    if (this.$route.path === "/") this.isAtHome = true
  },
  methods: {
    showOverlay(cardId) {
      this.$store.commit("toggleOverlay")
      document.body.style.overflow = "hidden"
      this.id = cardId
    },
    hideOverlay() {
      this.$store.commit("toggleOverlay")
      document.body.style.overflow = "auto"
      this.id = ""
    },
  },
  computed: {
    isActive() {
      return this.$store.state.showOverlay
    },
  },
}
</script>

<style lang="scss" scoped>
ul {
  text-align: left;
}

svg {
  display: inline-block !important;
  margin-right: 0.3rem;
  width: 12px;
  height: 12px;
}

li {
  padding: 0.6rem 0;
}

.position-relative {
  position: relative;
}

.card-btn,
.toggle-services_desktop {
  @apply text-accentPink;
}

.toggle-services_desktop {
  @screen md {
    display: none;
  }
}

h4 {
  text-transform: capitalize;
}

.dots {
  font-size: 24px;
}

.popup-services_desktop {
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 45;
  width: 70vw;
  max-width: 0 1144px;
  margin: 0 auto;
  background: #fff;
  padding: 60px;
  box-shadow: 0 0 0 1px rgba(67, 84, 149, 0.1), 0 1px 5px 1px rgba(19, 47, 70, 0.08);

  button {
    @apply text-accentPink;
  }

  @screen md {
    display: none;
  }
}

.popup-services-inner_desktop {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.popup-services_mobile {
  display: none;

  @screen md {
    display: block;
  }
}
</style>
