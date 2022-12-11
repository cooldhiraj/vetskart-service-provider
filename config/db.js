const mongoose = require('mongoose');
let uri = process.env.DB_URL

mongoose.set('strictQuery', true);

mongoose.connect(uri)
  .then(() => console.log('Connected!'))
  .catch(err => console.log("database connection error"))