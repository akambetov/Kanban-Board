import React from 'react';
import BaseKanbanTable from './BaseKanbanTable';

function Ready({ ready }) {
  // const ready = useContext(ReadyContext);
  // const [ready] = useState(readyTable);

  return (
    <React.Fragment>
      <BaseKanbanTable issues={ready.issues} title={ready.title} />
    </React.Fragment>
  );
}

export default Ready;
