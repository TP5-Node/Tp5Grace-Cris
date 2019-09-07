const express = require('express');
const path = require('path')
const router = express.Router();

router.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, '../pages/index.html'))
})

router.get('/main.js', (req,res)=>{
    res.sendFile(path.join(__dirname, '../pages/main.js'))
})

router.get('/api/users', (req,res)=>{
    res.json({user: [
        {name: 'calixta', email: 'calixta@com'},
        {name: 'calixta', email: 'calixta@com'},
        {name: 'calixta', email: 'calixta@com'}
    ]})
})

module.exports = router