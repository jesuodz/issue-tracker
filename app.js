const express     = require('express');
const mongoose    = require('mongoose');
const helmet      = require('helmet');
const bodyParser  = require('body-parser');
const path        = 'path';
const app         = express();
const config      = require('./config/keys');
const testRunner  = require('./test-runner');

app.use(bodyParser.json({ extended: false }));
app.use(helmet());

// Connect to database
mongoose
  .connect(config.mongoURI, { useNewUrlParser: true })
  .then(() => { console.log(`MongoDB connected to ${config.mongoURI}`) })
  .catch((error) => { console.log(error) });

if (config.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.send(path('client', 'build', 'index.html'))
  });
}

app.listen(config.PORT, () => {
  console.log(`Listening on port ${config.PORT}`);

  if (config.NODE_ENV === 'test') {
    console.log('...Running tests...');
    setTimeout(() => {
      try {
        testRunner.run();
      } catch(error) {
        console.log('Test are not valid:', error);
      }
     }, 1500);
  }

  console.log(`Running on ${config.NODE_ENV} mode`);
});

module.exports = app;
