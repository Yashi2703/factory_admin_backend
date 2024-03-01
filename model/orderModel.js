const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    Clientname: {
      type: Schema.Types.ObjectId,
      ref: "clients",
    },
    orderStatus: {
      type: String,
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
    ChooseItem: [
      {
        itemName: String,
        quantity: Number,
        price: Number,
        TotalPrice: Number,
        itemDesign: String,
        itemPolythen: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);
const orderModel = mongoose.model("orders", orderSchema);
module.exports = orderModel;
