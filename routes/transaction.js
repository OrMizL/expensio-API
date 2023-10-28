const express = require('express');
const router = express.Router();
const Transaction = require('../models/transaction');

// define the home page route
router
.post('/', async (req, res) => {
    try {
        let category = await Transaction.create(req.body);
        res.status(201).send(category);
    } catch (err) {
        res.status(400).send(err);
    }
})
.get('/get-all-year', async (req, res) => {
    try {
        let allYearTransactions = await Transaction.find({
            date: {
                $gte: new Date(req.query.year, 1, 1),
                $lte: new Date(req.query.year, 12, 31)
            }
        })
        res.status(201).send(allYearTransactions);
    } catch (err) {
        res.status(400).send(err);
    }
})

module.exports = router