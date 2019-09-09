const express = require('express');
const path = require('path')

const users = require('./users')
const router = express.Router();

//PAGES ROUTES//
router.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, '../pages/index.html'))
})

//API ROUTES//
router.get('/api/users', users)

//NOT FOUNS HANDLER//
router.use((req, res) =>{
    res.status(404).send('Ojo que te mandaste un mocazo');
});



module.exports = router;