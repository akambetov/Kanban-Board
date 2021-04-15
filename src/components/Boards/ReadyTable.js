import React, { useContext } from 'react';
import BaseKanbanTable from './BaseKanbanTable';
import { TaskContext } from '../../context/taskContext';

function Ready() {
  const { state } = useContext(TaskContext);
  const ready = state.ready;

  return (
    <React.Fragment>
      <BaseKanbanTable boardData={ready} />
    </React.Fragment>
  );
}

export default Ready;
