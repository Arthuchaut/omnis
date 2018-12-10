'use strict'

const router = require('express').Router()
const env    = require('../env.json')

router.get('/', (req, res) => {
    if (!('user' in req.session))
        return res.redirect(env.mapping.root)

    res.render('dashboard')
})

module.exports = router