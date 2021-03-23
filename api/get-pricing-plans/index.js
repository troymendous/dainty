const pricingPlans = require("./data/pricing-plans.json")

module.exports = async (req, res) => {
  res.send(await { data: pricingPlans })
}
