import React, { useState } from 'react';
import userAvatar from '../../img/user-avatar.svg';
import arrowDown from '../../img/arrow-down.svg';
import arrowUp from '../../img/arrow-up.svg';

function KanbanNavbar() {
  let [isOpenDropdown, setIsOpenDropdown] = useState(false);

  function changeArrow() {
    console.log('click');
    setIsOpenDropdown((prev) => {
      console.log(isOpenDropdown);
      return !prev;
    });
  }

  // function increment() {
  //   // setCounter(counter + 1)
  //   // setCounter(counter + 1)
  //   setCounter((prevCounter) => {
  //     return prevCounter + 1;
  //   });
  //   // setCounter(prev => prev + 1)
  // }

  // function decrement() {
  //   setCounter(counter - 1);
  // }

  return (
    <>
      {isOpenDropdown}
      <nav className="navbar-theme navbar navbar-expand-lg">
        <a className="navbar-brand" href="#">
          Awesome Kanban Board
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown" onClick={() => changeArrow()}>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <div className="dropdown-userAvatar">
                  <img src={userAvatar} alt="user-avatar" />
                </div>
                <img
                  className="dropdown-arrow"
                  src={isOpenDropdown ? arrowUp : arrowDown}
                  alt="arrow-down"
                />
              </a>
              <div
                className="dropdown-menu dropdown-menu--translate"
                aria-labelledby="navbarDropdown"
              >
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default KanbanNavbar;
