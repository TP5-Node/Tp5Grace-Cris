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
        patchCourse()
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
//FUNCION DE PATCH
const patchCourse = () =>{
    showEditModal()
    let idRow = document.getElementById()
    let editName = document.getElementById('editName').value
    let editModality = document.getElementById('editModality').value
    let editPrice = document.getElementById('editPrice').value
    let editEmail = document.getElementById('editEmail').value
    let idEdit = document.getElementById('editId').innerText
        
    fetch('/api/employees', {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(employee)
    })
    
}

//FUNCION PARA DELETEAR
const deleteCourse = (id) =>{
    fetch('/api/resources/:id', {
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

const showEditModal = () => {
    let container = document.getElementById("editCourseModal")
    container.classList.toggle('hide')
    }

const showDeleteModal = () => {
    let container = document.getElementById("deleteCourseModal")
    container.classList.toggle('hide')
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
    const formName = document.getElementById('name');
    const formModality = document.getElementById('modality');
    const formPrice = document.getElementById('price');
    const formEmail = document.getElementById('email');
    const newCourse = {
        name: formName.value,
        modality: formModality.value,
        price: formPrice.value,
        email: formEmail.value
    }
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
        formId.value = '';
        formName.value = '';
        
    })
    initialize();
    closeModal() 
    cleanInputs('name')  
    cleanInputs('modality')  
    cleanInputs('price')  
    cleanInputs('email')  
}

//FUNCION PARA REINICIAR LOS INPUTS 
const cleanInputs = (inputNod) =>{
    const cleanNod = document.getElementById(inputNod)
    cleanNod.value = "" 
}      
   
    // const validationName = () =>{    
    //     if(name.lenght < 30 && name !== ''){
    //     return true
    //     }else{
    //         return false
    //     }
    // }
    // const validationMod = (modality) =>{    
    //     if(modality.lenght < 30 && modality !== ''){
    //     return true
    //     }else{
    //         return false
    //     }
    // }
    // const validationPrice = (price) =>{    
    //     const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    //     return re.test(price)
    // }

    // const validationEmail = (email) =>{
    //     const re = /\S+@\S+\.\S+/
    //     return re.test(email)
    // }




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
