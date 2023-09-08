import '../style/CreateTodoButton.css';

function CreateTodoButton() {
    return(
        <div className='div__button'>     
            <button
                onClick={
                    (event) =>{
                        console.log('Le diste click')
                        console.log(event)
                        console.log(event.target)
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