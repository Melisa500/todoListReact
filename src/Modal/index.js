import React from "react";
import ReactDOM from 'react-dom';
import './Modal.css'


function Modal({ children, setOpenModal }) {
    return ReactDOM.createPortal(
        <div className="Modal">
            {children}
            <button 
                className='buttom__close'
                onClick={() =>{
                    setOpenModal(state => !state);
                }}
            >
            x 
            </button>
            <label htmlFor='todo'>Add to do</label>
            <input className='input__modal' tipe='text' id='todo' name='todos' placeholder='Write here'/>
            <div className='div__buttom'>
                <buttom className='buttom__modal'>CLEAR</buttom>
                <buttom className='buttom__modal'>SUMMIT</buttom>
            </div>
        </div>,
        document.getElementById('modal')
    )
}

export { Modal };