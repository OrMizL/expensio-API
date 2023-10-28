const mongoose = require('mongoose');

// Define schema
const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true }
});

// Define model
const User = mongoose.model('User', userSchema);

module.exports = User;