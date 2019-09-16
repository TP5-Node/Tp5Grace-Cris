const employees = [
    {name: 'calixta', email: 'calixta@com'},
    {name: 'calixta', email: 'calixta@com'},
    {name: 'calixta', email: 'calixta@com'}
];

const getEmplo =  (req, res, next)=>{
    res.json({ employees });
    next();
}

const postEmplo = (req, res, next) =>{
    let data = req.body
    if (data.hasOwnProperty('name') && data.hasOwnProperty('email')){
    data.id = employees.length + 1;
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



module.exports = { getEmplo, getEmploById, postEmplo };