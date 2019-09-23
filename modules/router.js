const express = require('express');
const path = require('path')

const employees = require('../api/employees')
const router = express.Router();

//PAGES ROUTES//
router.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, '../pages/index.html'))
})




//API ROUTES//
router.get('/api/employees', employees.getEmplo)
router.get('/api/employees/:id', employees.getEmploById)
router.post('/api/employees', employees.postEmplo)
///router.delete('/api/employees/:id', employees.getEmploById)

//NOT FOUNS HANDLER//
router.use((req, res) =>{
    res.status(404).send('Ojo que te mandaste un mocazo');
});

module.exports = router;