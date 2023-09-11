import '../style/TodoCounter.css';

function TodoCounter({ total, completed }){

    //En una constante

    /*   const estilos = {
        backgroundColor: 'red',
        color: 'white',
        fontSize: '60px', 
    } 
    Se coloca asi en la etiqueta <h1 style={estilos}></h1>
    */

    //En línea

/*     <h1 style={{
        fontSize: '24px',
        textAlign: 'center',
        margin: 0,
        padding: '48px',
    }}> */

    if(completed === total){
        return(<h1>You completed all the TO DO!</h1>)
    }

    return(
        <h1>
            You have completed <span>{completed}</span>  of <span>{total} </span> TODOS
        </h1>
    );
}

export { TodoCounter };