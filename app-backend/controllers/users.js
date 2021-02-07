const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const { authUser, authRole }  = require("../authentication/basicAuth")

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



// user schema CRUD -------------------------------------------------------------------


router.get("/users",  async (req, res, next) => {
    try {
        const allUsers = await user.find({})

        res.json(allUsers);
    }
    catch(err) {
        next(err)
    }
})

router.get("/users/:id", async (req, res, next) => {
    try {
        const foundUser = await user.findById(req.params.id)

        res.json(foundUser);
    } 
    catch(err) {
        next(err)
    }
})



router.post("/users", async (req, res, next) => {
    try {
        const newUser = user.create(req.body)

        res.json({
            data: req.body,
            message: `${req.body.username} created!`
        })
    }
    catch(err) {
        next(err);
    }
})

router.post("/users/:id", async (req, res, next) => {
    try {
        const newImage = user.create({
            images: [
                req.body
            ]
        })

        res.redirect(`/users/:${req.params.id}`)
    }
    catch(err) {
        next(err)
    }
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


router.put("/users/:id", async (req, res, next) => {
    try {
        const updatedUser = await user.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true}
        )

        res.json({
            data: updatedUser,
            message: `${updatedUser.username} was just updated`
        })
    }
    catch(err){
        next(err)
    }
})


router.delete("/users/:id", async (req, res, next) => {
    try {
        const deletedUser = await user.findByIdAndDelete(req.params.id)

        res.json({
            data: deletedUser,
            message: `${deletedUser.username} was deleted`
        })
    }
    catch(err){
        next(err)
    }
})


module.exports = router