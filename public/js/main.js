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
        editBtn.appendChild(createEditBtn(e.id))
        editBtn.appendChild(createDelBtn(e.id))
        tableRow.appendChild(editBtn)
        list.appendChild(tableRow)
    })
};

const createEditBtn = (id) =>{
    let btn = document.createElement('a')
    btn.innerHTML = `<i class="material-icons" title="Edit">&#xE254;</i>`
    btn.href = "#"
    btn.onclick = () =>{
        showEditModal(id)
    } 
    return btn
} 

const createDelBtn = (id) =>{
    let btn = document.createElement('a')
    btn.innerHTML = `<i class="material-icons" title="Delete">&#xE872;</i>`
    btn.href = "#"
    btn.onclick = () =>{
        showDeleteModal(id)
    } 
    return btn
}


//FUNCION INICIO DE EDICION
const editCourseById = (id) =>{
    fetch(`/api/resources/${id}`)
        .then(res => res.json())
        .then(res => {
           showEditModal()
           printCourses(id) 
           infoModalEdit(res)
            
        })
}

//FUNCION PARA LLENAR EL MODAL DE EDICION
const infoModalEdit = (resource) =>{
    dataEditModal('editName', resource.name)
    dataEditModal('editModality', resource.modality)
    dataEditModal('editPrice', resource.price)
    dataEditModal('editEmail', resource.email)
}

//FUNCION GENERAL PARA LLENAR EL MODAL DE EDICION
const dataEditModal = (editInfo, info )=>{
    let editInput = document.getElementById(editInfo)
    editInput.value = info
}


//FUNCION DE PATCH
const patchCourse = (id) =>{
    event.preventDefault();
    let editName = document.getElementById('editName').value
    let editModality = document.getElementById('editModality').value
    let editPrice = document.getElementById('editPrice').value
    let editEmail = document.getElementById('editEmail').value
    if(validData()){
        let editedCourse = {
            name: editName,
            modality: editModality,
            price: editPrice,
            email: editEmail
        }
        fetch(`/api/resources/${id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(editedCourse)
        })
        .then(res=>res.json())
            .then(res=>{
                console.log(res)
                
            })
            closeEditModal()
            initialize()
            cleanInputs('editName')  
            cleanInputs('editModality')  
            cleanInputs('editPrice')  
            cleanInputs('editEmail')
    }else{
        console.log('TREMENDO ERROR ACA')
    }
}


//FUNCION PARA DELETEAR
const deleteCourse = (id) =>{
    fetch(`/api/resources/${id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    })
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            closeDeleteModal()
            initialize()
        })
}


//FUNCIONES PARA MOSTRAR MODALES
const showModal = () => {
    let container = document.getElementById("backModal")
    container.classList.toggle('hide')
    }

const showEditModal = (id) => {
    let container = document.getElementById("editCourseModal")
    container.classList.toggle('hide')
    let confEdit = document.getElementById("EditConf")
    confEdit.onclick =()=> { patchCourse(id)}

    }

const showDeleteModal = (id) => {
    let container = document.getElementById("deleteCourseModal")
    container.classList.toggle('hide')
    let conf = document.getElementById("deleteConf")
    conf.onclick =()=> { deleteCourse(id)}
}


//FUNCIONES PARA CERRAR MODALES    
const closeModal = () =>{
    let container = document.getElementById('backModal')
    container.classList.toggle('hide')
}

const closeEditModal = () =>{
    let container = document.getElementById('editCourseModal')
    container.classList.toggle('hide')
}

const closeDeleteModal = () =>{
    let container = document.getElementById('deleteCourseModal')
    container.classList.toggle('hide')
}


//FUNCION PARA HACER EL POST
const postCourse = () => {
	event.preventDefault();
    const name = document.getElementById('name');
    const modality = document.getElementById('modality');
    const price = document.getElementById('price');
    const email = document.getElementById('email');
    let newCourse = {
        name: name.value,
        modality: modality.value,
        price: price.value,
        email: email.value
    }
    if(validData()){
            fetch('api/resources', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newCourse)
            })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
            })
            initialize();
            closeModal() 
            cleanInputs('name')  
            cleanInputs('modality')  
            cleanInputs('price')  
            cleanInputs('email') 
    
    }else{
        console.log("ERROR")
    }
    
}

//FUNCION PARA VALIDAR
const validData = (name, modality, price, email) =>{
    if(validationName(name)){
        if(validationMod(modality)){
            if(validationPrice(price)){
                if(validationEmail(email)){
                    return true
                }else{
                    return "WRONG EMAIL"
                }
            }else{
                return "WRONG PRICE"
            }
        }else{
            return "WRONG MODALITY"
        }
    }else{
        return "WRONG MAIL"
    }
}


//VALIDACIONES INDIVIDUALES
const validationName = () =>{    
    if(name.lenght < 30 && name !== ""){
    return true
    }else{
        return false
    }
}

const validationMod = (modality) =>{    
    if(modality.lenght < 30 && modality !== ""){
    return true
    }else{
        return false
    }
}
const validationPrice = (price) =>{    
    const priceRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    return priceRegex.test(price)
}

const validationEmail = (email) =>{
    const emailRegex = /\S+@\S+\.\S+/
    return emailRegex.test(email)
}


//FUNCION PARA REINICIAR LOS INPUTS 
const cleanInputs = (inputNod) =>{
    const cleanNod = document.getElementById(inputNod)
    cleanNod.value = "" 
}


//FUNCION PARA FILTER
const filterContent = () =>{
    fetch('/api/resources')
    .then(res => res.json())
    .then(response =>{
        const data = response.resources
        let valueInput = document.getElementById('filterInput').value
        let filterInput = data.filter(resource => Object.keys(resource).find( prop => resource[prop].includes(valueInput)))
        const list = document.getElementById('tableContain');
        list.innerHTML = '';
        filterInput.forEach(elem =>{
         
        let rowFilter = document.createElement('tr')
        let filterName = document.createElement('td')
        filterName.innerText = elem.name
        let filterModality = document.createElement('td')
        filterModality.innerText = elem.modality
        let filterPrice = document.createElement('td')
        filterPrice.innerText = elem.price
        let filterEmail = document.createElement('td')
        filterEmail.innerText = elem.email
        rowFilter.appendChild(filterName)
        rowFilter.appendChild(filterModality)
        rowFilter.appendChild(filterPrice)
        rowFilter.appendChild(filterEmail) 
        let editBtn = document.createElement('td')
        editBtn.appendChild(createEditBtn())
        editBtn.appendChild(createDelBtn())
        rowFilter.appendChild(editBtn)   
        list.appendChild(rowFilter)
        })
    })
}
       
const enterKeyPress = event =>{
    if( event.code === 'Enter'){ 
        filterContent()
    }  
} 
