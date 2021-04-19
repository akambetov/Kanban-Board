// import logo from './logo.svg';
// import './App.css';
import React, { useReducer, useState } from 'react';
import reducer from './reducer/reducer';
import { TaskContext } from './context/taskContext';
import Container from './components/Container';
import BacklogTable from './components/Boards/BacklogTable';
import ReadyTable from './components/Boards/ReadyTable';
import Navbar from './components/Navbar/Navbar';

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
  // const [allTasks] = useState(KanbanMock);
  const [state, dispatch] = useReducer(reducer, KanbanMock);
  const [dataFromReady, setDataFromReady] = useState();
  
  const handleDataFromReady = (data) => {
    console.log('###################### ######################');
    console.log(data);
    setDataFromReady(data);
    console.log(dataFromReady)
    console.log('###################### ######################');
  };

  return (
    <>
      <Navbar />

      <Container>
        <TaskContext.Provider value={{ state, dispatch }}>
          <BacklogTable dataFromReady={dataFromReady}/>
          <ReadyTable handleDataFromReady={handleDataFromReady}/>
        </TaskContext.Provider>
      </Container>
    </>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
