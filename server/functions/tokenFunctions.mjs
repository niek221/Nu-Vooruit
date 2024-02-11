import jwt from 'jsonwebtoken'

export const tokenGenerator = (userIP) => {
    const token = jwt.sign({ username: 'admin', userIP }, 'nu-vooruit', { expiresIn: '2h' })
    return token
}
