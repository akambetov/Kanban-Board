import React, { useContext, useState, useEffect } from 'react';
import BaseKanbanTable from './BaseKanbanTable';
import { TaskContext } from '../../context/taskContext';
import hideShowBtn from '../../utils/hideShowBtn';

function Ready() {
  const { state, dispatch } = useContext(TaskContext);
  // const [ready, setReady] = useState(state.ready);
  // const ready = state.ready;

  const [options, setOptions] = useState();
  // useEffect(() => {
  //   // if (state.backlog.issues) {
  //   setOptions(
  //     state.backlog.issues.map((issue) => (
  //       <option className="task-option" key={issue.id}>
  //         {issue.title}
  //       </option>
  //     ))
  //   );
  //   console.log(options);
  //   // }
  // }, [state.ready.issue]);

  const addTask = () => {
    hideShowBtn(state, state.ready.title.toLowerCase());

    // if (boardData.title === 'Backlog') {
    // const inputContainer = document.getElementById('inputContainer');
    // inputContainer.classList.remove('hide');
    // inputContainer.querySelector('.task-item--new').focus();
    // } else {
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
    // }
  };

  const submitTask = (selected, setSelected) => {
    // const inputContainer = document.getElementById('inputContainer');
    // const inputField = inputContainer.querySelector('.task-item--new');
    // hideShowBtn(state);
    // if (/* boardData.title === 'Backlog' && */ inputField.value.trim()) {
    //   inputContainer.classList.add('hide');
    //   dispatch({
    //     type: 'add-backlog',
    //     payload: title,
    //   });
    //   setTitle('');
    // }
    // else {
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

    // // let event = new Event('change');
    // console.log(document.querySelector('input.task-item--new'));

    // let event = document.createEvent('HTMLEvents');
    // event.initEvent('change', true, false);

    // document.querySelector('input.task-item--new').dispatchEvent(event);
    // state.backlog.issues.map((issue) => (
    //   <li className="task-item" key={issue.id}>
    //     {issue.title}
    //   </li>
    // ));
    // setIssues(
    //   state[boardData.updateFrom].issues.map((issue) => (
    //     <li className="task-item" key={issue.id}>
    //       {issue.title}
    //     </li>
    //   ))
    // );
    console.log(state);
    console.log(selected);
    // console.log(issues);
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
