import React, { useEffect, useState, useContext } from 'react';
import { TaskContext } from '../../context/taskContext';

function KanbanTable({ boardData, addTask, submitTask, options, dataFromReady }) {
  const [issues, setIssues] = useState();
  const [title, setTitle] = useState('');
  const [selected, setSelected] = useState(null); // null
  const { state } = useContext(TaskContext);

  useEffect(() => {
    setIssues(
      boardData.issues.map((issue) => (
        <li className="task-item" key={issue.id}>
          {issue.title}
        </li>
      ))
    );
    console.log('setIssues');
    console.log(dataFromReady);
    console.log(boardData.issues);
    console.log(state.backlog.issues);
  }, [boardData.issues, dataFromReady ]);

  const handleInputTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleSelectTitle = (e) => {
    setSelected((prev) => (prev = e.target.value));
  };

  return (
    <div className="table-container">
      <div>{boardData.title}</div>
      <ul className="task-group">{issues}</ul>

      <div
        id={`input-container-${boardData.title.toLowerCase()}`}
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
        id={`select-container-${boardData.title.toLowerCase()}`}
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
          {options}
        </select>
      </div>

      <button
        type="button"
        className={`task-add task-add-${boardData.title.toLowerCase()}`}
        onClick={addTask}
      >
        Add card
      </button>
      <button
        type="button"
        className={`task-submit task-submit-${boardData.title.toLowerCase()} hide`}
        onClick={() => {
          boardData.title === 'Backlog'
            ? submitTask(title, setTitle)
            : submitTask(selected, setSelected);
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default KanbanTable;
