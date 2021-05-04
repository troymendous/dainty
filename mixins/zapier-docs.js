export default {
  methods: {
    async appendUsersToGoogleDocs(plan) {
      const result = await fetch("https://hooks.zapier.com/hooks/catch/1488591/byuh4il/", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.email.trim(),
          name: this.fullname.trim(),
          plan,
        }),
      })

      console.log(result)
    },
  },
}
