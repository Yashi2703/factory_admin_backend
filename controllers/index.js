const { default: mongoose } = require("mongoose");
const clientModel = require("../model/clientModel");
const orderModel = require("../model/orderModel");

//client start
const addClient = async (req, res) => {
  try {
    let data = req.body;
    console.log(data);
    let response = await clientModel.create(data);
    return res.json({
      status: true,
      statusCode: 200,
      data: response,
      message: "client created successfully",
    });
  } catch (err) {
    return res.json({
      status: false,
      statusCode: 400,
      error: err,
    });
  }
};

const getClient = async (req, res) => {
  try {
    let response = await clientModel.find();
    return res.json({
      status: true,
      statusCode: 200,
      data: response,
    });
  } catch (err) {
    return res.json({
      status: false,
      statusCode: 400,
      error: err,
    });
  }
};

const viewClient = async (req, res) => {
  try {
    let data = req.query;
    let response = await clientModel.findById({ _id: data._id });
    return res.json({
      status: true,
      statusCode: 200,
      data: response,
    });
  } catch (err) {
    return res.json({
      status: false,
      statusCode: 400,
      error: err,
    });
  }
};
const editClient = async (req, res) => {
  try {
    let data = req.query;
    let response = await clientModel.findByIdAndUpdate(
      { _id: data._id },
      { ...req.body },
      { new: true }
    );
    return res.json({
      status: true,
      statusCode: 200,
      data: response,
    });
  } catch (err) {
    return res.json({
      status: false,
      statusCode: 400,
      error: err,
    });
  }
};
//client end

//order start
const addOrder = async (req, res) => {
  try {
    let data = req.body;
    // data.Clientname = mongoose.Types.ObjectId;
    let response = await orderModel.create(data);
    return res.json({
      status: true,
      statusCode: 200,
      data: response,
    });
  } catch (err) {
    return res.json({
      status: false,
      statusCode: 400,
      error: err,
    });
  }
};
const getOrder = async (req, res) => {
  try {
    let response = await orderModel.find();
    return res.json({
      status: true,
      statusCode: 200,
      data: response,
    });
  } catch (err) {
    return res.json({
      status: false,
      statusCode: 400,
      error: err,
    });
  }
};
const viewOrder = async (req, res) => {
  try {
    let data = req.query;
    let response = await orderModel.findById({ _id: data._id });
    return res.json({
      status: true,
      statusCode: 200,
      data: response,
    });
  } catch (err) {
    return res.json({
      status: false,
      statusCode: 400,
      error: err,
    });
  }
};
const editOrder = async (req, res) => {
  try {
    let data = req.query;
    let response = await orderModel.findByIdAndUpdate(
      { _id: data._id },
      { ...req.body },
      { new: true }
    );
    return res.json({
      status: true,
      statusCode: 200,
      data: response,
    });
  } catch (err) {
    return res.json({
      status: false,
      statusCode: 400,
      error: err,
    });
  }
};
module.exports = {
  addClient,
  getClient,
  viewClient,
  editClient,
  addOrder,
  getOrder,
  viewOrder,
  editOrder
};
