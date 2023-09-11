import React from 'react';
import '../style/TodoSearch.css';

function TodoSearch({
    searchValue, //estas son las props
    setSearchValue, //props
}) {


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