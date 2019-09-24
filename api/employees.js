const employees = [
    {id:'1', name: 'CS50 Web Programming with Python and JavaScript', modality: 'online', price: '0', web: 'edx.org', actions: '<i class="material-icons" title="Edit">&#xE254;</i><i class="material-icons" title="Delete">&#xE872;</i>'},
    {id:'1', name: 'CS50 Web Programming with Python and JavaScript', modality: 'online', price: '0', web: 'edx.org', actions: '<i class="material-icons" title="Edit">&#xE254;</i><i class="material-icons" title="Delete">&#xE872;</i>'},
    {id:'1', name: 'CS50 Web Programming with Python and JavaScript', modality: 'online', price: '0', web: 'edx.org', actions: '<i class="material-icons" title="Edit">&#xE254;</i><i class="material-icons" title="Delete">&#xE872;</i>'},

];

const getEmplo =  (req, res, next)=>{
    res.json({ employees });
    next();
}

//post no funciona
const postEmplo = (req, res, next) =>{
    let data = req.body
    if (data.hasOwnProperty('name') && data.hasOwnProperty('modality')){
    data.id = employees.length + 1;//generacion de id mas segura
    employees.push(data);
    res.send(`Recibido con el id ${data.id}`);
    } else{
        res.status('404').send(`Fijate que la pifiaste mal Cris`);
    } 
    next();    
}

const getEmploById = (req, res, next) =>{
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



module.exports = { getEmplo, getEmploById, postEmplo };