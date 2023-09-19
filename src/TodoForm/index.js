import React from "react";
//import ReactDOM from 'react-dom';
import './TodoForm.css'

function TodoForm() {
    return(
        <form onSubmit={(e)=>{
            e.preventDefault();
        }}>
            <button 
                className='button__close'
                onClick={({setOpenModal}) =>{
                    setOpenModal(state => !state);
                }}
            >
            x 
            </button>
            <label htmlFor='todo'>Add to do</label>
            <input className='input__modal' tipe='text' id='todo' name='todos' placeholder='Write here'/>
            <div className='modal__div__button__container'>
                <button 
                    type=""
                    className='modal__div__button'
                >CLEAN</button>
                <button 
                    type="submit"
                    className='modal__div__button'
                >SUBMIT</button>
            </div>
        </form>
    );
}

export { TodoForm };