const express = require('express');
const path = require('path');
const app = express();

// const ms1 = process.env.SDC_MS || '127.0.0.1:3004';

// for private addresses

const msIds = {
  "1": '172.31.7.31:3004',
  "2": '172.31.15.82:3004'
};

// for public addresses

// const msIds = {
//   "1": '13.57.32.72:3004',
//   "2": '13.57.226.67:3004'
// };

let ratingsServiceCounter = 1;
let reviewsServiceCounter = 1;
const oneMoreThanTotalServers = 3;

app.use(express.static(__dirname + '/../public'));
app.use('/rooms/:roomid/', express.static(__dirname + '/../public'));

app.get('/rooms/:roomid/ratings', (req, res) => {
  if (ratingsServiceCounter === oneMoreThanTotalServers) {
    ratingsServiceCounter = 1;
  }
  res.redirect(`http://${msIds[ratingsServiceCounter]}/rooms/${req.params.roomid}/ratings`)
  ratingsServiceCounter += 1;
});

app.get('/rooms/:roomid/reviews', (req, res) => {
  if (reviewsServiceCounter === oneMoreThanTotalServers) {
    reviewsServiceCounter = 1;
  }
  res.redirect(`http://${msIds[reviewsServiceCounter]}/rooms/${req.params.roomid}/reviews`)
  reviewsServiceCounter += 1;
});

// app.get('/api/rooms/:roomid/description', (req, res) => res.redirect('http://18.222.4.195:3002/api/rooms/' + req.params.roomid + '/description'));

// app.get('/api/rooms/:roomid/carousel', (req, res) => res.redirect('http://18.222.4.195:3001/api/rooms/' + req.params.roomid + '/carousel'));

// app.get('/api/neighborhood/:roomid', (req, res) => res.redirect('http://18.188.46.228:80/api/neighborhood/' + req.params.roomid));

// app.get('/api/rooms/:roomid/bookings', (req, res) => res.redirect('http://18.222.7.43:80/api/rooms/' + req.params.roomid + '/bookings'));

module.exports = app;



// const ms2 = process.env.SDC_MS_2
// const ms3 = process.env.SDC_MS_3
// const ms4 = process.env.SDC_MS_4
// const ms5 = process.env.SDC_MS_5
// const ms6 = process.env.SDC_MS_6
// const ms7 = process.env.SDC_MS_7
// const ms8 = process.env.SDC_MS_8
