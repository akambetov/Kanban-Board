import React, { useEffect, useState } from 'react';

function Footer ({data}) {
  const [active, setActive] = useState(data.backlog.issues.length + data.ready.issues.length + data.progress.issues.length);
  const [finished, setFinished] = useState(data.finish.issues.length);
  useEffect(() => {
    setActive(data.backlog.issues.length + data.ready.issues.length + data.progress.issues.length);
    setFinished(data.finish.issues.length);
  })

  return (
    <div className='footer'>
      <div className='footer-info'>
        <span>Active Tasks: {active}</span>
        &nbsp;&nbsp;&nbsp;
        <span>Finished Tasks: {finished}</span>
      </div>
      <div className='footer-copyright'>
        <span>Kanban board by Almat Kambetov, 2021 </span>        
      </div>
    </div>
  );
}

export default Footer;