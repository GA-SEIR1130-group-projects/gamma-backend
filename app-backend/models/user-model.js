const mongoose = require('../db/connection.js')
const uniqueValidator = require('mongoose-unique-validator')



 const userSchema = new mongoose.Schema(
     {
         username: {
             type: String,
             required: [true, "can;t be blank"],
             lowercase: true,
             unique: true
         },
         password: {
             type: String,
             required: [true, "can't be blank"]
         },
         desc: {
             type: String,
         }
     },
 )
 userSchema.plugin(uniqueValidator, {mesaage: "is already taken"})

 module.exports = mongoose.model('user', userSchema)

