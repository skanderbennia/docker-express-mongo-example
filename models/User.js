const mongoose = require("mongoose");

const maleSchema = mongoose.Schema({
  username: {
    type: String
  }
});

const Male = mongoose.model("males", maleSchema);

module.exports = Male;
