const showModal = () =>{
    let container = document.getElementById("modal")
    container.classList.toggle('hide')
    
}



    
// FUNCION PARA OBTENER LOS CAMPOS DEL INPUT
const loadedInfo = (dataPlace, info) =>{
const loadedData = document.getElementsByClassName(dataPlace)
loadedData.value = info
}





const sendData = () =>{
if(!name.lenght > 30){
    loadedInfo(name, 'name')
}
// VALIDACION DEL MAIL
emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
if (emailRegex.test(email.value)) {
    loadedInfo(email, 'email')
}
if(!address.lenght > 30){
    loadedInfo(address, 'address')
}
phoneRegex = /^[0-9]$/
if(phoneRegex.test(phone.value)){
    loadedInfo(phone, 'phone')
}
}


// var sendTask = function(){
// event.preventDefault();
// task = document.getElementById('commentInput');
// newTask = task.value;

// if(newTask !== ""){
// task.value = "";
// allTask.unshift({
//     text:newTask,
//     pending:true
// })

// printTask()
// }
// }




const closeModal = () =>{
let container = document.getElementsByClassName('modal')
container.classList.replace('show', 'hide')
}