const mongoose = require("mongoose");


const imageSchema = mongoose.Schema(
    {
        url: {
            type: String
        },
        comments: {
            type: Array
        }
    }
)

module.exports = imageSchema;