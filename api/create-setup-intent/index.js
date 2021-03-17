const stripe = require("stripe")(process.env.STRIPE_SK)

module.exports = async (req, res) => {
  // Create or use an existing Customer to associate with the SetupIntent.
  // The PaymentMethod will be stored to this Customer for later use.
  const customer = await stripe.customers.create()

  res.send(
    await stripe.setupIntents.create({
      customer: customer.id,
    })
  )
}
