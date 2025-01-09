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
  orderStatus: {
    type: String,
    enum: ["Pending", "Completed", "Cancelled"],
    default: "Pending",
  },
});

const ordersSchema = new Schema(
  {
    orderItems: [orderItemSchema], // Array of objects
    billImage: {
      type: String, // Store file path or URL of the bill image
    },
    invoiceImage: {
      type: String, // Store file path or URL of the invoice image
    },
    driverName: {
      type: String,
      required: true,
    },
    carNumber: {
      type: String,
      required: true,
    },
    driverAdharCard: {
      type: String, // Adhar card number as a string
      required: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

const ordersModel = mongoose.model("orders", ordersSchema);

module.exports = ordersModel;
