'use strict'

const express    = require('express')
const app        = express()
const session    = require('express-session')
const bodyParser = require('body-parser')
const env        = require('./env.json')

app.set('view engine', 'pug')
app.set('views', __dirname + '/views')

app.use('/static', express.static(__dirname + '/public'))

app.use(session(env.session))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/', require(__dirname + '/routes/dashboard.js'))

app.listen(env.server.port, env.server.host, () => 
    console.log(`Server started and listening on ${env.server.host}:${env.server.port} ...`)
)