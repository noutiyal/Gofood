const expressAsyncHandler = require("express-async-handler")
const { body, validationResult } = require('express-validator')
const UserSchema = require("../models/User")
const jwt = require("jsonwebtoken")
const { response } = require("express")
const secretkey = "secretkey"
const bcrypt = require("bcrypt")

const usersignup = expressAsyncHandler(async (req, res) => {
    const { name, location, Number, email, password } = req.body;
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array(), success: false });
    }

    try {


        const findemail = await UserSchema.findOne({ email: email });
        if (findemail) {
            res.status(201).json({ msg: `This email already exists: ${email}`, success: false });
        } else {
            // Generate a salt and hash the password

            const salt = await bcrypt.genSalt(12);
            let secpassword = await bcrypt.hash(password, salt);
            console.log(secpassword, "secpassword")
            const x = await bcrypt.compare(password, secpassword)
            // console.log(x, "xxxxxxxxxxxxxcxcxcxcx")

            const userdata = new UserSchema({
                name: name,
                location: location,
                Number: Number,
                email: email,
                password: password,
            });
            const findemail = await UserSchema.findOne({ email: email });
            // console.log(findemail)
            const data = await userdata.save();
            res.status(200).json({ data: data, success: true });
        }
    } catch (error) {
        res.status(500).json({ error: error, success: false });
    }
});

const emailexist = expressAsyncHandler(async (req, res) => {
    try {
        const { email } = req.body
        console.log(email)
        const findemail = await UserSchema.findOne({ email: email })
        if (findemail) {
            res.status(201).send({ msg: `this email exist ${email}`, success: false })
        } else {
            res.status(200).send({ msg: `new user ${email}`, success: true })
        }
    } catch (error) {
        res.status(500).json({ error: error, success: false })
    }
})


const loginUser = expressAsyncHandler(async (req, res) => {


    try {
        const { email, password } = req.body;

        if (!email) {
            res.status(400).json({ msg: "Please provide your email address." });
            return;
        }

        const findUser = await UserSchema.findOne({ email: email });
        console.log("aaaaaaaaaaa", findUser.password,)
        if (findUser) {

            const isPasswordValid = await bcrypt.compare(password, findUser.password)
            console.log(isPasswordValid, "order_MxwebLN6ZLN7H5");
            if (isPasswordValid) {
                // Successful login, generate a JWT token
                const token = jwt.sign({
                    email: findUser.email,
                    Number: findUser.Number,
                    name: findUser.name,
                    location: findUser.location,
                    date: findUser.date
                }, secretkey, { expiresIn: "8h" });

                res.status(200).json({ token, success: true });
            } else {
                // Incorrect password
                res.status(401).json({ msg: "Incorrect password. Please try again." });
            }

        } else {
            // User not found, provide a signup message
            res.status(404).json({ newuser: "You are a new user, please visit our signup page." });
        }
    } catch (error) {
        // Server error
        res.status(500).json({ error: error, msg: "Server problem. Please try again later." });
    }



})

const forgetpassword = expressAsyncHandler(async (req, res) => {


})



module.exports = { usersignup, emailexist, loginUser, forgetpassword }