import React, { useEffect, useReducer, useState } from 'react';
import reducer from './reducer/reducer';
import { TaskContext } from './context/taskContext';
import Container from './components/Container';
import Navbar from './components/Navbar/Navbar';
import BoardTemplate from './components/Boards/BoardTemplate';
import MainBoard from './components/Boards/MainBoard';
import CustomSelect from './components/CustomSelect';
import Footer from './components/Footer';

const KanbanMock = {
  backlog: {
    title: 'backlog',
    updateFromTable: null,
    issues: [
      // { id: 'backlog-task1', title: 'Sprint bugfix 1', desc: 'lorem lorem lorem lorem' },
      // { id: 'backlog-task2', title: 'Sprint bugfix 2', desc: 'lorem lorem lorem lorem' },
      // { id: 'backlog-task3', title: 'Sprint bugfix 3', desc: 'lorem lorem lorem lorem' },
      // { id: 'backlog-task4', title: 'Sprint bugfix 4', desc: 'lorem lorem lorem lorem' },
    ],
  },

  ready: {
    title: 'ready',
    updateFromTable: 'backlog',
    issues: [
      // { id: 'ready-task1', title: 'Ready bugfix 1', desc: 'lorem lorem lorem lorem' },
      // { id: 'ready-task2', title: 'Ready bugfix 2', desc: 'lorem lorem lorem lorem' },
      // { id: 'ready-task3', title: 'Ready bugfix 3', desc: 'lorem lorem lorem lorem' },
      // { id: 'ready-task4', title: 'Ready bugfix 4', desc: 'lorem lorem lorem lorem' },
    ],
  },

  progress: {
    title: 'progress',
    updateFromTable: 'ready',
    issues: [
      // { id: 'progress-task1', title: 'Progress bugfix 1', desc: 'lorem lorem lorem lorem' },
      // { id: 'progress-task2', title: 'Progress bugfix 2', desc: 'lorem lorem lorem lorem' },
      // { id: 'progress-task3', title: 'Progress bugfix 3', desc: 'lorem lorem lorem lorem' },
      // { id: 'progress-task4', title: 'Progress bugfix 4', desc: 'lorem lorem lorem lorem' },
    ],
  },

  finish: {
    title: 'finish',
    updateFromTable: 'progress',
    issues: [
      // { id: 'finish-task1', title: 'Finish bugfix 1', desc: 'lorem lorem lorem lorem' },
      // { id: 'progress-task2', title: 'Finish bugfix 2', desc: 'lorem lorem lorem lorem' },
      // { id: 'progress-task3', title: 'Finish bugfix 3', desc: 'lorem lorem lorem lorem' },
      // { id: 'progress-task4', title: 'Finish bugfix 4', desc: 'lorem lorem lorem lorem' },
    ],
  },
};

function App() {
  const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('tasks')) || KanbanMock);
  const [changeTasksCount, setChangeTasksCount] = useState();
  useEffect(() => {
    setChangeTasksCount(false);
  }, [changeTasksCount])
  return (
    <>
      <Navbar />

      <Container>
        <TaskContext.Provider value={{ state, dispatch }}>
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
        </TaskContext.Provider>
      </Container>

        <CustomSelect issues={state.backlog}/>
        
      <Footer data = {state} />
    </>
  );
}

export default App;
