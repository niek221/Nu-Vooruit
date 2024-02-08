const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()

const { comparePassword } = require('../functions/passwordFunctions.js')  
const { tokenGenerator } = require('../functions/tokenFunctions.js')  

// Path to JSON files
const contentFilePath_1 = '../content/content.json'

router.post('/login', async (req, res) => {
    const isPasswordCorrect = await comparePassword(req.body.password);
    if (isPasswordCorrect) {
        const userIP = req.ip;
        const token = tokenGenerator(userIP);
        res.cookie('jwt', token);
        res.redirect('/admin')
    } else {
        res.status(500).send("Incorrect password");
    }
})

module.exports = {
    router
}