import React, { useEffect, useState } from 'react';
import CustomSelect from  '../CustomSelect';
import hideShowBtn from '../../utils/hideShowBtn';

function BoardTemplate({ issues, dispatch, updateFrom, changeTrigger }) {
  const [title, setTitle] = useState('');
  const [selected, setSelected] = useState(null);
  
  useEffect(()=>{
    changeTrigger(true);
    console.log(issues)
  },[title, selected]);

  const addTask = () => {
    hideShowBtn(issues.title);

    if (issues.title === 'Backlog') {
      const inputContainer = document.getElementById(
        `input-container-${issues.title}`
      );
      inputContainer.classList.remove('hide');
      inputContainer.querySelector('.task-item--new').focus();
    } else {
      const selectContainer = document.getElementById(
        `select-container-${issues.title}`
      );
      selectContainer.classList.remove('hide');
      // selectContainer.querySelector('.task-select').focus();
    }
  };

  const submitTask = () => {
    const inputContainer = document.getElementById(
      `input-container-${issues.title}`
    );
    const inputField = inputContainer.querySelector('.task-item--new');

    if (issues.title === 'Backlog' && inputField.value.trim()) {
      inputContainer.classList.add('hide');
      dispatch({
        type: 'add-backlog',
        payload: title,
      });
      setTitle('');
      hideShowBtn(issues.title);
    } else if (issues.title !== 'Backlog'){
      const selectContainer = document.getElementById(
        `select-container-${issues.title}`
      );
      // selectContainer.querySelector('.task-select').value = 'choose';
      selectContainer.classList.add('hide');
      hideShowBtn(issues.title);
      dispatch({
        type: 'add',
        payload: selected,
        addTo: issues.title,
        addFrom: issues.updateFromTable
      });
      dispatch({
        type: 'remove',
        payload: selected,
        removeFrom: issues.updateFromTable
      });
      setSelected('');
    }
  };

  const handleInputTitle = (e) => {
    setTitle(e.target.value);
  };
  
  const handleSelectTitle = (value) => {
    setSelected((prev) => (prev = value));
  };
  // const closeSelect = () => {
  //   const selectItems = document.querySelectorAll('.custom-select-items');
  //   const seletcField = document.querySelectorAll('.custom-select-field');
  //   Array.prototype.forEach.call(selectItems, (item) => {
  //       item.classList.add('hide');
  //   });
  // }

  return (
    <div className="table-container">
      <div><span style={{'textTransform': "capitalize"}}>{issues.title}</span></div>
      <ul className="task-group">
        {issues.issues.map((issue) => (
          <li className="task-item" key={issue.id}>
            {issue.title}
          </li>
        ))}
      </ul>

      <div
        id={`input-container-${issues.title}`}
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
        id={`select-container-${issues.title}`}
        className="hide"
        // onClick={closeSelect}
      >
        {/* <select
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
        </select> */}
        <CustomSelect issues={updateFrom} handleSelectTitle={handleSelectTitle}/>
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
