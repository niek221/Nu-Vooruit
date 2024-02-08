async function comparePassword (userPassword) {
    if (userPassword === "wachtwoord") {
        return true
    } else {
       return false
    }
}

module.exports = {
    comparePassword
}