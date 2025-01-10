const orderModel = require("../model/orders");

const addOrders = async (req, res, next) => {
  try {
    let data = req.body;
    let response = await orderModel.create(data);
    return res.json({
      status: true,
      statusCode: 200,
      data: response,
      message: "Orders created successfully",
    });
  } catch (error) {
    console.log(error);
    return res.json({
      status: false,
      statusCode: 400,
      message: error.message || "Something went wrong",
      error: error,
    });
  }
};

const editOrder = async (req, res, next) => {
  try {
    let data = req.params.id;
    let response = await orderModel.findByIdAndUpdate(
      { _id: data },
      { ...req.body },
      { new: true }
    );
    return res.json({
      status: true,
      statusCode: 200,
      data: response,
      message: "Orders updated successfully",
    });
  } catch (error) {
    console.log(error);
    return res.json({
      status: false,
      statusCode: 400,
      message: error.message || "Something went wrong",
      error: error,
    });
  }
};

const getAllOrders = async (req, res, next) => {
  try {
    let response = await orderModel.find();
    return res.json({
      status: true,
      statusCode: 200,
      data: response,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      status: false,
      statusCode: 400,
      message: error.message || "Something went wrong",
      error: error,
    });
  }
};

const viewOrder = async (req, res, next) => {
  try {
    let orderId = req.params.id;
    let response = await orderModel.findOne({ _id: orderId });
    if (response) {
      return res.json({
        status: true,
        statusCode: 200,
        data: response,
      });
    }
  } catch (error) {
    console.log(error);
    return res.json({
      status: false,
      statusCode: 400,
      message: error.message || "Something went wrong",
      error: error,
    });
  }
};

const deleteOrder = async (req, res, next) => {
  try {
    let orderId = req.params.id;
    let response = await orderModel.findByIdAndDelete({ _id: orderId });
    return res.json({
      status: true,
      statusCode: 200,
      data: response,
      message: "Orders deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return res.json({
      status: false,
      statusCode: 400,
      message: error.message || "Something went wrong",
      error: error,
    });
  }
};
const searchOrder = async (req, res, next) => {
  try {
    let query = req.query;
    let response = await orderModel.find(query);
    return res.json({
      status: true,
      statusCode: 200,
      data: response,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      status: false,
      statusCode: 400,
      message: error.message || "Something went wrong",
      error: error,
    });
  }
};

module.exports = {
  addOrders,
  editOrder,
  getAllOrders,
  viewOrder,
  deleteOrder,
  searchOrder,
};
