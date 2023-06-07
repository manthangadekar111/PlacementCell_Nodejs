const mongoose = require('mongoose');
const dotenv = require('dotenv').config({ path: 'config/.env' });

mongoose.connect('mongodb://127.0.0.1/placementcelldb');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

db.once('open', function () {
  console.log('Connected to Database :: Mongodb');
});

module.exports = db;
