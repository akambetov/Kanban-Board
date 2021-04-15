import React from 'react';

function KanbanTable(props) {
  const issues = props.issues.map((issue) => (
    <div key={issue.id}>{issue.name}</div>
  ));

  return (
    <div className="kanban-table-item">
      <div>{props.title}</div>
      {issues}
    </div>
  );
}

export default KanbanTable;
