import React from 'react';
import './Car.css';
import Radium from 'radium'


const Car = props => {

    const inputClasses = ['input']

    if(props.name !== '') {
        inputClasses.push('green')
    }else {
        inputClasses.push('red')
    }

    if(props.name.length > 4) {
        inputClasses.push('bold')
    }

    const style = {
        border: '1px solid #ccc',
        boxShadow: '0px 4px 5px 0 rgb(0, 0, 0, .14)',
        ':hover': {
            border: '1px solid #aaa',
            boxShadow: '0px 4px 5px 0 rgb(0, 0, 0, .25)',
            cursor: 'pointer'
        }
    }

    return(
        <div className="Car" style={style}>
            <p>Car name: {props.name}</p>
            <p>Year: {props.year}</p>  
            <input 
                type="text" 
                value={props.name} 
                style={{margin: '10px'}} 
                onChange={props.onChangeName}
                className={inputClasses.join(' ')}
            />
            <button style={{margin: '10px auto', display: 'block'}} onClick={props.onDelete}>Delete</button> 
        </div>
    )
}
export default Radium(Car)


