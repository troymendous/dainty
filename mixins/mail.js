export default {
  methods: {
    sendAdminsMail() {
      emailjs.send(
        "service_ynbouxr",
        "template_kufmutl",
        {
          name: this.fullname,
          email: this.email,
          message: this.message,
        },
        "user_clY0t1Azl5NpplpX85LoT"
      )
    },
  },
}
