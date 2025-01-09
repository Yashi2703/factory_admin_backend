const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const filterSchema = new Schema(
  {
    name: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const filterModel = mongoose.model("filter", filterSchema);
module.exports = filterModel;