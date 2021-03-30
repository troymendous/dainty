export default {
  data() {
    return {
      message: "Testing from Dainty Client",
    }
  },
  methods: {
    async sendToChannel() {
      const res = await fetch("https://slack.com/api/chat.postMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: `token=${process.env.slackNotification}&channel=${process.env.channelNotifs}&text=${this.message}&as_user=false&pretty=1&link_names=true`,
      })

      const result = await res.json()

      console.log({ result })
    },
  },
}
