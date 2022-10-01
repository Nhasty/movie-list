const express = require('express');
const router = require('./routes.js')
var morgan = require('morgan');
var cors = require('cors');


const app = express();
const PORT = 3000 || process.env.PORT;


app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/', router);
app.use(express.static('client/dist'));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})