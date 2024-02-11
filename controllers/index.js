const clientModel = require("../model/clientModel");

//client start
const addClient = async (req, res) => {
    try {
        let data = req.body
        let response = await clientModel.create(data)
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
}

const getClient = async (req, res) => {
    try {
        let response = await clientModel.find()
        return res.json({
            status: true,
            statusCode: 200,
            data: response
        })
    } catch (err) {
        return res.json({
            status: false,
            statusCode: 400,
            error: err
        })
    }
}

const viewClient =async(req,res)=>{
    try{
        let data = req.query
        let response = await clientModel.findById({_id:data._id})
        return res.json({
            status: true,
            statusCode: 200,
            data: response
        })
    }catch(err){
        return res.json({
            status: false,
            statusCode: 400,
            error: err
        })
    }
}
const editClient = async(req,res)=>{
    try{
        let data = req.query
        let response = await clientModel.findByIdAndUpdate( { _id: data._id },
            { ...req.body },
            { new: true })
        return res.json({
            status: true,
            statusCode: 200,
            data: response
        })
    }catch(err){
        return res.json({
            status: false,
            statusCode: 400,
            error: err
        })
    }
} 
module.exports = {
    addClient,
    getClient,
    viewClient,
    editClient
}