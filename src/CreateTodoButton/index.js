import '../CreateTodoButton/CreateTodoButton.css';

function CreateTodoButton() {
    return(
        <div className='div__button'>     
            <button
                onClick={
                    (event) =>{
                        console.log('Le diste click')
                        console.log(event)
                        console.log(event.currentTarget) 
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