import React, { useContext } from 'react';
import { TaskContext } from '../../context/taskContext';

function Ready({ renderContent }) {
  const { state, dispatch } = useContext(TaskContext);

  return <>{renderContent(state.ready, dispatch, state.backlog)}</>;
}

export default Ready;
