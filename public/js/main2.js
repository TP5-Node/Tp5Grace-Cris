let resourcesData;

const initialize = async () => {
    resourcesData = await getCourse();
    printCourses(resourcesData.resources)
    
};

const getCourse = () => {
    return fetch('/api/resources')
    .then((res) => res.json());
};

const printCourses = (data) => {
    const list = document.getElementById('tableContain');
    list.innerHTML = '';
    data.forEach(e =>{
        
        let tableRow = document.createElement('tr')
        let rowName = document.createElement('td')
        rowName.innerText = e.name
        let rowModality = document.createElement('td')
        rowModality.innerText = e.modality
        let rowPrice = document.createElement('td')
        rowPrice.innerText = e.price
        let rowEmail = document.createElement('td')
        rowEmail.innerText = e.email 
        tableRow.appendChild(rowName)
        tableRow.appendChild(rowModality)
        tableRow.appendChild(rowPrice)
        tableRow.appendChild(rowEmail)
        let editBtn = document.createElement('td')
        editBtn.appendChild(createEditBtn())
        editBtn.appendChild(createDelBtn())
        tableRow.appendChild(editBtn)
        list.appendChild(tableRow)
    })

    
};


const createEditBtn = () =>{
    let btn = document.createElement('a')
    btn.innerHTML = `<i class="material-icons" title="Edit">&#xE254;</i>`
    btn.href = "#"
    btn.onclick = () =>{
        showEditModal()
    } 
    return btn
} 

const createDelBtn = () =>{
    let btn = document.createElement('a')
    btn.innerHTML = `<i class="material-icons" title="Delete">&#xE872;</i>`
    btn.href = "#"
    btn.onclick = () =>{
        showDeleteModal()
    } 
    return btn
}


const showEditModal = () => {
    let container = document.getElementById("editCourseModal")
    container.classList.toggle('hide')
    }

const showDeleteModal = () => {
    let container = document.getElementById("deleteCourseModal")
    container.classList.toggle('hide')
    }




//HASTA ACA LLEGUE CON MALE


const createUser = () => {
    event.preventDefault();
    const formId = document.getElementById('id');
    const formName = document.getElementById('name');
    const formModality = document.getElementById('modality');
    const formPrice = document.getElementById('price');
    const formEmail = document.getElementById('email');

	const payload = {
        
		name: formName.value,
        modality: formModality.value,
        price: formPrice.value,
        email: formEmail.value,
        
    }



    fetch('api/resources', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            formId.value = '';
            formName.value = '';
            
        })
        .catch((error) => {
            // acá van otras cositas
        });
    } 
    

const isValid = (payload) => {
	//acá valido las cositas
	return true;
};


    
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



const showModal = () => {
    let container = document.getElementById("backModal")
    container.classList.toggle('hide')
    }


const closeModal = () =>{
    let container = document.getElementById('backModal')
    container.classList.toggle('hide')
}


// FUNCION PARA EDITAR

//FUNCION PARA BORRAR


//FILTER INPUT 

let lastRequest;
const handleSearch = () => {
	let query = event.target.value;
	if (query.length >= 3 || (event.keyCode === 13 && query !== lastRequest)) {
        lastRequest = query.id;
    
        return fetch(`/api/resources/${query}`)
        .then((res) => res.json())
        .then ((res) => console.log(res.resources));
	}
};




