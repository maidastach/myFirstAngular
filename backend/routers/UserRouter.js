const express = require('express');
const users = require('../database/user.json');
const { isLogged } = require('../utils');

const UserRouter = express.Router();

UserRouter.get(
    '/',
    isLogged,
    (req, res) => 
    {
        try
        {
            const user = req.cookies.user;
            res.send(user)
        }
        catch(error)
        {
            res.status(400).send({ message: 'Error'})
        }
    }
)

UserRouter.post(
    '/addtocart',
    isLogged,
    (req, res) => 
    {
        try
        {
         const item = req.body;
         const {user} = req.cookies
         res.cookie(
             'user',
             {
                 ...user,
                 cart: [
                     ...user.cart, item
                 ]
             }
            )
        res.send({user: req.cookies.user})
        }
        catch(error)
        {
            console.log(error);
            res.send({error: 'Errore'})
        }
    }
)

UserRouter.post(
    '/login', 
    (req, res) => 
    {
        try
        {
            const { username, password } = req.body;
            const [user] = users.filter(single => single.username === username)
            if(user)
            {
                if((username === user.username) && (password === user.password))
                {
                res.cookie(
                    'user', 
                    {
                        logged: true,
                        username, 
                        cart: []
                    }
                );
                res.status(200).send(
                    {
                        message: 'Logged In'
                    }
                )
                }
                else
                {
                    console.log('Error Logging In');
                    res.status(404).send(
                        {
                            message: 'Incorrect Password'
                        }
                    )
                }
            }
            else
            {
                throw new Error()
            }
        }
        catch(error)
        {
            res.status(400).send(
                {
                    message: 'User Not Found'
                }
            )
        }
    }
)

module.exports = UserRouter;