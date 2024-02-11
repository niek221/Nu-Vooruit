import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'

// Parses incoming data to process it
export const parser = (req, res, next) => {
    bodyParser.json()(req, res, next)
}

export const cookiesParser = (req, res, next) => {
    cookieParser()(req, res, next);
}

// JWT authenticating token
export const checkJWT = (req, res, next) => {
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
