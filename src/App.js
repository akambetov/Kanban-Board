// import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react';
import BacklogTable from './components/Boards/BacklogTable';
import ReadyTable from './components/Boards/ReadyTable';
import Navbar from './components/Navbar/Navbar';

const KanbanMock = {
  backlog: {
    title: 'Backlog',
    issues: [
      { id: 'task1', name: 'Sprint bugfix 1', desc: 'lorem lorem lorem lorem' },
      { id: 'task2', name: 'Sprint bugfix 2', desc: 'lorem lorem lorem lorem' },
      { id: 'task3', name: 'Sprint bugfix 3', desc: 'lorem lorem lorem lorem' },
      { id: 'task4', name: 'Sprint bugfix 4', desc: 'lorem lorem lorem lorem' },
    ],
  },

  ready: {
    title: 'Ready',
    issues: [
      { id: 'task1', name: 'Ready bugfix 1', desc: 'lorem lorem lorem lorem' },
      { id: 'task2', name: 'Ready bugfix 2', desc: 'lorem lorem lorem lorem' },
      { id: 'task3', name: 'Ready bugfix 3', desc: 'lorem lorem lorem lorem' },
      { id: 'task4', name: 'Ready bugfix 4', desc: 'lorem lorem lorem lorem' },
    ],
  },
};

function App() {
  const [allTasks] = useState(KanbanMock);

  return (
    <>
      <Navbar />
      <BacklogTable backlog={allTasks.backlog} />
      <ReadyTable ready={allTasks.ready} />
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
