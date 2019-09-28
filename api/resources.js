const uniqid = require('uniqid')

const resources = [
    {id:'1', name: 'Acamica', modality: 'Online', price: '$95.00', email: 'cursos@acamica.com'},
    {id:'2', name: 'Ada', modality: 'Presencial', price: '$80.000', email: 'contacto@ada.com'},
    {id:'3', name: 'CourseIT', modality: 'Presencial', price: '$70.000', email: 'educacion@courseit.com'},

];

const getCourse =  (req, res, next)=>{
    res.json({ resources });
    next();
}


const postCourse = (req, res, next) =>{
    let data = req.body;
    if(data.hasOwnProperty('name') && data.hasOwnProperty('modality') && data.hasOwnProperty('price') && data.hasOwnProperty('email')){
    data.id = `${uniqid()}`
    resources.push(data);
    res.status(201).send(`Recibido con el id ${data.id}`);
    } else{
       res.status(404).send(`Fijate que la pifiaste mal Cris`);
    } 
    next();    
}

//este funciona!
const getCourseById = (req, res, next) =>{
    const resEmplo = resources.find((e) => e.id === req.params.id);
    if(resEmplo){
        res.status(200).json(resEmplo);
    } else{
        res.status(404).send('Empleado no encontrado');
    }
    next();    
};

const patchCourse = (req, res, next) => {
    let data = req.body;
    let index = '';
    let resCourses = resources.find((e, i) =>{
        index = i;
        return e.id === req.params.id;
    }) 

    if(resCourses){
        let editCourse = { ...resCourses, ...data };
        resources.splice(index, 1);
        resources.push(editCourse);
    } else{
        res.status(404).send('Curso no encontrado');
    } next()
}

const deleteCourse = (req, res, next) =>{
    let course = resources.find(e=>e.id === req.params.id)
    let index = resources.findIndex(e => e.id === req.params.id)
    resources.splice(index, 1)
    res.json(`El curso ${course.name} con id ${req.params.id} se ha eliminado del registro.`)
    next()
}

module.exports = { getCourse, getCourseById, postCourse, patchCourse, deleteCourse };
