export default {
  data() {
    return {
      message: "Testing from Dainty",
    }
  },
  methods: {
    sendToChannel() {
      //   const result = await fetch("https://slack.com/api/chat.postMessage", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/x-www-form-urlencoded",
      //     },
      //     data: `token=${token}&channel=${channel}&text=${message}&as_user=false&pretty=1&link_names=true`,
      //   })

      //   console.log(result.data)

      //   }).then((response) => {
      //     console.log("sendToChannelResponse")
      //     console.log(response.data)
      //   })
      //   return result

      console.log("Mixin")
    },
  },
}
