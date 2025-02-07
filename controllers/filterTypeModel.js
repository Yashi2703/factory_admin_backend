const filterTypeModel = require("../model/filterType");

const addFilterType = async (req, res) => {
  try {
    let data = req.body;
    let response = await filterTypeModel.create(data);
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
const editFilterType = async (req, res) => {
  try {
    let data = req.params.id;
    let response = await filterTypeModel.findByIdAndUpdate(
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
const getAllFilterType = async (req, res) => {
  try {
    let response = await filterTypeModel.find().populate([
      {
        path: "modelId",
      },
    ]);

    // Format response to include modelname directly
    const formattedData = response.map((item) => ({
      _id: item._id,
      name: item.name,
      modelId: item.modelId?._id || null,
      modelname: item.modelId?.filter || null, // Extract modelname
    }));

    return res.json({
      status: true,
      statusCode: 200,
      data: formattedData,
    });
  } catch (err) {
    return res.json({
      status: false,
      statusCode: 400,
      message: err?.message || "Something went wrong",
      error: err,
    });
  }
};
const viewFilterType = async (req, res) => {
  try {
    let FilterId = req.params.id;
    let response = await filterTypeModel.findOne({ _id: FilterId }).populate([
      {
        path: "modelId",
      },
    ]);;
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
const deletFilterType = async (req, res) => {
  try {
    let FilterId = req.params.id;
    let response = await filterTypeModel.findByIdAndDelete(
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
    let response = await filterTypeModel.find(
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
  addFilterType,
  editFilterType,
  getAllFilterType,
  viewFilterType,
  deletFilterType,
  search,
};
