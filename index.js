const checkButtons = document.querySelectorAll('.checkBtn');
let todoElements = document.querySelectorAll('.todo');

todoElements.forEach((todo) => {
    handleTaskClick(todo);
});

function handleTaskClick(todo) {
    const btn = todo.querySelector('.checkBtn');
    const taskCounter = document.querySelector('#todos-number');
    btn.addEventListener('click',() => {
        btn.classList.add('completed');
        const imgCheck=btn.querySelector('img');
        imgCheck.classList.remove('hide');
        todo.classList.add('barred-text');     
    });
}


const input = document.querySelector('input');
let todos = document.querySelector('.todos');
input.addEventListener('keydown', (event) => {
    if(event.key === 'Enter' && input.value !=='') {
        // create new todo
        let newTodo = document.createElement('div');
        newTodo.className = 'todo';
        newTodo.draggable = 'true';
        newTodo.ondragenter = "onDragStart(event)";
        newTodo.ondragend = "onDragEnd(event)";
        newTodo.innerHTML = '<div class="checkBtn"><img class="hide" src="images/icon-check.svg" alt=""></div><div class="todo-content"><span>'
         + input.value + '</span> <img onClick="removeTask(event)" class="cross-image" src="images/icon-cross.svg" alt=""></div>';
        todos.appendChild(newTodo);
        handleTaskClick(newTodo);
        input.value = '';
        const taskCounter = document.querySelector('#todos-number');
        taskCounter.innerHTML = todos.childNodes.length -1;

    }
});

function filter(filterText) {
    const tasks = document.querySelectorAll('.todo');
    for(let task of tasks ) {
        const btn = task.querySelector('.checkBtn');
        switch(filterText) {
            case 'all': {
                task.style.display = 'block';
                break;
            }
            case 'completed': {
                btn.classList.contains('completed') ? task.style.display='block':task.classList.add('hidden');
                break;
            }
            case 'active': {
                btn.classList.contains('completed') ? task.style.display = 'none':task.style.display = 'flex';
                break;
            }
        }
    }

}
function clearCompleted() {
    const tasks = document.querySelectorAll('.todo');
    for(let  task of tasks) {
        const btn = task.querySelector('.checkBtn');
        if(btn.classList.contains('completed')) {
            todos.removeChild(task);
        }
    }
}



  function removeTask(event) {
    todos.removeChild(event.target.parentNode.parentNode);
  }

  

const toggleBtn = document.querySelector('.toggle-btn');
const lightBtn = document.querySelector('.toogle-btn-light');

const darkBtn = document.querySelector('.toogle-btn-dark');
const lightCover = document.querySelector('.light-head-img');
const darkCover = document.querySelector('.dark-head-img')


const rootElement = document.documentElement;

toggleBtn.addEventListener('click', function() {
    console.log('inside');
  rootElement.classList.toggle('night-mode');
  if(rootElement.classList.contains('night-mode')) {
    lightBtn.style.display = 'none';
    lightCover.style.display = 'none';
    darkBtn.style.display = 'block';
    darkCover.style.display = 'block';
  }
  else {
    lightBtn.style.display = 'block';
    lightCover.style.display = 'block';
    darkBtn.style.display = 'none';
    darkCover.style.display = 'none';
  }
});