const bodyParser = require('body-parser') 
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')

// Parses incoming data to process it
function parser (req, res, next) {
    bodyParser.json()(req, res, next)
}

function cookiesParser (req, res, next) {
    cookieParser()(req, res, next);
}

// JWT authenticating token
function checkJWT (req, res, next) {
    const userToken = req.cookies.jwt

    if (req.path === '/login') {
        return next();
    }

    if (!userToken) {
        return res.status(401).redirect('/login');
    } 

    jwt.verify(userToken, 'nu-vooruit', (error, decodedToken) => {
        if (error) {
            return res.status(401).redirect('/login');
        }

        const userIP = req.ip;
        const userIPFromCookie = decodedToken.userIP;

        if (userIP !== userIPFromCookie) {
            return res.status("wrong ip").redirect('/login');
        }
        next()
    })
}

module.exports = {
    parser,
    cookiesParser,
    checkJWT
}