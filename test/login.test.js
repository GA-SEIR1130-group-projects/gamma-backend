const should = require("chai").should()
const expect = require("chai").expect
const supertest = require("supertest")
const api = supertest("https://finsta-v2.herokuapp.com/api")

describe("GET /users", () => {
    it("should return a 200 response", done => {
        api
            .get("/users")
            .set("Accept", "application/json")
            .expect(200, done)
    })

    it("should return an array of objects that have a field called name", done => {
        api
            .get("/users")
            .set("Accept", "application/json")
            .end((error, response) => {
                expect(response.body).to.be.an("array")
                done()
            })
    })

    it("should return an array of objects that have a field called name", done => {
        api 
            .get("/users")
            .set("Accept", "applicantion/json")
            .end((error, response) => {
                response.body.forEach(obj => {
                    expect(obj).to.have.property("username")
                })
            done()
            })
    })
})

describe("GET /users/:id", () => {
    it("should return a 200 response", done => {
        api
            .get("/users/:id")
            .set("Accept", "application/json")
            .expect(200, done)
    })
})

describe("POST /users", () => {
    const newLog = {
        username: String,
        password: String
    }
    before(done => {
        api 
            .post("/users")
            .set("Accept", "application/json")
            .send(newLog)
            .end(done)
    })
    it("should add an object to the collection and return it", done => {
        api 
            .get("/users")
            .set("Accept", "application/json")
            .end((error, response) => {
                expect(response.body.find(obj => 
                    obj.id === newLog.id
                )).to.be.an("object")
                done()
            })
    })
}) 