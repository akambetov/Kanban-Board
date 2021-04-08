import React, { useState } from 'react';
import BaseKanbanTable from './BaseKanbanTable';

const backlogTable = {
  title: 'backlog',
  issues: [
    { id: 'task1', name: 'Sprint bugfix 1', desc: 'lorem lorem lorem lorem' },
    { id: 'task2', name: 'Sprint bugfix 2', desc: 'lorem lorem lorem lorem' },
    { id: 'task3', name: 'Sprint bugfix 3', desc: 'lorem lorem lorem lorem' },
  ],
};

function Backlog() {
  const [backlog, setBacklog] = useState(backlogTable);

  return (
    <React.Fragment>
      <BaseKanbanTable issues={backlog.issues} title={backlog.title} />
    </React.Fragment>
  );
}

export default Backlog;
