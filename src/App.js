// import logo from './logo.svg';
// import './App.css';
import React, { useReducer } from 'react';
import reducer from './reducer/reducer';
import { TaskContext } from './context/taskContext';
import Container from './components/Container';
import BacklogTable from './components/Boards/BacklogTable';
import ReadyTable from './components/Boards/ReadyTable';
import Navbar from './components/Navbar/Navbar';

const KanbanMock = {
  backlog: {
    title: 'Backlog',
    issues: [
      {
        id: 'task1',
        title: 'Sprint bugfix 1',
        desc: 'lorem lorem lorem lorem',
      },
      // { id: 'task2', name: 'Sprint bugfix 2', desc: 'lorem lorem lorem lorem' },
      // { id: 'task3', name: 'Sprint bugfix 3', desc: 'lorem lorem lorem lorem' },
      // { id: 'task4', name: 'Sprint bugfix 4', desc: 'lorem lorem lorem lorem' },
    ],
  },

  ready: {
    title: 'Ready',
    issues: [
      { id: 'task1', title: 'Ready bugfix 1', desc: 'lorem lorem lorem lorem' },
      // { id: 'task2', name: 'Ready bugfix 2', desc: 'lorem lorem lorem lorem' },
      // { id: 'task3', name: 'Ready bugfix 3', desc: 'lorem lorem lorem lorem' },
      // { id: 'task4', name: 'Ready bugfix 4', desc: 'lorem lorem lorem lorem' },
    ],
  },
};

function App() {
  // const [allTasks] = useState(KanbanMock);
  const [state, dispatch] = useReducer(reducer, KanbanMock);
  console.log(state);
  return (
    <>
      <Navbar />

      <Container>
        <TaskContext.Provider value={{ state, dispatch }}>
          <BacklogTable />
          {/* <ReadyTable /> */}
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
