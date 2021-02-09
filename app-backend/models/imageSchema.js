const mongoose = require("mongoose");


const imageSchema = mongoose.Schema(
    {
        url: {
            type: String
        },
        comment: {  
            type: String
        }
    }
)

module.exports = imageSchema;