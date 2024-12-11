const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Setting a timeout to prevent indefinite blocking
  const timeoutId = setTimeout(() => {
    res.status(500).send('Request timed out');
  }, 10000); // Timeout after 10 seconds

  setTimeout(() => {
    clearTimeout(timeoutId); // Cancel timeout if response is ready before timeout
    res.send('Hello World!');
  }, 5000); 
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
