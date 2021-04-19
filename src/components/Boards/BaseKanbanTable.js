import React, { useEffect, useState } from 'react';
import hideShowBtn from '../../utils/hideShowBtn';

function KanbanTable({ issues, dispatch, updateFrom }) {
  const [title, setTitle] = useState('');
  const [selected, setSelected] = useState(null);

  const addTask = () => {
    hideShowBtn(issues.title.toLowerCase());

    if (issues.title === 'Backlog') {
      const inputContainer = document.getElementById(
        `input-container-${issues.title.toLowerCase()}`
      );
      inputContainer.classList.remove('hide');
      inputContainer.querySelector('.task-item--new').focus();
    } else {
      const selectContainer = document.getElementById(
        `select-container-${issues.title.toLowerCase()}`
      );
      selectContainer.classList.remove('hide');
      selectContainer.querySelector('.task-select').focus();
    }
  };

  const submitTask = () => {
    const inputContainer = document.getElementById(
      `input-container-${issues.title.toLowerCase()}`
    );
    const inputField = inputContainer.querySelector('.task-item--new');
    if (issues.title === 'Backlog' && inputField.value.trim()) {
      inputContainer.classList.add('hide');
      dispatch({
        type: 'add-backlog',
        payload: title,
      });
      setTitle('');
      hideShowBtn(issues.title.toLowerCase());
    } else {
      const selectContainer = document.getElementById(
        `select-container-${issues.title.toLowerCase()}`
      );
      selectContainer.querySelector('.task-select').value = 'choose';
      selectContainer.classList.add('hide');
      hideShowBtn(issues.title.toLowerCase());
      dispatch({
        type: 'add-ready',
        payload: selected,
      });
      dispatch({
        type: 'remove-backlog',
        payload: selected,
      });
      setSelected('');
      setTitle('ssd');

      let change = new Event('change');
      document.querySelector('input.task-item--new').dispatchEvent(change);

      // setTitle('asdqwdq');
      // console.log('SSSSSSSSSSSSSSSSSSSSSSS');
      // console.log(title);
    }
  };
  const handleInputTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleSelectTitle = (e) => {
    setSelected((prev) => (prev = e.target.value));
  };

  return (
    <div className="table-container">
      <div>{issues.title}</div>
      <ul className="task-group">
        {issues.issues.map((issue) => (
          <li className="task-item" key={issue.id}>
            {issue.title}
          </li>
        ))}
      </ul>

      <div
        id={`input-container-${issues.title.toLowerCase()}`}
        className="task-item hide"
      >
        <input
          className="task-item--new"
          onChange={handleInputTitle}
          value={title}
          placeholder="Title"
        />
      </div>

      <div
        id={`select-container-${issues.title.toLowerCase()}`}
        className="task-item hide custom-select"
      >
        <select
          className="task-select"
          onChange={handleSelectTitle}
          defaultValue={'choose'}
        >
          <option className="task-option" value="choose" disabled>
            Choose a task
          </option>
          {updateFrom &&
            updateFrom.issues.map((issue) => (
              <option className="task-option" key={issue.id} value={issue.id}>
                {issue.title}
              </option>
            ))}
        </select>
      </div>

      <button
        type="button"
        className={`task-add task-add-${issues.title.toLowerCase()}`}
        onClick={addTask}
      >
        Add card
      </button>
      <button
        type="button"
        className={`task-submit task-submit-${issues.title.toLowerCase()} hide`}
        onClick={submitTask}
      >
        Submit
      </button>
    </div>
  );
}

export default KanbanTable;
