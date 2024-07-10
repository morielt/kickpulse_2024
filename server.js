const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.static('public'));
app.use(express.json());

//-------------------------------

app.use('/', function (req, res) {
  res.send('hellowo  rld');
});

app.set('view engine', 'ejs');

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  const connectToDb = () => {
    mongoose
      .connect(
        'mongodb+srv://itayakni:kick.pulse.cs@cluster0.yl5rjk1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
      )
      .then(() => {
        console.log('connected to mongo');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  connectToDb();
  console.log(`Server is running on port ${PORT}`);
});

//mongodb+srv://margolin23:nYbjAMqvAGBtsmdZ@cluster1.3slcbul.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1
