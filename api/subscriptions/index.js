const stripe = require("stripe")(process.env.STRIPE_SK)

const CORE_PLAN_PRICE_ID = "price_1Ib5FJF5dr8554IRIF0KhudR"

module.exports = async (req, res) => {
  await stripe.subscriptions.create({
    customer: req.body.customer,
    items: [
      {
        price: CORE_PLAN_PRICE_ID,
      },
    ],
    trial_period_days: 15,
  })

  res.send({ status: "success" })
}
