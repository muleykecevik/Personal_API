"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
/*
    $ npm i express dotenv mongoose express-async-errors
    $ npm i cookie-session
    $ npm i jsonwebtoken
*/

const express = require('express')
const app = express()

/* ------------------------------------------------------- */

require('dotenv').config()
const PORT = process.env?.PORT || 8000

//asyncerrors to errorhandler

require("express-async-errors")


//Connect to db
const { dbConnection } = require('./src/configs/dbConnection')
dbConnection()

//middlewares
app.use(express.json())

//sessionsCookies:
app.use(require('cookies-session')({ secret: process.env.SECRET_KEY }))

//res.getmodellist
app.use(require('./src/middlewares/findSearchSortPage'))

//routes

// HomePath:
app.all('/', (req, res) => {
    res.send({
        error: false,
        message: 'Welcome to PERSONNEL API',
        session: req.session,
        isLogin: req.isLogin
    })
})

/* ------------------------------------------------------- */

// errorHandler:
app.use(require('./src/middlewares/errorHandler'))

// RUN SERVER:
app.listen(PORT, () => console.log('http://127.0.0.1:' + PORT))

/* ------------------------------------------------------- */
// Syncronization (must be in commentLine):
// require('./src/helpers/sync')()