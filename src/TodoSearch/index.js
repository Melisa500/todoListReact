import React from 'react';
import { TodoContext } from '../TodoContext';
import '../TodoSearch/TodoSearch.css';

function TodoSearch() {
    const {
        searchValue, //estas son las props
        setSearchValue, //props
    } = React.useContext(TodoContext)

    return(
            <input
                placeholder="Search" 
                value={searchValue}
                onChange={(event) => {
                    setSearchValue(event.target.value);
                }}

            />
    );
}

export { TodoSearch };