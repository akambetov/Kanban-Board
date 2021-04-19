import React, { useContext, useEffect, useState } from 'react';
import BaseKanbanTable from './BaseKanbanTable';
import { TaskContext } from '../../context/taskContext';
import hideShowBtn from '../../utils/hideShowBtn';

function Backlog({dataFromReady}) {
  const { state, dispatch } = useContext(TaskContext);
  // const [backlog, setBacklog] = useState(state.backlog);
  // useEffect(() => {
  //   setBacklog(state.backlog);
  //   console.log('Backlog use effect')
  //   console.log(backlog)
  // });
  // console.log(dataFromReady);
  const addTask = () => {
    hideShowBtn(state, state.backlog.title.toLowerCase());

    const inputContainer = document.getElementById(
      `input-container-${state.backlog.title.toLowerCase()}`
    );
    inputContainer.classList.remove('hide');
    inputContainer.querySelector('.task-item--new').focus();
  };

  const submitTask = (title, setTitle) => {
    const inputContainer = document.getElementById(
      `input-container-${state.backlog.title.toLowerCase()}`
    );
    const inputField = inputContainer.querySelector('.task-item--new');
    if (inputField.value.trim()) {
      inputContainer.classList.add('hide');
      dispatch({
        type: 'add-backlog',
        payload: title,
      });
      setTitle('');
      hideShowBtn(state, state.backlog.title.toLowerCase());
    }
  };
  return (
    <React.Fragment>
      <BaseKanbanTable
        boardData={state.backlog}
        addTask={addTask}
        submitTask={submitTask}
        dataFromReady={dataFromReady}
      />
    </React.Fragment>
  );
}

export default Backlog;
