const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");
const morgan = require("morgan");
const rfs = require("rotating-file-stream");
const path = require("path");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

const accessLogStream = rfs.createStream("access.log", {
    interval: "1h",
    path: path.join(__dirname, "/logs"),
});
  
  
app.use(morgan("combined", { stream: accessLogStream }));
  
const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 100 // limit each IP to 100 requests per minute
  });

  
// Apply the rate limiter to all requests
app.use(limiter);
app.use(helmet());


app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

app.get('/', (req, res) => {
  res.send("<h1>Api is running </h1>")
})

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});
