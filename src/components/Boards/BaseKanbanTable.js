import React, { useEffect, useState, useContext } from 'react';
import { TaskContext } from '../../context/taskContext';

function KanbanTable({ boardData }) {
  const { state, dispatch } = useContext(TaskContext);
  const [issues, setIssues] = useState();
  const [title, setTitle] = useState('');

  useEffect(() => {
    setIssues(
      boardData.issues.map((issue) => (
        <li className="task-item" key={issue.id}>
          {issue.title}
        </li>
      ))
    );
    console.log('setIssues');
    console.log(boardData);
  }, [boardData.issues]);

  const hideShowBtn = () => {
    const taskAdd = document.querySelector('.task-add');
    const taskSubmit = document.querySelector('.task-submit');
    taskAdd.classList.toggle('hide');
    taskSubmit.classList.toggle('hide');
  };

  const addTask = () => {
    hideShowBtn();
    // let newTask = '';
    // const taskGroup = document.querySelector('.task-group');
    // const taskItem = document.createElement('li');
    // taskItem.classList.add('task-item');

    if (boardData.title === 'Backlog') {
      // newTask = document.createElement('input');
      // newTask.classList.add('task-item--new');
      const inputContainer = document.getElementById('inputContainer');
      inputContainer.classList.remove('hide');
      inputContainer.querySelector('.task-item--new').focus();
      // console.dir(inputContainer);
    }
    // taskItem.appendChild(newTask);
    // taskGroup.appendChild(taskItem);
  };

  const handleInputTitle = (e) => {
    setTitle(e.target.value);
  };

  const submitTask = () => {
    hideShowBtn();
    const inputContainer = document.getElementById('inputContainer');
    const inputField = inputContainer.querySelector('.task-item--new');
    console.log(inputField.value);
    // const taskGroup = document.querySelector('.task-group');
    // taskGroup.removeChild(inputContainer);
    if (inputField.value) {
      inputContainer.classList.add('hide');
      dispatch({
        type: 'add-backlog',
        payload: title,
      });
      setTitle('');
      console.log(state);
    }
  };
  return (
    <div className="table-container">
      <div>{boardData.title}</div>
      <ul className="task-group">{issues}</ul>

      <div id="inputContainer" className="task-item hide">
        <input
          className="task-item--new"
          onChange={handleInputTitle}
          value={title}
          placeholder="Title"
        />
      </div>

      <button type="button" className="task-add" onClick={addTask}>
        Add card
      </button>
      <button type="button" className="task-submit hide" onClick={submitTask}>
        Submit
      </button>
    </div>
  );
}

export default KanbanTable;
