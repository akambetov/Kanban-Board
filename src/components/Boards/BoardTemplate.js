import React, { useEffect, useState } from 'react';
import CustomSelect from '../CustomSelect';
import hideShowBtn from '../../utils/hideShowBtn';

function BoardTemplate({ issues, dispatch, updateFrom, changeTrigger, getTaskData }) {
  const [title, setTitle] = useState('');
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    changeTrigger(true);
  }, [title, selected]);

  const addTask = () => {
    hideShowBtn(issues.title);
    const inputContainer = document.getElementById(
      `input-container-${issues.title}`
    );
    const selectContainer = document.getElementById(
      `select-container-${issues.title}`
    );

    if (issues.title === 'backlog') {
      inputContainer.classList.remove('hide');
      inputContainer.querySelector('.task-item--new').focus();
    } else {
      selectContainer.classList.remove('hide');
    }

    // Стили из за кастомного селекта
    const tableContainer = document.querySelector(
      `[data-table-type=table-${issues.title}]`
    );
    if (tableContainer.offsetHeight !== tableContainer.scrollHeight) {
      inputContainer.style.marginRight = '28px';
      selectContainer.style.marginRight = '28px';
    } else {
      inputContainer.style.marginRight = '16px';
      selectContainer.style.marginRight = '16px';
    }
  };

  const submitTask = () => {
    const inputContainer = document.getElementById(
      `input-container-${issues.title}`
    );
    const inputField = inputContainer.querySelector('.task-item--new');

    if (issues.title === 'backlog' && inputField.value.trim()) {
      inputContainer.classList.add('hide');
      dispatch({
        type: 'add-backlog',
        payload: title,
      });
      setTitle('');
      hideShowBtn(issues.title);
    } else if (issues.title !== 'backlog') {
      const selectContainer = document.getElementById(
        `select-container-${issues.title}`
      );
      const selectField = document.querySelector(
        `[data-issue-type=select-field-${issues.title}]`
      );
      selectContainer.classList.add('hide');
      hideShowBtn(issues.title);
      dispatch({
        type: 'add',
        payload: selected,
        addTo: issues.title,
        addFrom: issues.updateFromTable,
      });
      dispatch({
        type: 'remove',
        payload: selected,
        removeFrom: issues.updateFromTable,
      });
      selectField.innerText = 'Choose the task';
      setSelected('');
    }
  };

  const handleInputTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleSelectTitle = (value) => {
    setSelected((prev) => (prev = value));
  };

  const handleTaskInfo = (taskData) => {
    getTaskData(taskData);
    
    // Выключаю скролл по докуенту, когда модалка открыта
    document.body.style.overflowY = 'hidden';

    // Затемняю документ, когда модалка открыта
    document.querySelector('#root').style.backgroundColor = 'rgba(0, 0, 0, .5)';
    document.querySelector('.navbar').style.backgroundColor = 'rgba(0, 0, 0, .5)';
    document.querySelector('.footer').style.backgroundColor = 'rgba(0, 0, 0, .5)';
  }
  return (
    <div className="table-wrapper">
      <div
        className="table-container"
        data-table-type={`table-${issues.title}`}
      >
        <div>
          <span style={{ textTransform: 'capitalize' }}>{issues.title}</span>
        </div>
        <ul className="task-group">
          {issues.issues.map((issue) => (
            <li className="task-item" key={issue.id} onClick = {() => handleTaskInfo({...issue, isOpen: true})}>
              {issue.title}
            </li>
          ))}
        </ul>
      </div>

      <div
        id={`input-container-${issues.title}`}
        className="task-item input-container hide"
      >
        <input
          className="task-item--new"
          onChange={handleInputTitle}
          value={title}
          placeholder="Title"
        />
      </div>

      <div
        id={`select-container-${issues.title}`}
        className="select-container hide"
      >
        <CustomSelect
          issuesType={issues.title}
          updateFrom={updateFrom}
          handleSelectTitle={handleSelectTitle}
        />
      </div>

      <button
        type="button"
        className={`task-add task-add-${issues.title}`}
        onClick={addTask}
      >
        Add card
      </button>
      <button
        type="button"
        className={`task-submit task-submit-${issues.title} hide`}
        onClick={submitTask}
      >
        Submit
      </button>
    </div>
  );
}
export default BoardTemplate;
