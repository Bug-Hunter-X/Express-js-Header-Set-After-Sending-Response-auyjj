const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Incorrectly setting the header after sending the response
  res.send('Hello World!');
  res.setHeader('X-Custom-Header', 'some value');
});
app.listen(3000, () => console.log('Server listening on port 3000'));