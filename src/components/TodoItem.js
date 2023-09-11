import { CompleteIcon } from './CompleteIcon';
import { DeleteIcon } from './DeleteIcon';
import '../style/TodoItem.css';

function TodoItem(props){
    return(
        <li className='TodoItem'>
{/*             <span className={` Icon Icon__check ${props.completed && "Icon__check--active"}`}
                onClick={props.onComplete}
            > {/* Solo si la clase tiene   la propiedad completed se agrega la clase "Icon__check--active" 
                V
            </span>
             */}
            <CompleteIcon/>
            <p className={`TodoItem__p ${props.completed && "TodoItem__p--complete"}`}>
                {props.text}
            </p>
            <DeleteIcon/>
{/*             <span 
                className='Icon Icon--delete'
                onClick={props.onDelete}
            >
                X
            </span> */}
        </li>
    );
}

export { TodoItem };