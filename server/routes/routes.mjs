import express from 'express'

const router = express.Router()

import { comparePassword } from '../functions/passwordFunctions.mjs'
import { tokenGenerator } from '../functions/tokenFunctions.mjs'

// Path to JSON files
const contentFilePath_1 = '../content/content.json'

router.get('/login', async (req, res) => {
    res.send("hello")
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

export default router;