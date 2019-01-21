import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./App.css";

class App extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const { value, buttons, append, clear, calc, store, retrieve } = this.props;
    
    const buttonsArray = buttons.map((button, idx) => {
      switch(button) {
        case "C":
          return (
            <button className="button" onClick={clear.bind(this)} key={idx}>C</button>
            )
        case "=":
          return (
            <button className="button" onClick={calc.bind(this, value)} key={idx}>=</button>
          )
        case "MS":
          return (
            <button className="button" onClick={store.bind(this, value)} key={idx}>MS</button>
          )
        case "MR": 
          return (
            <button className="button" onClick={retrieve.bind(this)} key={idx}>MR</button>
          )
        default:
          return (
            <button className="button" onClick={append.bind(this, button)} key={idx}>{button}</button>
          )
      }
    })

    return (
      <div className="calc-container">
        <div className="text-container">{value}</div>
        <div className="buttons-container">
          {buttonsArray}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  value: state.value,
  buttons: state.buttons,
});

const mapDispatchToProps = (dispatch) => ({
  append: (text) => dispatch({ type: 'APPEND', text}),
  clear: () => dispatch({ type: 'CLEAR' }),
  calc: (value) => dispatch({ type: 'CALC', value }),
  store: (value) => dispatch({ type:'STORE', value }),
  retrieve: () => dispatch({ type: 'RETRIEVE' })
});

export default connect(mapStateToProps, mapDispatchToProps)(App);