import React from 'react';

export default props => {
    return(
        <div style={{border: '1px solid #ccc', width: '500px', margin: '10px auto'}}>
            <p>Car name: {props.name}</p>
            <p>Year: {props.year}</p>  
            <input type="text" value={props.name} style={{margin: '10px'}} onChange={props.onChangeName}/>
            <button style={{margin: '10px auto', display: 'block'}} onClick={props.onDelete}>Delete</button>
            
        </div>
    )
}


