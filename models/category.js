const mongoose = require('mongoose');

// Define schema
const categorySchema = new mongoose.Schema({
    title: String,
    type: String
});

// Define model
const Category = mongoose.model('Category', categorySchema);

module.exports = Category;