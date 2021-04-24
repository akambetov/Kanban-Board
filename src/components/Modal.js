import React, {useEffect} from 'react';
import closeIcon from '../assets/img/close.svg'

function Modal({ taskData, setTaskData }) {
  if (!taskData.isOpen) return null;
  useEffect(() => {
    if (window.innerWidth <= 1230) {
      const modalWrapper = document.querySelector('.modal-wrapper');
      modalWrapper.style.top=`${window.pageYOffset + 15}px`;
    }
  })

  const closeModal = () => {
    setTaskData({isOpen: false});
    // Включаю скролл по докуенту, после закрытия модалки
    document.body.style.overflowY = '';
    
    // Убираю затемнение
    document.querySelector('#root').style.backgroundColor = '';
    document.querySelector('.navbar').style.backgroundColor = '';
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
