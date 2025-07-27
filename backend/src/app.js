const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const events = require('./events');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/events', events);

app.listen(8000, () => console.log('Backend running on port 8000'));