export default {
  methods: {
    async sendSlackNotifs(plan) {
      let res

      try {
        res = await fetch("/api/create-slack-notif", {
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
      } catch (error) {
        //
      }

      const result = await res.json()

      if (result.error) console.log("Slack notifications not sent")
    },
  },
}
