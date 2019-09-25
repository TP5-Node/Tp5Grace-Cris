const showModal = () => {
    let container = document.getElementById("backModal")
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

const closeModal = () =>{
    let container = document.getElementById('backModal')
    container.classList.toggle('hide')
}


// FUNCION PARA EDITAR

//FUNCION PARA BORRAR
const initialize = () =>{
    let deleteButton = document.getElementById("deleteButton")
    deleteButton

}
