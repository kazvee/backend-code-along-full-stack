const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const productsRouter = require('./routes/products');

const app = express();
const port = 4000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send({ message: '🙃 Hello World! 🙃' });
});

app.use('/products', productsRouter);

const connectDb = async () => {
  await mongoose.connect(process.env.DB_URI);
  console.log('Database is connected!');
};

app.listen(port, async () => {
  console.log(`Server is running on port ${port}!`);
  await connectDb();
});
