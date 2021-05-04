export default {
  methods: {
    async appendUsersToGoogleDocs(plan) {
      const result = await fetch("/api/send-user-to-google-docs", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.email.trim(),
          name: this.fullname.trim(),
          plan,
          createdDateTime: new Date(),
        }),
      })

      console.log(result)
    },
  },
}
