const express = require('express')

const app = express()

// Importing Middleware
const { parser, cookiesParser, checkJWT } = require('./middleware/middleware.js')

// Middleware
app.use(parser)
app.use(cookiesParser)
app.use(checkJWT)

// Redirect end points
const router = require('./routes/routes.js')   
app.use(router.router)

app.listen(3000, () => {
    console.log(`Server is running on port 3000`)
})