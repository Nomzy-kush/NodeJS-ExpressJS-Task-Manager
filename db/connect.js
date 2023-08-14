const mongoose = require('mongoose');
const password = encodeURIComponent("Makingmoney4*");



const connectDB = (url) => {
  return mongoose.connect(url.replace('<password>', password), {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true
  });
}


module.exports = connectDB
 