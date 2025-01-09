const filterModel = require("../model/filterModel");

const addFilter = async (req, res) => {
  try {
    let data = req.body;
    let response = await filterModel.create(data);
    return res.json({
      status: true,
      statusCode: 200,
      data: response,
      message: "filter created successfully",
    });
  } catch (err) {
    console.log(err);
    return res.json({
      status: false,
      statusCode: 400,
      error: err,
    });
  }
};
const editFilter = async (req, res) => {
  try {
    let data = req.params.id;
    let response = await filterModel.findByIdAndUpdate(
      { _id: data },
      { ...req.body },
      { new: true }
    );
    return res.json({
      status: true,
      statusCode: 200,
      data: response,
      message: "filter edit successfully",
    });
  } catch (err) {
    console.log(err);
    return res.json({
      status: false,
      statusCode: 400,
      error: err,
    });
  }
};
const getAllFilter = async (req, res) => {
  try {
    let response = await filterModel.find();
    return res.json({
      status: true,
      statusCode: 200,
      data: response,
    });
  } catch (err) {
    let message = err && err.message ? err.message : "Something went wrong";
    return res.json({
      status: false,
      statusCode: 400,
      message: message,
      error: err,
    });
  }
};
const viewFilter = async (req, res) => {
  try {
    let FilterId = req.params.id;
    let response = await filterModel.findOne({ _id: FilterId });
    if (response) {
      return res.json({
        status: true,
        statusCode: 200,
        data: response,
      });
      // return res.json.status(200).({message:"schedules info",data:response})
    }
  } catch (error) {
    let message = err && err.message ? err.message : "Something went wrong";
    return res.json({
      status: false,
      statusCode: 400,
      message: message,
      error: err,
    });
  }
};
const deletFilter = async (req, res) => {
  try {
    let FilterId = req.params.id;
    let response = await filterModel.findByIdAndDelete(
      { _id: FilterId },
      { new: true }
    );
    return res.json({
      status: true,
      statuscode: 200,
      data: response,
    });
  } catch (err) {
    console.log(err);
    let message = err && err.message ? err.message : "Something went wrong";
    return res.json({
      status: false,
      statusCode: 400,
      message: message,
      Error: err,
    });
  }
};
const search = async (req, res) => {
  try {
    let data = req.query;
    if (!data) {
      throw { message: "missing body parameters" };
    }
    let response = await filterModel.find(
      { name: { $regex: `${data.name}`, $options: "i" } },
      { isDeleted: false }
    );
    return res.json({
      status: true,
      statusCode: 200,
      data: response,
    });
  } catch (err) {
    console.log(err);
  }
};
module.exports = {
  addFilter,
  editFilter,
  getAllFilter,
  viewFilter,
  deletFilter,
  search,
};
