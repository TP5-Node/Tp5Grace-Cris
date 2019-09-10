const users = [
    {name: 'calixta', email: 'calixta@com', address: 'blablabla', phone: '08080808', actions: '' },
    {name: 'calixta', email: 'calixta@com', address: 'blablabla', phone: '08080808', actions: '' },
    {name: 'calixta', email: 'calixta@com', address: 'blablabla', phone: '08080808', actions: '' },
];

const handler =  (req, res, next)=>{
    console.log('Pidiendo usuarios')
    res.json({ users });
    next;
}

module.exports = handler;