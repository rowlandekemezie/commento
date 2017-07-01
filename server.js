const express = require('express');
const mongoose  = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./server/routes');
const router = express.Router();
routes(router);
const PORT = process.env.PORT || 3001;
const app = express();

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/commento');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

//To prevent errors from Cross Origin Resource Sharing, we will set our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  //and remove cacheing so we get the most recent comments
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

app.get('/', (req, res) => {
  res.send('This is the index page')
})

app.use('/api', router);


app.listen(PORT, () => {
  console.log('listening on ', PORT);
});
