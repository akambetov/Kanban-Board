// import logo from './logo.svg';
// import './App.css';

// import KanbanTable from './components/KanbanTable';
import React from 'react';
import BacklogTable from './components/BacklogTable';
import ReadyTable from './components/ReadyTable';

function App() {
  return (
    <div className="kanban-table-container">
      <BacklogTable />
      <ReadyTable />
    </div>
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
