export const state = () => ({
  menuIsActive: false,
  showOverlay: false,
  email: "",
  fullname: "",
  customer: "",
  designTypes: [
    {
      type: "Banner Design",
      checked: true,
      iconPath: "/onboarding/banner-design_icon.svg",
    },
    {
      type: "Logo Design",
      checked: true,
      iconPath: "/onboarding/logo-design_icon.svg",
    },
    {
      type: "Social media Post",
      checked: true,
      iconPath: "/onboarding/social-media_icon.svg",
    },
    {
      type: "Other design",
      checked: true,
      iconPath: "/onboarding/other-design_icon.svg",
    },
  ],
  businessTypes: [
    {
      type: "Personal",
      checked: true,
      iconPath: "/onboarding/personal_icon.svg",
    },
    {
      type: "Business",
      checked: true,
      iconPath: "/onboarding/business_icon.svg",
    },
    {
      type: "Other",
      checked: true,
      iconPath: "/onboarding/other_icon.svg",
    },
  ],
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

  updateCustomer(state, payload) {
    state.customer = payload
  },
}
