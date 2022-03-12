const express = require('express');

const mongoose= require("mongoose");

const dotenv = require("dotenv");

const cors = require('cors');


const app = express();
const userRoute = require("./routes/user");

const orderRoute = require("./routes/order");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const stripeRoute = require("./routes/stripe");

dotenv.config();









mongoose.connect(process.env.DB_CONNECTION).then(() => {

    console.log("DB connection is successfull")
}).catch((e) =>{

    console.log(e);

});

app.use(express.json());
app.use(cors());
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use('/api/products', productRoute);
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use("/api/checkout", stripeRoute);
app.listen(process.env.PORT || 5000 , ()=> {

 process.env.PORT ? console.log(`Server started on ${process.env.PORT}`): console.log("server started at port 5000");

});