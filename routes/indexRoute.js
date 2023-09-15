const express = require('express');
const route = express.Router();

const { addcraete, adsget } = require('../controller/indexCotroller');
// console.log('route');

// route.post('/createapi', addcraete);
route.get('/adsget', adsget);

module.exports = route;