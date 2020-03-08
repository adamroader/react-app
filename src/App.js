import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car'
// import { render } from '@testing-library/react';


class App extends Component {

  state = {
    cars: [
      {name: 'Ford', year: 2018},
      {name: 'Audo', year: 2016},
      {name: 'Ferari', year: 1961}
    ],

    pageTitle: 'React Components',

    showCars: false

    
  }

  
  
  toggleCarsHandler = () => {
    
    this.setState({
      showCars: !this.state.showCars
    })
    
  }

  onChangeName = (name, index) => {
    const car = [...this.state.cars[index]]
    car.name = name
    const cars = [...this.state.cars]
    
    
    
    this.setState({
      cars
    })
    
  }

  deleteHandler = index => {
    
    const cars = [...this.state.cars]
    cars.splice(index, 1)

    this.setState({

      cars

    })
  }
  

  render() {
    const divStyle = {
      textAlign: 'center'
    }

    let cars = null

    if(this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <Car 
            key={index}
            name={car.name}
            year={car.year}
            onDelete={this.deleteHandler.bind(this, index)}
            onChangeName={event => {this.onChangeName(event.target.value, index)}}
          />
        )
      })
    }

    return (
      <div className="App" style={divStyle}>

        <h1>{this.state.pageTitle}</h1>
       
        <button onClick={this.toggleCarsHandler}>Toggle Cars</button>

        {cars}

        {/* <Car name={cars[0].name} 
             year={cars[0].year} 
             onChangeTitle={this.changeTitleHandler.bind(this, cars[0].name)}
        />
        <Car name={cars[1].name} 
             year={cars[1].year}
             onChangeTitle={() => {this.changeTitleHandler(cars[1].name)}}
        />
        <Car name={cars[2].name} 
             year={cars[2].year}
             onChangeTitle={() => {this.changeTitleHandler(cars[2].name)}}
        /> */}

      </div>
    );
  }
 
}

export default App;
