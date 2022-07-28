const express = require('express');
const app=express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const orderRoute = require('./routes/order');
const stripeRoute = require('./routes/stripe');
const cors = require('cors');

app.use(cors());
dotenv.config();

mongoose.connect( process.env.MONGO_URL).then(() => 
    {console.log("db connection successful") }).catch((err) =>{ console.log(err)});

app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/products', productRoute);
app.use('/api/user', userRoute);
app.use('/api/orders',orderRoute);
app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT, () => {
    console.log("server is running at port 5000");
})