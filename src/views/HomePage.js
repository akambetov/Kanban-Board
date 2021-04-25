import React, { useEffect, useReducer, useState } from 'react';
import Container from '../components/Container';
import BoardTemplate from '../components/Boards/BoardTemplate';
import MainBoard from '../components/Boards/MainBoard';

function HomePage ({setFooterTaskCount}) {
  const [changeTasksCount, setChangeTasksCount] = useState();
  useEffect(() => {
    setChangeTasksCount(false);
    setFooterTaskCount(true);
  }, [changeTasksCount])
  return (
    
    <Container>
      <MainBoard 
        setChangeTasksCount = {setChangeTasksCount}
        renderContent={(data, dispatch, updateFrom, changeTrigger, getTaskData) =>
          <BoardTemplate 
            issues={data}
            dispatch={dispatch}
            updateFrom={updateFrom}
            changeTrigger={changeTrigger}
            getTaskData={getTaskData}
          />
        }
      />
  </Container>
  );
}

export default HomePage;