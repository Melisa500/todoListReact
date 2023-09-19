import '../CreateTodoButton/CreateTodoButton.css';

function CreateTodoButton( {setOpenModal}) {
    return(
        <div className='div__button'>     
            <button
                className='create__button'
                onClick={
                    () =>{
                        setOpenModal(state => !state);
                    }
                }
            >
                <p>
                    +
                </p>
            </button>
        </div>
    );
}

export { CreateTodoButton };