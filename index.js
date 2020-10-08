const express = require('express');
const path = require('path');
const CORS = require('cors');
const app = express();
const getRoutes = require('./routes/index.js');

app.set('view engine', 'pug');
app.use(CORS());
app.use('/library', getRoutes);
app.use("/static", express.static(path.join(__dirname, "templates/css")));
app.use("/scripts", express.static(path.join(__dirname, "scripts/index.js")));

const server = app.listen(8005, () => {
  console.log(`Listening on port ${server.address().port}`);
});
