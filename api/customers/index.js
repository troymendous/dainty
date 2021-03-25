const stripe = require("stripe")(process.env.STRIPE_SK)

module.exports = async (req, res) => {
  const { id } = await stripe.customers.create({
    email: req.body.email,
    name: req.body.name,
  })

  res.send({ customer: id })
}
