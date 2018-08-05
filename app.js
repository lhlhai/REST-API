const express = require('express');
const app = express();
const productsRouter = require('./api/routes/products');


// app.use((req,res,next) => {
// res.status(200).json({
//     message : "hello world"
// });
// });

app.use('/products',productsRouter);

module.exports = app;