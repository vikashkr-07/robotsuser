import React from 'react';

const InputSearch = (props) =>{
    return(
        <div>
            <input type="search" placeholder="Search Robots" onChange={props.inputSearch} className="pa3 ba b-green bg-light-green"/>
        </div>
    )
}
export default InputSearch;