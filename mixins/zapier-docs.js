export default {
  methods: {
    async appendUsersToGoogleDocs(plan) {
      try {
        await fetch("/api/send-user-to-google-doc", {
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
      } catch (error) {
        //
      }
    },
  },
  computed: {
    createdDateTime() {
      return new Date().toString()
    },
  },
}
