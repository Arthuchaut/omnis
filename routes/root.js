'use strict'

const router = require('express').Router()
const env    = require('../env.json')

router.get('/', (req, res) => {
    if ('user' in req.session)
        return res.redirect(env.mapping.dashboard)
    
    res.render('root')
})

module.exports = router;