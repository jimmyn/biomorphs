import express from 'express';
import path from 'path';

const app = express();
const port = 8080;
const publicPath = path.resolve('public');

// We point to our static assets
app.use(express.static(publicPath));

// And run the server
app.listen(port, function() {
  console.log('Server running on port ' + port);
});
