const fetch = require("node-fetch")

module.exports = async (req, res) => {
  const result = await fetch(
    `https://hooks.zapier.com/hooks/catch/${process.env.ZAPIER_HOOK_SIGNUP_ONE}/${process.env.ZAPIER_HOOK_SIGNUP_TWO}/`,
    {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: req.body.email,
        name: req.body.name,
        plan: req.body.plan,
        createdDateTime: req.body.createdDateTime,
      }),
    }
  )

  res.send(result)
}
