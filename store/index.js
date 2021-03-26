export const state = () => ({
  menuIsActive: false,
  showOverlay: false,
  email: "",
  fullname: "",
  setupIntent: {},
  customer: "",
})

export const mutations = {
  toggleMenuState(state) {
    state.menuIsActive = !state.menuIsActive
  },

  toggleOverlay(state) {
    state.showOverlay = !state.showOverlay
  },

  updateEmail(state, payload) {
    state.email = payload
  },

  updateFullname(state, payload) {
    state.fullname = payload
  },

  updateSetupIntent(state, payload) {
    state.setupIntent = payload
  },

  updateCustomer(state, payload) {
    state.customer = payload
  },
}
