import React, {useEffect, useState} from 'react';
import closeIcon from '../assets/img/close.svg'

function Modal({ taskData, setTaskData }) {
  if (!taskData.isOpen) return null;

  const [windowH, setWindowH] = useState(window.innerHeight)
  const root = document.querySelector('#root');

  // Сравнять высоту #root с высотой window, чтобы корректно затемнить задний фон
  window.addEventListener('resize', () => {
    setWindowH(window.innerHeight);
    if( root.offsetHeight < window.innerHeight) root.style.height = windowH + 'px';
    else root.style.height = '';
  })
  useEffect(() => {
    if( root.offsetHeight < window.innerHeight) root.style.height = windowH + 'px';
  }, [windowH]);

  const closeModal = () => {
    setTaskData({isOpen: false});
    // Включаю скролл по докуенту, после закрытия модалки
    document.body.style.overflowY = '';
    
    // Убираю затемнение
    document.querySelector('#root').style.backgroundColor = '';
    document.querySelector('.navbar').style.backgroundColor = '';
    document.querySelector('.footer').style.backgroundColor = '';
  }

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
