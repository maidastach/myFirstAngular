const isLogged = (req, res, next) => {
    try
    {
        if(req.cookies.user.logged) next()
    }
    catch(error)
    {
        res.redirect('/')
    }
}
const isNotLogged = (req, res, next) => {
    try
    {
        if(req.cookies.user.logged) res.redirect('/shopping')
    }
    catch(error)
    {
        next()
    }
}

module.exports = { isLogged, isNotLogged }