import React, {useEffect, useState} from 'react';
import closeIcon from '../assets/img/close.svg'

function Modal({ taskData, setTaskData }) {

  const windowResize = () => {
    setWindowH(window.innerHeight);
    if( root.offsetHeight < window.innerHeight) root.style.height = windowH + 'px';
    else root.style.height = '';
  }

  const closeModalEscape = (e) => {
    if (e.code === "Escape") {
      closeModal();
    }
  };
  const closeModal = () => {
    setTaskData({isOpen: false});
    // Включаю скролл по докуенту, после закрытия модалки
    document.body.style.overflowY = '';
    
    // Убираю затемнение
    document.querySelector('#root').style.backgroundColor = '';
    document.querySelector('.navbar').style.backgroundColor = '';
    document.querySelector('.footer').style.backgroundColor = '';
    document.querySelectorAll('.table-wrapper').forEach((item) => item.style.opacity = '');
  }


  // Hooks
  const [windowH, setWindowH] = useState(window.innerHeight)
  const root = document.querySelector('#root');

  useEffect(() => {
    if( root.offsetHeight < window.innerHeight) root.style.height = windowH + 'px';
  }, [windowH]);

  useEffect(() => {
    window.addEventListener('keydown', closeModalEscape);
    // Сравнять высоту #root с высотой window, чтобы корректно затемнить задний фон
    window.addEventListener('resize', windowResize);
    return () => {
      window.removeEventListener('keydown', closeModalEscape);
      window.removeEventListener('resize', windowResize);
    }
  }, []);

  if (!taskData.isOpen) return null;


  return (
    <div className="modal-wrapper">
      <div className="modal-container">
        <h1 className="modal-task-title">{taskData.title}</h1>
        <div className="modal-task-description">{taskData.desc}</div>
        <button className="modal-close-btn">
          <img className="modal-close-icon" src={closeIcon} alt="close" onClick={closeModal}/> 
        </button>
      </div>
    </div>
  );
}

export default Modal;
