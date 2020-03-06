import React from 'react';

export default props => {
    return(
        <div>
            <p>Car name: {props.name}</p>
            <p>Year: {props.year}</p>  
            {props.children}
            
        </div>
    )
}


