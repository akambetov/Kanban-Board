import React from 'react';

function Container({ children }) {
  return (
    <div
      // className="container-fluid container-main d-flex justify-content-around h-100"
      className="container-main"
    >
      {children}
    </div>
  );
}

export default Container;
