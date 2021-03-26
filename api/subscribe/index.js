const stripe = require("stripe")(process.env.STRIPE_SK)
const plusPlanPriceId = "price_1IVInFF5dr8554IR6PCOPrGq"
const enterprisePlanPriceId = "price_1IVIqyF5dr8554IRJNZvIHjq"

module.exports = async (req, res) => {
  try {
    const customer = await stripe.customers.create({
      description: "Plus Plan",
      email: req.body.email,
      name: req.body.name,
      payment_method: req.body.payment_id,
    })

    if (req.body.plan_price === plusPlanPriceId) {
      const subscription = await stripe.subscriptions.create({
        customer: customer.id,
        default_payment_method: req.body.payment_id,
        items: [{ price: plusPlanPriceId }],
      })

      res.json({
        status: 200,
        body: subscription.id,
        message: "SUCCESS",
      })
    }

    if (req.body.plan_price === enterprisePlanPriceId) {
      const subscription = await stripe.subscriptions.create({
        customer: customer.id,
        default_payment_method: req.body.payment_id,
        items: [{ price: enterprisePlanPriceId }],
      })

      res.json({
        status: 200,
        body: subscription.id,
        message: "SUCCESS",
      })
    }
  } catch (error) {
    res.json({
      status: 400,
      message: error.message,
    })
  }
}
