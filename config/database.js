const mongoose = require('mongoose'); 
 
const MONGO_URL = process.env.MONGO_URL; 
console.log("MONGO_URL:", MONGO_URL); 
 
mongoose.connect(MONGO_URL, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
}); 
 
const db = mongoose.connection; 
 
db.on('error', (error) => { 
  console.error('DB Connection Error:', error); 
}); 
 
db.once('open', () => { 
  console.log('DB Is Connected');
}); 
 
module.exports = db;