const express = require('express');
const app = express();
require('dotenv').config();

const cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')))

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', (req, res) => {
  res.json({ greeting: 'hello API' });
});

app.get('/api/whoami', (req, res) => {
  const ipaddress = req.ip;
  const language = req.headers['accept-language'];
  const software = req.headers['user-agent'];

  const clientInfo = {
    ipaddress, language, software
  }
  res.json(clientInfo);
});

// listen for requests :)
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Your app is listening on port ${PORT}`);
});
