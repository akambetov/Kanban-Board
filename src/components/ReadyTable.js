import React, { useState } from 'react';
import BaseKanbanTable from './BaseKanbanTable';

const readyTable = {
  title: 'Ready',
  issues: [
    { id: 'task1', name: 'Ready bugfix 1', desc: 'lorem lorem lorem lorem' },
    { id: 'task2', name: 'Ready bugfix 2', desc: 'lorem lorem lorem lorem' },
    { id: 'task3', name: 'Ready bugfix 3', desc: 'lorem lorem lorem lorem' },
  ],
};

function Ready() {
  const [ready] = useState(readyTable);

  return (
    <React.Fragment>
      <BaseKanbanTable issues={ready.issues} title={ready.title} />
    </React.Fragment>
  );
}

export default Ready;
