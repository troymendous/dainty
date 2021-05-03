const stripe = require("stripe")(process.env.STRIPE_SK)

module.exports = async (req, res) => {
  try {
    const customer = await stripe.customers.create({
      description: `${req.body.plan} Plan`,
      email: req.body.email,
      name: req.body.name,
      payment_method: req.body.payment_id,
    })

    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      default_payment_method: req.body.payment_id,
      items: [{ price: req.body.price }],
    })

    if (subscription.id) {
      res.json({
        status: 200,
        message: "SUCCESS",
      })
    } else {
      res.json({
        status: 400,
        message: "Please fill in all the required fields",
      })
    }
  } catch (error) {
    res.json({
      status: 500,
      error,
    })
  }
}
