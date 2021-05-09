export default {
  mounted() {
    console.log(new Date())
    console.log({ time: this.createdDateTime })
  },
  methods: {
    async appendUsersToGoogleDocs(plan) {
      const result = await fetch("/api/send-user-to-google-doc", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.email.trim(),
          name: this.fullname.trim(),
          plan,
          createdDateTime: this.createdDateTime,
        }),
      })

      console.log(result)
    },
  },
  computed: {
    createdDateTime() {
      return new Date()
    },
  },
}
