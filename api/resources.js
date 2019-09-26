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
    console.log(data)
    resources.push(data);
    res.send(`Recibido con el id ${data.id}`);
    // } else{
    //     res.status('404').send(`Fijate que la pifiaste mal Cris`);
    // } 
    next();    
}

const getCourseById = (req, res, next) =>{
    const resEmplo = users.find((e) => e.id === req.params.id);
    if(resEmplo){
        res.json(resEmplo);
    } else{
        res.status(404).send('Empleado no encontrado');
    }
    next();    
};

//DELETE un pedido de borrar algo de la api

//PATCH un pedido de borrar algo de la api



module.exports = { getCourse, getCourseById, postCourse };