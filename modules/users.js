const users = [
    {name: 'calixta', email: 'calixta@com'},
    {name: 'calixta', email: 'calixta@com'},
    {name: 'calixta', email: 'calixta@com'}
];

const handler =  (req, res, next)=>{
    console.log('Pidiendo usuarios')
    res.json({ users });
    next;
}

module.exports = handler;