const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3001;

// declare static file
app.use(express.static(path.join(__dirname, 'client/build')));

// production mode
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname = 'client/build/index.html'));
  })
}

// build mode
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/public/index.html'));
})

// set up route
// app.get('/', (req, res) => {
//   res.send('This is the server side');
// })

// start server
app.listen(port, (req, res) => {
  console.log(`server listening on port: ${port}`)
});
