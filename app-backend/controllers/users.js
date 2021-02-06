const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const { authUser, authRole }  = require("../Auth/basicAuth")

const user = require("../models/user-model")

router.get("/home", (req, res) => {
    res.send("homepage here")
})

router.get("/dashboard", authUser, (req, res) => {
    res.send("dashboard page")
})

router.get("/admin", authUser, (req, res, next) => {
    res.send("Filler text, welcome to the Admin page")

})

router.post("/users", (req, res, next) => {
    user.create(req.body)
        .then(obj => res.json(obj))
        .then(() => res.redirect("/dashboard"))
        .catch(next)
})

router.post("/users/login", (req, res, next) => {
    user.findOne({username: req.body.username})
        .then(obj => res.json(obj))
        next()   
})


router.get("/users",  (req, res, next) => {
    user.find({})
        .then(obj => res.json(obj))
        .then(obj => {
            res.render("user", obj)
        })
        .catch(next)
        console.log(req.users)
})

router.get("/users/:id", (req, res, next) => {
    user.findById(req.params.id)
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