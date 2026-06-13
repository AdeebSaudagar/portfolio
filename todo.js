function addTask() {
    var input = document.getElementById('taskInput');
    var taskText = input.value.trim();

    if (taskText === '') return;

    var li = document.createElement('li');
    li.innerHTML = 
        '<div class="checkbox" onclick="toggleDone(this)"></div>'
        '<span>' + taskText + '</span>' +
        '<button onclick="deleteTask(this)">✕</button>'

    document.getElementById('taskList').appendChild(li);
    input.value = '';
}

function toggleDone(checkbox) {
    checkbox.classList.toggle('checked');
    checkbox.nextElementSibling.classList.toggle('done');
}

function deleteTask(btn) {
    btn.parentElement.remove();
}

document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') addTask();
});