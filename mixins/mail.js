import emailjs from "emailjs-com"

export default {
  data() {
    return {
      adminsEmailTemplateId: "template_kufmutl",
      userEmailTemplateId: "template_aqip85c",
    }
  },
  methods: {
    sendAdminsMail() {
      emailjs.send(
        process.env.emailjsServiceId,
        this.adminsEmailTemplateId,
        {
          name: this.fullname,
          userEmail: this.email,
          plan: this.plan,
        },
        process.env.emailjsUserId
      )
    },
    sendUserMail() {
      return emailjs.send(
        process.env.emailjsServiceId,
        this.userEmailTemplateId,
        {
          name: this.fullname,
          email: this.email,
        },
        process.env.emailjsUserId
      )
    },
  },
}
