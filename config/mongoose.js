const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// aquire connection if it is succesful
const db = process.env.MONGO_URL;
// connect from mongodb
// mongoose.connect('mongodb://127.0.0.1:27017/Review-System');
mongoose
  .connect(db)
  .then(() => {
    console.log(`Connection is succesfull`);
  })
  .catch((err) => console.log(`no Connection`));
module.exports = db;
