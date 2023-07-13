const router = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);
const KEY = 'sk_test_51NS1M0SF6XaCSBdfVCHfPbXqBoYepnOuQGI42svQ9bL22JvYIaitXljlPfksOZy7JqllwbBUDIJ0ra2hhzs0ur1E00gFLpD8ya'
const stripe = require("stripe")(KEY);

router.post("/payment", (req, res) => {
  stripe.paymentIntents.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "inr",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
