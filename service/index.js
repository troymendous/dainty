const apiUrl = process.env.apiUrl

export default {
  async submitOnboardingForm(formData) {
    return fetch(`${apiUrl}/notify/slack`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-api-key": process.env.DAINTY_API_ACCESS_TOKEN,
      },
      method: "POST",
      body: JSON.stringify(formData),
    })
  },
}
