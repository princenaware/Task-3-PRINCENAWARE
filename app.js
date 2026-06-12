const taskInput = document.querySelector('.js-task-input');
const addBtn = document.querySelector('.js-add-btn');
const taskList = document.querySelector('.js-task-list');
const countDisplay = document.querySelector('.js-task-count');

let count = 0;

function addNewTask() {
    const value = taskInput.value.trim();

    if (value === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement('li');
    li.classList.add('task-item');

    const spanText = document.createElement('span');
    spanText.classList.add('task-text');
    /* Rule Compliance: Using js- prefix class for trigger hooks without style properties */
    spanText.classList.add('js-toggle-trigger');
    spanText.textContent = value;
    li.appendChild(spanText);

    const spanDelete = document.createElement('span');
    spanDelete.classList.add('delete-icon');
    spanDelete.classList.add('js-delete-trigger');
    spanDelete.textContent = '×';
    li.appendChild(spanDelete);

    /* Rule Compliance: Attaching events to the non-styled js- prefix target pointers */
    spanText.addEventListener('click', function() {
        li.classList.toggle('is-completed');
    });

    spanDelete.addEventListener('click', function() {
        li.remove();
        count--;
        countDisplay.textContent = count;
    });

    taskList.appendChild(li);
    
    count++;
    countDisplay.textContent = count;
    
    taskInput.value = "";
}

addBtn.addEventListener('click', addNewTask);

taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addNewTask();
    }
});