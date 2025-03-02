const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderItemSchema = new Schema({
  filterId: {
    type: Schema.Types.ObjectId,
    ref: "filter",
    required: true,
  },
  filterModelId: {
    type: Schema.Types.ObjectId,
    ref: "filterType",
    required: true,
  },
  polythene: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  pricePerPiece: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

const ordersSchema = new Schema(
  {
    orderItems: [orderItemSchema], // Array of objects
    orderStatus: {
      type: String,
    },
    // billImage: {
    //   type: String, 
    // },
    // invoiceImage: {
    //   type: String,
    // },
    // driverName: {
    //   type: String,
    // },
    // carNumber: {
    //   type: String,
    // },
    // driverAdharCard: {
    //   type: String,
    // },
  },
  {
    timestamps: true,
  }
);

const ordersModel = mongoose.model("orders", ordersSchema);

module.exports = ordersModel;
