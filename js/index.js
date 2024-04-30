const $headerTitle = document.querySelector('.header-title');
const $btnLogout = document.querySelector('.header-logout');
const $taskListForm = document.querySelector('.tasklist-form');
const $taskListInput = document.querySelector('.tasklist-input');
const $taskList = document.querySelector('.tasklist');
const $btnLimpiarLista = document.querySelector('.tasklist-clear');

//Saludar al Usuario
const searchUserName = localStorage.getItem('username');

const userName = searchUserName ? JSON.parse(searchUserName) : prompt('¿Cuál es tu nombre?');

const saveUsername =(name)=>{
    localStorage.setItem('username', JSON.stringify(name))
}

const greetUser =()=>{
    if(!userName){return} 
    $headerTitle.innerHTML = `Hola ${userName}`
}

const logout = ()=>{
    localStorage.clear();
    location.reload();
}



// Lista de Tareas

const searchTaskList = localStorage.getItem('taskList');

let listaDeTareas = searchTaskList ? JSON.parse(searchTaskList) : [];

const cleanInput =()=>{
    $taskListInput.value = '';
}

const createNewTask =(task)=>{
    return task = `<li>${task}</li>`
}

const validatetask =(task)=>{
    if(task.lenght === 0 || !task){
        alert('Por favor, escribe una tarea');
        return true
    }
    else if(listaDeTareas.some(tarea => tarea === createNewTask(task))){
        alert('Esa tarea esta repetida');
        return true
    }
    else{
        return false
    }
}

const renderTaskList =()=>{
    $taskList.innerHTML = listaDeTareas.join('');
}

const saveTaskList =()=>{
    localStorage.setItem('taskList', JSON.stringify(listaDeTareas))
}

const toggleDeleteAll =()=>{
    if(listaDeTareas.length === 0){
        $btnLimpiarLista.classList.add('display-none')
    }
    else{
        $btnLimpiarLista.classList.remove('display-none')
    }
}

const handleSubmit =(e)=>{

    e.preventDefault();
    if(validatetask($taskListInput.value.trim())){
        return
    }
    let newTask = createNewTask($taskListInput.value.trim());
    listaDeTareas.push(newTask);
    saveTaskList();
    cleanInput();
    renderTaskList();
    toggleDeleteAll();
}

const clearTaskList =()=>{
    listaDeTareas = [];
    saveTaskList();
    renderTaskList();
    toggleDeleteAll();
}


// Función de Iniciación
const init =()=>{
    saveUsername(userName)
    greetUser()
    $btnLogout.addEventListener('click', logout)
    $btnLimpiarLista.addEventListener('click', clearTaskList)
    $taskListForm.addEventListener('submit', handleSubmit)
    toggleDeleteAll();
    renderTaskList();
}

init()