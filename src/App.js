import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car'
// import { render } from '@testing-library/react';


class App extends Component {
  render() {
    const divStyle = {
      textAlign: 'center'
    }

    return (
      <div className="App" style={divStyle}>
        <h1>Hello World</h1>
        <Car name={'Ford'} year={2018}>
          <p>children's content</p>
        </Car>
        <Car name='Audi' year={2016}/>
      </div>
    );
  }
 
}

export default App;
