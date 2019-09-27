const resources = [
    {id:'1', name: 'Acamica', modality: 'online', price: '0', email: 'edx.org'},
    {id:'2', name: 'Ada', modality: 'online', price: '0', email: 'edx.org'},
    {id:'3', name: 'CourseIT', modality: 'online', price: '0', email: 'edx.org'},

];

const getCourse =  (req, res, next)=>{
    res.json({ resources });
    next();
}

//post no funciona
const postCourse = (req, res, next) =>{
    let data = req.body
    data.id = resources.length +1 
    resources.push(data);
    res.status('201').json(`Fijate que la pifiaste mal Cris`);
    
    next();    
}

//este funciona!
const getCourseById = (req, res, next) =>{
    const resEmplo = resources.find((e) => e.id === req.params.id);
    if(resEmplo){
        res.json(resEmplo);
    } else{
        res.status(404).send('Empleado no encontrado');
    }
    next();    
};

//DELETE un pedido de borrar algo de la api

const deleteCourseById = (req, res, next) =>{
    const resCourse = resources.find((e) => e.id === req.params.id);
    if(resCourse){
        res.json();
    } else{
        res.status(404).send('curso no encontrado no se borro');
    }
    next();    
};

//PATCH un pedido de borrar algo de la api



module.exports = { getCourse, getCourseById, postCourse,deleteCourseById };