const stripe = require("stripe")(process.env.STRIPE_SK)

module.exports = async (req, res) => {
  try {
    const customer = await stripe.customers.create({
      description: "Plus Plan",
      email: req.body.email,
      name: req.body.name,
      payment_method: req.body.payment_id,
    })

    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      default_payment_method: req.body.payment_id,
      items: [{ price: req.body.price }],
    })

    res.json({
      status: 200,
      body: subscription.id,
      message: "SUCCESS",
    })
  } catch (error) {
    res.json({
      status: 400,
      message: error.message,
    })
  }
}
