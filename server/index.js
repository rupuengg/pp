require('dotenv').config();
const express = require('express');
const app = express();

// All routes
app.use(require('./routes/index'));

// Database
require('./models').sequelize.authenticate().then(() => {
  console.log(`DB connected`);
}).catch(err => {
  console.log(`DB connection error`, err);
});

app.listen(process.env.API_PORT, () => {
  console.log(`App is running on http://localhost:${process.env.API_PORT}`);
});