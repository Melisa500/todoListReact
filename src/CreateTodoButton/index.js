import '../CreateTodoButton/CreateTodoButton.css';

function CreateTodoButton( {setOpenModal}) {
    return(
        <div className='div__button'>     
            <button
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