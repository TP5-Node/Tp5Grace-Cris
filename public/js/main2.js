let employeesData;

const initialize = async () => {
    employeesData = await getUsers();
    printEmployees(employeesData.employees)
};


const getUsers = () => {
    return fetch('/api/employees')
    .then((res) => res.json());
};

const printEmployees = (data) => {
    const list = document.getElementById('ulData');
    list.innerHTML = '';
    data.forEach((e) => (list.innerHTML += userView(e)));
    
};

const userView = ({ name, modality, price, web, actions }) => `
    
    <li>${name}</li>
    <li>${modality}</li>
    <li>${price}</li>
    <li>${web}</li>
    <li>${actions}</li>
`;

const createUser = () => {
	event.preventDefault();
    const formId = document.getElementById('id');
    const formName = document.getElementById('name');
    const formModality = document.getElementById('modality');
    const formPrice = document.getElementById('price');
    const formWeb = document.getElementById('web');

	const payload = {
		id: formId.value,
        name: formName.value,
        modality: formModality.value,
        price: formPrice.value,
        web: formWeb.value
	};

	if (isValid(payload)) {
		fetch('api/employees', {
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
				initialize();
			})
			.catch((error) => {
				// acá van otras cositas
			});
	} else {
	}
};

const isValid = (payload) => {
	//acá valido las cositas
	return true;
};





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

