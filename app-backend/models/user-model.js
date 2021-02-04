
 const mongoose = require('../db/connection.js')


 const userSchema = new mongoose.Schema(
     {
         username: {
             type: String,
             required: true,
             lowercase: true,
             unique: true
         },
         password: {
             type: String,
             required: true
         },
         desc: {
             type: String,
         }
     },
 )
 
 module.exports = mongoose.model('user', userSchema)

