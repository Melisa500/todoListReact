import '../style/TodoList.css';

function TodoList({children}){
    return(
        <div>
            <ul>
                {children}
            </ul>
        </div>
    );
}

export { TodoList };