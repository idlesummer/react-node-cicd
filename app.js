const cors = require('cors');
const express = require('express')
const app = express();

app.use(cors());

app.get('/names', (req, res) => {
  res.send('Telmo');
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
