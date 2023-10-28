const mongoose = require('mongoose');

const db = {
    connect: () => {
        mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connecting to MongoDB...');
        // Event handler for when the connection is open
        mongoose.connection.on('open', () => {
            console.log('Connected to MongoDB');
        });
        // Event handler for when an error occurs
        mongoose.connection.on('error', (err) => {
            console.error('Error connecting to MongoDB:', err);
        });
    }
}


module.exports = db;