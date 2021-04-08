import React from 'react';
import BaseKanbanTable from './BaseKanbanTable';

function Backlog({ backlog }) {
  // const backlog = useContext(BacklogContext);
  // const [backlog, setBacklog] = useState(backlogTable);

  return (
    <React.Fragment>
      <BaseKanbanTable issues={backlog.issues} title={backlog.title} />
    </React.Fragment>
  );
}

export default Backlog;
