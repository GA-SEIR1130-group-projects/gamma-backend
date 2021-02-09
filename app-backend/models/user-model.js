const mongoose = require('../db/connection')
const uniqueValidator = require('mongoose-unique-validator')
const crypto = require("crypto")
// const jwt = require("jsonwebtoken")
// const secret = require("../config").secret

const imageSchema =  require('./imageSchema')


const userSchema = new mongoose.Schema(
    {   
        firstname: {
            type: String,
            // required: true
        },
        lastname: {
            type: String,
            // required: true
        },
        username: {
            type: String,
            required: [true, "can't be blank"],
            unique: true
        },
        password: {
            type: String,
            required: [true, "can't be blank"]
        },
        desc: {
            type: String,
        },
        role: {
            Admin: String
        },
        images: [imageSchema],
    },
)


userSchema.plugin(uniqueValidator, {mesaage: "is already taken"})
userSchema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString("hex")
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, "sha512").toString("hex")
}
userSchema.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, "sha512").toString("hex")
    return this.hash === hash
}


module.exports = mongoose.model('user', userSchema)