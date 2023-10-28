const express = require('express');
const router = express.Router();
const Category = require('../models/category');

// define the home page route
router
.get('/', (req, res) => {
    res.send('Get Category')
})
.post('/', async (req, res) => {
    try {
        let category = await Category.create(req.body);
        res.status(201).send(category);
    } catch (err) {
        res.status(400).send(err);
    }
})
.get('/get-all', async (req, res) => {
    try {
        let allCategories = await Category.find({});
        res.status(201).send(allCategories);
    } catch (err) {
        res.status(400).send(err);
    }
})
.delete('/', async (req, res) => {
    try {
        let deletionData = await Category.deleteOne({ _id: req.body.id });
        res.status(201).send(deletionData);
    } catch (err) {
        res.status(400).send(err);
    }
})
.put('/', async (req, res) => {
    try {
        let updatedCategory = await Category.findByIdAndUpdate(req.body.id, { title: req.body.title, type: req.body.type }, { new: true });
        res.status(201).send(updatedCategory);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router