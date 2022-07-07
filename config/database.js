const mongoose = require("mongoose");

const uri =
  "mongodb+srv://rschk:colorada8@maricluster.gzsmp.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri);

module.exports = mongoose;
