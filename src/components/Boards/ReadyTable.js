import React, { useContext, useState, useEffect } from 'react';
import BaseKanbanTable from './BaseKanbanTable';
import { TaskContext } from '../../context/taskContext';
import hideShowBtn from '../../utils/hideShowBtn';

function Ready() {
  const { state, dispatch } = useContext(TaskContext);
  // const [ready, setBacklog] = useState(state.ready);

  // useEffect(() => {
  //   setBacklog(state.ready);
  //   console.log('Ready use effect')
  //   console.log(ready)
  // });

  const [options, setOptions] = useState();

  const addTask = () => {
    hideShowBtn(state, state.ready.title.toLowerCase());
    
    const selectContainer = document.getElementById(
      `select-container-${state.ready.title.toLowerCase()}`
    );
    selectContainer.classList.remove('hide');
    selectContainer.querySelector('.task-select').focus();
    console.log(state);
    const updateFromBacklog = state[state.ready.updateFrom];
    console.log(updateFromBacklog);
    setOptions(
      updateFromBacklog.issues.map((issue) => (
        <option className="task-option" key={issue.id} value={issue.id}>
          {issue.title}
        </option>
      ))
    );
  };

  const submitTask = (selected, setSelected) => {
    const selectContainer = document.getElementById(
      `select-container-${state.ready.title.toLowerCase()}`
    );
    selectContainer.querySelector('.task-select').value = 'choose';
    selectContainer.classList.add('hide');
    hideShowBtn(state, state.ready.title.toLowerCase());
    dispatch({
      type: 'add-ready',
      payload: selected,
    });
    setSelected('');
  
    console.log(state);
    console.log(selected);
  };

  return (
    <React.Fragment>
      <BaseKanbanTable
        boardData={state.ready}
        addTask={addTask}
        submitTask={submitTask}
        options={options}
      />
    </React.Fragment>
  );
}

export default Ready;
