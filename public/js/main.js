const printEmployees = (data) => {
    let list = document.getElementById('employees')
    data.forEach( e =>{
        
    });
}


const initialize = () ={
    fetch('/api/users')
        .then((res)=> res.json())
        .then((res)=> printEmployees(res));

}

