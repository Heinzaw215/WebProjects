document.getElementById('add-btn').addEventListener('click', addTodo);

function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value;

    if (todoText === '') {
        alert('Please enter a task');
        return;
    }

    const todoList = document.getElementById('todo-list');
    const li = document.createElement('li');
    
    li.innerHTML = `
        <span>${todoText}</span>
        <div>
            <button class="complete-btn">Complete</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;
    
    // Complete Task
    li.querySelector('.complete-btn').addEventListener('click', function() {
        li.style.textDecoration = 'line-through';
        li.style.borderLeftColor = '#6c757d';
    });
    
    // Delete Task
    li.querySelector('.delete-btn').addEventListener('click', function() {
        li.remove();
    });

    todoList.appendChild(li);
    todoInput.value = '';
}
