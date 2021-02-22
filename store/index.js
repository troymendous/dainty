export const state = () => ({
  menuIsActive: false,
})

export const mutations = {
  toggleMenuState(state) {
    state.menuIsActive = !state.menuIsActive
  },
}
