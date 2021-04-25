import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import HomePage from '../../views/HomePage'
import About from '../../views/About'
import Profile from '../../views/Profile'
import userAvatar from '../../assets/img/user-avatar.svg';
import arrowDown from '../../assets/img/arrow-down.svg';
import arrowUp from '../../assets/img/arrow-up.svg';

function KanbanNavbar({setFooterTaskCount}) {
  const [isOpenDropdown, setIsOpenDropdown] = useState(() => false);

  useState(() => {
    window.addEventListener('click', windowClickCloseMenu);
    window.addEventListener('keydown', windowEscapeCloseMenu);

    return () => {
      window.remove('click', windowClickCloseMenu);
      window.remove('keydown', windowEscapeCloseMenu);
    }
  }, []);

  function windowClickCloseMenu(e) {
    if (!e.target.closest('.dropdown') && !isOpenDropdown) close ();
  } 

  function windowEscapeCloseMenu(e) {
    if (e.code ==='Escape' && !isOpenDropdown) close ();
  } 

  function toggleMenu() {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.classList.toggle('show');
    setIsOpenDropdown((prev) => {
      return !prev;
    });
  }
  function close(e) {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.classList.remove('show');
    setIsOpenDropdown(false);
  }

  return (
    <>
    <Router>
      <nav className="navbar-theme navbar">
        <NavLink className="navbar-brand" to='/'>
          Awesome Kanban Board
        </NavLink>

        <div className="dropdown mr-3" onClick={toggleMenu}>
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
            <NavLink to="/profile" className="dropdown-item">
              Pofile
            </NavLink>
            <NavLink to="/about" className="dropdown-item">
              About
            </NavLink>
          </div>
        </div>
      </nav>

      <Switch>
          <Route exact path="/">
            < HomePage setFooterTaskCount={setFooterTaskCount}/>
          </Route>
           <Route path="/about">
            <About />
          </Route>
         <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
    </Router>
    </>
  );
}

export default KanbanNavbar;
