const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const filterTypeSchema = new Schema(
  {
    name: {
      type: String,
    },
    modelId: {
      type: Schema.Types.ObjectId,
      ref: "filter",
    },
  },
  {
    timestamps: true,
  }
);
const filterTypeModel = mongoose.model("filterType", filterTypeSchema);
module.exports = filterTypeModel;
