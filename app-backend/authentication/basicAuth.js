function authUser(req, res, next) {
    if(req.body._id === undefined) {
        res.status(403)
        return res.send("need to sign in")
    }

    next()
}

function authRole() {
    return(req, res, next) => {
        if(req.user.role !== role) {
            res.status(401)
            return res.send("not allowed")
        }
        
        next()
    }
}

module.exports = {
    authUser,
    authRole
}