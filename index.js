const express = require('express');
require('dotenv').config();
const db = require('./db');

const cors = require('cors');
const app = express();
const port = 3001;

const categoryRouter = require('./routes/category');
const userRouter = require('./routes/user');
const transactionRouter = require('./routes/transaction');

app.use(cors());;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/category', categoryRouter);
app.use('/user', userRouter);
app.use('/transaction', transactionRouter);

// Define Port
app.listen(port, () => console.log(`Server listening at port ${port}`));

// Connect to DB
db.connect();