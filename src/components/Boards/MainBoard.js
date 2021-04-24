import React, { useContext, useEffect, useState } from 'react';
import { TaskContext } from '../../context/taskContext';
import Modal from '../Modal';

function MainBoard({ renderContent }) {
  const { state, dispatch } = useContext(TaskContext);
  const [changeTrigger, setChangeTrigger] = useState();
  const [modalData, setModalData] = useState({isOpen: false});

  useEffect(() => {
      setChangeTrigger(false);
  }, [changeTrigger]);
  
  return (
    <>
        {renderContent(state.backlog, dispatch, null, setChangeTrigger, setModalData)}
        {renderContent(state.ready, dispatch, state[state.ready.updateFromTable], setChangeTrigger, setModalData)}
        {renderContent(state.progress, dispatch, state[state.progress.updateFromTable], setChangeTrigger, setModalData)}
        {renderContent(state.finish, dispatch, state[state.finish.updateFromTable], setChangeTrigger, setModalData)}
      
        <Modal taskData = {modalData} setTaskData={setModalData} />
    </>);
}

export default MainBoard;