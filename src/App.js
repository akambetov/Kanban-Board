// import logo from './logo.svg';
// import './App.css';
import React, { useReducer } from 'react';
import reducer from './reducer/reducer';
import { TaskContext } from './context/taskContext';
import Container from './components/Container';
import Navbar from './components/Navbar/Navbar';
import BacklogTable from './components/Boards/BacklogTable';
import ReadyTable from './components/Boards/ReadyTable';
import BaseKanbanTable from './components/Boards/BaseKanbanTable';

const KanbanMock = {
  backlog: {
    title: 'Backlog',
    // updateFrom: 'user input',
    issues: [
      {
        id: 'backlog-task1',
        title: 'Sprint bugfix 1',
        desc: 'lorem lorem lorem lorem',
        ready: false,
      },
      {
        id: 'backlog-task2',
        title: 'Sprint bugfix 2',
        desc: 'lorem lorem lorem lorem',
        ready: false,
      },
      {
        id: 'backlog-task3',
        title: 'Sprint bugfix 3',
        desc: 'lorem lorem lorem lorem',
        ready: false,
      },
      {
        id: 'backlog-task4',
        title: 'Sprint bugfix 4',
        desc: 'lorem lorem lorem lorem',
        ready: false,
      },
    ],
  },

  ready: {
    title: 'Ready',
    updateFrom: 'backlog',
    issues: [
      {
        id: 'ready-task1',
        title: 'Ready bugfix 1',
        desc: 'lorem lorem lorem lorem',
        ready: true,
      },
      // { id: 'ready-task2', title: 'Ready bugfix 2', desc: 'lorem lorem lorem lorem' },
      // { id: 'ready-task3', title: 'Ready bugfix 3', desc: 'lorem lorem lorem lorem' },
      // { id: 'ready-task4', title: 'Ready bugfix 4', desc: 'lorem lorem lorem lorem' },
    ],
  },
};

function App() {
  const [state, dispatch] = useReducer(reducer, KanbanMock);
  return (
    <>
      <Navbar />

      <Container>
        <TaskContext.Provider value={{ state, dispatch }}>
          <BacklogTable
            renderContent={(data, dispatch) => (
              <BaseKanbanTable
                issues={data}
                dispatch={dispatch}
                updateFrom={null}
              />
            )}
          />
          <ReadyTable
            renderContent={(data, dispatch, updateFromBacklog) => (
              <BaseKanbanTable
                issues={data}
                dispatch={dispatch}
                updateFrom={updateFromBacklog}
              />
            )}
          />
          {/* <ReadyTable /> */}
        </TaskContext.Provider>
      </Container>
    </>
  );
}

export default App;
