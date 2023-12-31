import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import '../TodoItem/TodoItem.css';

function TodoItem(props){
    return(
        <li className='TodoItem'>
            <CompleteIcon
                completed={props.completed}
                onComplete={props.onComplete}
            />
            <p className={`TodoItem__p ${props.completed && "TodoItem__p--complete"}`}>
                {props.text}
            </p>
            <DeleteIcon
                onDelete={props.onDelete}
            />
        </li>
    );
}

export { TodoItem };