const input = document.querySelector('input');
const button = document.querySelector('.addbtn');
const ul = document.querySelector('ul');

button.addEventListener('click', function () {
  const task = input.value.trim();

  if (task !== '') {
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('complete-check');

    const span = document.createElement('span');
    span.textContent = task;

    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container")
    taskContainer.appendChild(checkbox);
    taskContainer.appendChild(span);

    checkbox.addEventListener('change', function () {
      span.classList.toggle('completed');
    });

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-btn');

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');
    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(deleteBtn);

    li.appendChild(taskContainer);
    li.appendChild(btnContainer);

    ul.appendChild(li);
    input.value = '';
    ul.classList.add('expand');

    deleteBtn.addEventListener('click', function () {
      li.classList.add('fade-out');
      li.addEventListener('animationend', () => {
        li.remove();
        if (ul.children.length === 0) {
          ul.classList.remove('expand');
        }
      });
    });

    editBtn.addEventListener('click', function () {
      const newTask = prompt('Edit your task:', span.textContent);
      if (newTask !== null && newTask.trim() !== '') {
        span.textContent = newTask;
      }
    });
  }
});