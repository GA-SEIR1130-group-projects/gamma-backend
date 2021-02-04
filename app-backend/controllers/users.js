const express = require("express")
const router = express.Router()
const { authUser, authRole }  = require("../authentication/basicAuth.js");

const User = require("../models/user-model.js");

router.get("/home", (req, res) => {
    res.send("Home page")
})

router.get("/admin", (req, res, next) => {
    res.send("Filler text, welcome to the Admin page")
})


router.get("/users", (req, res, next) => {
    User.find({})
        .then(obj => res.json(obj))
        .then(obj => {
            res.render("user", obj)
        })
        .catch(next)
})

router.get("/users/:id", (req, res, next) => {
    User.findById(req.params.id)
        .then(obj => res.json(obj))
        .then(obj => {
            res.render("user", obj)
        })
        .catch(err => {
            console.log("there has been an error" + err)
            res.send("bad id")
        })
})

module.exports = router