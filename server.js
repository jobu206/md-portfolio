const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const app = express();

app.disable('x-powered-by');
app.use(express.static(path.join(__dirname, 'build')));

// declare a catch-all route on express server
// that captures all page requests and directs them to the client
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/', 'index.html'));
});

app.listen(PORT, () => {
  console.log('App listening on PORT:', PORT);
});
