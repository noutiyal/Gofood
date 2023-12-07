const expressAsyncHandler = require("express-async-handler")

const displaydata = expressAsyncHandler(async (req, res) => {
    console.log("first")

    try {
        res.status(200).send({ data: global.food, success: true })
    } catch (error) {
        res.status(500).send({ msg: "server problem" })
    }

})

const categorydata = expressAsyncHandler(async (req, res) => {

    try {

        res.status(200).send({ data: global.foodcate, success: true })

    } catch (error) {
        res.status(500).send({ msg: "server issues", success: false })
    }
})
module.exports = { displaydata ,categorydata}