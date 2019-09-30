const express = require('express');
const path = require('path')

const resources = require('../api/resources')
const router = express.Router();

//PAGES ROUTES//
router.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, '../pages/index.html'))
})

//API ROUTES//
router.get('/api/resources', resources.getCourse);

router.post('/api/resources', resources.postCourse);
router.patch('/api/resources/:id', resources.patchCourse);
router.delete('/api/resources/:id', resources.deleteCourse)
//router.get('/api/resources/:id', resources.editCourseById);

//NOT FOUNS HANDLER//
router.use((req, res) =>{
    res.status(404).send('Ojo que te mandaste un mocazo');
});

module.exports = router;