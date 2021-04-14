const fetch = require("node-fetch")

module.exports = async (req, res) => {
  const message = `
    New subscription🎊
    Name: ${req.body.name},
    Email: ${req.body.email},
    Plan: Name: ${req.body.plan},
    `
  const result = await fetch("https://slack.com/api/chat.postMessage", {
    method: "post",
    headers: {
      Authorization: `Bearer ${process.env.SLACK_BOT_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: {
      channel: process.env.CHANNEL_NOTIFS,
      text: message,
    },
  })

  if (result.ok) {
    res.status(200).json({
      message: "SUCCESS",
    })
  } else {
    res.status(400).json({
      error: result.error,
    })
  }
}
