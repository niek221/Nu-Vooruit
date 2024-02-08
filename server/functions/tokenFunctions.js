const jwt = require('jsonwebtoken')

function tokenGenerator (userIP) {
    const token = jwt.sign({ username: 'admin', userIP }, 'nu-vooruit', { expiresIn: '2h' })
    return token
}

module.exports = {
    tokenGenerator
}