import React, { useContext, useState } from 'react';
import BaseKanbanTable from './BaseKanbanTable';
import { TaskContext } from '../../context/taskContext';
import hideShowBtn from '../../utils/hideShowBtn';

function Backlog() {
  const { state, dispatch } = useContext(TaskContext);
  // const [backlog, setBacklog] = useState(state.backlog);
  // const backlog = state.backlog;
  // const [backlog, setBacklog] = useState(backlogTable);
  // console.log('ASDSADDSDDWD');
  // console.log(boardData);

  // REMOVE
  // useEffect(() => {
  //   if (state.backlog.issues) {
  //     setOptions(
  //       state.backlog.issues.map((issue) => (
  //         <option className="task-option" key={issue.id}>
  //           {issue.title}
  //         </option>
  //       ))
  //     );
  //     console.log(options);
  //   }
  // }, [state.backlog.issues]);

  // const hideShowBtn = () => {
  //   const taskAdd = document.querySelector(
  //     `.task-add-${state.backlog.title.toLowerCase()}`
  //   );
  //   const taskSubmit = document.querySelector(
  //     `.task-submit-${state.backlog.title.toLowerCase()}`
  //   );
  //   taskAdd.classList.toggle('hide');
  //   taskSubmit.classList.toggle('hide');
  // };

  const addTask = () => {
    hideShowBtn(state, state.backlog.title.toLowerCase());

    // if (boardData.title === 'Backlog') {
    const inputContainer = document.getElementById(
      `input-container-${state.backlog.title.toLowerCase()}`
    );
    inputContainer.classList.remove('hide');
    inputContainer.querySelector('.task-item--new').focus();
    // } else {
    //   const selectContainer = document.getElementById(
    //     `selectContainer-${boardData.title.toLowerCase()}`
    //   );
    //   selectContainer.classList.remove('hide');
    //   selectContainer.querySelector('.task-select').focus();
    //   setOptions(
    //     state[boardData.updateFrom].issues.map((issue) => (
    //       <option className="task-option" key={issue.id} value={issue.id}>
    //         {issue.title}
    //       </option>
    //     ))
    //   );
    // }
  };

  const submitTask = (title, setTitle) => {
    const inputContainer = document.getElementById(
      `input-container-${state.backlog.title.toLowerCase()}`
    );
    const inputField = inputContainer.querySelector('.task-item--new');
    if (/* boardData.title === 'Backlog' && */ inputField.value.trim()) {
      inputContainer.classList.add('hide');
      dispatch({
        type: 'add-backlog',
        payload: title,
      });
      setTitle('');
      hideShowBtn(state, state.backlog.title.toLowerCase());
    }
    // else {
    //   dispatch({
    //     type: 'add-ready',
    //     payload: selected,
    //   });

    //   // setIssues(
    //   //   state[boardData.updateFrom].issues.map((issue) => (
    //   //     <li className="task-item" key={issue.id}>
    //   //       {issue.title}
    //   //     </li>
    //   //   ))
    //   // );
    //   console.log(state);
    //   // console.log(issues);
    // }
  };
  return (
    <React.Fragment>
      <BaseKanbanTable
        boardData={state.backlog}
        addTask={addTask}
        submitTask={submitTask}
      />
    </React.Fragment>
  );
}

export default Backlog;
