const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();
const URI = process.env?.MONGO_URI;

exports.establishDB = () =>
  mongoose
    .connect(URI)
    .then((_) => console.log('Database connection established.'))
    .catch((error) => {
      console.log('Error connecting to the database.');
      process.exit(1);
    });
