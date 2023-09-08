import '../style/TodoItem.css';

function TodoItem(props){
    return(
        <li className='TodoItem'>
            <span className={` Icon Icon__check ${props.completed && "Icon__check--active"}`}> {/* Solo si la clase tiene la propiedad completed se agrega la clase "Icon__check--active" */}
                V
            </span>
            <p className={`TodoItem__p ${props.completed && "TodoItem__p--complete"}`}>
                {props.text}
            </p>
            <span className='Icon Icon--delete'>
                X
            </span>
        </li>
    );
}

export { TodoItem };