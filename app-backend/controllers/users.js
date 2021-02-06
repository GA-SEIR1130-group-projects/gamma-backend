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

router.post("/users/login", async (req, res, next) => {
    try {const founduser = await user.findOne({
        username: req.body.username
    })
    console.log(founduser)
    if (!founduser) {
        res.status(500).json({
            message: "username or password is not valid"
        })
    }

    else {
        if (founduser.password == req.body.password) {
            res.json({
                data: founduser,
                message: `welcome back ${founduser.firstname}`
            })
        }
        else {
            res.status(500).json({
                message: "username or password is incorrect"
            })
        }
    }}
    catch(err) {
        next(err)
    }
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