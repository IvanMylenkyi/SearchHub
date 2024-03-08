const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT||3000;

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use("/search", require("./routes/searchRoutes.js"));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`SearchHub listening at http://localhost:${port}`);
});