import React, { useContext } from 'react';
import { TaskContext } from '../../context/taskContext';

function Backlog({ renderContent }) {
  const { state, dispatch } = useContext(TaskContext);

  return <>{renderContent(state.backlog, dispatch)}</>;
}

export default Backlog;
