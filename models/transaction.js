const mongoose = require('mongoose');

// Define schema
const transactionSchema = new mongoose.Schema({
    user_id: String,
    amount: Number,
    date: Date,
    category_id: String
});

// Define model
const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;