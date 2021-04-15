import React, { useState } from 'react';
import userAvatar from '../../img/user-avatar.svg';
import arrowDown from '../../img/arrow-down.svg';
import arrowUp from '../../img/arrow-up.svg';

function KanbanNavbar() {
  const [isOpenDropdown, setIsOpenDropdown] = useState(() => false);

  function toggleMenu(e) {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.classList.toggle('show');
    setIsOpenDropdown((prev) => {
      console.log(isOpenDropdown);
      return !prev;
    });
  }

  return (
    <>
      <nav className="navbar-theme navbar">
        <a className="navbar-brand" href="#">
          Awesome Kanban Board
        </a>

        <div className="dropdown mr-2" onClick={toggleMenu}>
          <button className="btn p-0 border-0 outline-none" type="button">
            <div className="dropdown-userAvatar">
              <img src={userAvatar} alt="user-avatar" />
            </div>
            <img
              className="dropdown-arrow"
              src={isOpenDropdown ? arrowUp : arrowDown}
              alt="arrow-down"
            />
          </button>
          <div
            className="dropdown-menu dropdown-menu--translate"
            aria-labelledby="dropdownMenuButton"
          >
            <a className="dropdown-item" href="#">
              Action
            </a>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default KanbanNavbar;
