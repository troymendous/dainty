const formData = require("form-data")
const Mailgun = require("mailgun.js")
const mailgun = new Mailgun(formData)
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY || "key-yourkeyhere",
})

const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY || "",
  public_key: process.env.MAILGUN_PUBLIC_KEY || "pubkey-yourkeyhere",
})
