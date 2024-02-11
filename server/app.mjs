import express from 'express'
import { handler } from '../build/handler.js'

const app = express()

// Importing Middleware
import { parser, cookiesParser, checkJWT } from './middleware/middleware.mjs'

// Middleware
app.use(parser)
app.use(cookiesParser)
app.use(checkJWT)

// Svelte connection middleware
app.use(handler)

// Redirect end points
import router from './routes/routes.mjs'
app.use(router)

app.listen(3000, () => {
    console.log(`Server is running on port 3000`)
})