import React, { useContext, useEffect, useState } from 'react';
import { TaskContext } from '../../context/taskContext';

function MainBoard({ renderContent }) {
  const { state, dispatch } = useContext(TaskContext);
  const [changeTrigger, setChangeTrigger] = useState();
    useEffect(() => {
        setChangeTrigger(false)
    }, [changeTrigger]);
  return (
    <>
        {renderContent(state.backlog, dispatch, null, setChangeTrigger)}
        {renderContent(state.ready, dispatch, state[state.ready.updateFromTable], setChangeTrigger)}
        {renderContent(state.progress, dispatch, state[state.progress.updateFromTable], setChangeTrigger)}
        {renderContent(state.finish, dispatch, state[state.finish.updateFromTable], setChangeTrigger)}
    </>);
}

export default MainBoard;