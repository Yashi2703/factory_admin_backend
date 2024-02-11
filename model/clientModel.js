const mongoose = require("mongoose");
const Schema = mongoose.Schema

const clientSchema = new Schema({
    name: {
        type: String
    },
    address: {
        type: String
    },
    phoneno: {
        type: Number
    },
    email: {
        type: String
    },
    alternatePhoneno: {
        type: String
    }
},
    {
        timestamps: true
    }
)
const clientModel = mongoose.model('client', clientSchema);
module.exports = clientModel;