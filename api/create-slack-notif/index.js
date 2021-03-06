const fetch = require("node-fetch")

module.exports = async (req, res) => {
  const message = `
    New subscription🎊
    Name: ${req.body.name},
    Email: ${req.body.email},
    Plan: ${req.body.plan} Plan.
    `
  const slackApiResult = await fetch("https://slack.com/api/chat.postMessage", {
    method: "post",
    headers: {
      Authorization: `Bearer ${process.env.SLACK_BOT_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      channel: process.env.CHANNEL_NOTIFS,
      text: message,
    }),
  })

  res.send(await slackApiResult.json())
}
