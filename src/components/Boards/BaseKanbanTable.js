import React from 'react';

function KanbanTable({ boardData }) {
  const issues = boardData.issues.map((issue) => (
    <li className="task-item" key={issue.id}>
      {issue.name}
    </li>
  ));
  const addTask = () => {
    let newTask = '';
    const taskGroup = document.querySelector('.task-group');
    const taskAdd = document.querySelector('.task-add');
    const taskSubmit = document.querySelector('.task-submit');
    taskAdd.classList.toggle('task-add--hide');
    taskSubmit.classList.toggle('task-submit--hide');

    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');

    if (boardData.title === 'Backlog') {
      newTask = document.createElement('input');
      newTask.classList.add('task-item--new');
      console.dir(newTask);
    }
    taskItem.appendChild(newTask);
    taskGroup.appendChild(taskItem);
    newTask.focus();
  };
  return (
    <div className="table-container">
      <div>{boardData.title}</div>
      <ul className="task-group">{issues}</ul>
      <button type="button" className="task-add" onClick={addTask}>
        Add
      </button>
      <button
        type="button"
        className="task-submit task-submit--hide"
        // onClick={addTask}
      >
        Submit
      </button>
    </div>
  );
}

export default KanbanTable;
