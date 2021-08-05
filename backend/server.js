const express = require('express');
const json = express.json;
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser')
const UserRouter = require('./routers/UserRouter');
const ProductsRouter = require('./routers/ProductsRouter');
const { isLogged, isNotLogged } = require('./utils');

const app = express();

app.use(cors());
app.use(cookieParser())

app.use('/api/user', json(), UserRouter)
app.use('/api/products', json(), ProductsRouter)

app.get(
    '/', 
    isNotLogged,
    (req, res) => 
        {
            res.sendFile(path.join(__dirname, '..', 'frontend', 'dist', 'frontend', 'index.html'));
        }
)

app.get(
    '/shopping', 
    isLogged, 
    (req, res) => 
        {
            res.sendFile(path.join(__dirname, '..', 'frontend', 'dist', 'frontend', 'index.html'));
        }
)

app.use(express.static(path.join(__dirname, '..', 'frontend', 'dist', 'frontend')));
/* app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'dist', 'frontend', 'index.html'));;
}); */

app.listen(
    5000, 
    () => console.log('Server running on port 5000')
); 