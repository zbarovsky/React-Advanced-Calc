import React, { Component } from 'react'

class Calculator extends Component {
  state = {
    answer: 0,
    operator: '',
    currentNum: '',
    num1: ''
  }

  setNum = (e) => {

  }

  render() {
    return (
      <div className="calc-container">
        <div className="display">
          {this.state.answer}
        </div>
        <div className="buttons">
          <div className="row">
            <button value="Clear">Clear</button>
            <button value="pm">+/-</button>
            <button value="%">%</button>
            <button value="/">/</button>
          </div>
          <div className="row">
            <button value="7">7</button>
            <button value="8">8</button>
            <button value="9">9</button>
            <button value="*">*</button>
          </div>
          <div className="row">
            <button value="4">4</button>
            <button value="5">5</button>
            <button value="6">6</button>
            <button value="-">-</button>
          </div>
          <div className="row">
            <button value="1" onClick={(e) => this.setNum(e)}>1</button>
            <button value="2">2</button>
            <button value="3">3</button>
            <button value="+">+</button>
          </div>
          <div className="row">
            <button value="0">0</button>
            <button value=".">.</button>
            <button value="=">=</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Calculator
