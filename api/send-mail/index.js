const formData = require("form-data")
const Mailgun = require("mailgun.js")
const mailgun = new Mailgun(formData)

const mg = mailgun.client({ username: "api", key: process.env.MAILGUN_API_KEY })

const createMessage = mg.messages.create("dainty.io", {
  from: "Excited User <no-reply@dainty.io>",
  to: ["jackie@dainty.io"],
  subject: "Hello",
  text: "Testing some Mailgun awesomness!",
  html: "<h1>Testing some Mailgun awesomness!</h1>",
})
// .then(msg => console.log(msg)) // logs response data
// .catch(err => console.log(err));

module.exports = async (req, res) => {
  const result = await createMessage()
  console.log({ result })
}
