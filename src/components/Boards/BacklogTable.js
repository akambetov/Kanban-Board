import React, { useContext } from 'react';
import BaseKanbanTable from './BaseKanbanTable';
import { TaskContext } from '../../context/taskContext';

function Backlog() {
  const { state } = useContext(TaskContext);
  const backlog = state.backlog;
  // const [backlog, setBacklog] = useState(backlogTable);
  return (
    <React.Fragment>
      <BaseKanbanTable boardData={backlog} />
    </React.Fragment>
  );
}

export default Backlog;
